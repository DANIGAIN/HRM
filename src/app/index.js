const cookieParser = require('cookie-parser');
const express = require('express');
const userRoutesV1 = require('./../v1/routes/user.route');
const roleRoutesV1 = require('./../v1/routes/role.route');
const componentRoutesV1 = require('./../v1/routes/compoment.route');
const mapingRoutesV1 = require('./../v1/routes/maping.route');
const departmentRoutesV1 = require('./../v1/routes/department.route');
const designationsRoutesV1 = require('./../v1/routes/designation.route');
const procurementRoutesV1 = require('./../v1/routes/procurement.route');
const ErrorHandler = require('../middlewares/ErrorHandle.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../../swagger-output.json');
const cors = require("cors");
const app  = express();

require('dotenv').config()

app.use(
    cors({ 
        credentials:true,
        origin:'*'
    })
)   

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.get('/', (req,res)=>{
    res.send("hello")
})

//routes --->   
             
app.use('/api/v1', userRoutesV1)
app.use('/api/v1', roleRoutesV1)
app.use('/api/v1', componentRoutesV1);
app.use('/api/v1', mapingRoutesV1); 
app.use('/api/v1', departmentRoutesV1)
app.use('/api/v1' , designationsRoutesV1);
app.use('/api/v1',procurementRoutesV1);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  
app.use(ErrorHandler);  

app.listen(process.env.PORT, ()=>{
    console.log(`app is running .... on port : ${process.env.PORT}`);
})