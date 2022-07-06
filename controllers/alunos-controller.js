const Alunos = require("../models/Aluno");
const Diciplinas = require("../models/Diciplinas");
const User = require("../models/User");
const { encrypt, decrypt } = require("../utils/login-utils");
const { verify } = require('../controllers/auth-controllers');
const AlunoDiciplina = require("../models/AlunoDiciplina");

const clientView = async (req, res, next) => {
  const { token } = req.cookies
  if (token) {
    const verifyToken = await verify(req, res, next);
    if (verifyToken.status) {
      const alunosAll = await Alunos.findAll({
        include: [{
          model: User
        }],
      });


      const alunos = await formatDate(alunosAll);
      return res.render("client/student", {
        student: true,
        title: "NARP - Alunos",
        subTitle: "Alunos",
        alunos: alunos,
      });
    }
    return res.redirect('/sing-in')
  }
  return res.redirect('/sing-in')
};

const createClientView = async (req, res, next) => {
  const { token } = req.cookies
  const error = req.query.error ? req.query.error : false;
  const message = req.query.message ? req.query.message : '';
  if (token) {
    const verifyToken = await verify(req, res, next);
    if (verifyToken.status) {
      const diciplinas = await Diciplinas.findAll();
      return res.render("client/create-student", {
        student: true,
        title: "NARP - Alunos",
        subTitle: "Alunos",
        data: diciplinas,
        error,
        message
      });
    }
    return res.redirect('/sing-in')
  }
  return res.redirect('/sing-in')
};

const updateClientView = async (req, res, next) => {
  const error = req.query.error ? req.query.error : false;
  const message = req.query.message ? req.query.message : '';
  const { id } = req.params;
  const aluno = await Alunos.findOne({ where: { id }, include: [User] });
  const diciplina = await Diciplinas.findAll();
  const myDiciplina = await AlunoDiciplina.findAll({
    where: {
      aluno_id: aluno.id
    }
  })
  const diciplinaIds = myDiciplina.map(diciplina => {
    return diciplina.diciplina_id
  })

  res.render("client/update-student", {
    student: true,
    title: "NARP - Alunos",
    subTitle: "Alunos",
    aluno: aluno,
    diciplina,
    myDiciplina: diciplinaIds,
    error,
    message
  });
};

const createClient = async (req, res, next) => {

  const email = req.body.email
  const password = req.body.password;
  console.log(req.body);
  const findUser = await User.findOne({ where: { email } });
  if (findUser) {
    const mensager = `email: ${email} já é cadastrado`
    return res.redirect(`/createClient/?error=true&mensager=${mensager}`);
  }

  const cryptPassword = encrypt(password);
  const user = await User.create({ email, password: cryptPassword });


  const aluno = await Alunos.create({
    user_id: user.id,
    nome: req.body.nome,
    nasc: req.body.nasc,
    logradouro: req.body.logradouro,
    bairro: req.body.bairro,
    numero: parseInt(req.body.numero),
    uf: req.body.uf,
    cep: req.body.cep,
    modalidade: `${req.body.modalidade}`,
    telefone: req.body.telefone,
    mensalidade: parseFloat(req.body.mensalidade),
    instagram: req.body.instagram,
    vencimento: parseInt(req.body.vencimento)
  });
  const myDiciplina = req.body.diciplinas;

  await myDiciplina.forEach(async (id) => {
    await Diciplinas.create({ aluno_id: aluno.id, diciplina_id: id })
  });

  return res.redirect("/client");
};

const updateClient = async (req, res, next) => {
  const { id } = req.params;
  const { email, user_id } = req.body;
  await User.update(
    { email },
    {
      where: {
        id: user_id,
      },
    }
  );

  await Alunos.update(
    {
      user_id: user_id,
      nome: req.body.nome,
      nasc: req.body.nasc,
      logradouro: req.body.logradouro,
      bairro: req.body.bairro,
      numero: parseInt(req.body.numero),
      uf: req.body.uf,
      cep: req.body.cep,
      modalidade: `${req.body.modalidade}`,
      telefone: req.body.telefone,
      mensalidade: parseFloat(req.body.mensalidade),
      instagram: req.body.instagram,
      vencimento: parseInt(req.body.vencimento)
    }, {
    where: {
      id,
    },
  });

  const dis = req.body.materias
  console.log(id)
  await dis.forEach(async (disId) => {
    await AlunoDiciplina.findOrCreate({
      where: {
        aluno_id: id,
        diciplina_id: disId
      }
    })

  })
  return res.redirect("/client");
};


const formatDate = (client) => {
  const clientReturn = client.map((cli) => {
    const date = new Date(cli.vencimento);
    const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
    const mouth =
      date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();
    const years = date.getFullYear();
    const formatDate = `${day}/${mouth}/${years}`;
    cli.vencimento = formatDate;
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
