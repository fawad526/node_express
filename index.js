import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js';

const app = express ();
const PORT = 5000 ;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/',(req,res)=>{  res.send('Hello HomePage');});

app.listen(PORT , ()=>console.log(`server is running on PORT : http://localhost:${PORT}`));

