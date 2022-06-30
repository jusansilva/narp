const Client = require("../models/client");
const User = require("../models/user");
const { encrypt, decrypt } = require("../utils/login-utils");

const clientView = async (req, res, next) => {
  const clientAll = await Client.findAll({
    include: [User],
  });

  const client = await formatDate(clientAll);

  res.render("client/student", {
    student: true,
    title: "NARP - Alunos",
    subTitle: "Alunos",
    alunos: client,
  });
};

const createClientView = (req, res, next) => {
  res.render("client/create-student", {
    student: true,
    title: "NARP - Alunos",
    subTitle: "Alunos",
  });
};

const updateClientView = async (req, res, next) => {
  const { id } = req.params;
  const client = await Client.findOne({ where: { id }, include: [User] });
  const subject = client.subjects_ids?.split(",");
  client.subjects_ids = subject;
  let clientFinaly
  if(client.birth_date){
    clientFinaly = await formatDateForOneClient(client);
  }else{
    clientFinaly = client
  }

  res.render("client/update-student", {
    student: true,
    title: "NARP - Alunos",
    subTitle: "Alunos",
    aluno: client,
  });
};

const createClient = async (req, res, next) => {
  const { name, email, password } = req.body;
  const findUser = await User.findOne({ where: { name, email } });
  if (findUser) {
    return res.status(401).json({
      error: true,
      mensager: `email: ${email} já é cadastrado`,
    });
  }
  const cryptPassword = encrypt(password);
  const user = await User.create({ name, email, password: cryptPassword });
  console.log(user);

  const clientData = {
    user_id: user.id,
    birth_date: req.body.birth_date,
    andress: req.body.andress,
    district: req.body.district,
    answerable: user.id,
    adm_answerable: user.id,
    phone: req.body.phone,
    pay_day: req.body.pay_day,
    plan_id: req.body.plan_id,
    school_id: req.body.school_id,
    subjects_ids: `${req.body.subjects_ids}`,
    instagram: req.body.instagram,
  };
  const client = await Client.create({ clientData });

  await Client.update({ user_id: user.id }, { where: { id: client.id } });

  return res.redirect("/client");
};

const updateClient = async (req, res, next) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const client = await Client.findOne({ where: { id } });
  await User.update(
    { name, email },
    {
      where: {
        id: client.user_id,
      },
    }
  );
  const clientData = {
    user_id: client.user_id,
    birth_date: req.body.nasc,
    andress: req.body.andress,
    district: req.body.district,
    answerable: client.user_id,
    adm_answerable: client.user_id,
    phone: req.body.phone,
    pay_day: req.body.pay_day,
    plan_id: req.body.plan_id,
    school_id: req.body.school_id,
    subjects_ids: `${req.body.subjects_id}`,
    instagram: req.body.instagram,
    payment_status: req.body.payment_status,
  };

  await Client.update(clientData, {
    where: {
      id,
    },
  });
  return res.redirect("/client");
};

const formatDate = (client) => {
  const clientReturn = client.map((cli) => {
    const date = new Date(cli.createdAt);
    const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
    const mouth =
      date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const years = date.getFullYear();
    const formatDate = `${day}/${mouth}/${years}`;
    cli.create = formatDate;
    return cli;
  });
  return clientReturn;

};
const formatDateForOneClient = (client) => {
  const date = client.birth_date.split('-');
  const day = date[2];
  console.log(day)
  const mouth = date[1]  
  const years = date[0]
  const formatDate = `${years}-${mouth}-${day}`;
  client.nasc = formatDate;
  console.log(formatDate)

  return client
};


module.exports = {
  clientView,
  createClientView,
  createClient,
  updateClientView,
  updateClient,
};
