const axios = require("axios");
const { verify } = require('../controllers/auth-controllers');
const User = require("../models/user");

const indexView = async (req, res, next) => {
  const { token } = req.cookies
  if (token) {
    const verifyToken = await verify(req, res, next);
    if (verifyToken.status) {
      const email = verifyToken.email;
      const aulasCancelada = '';
      const aulasCompletas = '';
      const planosVedidos = '';
      const aulas = ''

      const users = await User.findAll();

      const getDashInfo = {
        email,
        vendas: "53.0000,00",
        cancelamento: "20",
        usuarios: "3,000",
        faturamento: "560.340,00",
        aulasCancelada,
        aulasCompletas,
        planosVedidos,
        aulas,
        users
      }

      return res.render("dashboard/home", {
        home: true,
        title: "NARP - Home",
        subTitle: "Dashbord",
        data: getDashInfo
      });
    };
    return res.redirect('/sing-in')
  }
  return res.redirect('/sing-in')
}




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
  const { error, message } = req.query;
  const data = { error: error ? error : false, message: message ? message : '' };
  res.render("login/sing-in", { title: "NARP - Login", data });
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
