import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";

const app = express();
helloController(app);
userController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(4000);
