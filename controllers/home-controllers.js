const axios = require("axios");

const indexView = (req, res, next) => {
  res.render("dashboard/home", {
    home: true,
    title: "NARP - Home",
    subTitle: "Dashbord",
  });
};

const clientView = (req, res, next) => {
  res.render("client/student", {
    student: true,
    title: "NARP - Alunos",
    subTitle: "Alunos",
  });
};

const employerView = (req, res, next) => {
  res.render("employer/employer", {
    employers: true,
    title: "NARP - Professores",
    subTitle: "Professores",
  });
};

const classroomView = (req, res, next) => {
  res.render("classroom/classroom", {
    classroom: true,
    title: "NARP - Aulas",
    subTitle: "Aulas",
  });
};

const notificationsView = (req, res, next) => {
  res.render("notify/notifications", {
    notifications: true,
    title: "NARP - Notificações",
    subTitle: "Notificações",
  });
};
const profileView = (req, res, next) => {
  res.render("perfil", {
    perfil: true,
    title: "NARP - Perfil",
    subTitle: "Perfil",
  });
};

const singInView = (req, res, next) => {
  res.render("login/sing-in", { title: "NARP - Login" });
};

const singUpView = (req, res, next) => {
  res.render("login/sing-up", { title: "NARP - Cadastrar" });
};

const createUserView = async (req, res, next) => {
  const { name, email, password } = req.body;

  const createUser = await axios.post(
    `http://localhost:3000/api/user`,
    JSON.stringify({
      name,
      email,
      password,
    })
  );
  if (createUser) {
    return res.render("dashboard/home", {
      home: true,
      title: "NARP - Home",
      subTitle: "Dashbord",
      token: createUser?.token,
    });
  } else {
    return res.render("login/sing-in", { title: "NARP - Login" });
  }
};

module.exports = {
  indexView,
  clientView,
  employerView,
  classroomView,
  notificationsView,
  profileView,
  singUpView,
  singInView,
  createUserView,
};
