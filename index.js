const express= require('express');
const path= require('path');
const homeRoutes = require('./routers/front/home-routes');
const userRouter = require('./routers/back/user-route');
const authRouter = require('./routers/back/auth-route');
const bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.json());
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes.routes);
app.use('/api/user', userRouter.routes);
app.use('/api/auth', authRouter.routes);


app.listen(80, () => console.log('NARP is listening on http://localhost:80'));
