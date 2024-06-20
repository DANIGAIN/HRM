const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Procurement Management System',
        description: 'This is  PMS description'
    },
    host: 'localhost:8000/api/v1'
};

const outputFile = './swagger-output.json';
const routes = [
    './src/v1/routes/compoment.route',
    './src/v1/routes/department.route',
    './src/v1/routes/designation.route',
    './src/v1/routes/maping.route',
    './src/v1/routes/procurement.route',
    './src/v1/routes/role.route',
    './src/v1/routes/user.route'
];


swaggerAutogen(outputFile, routes, doc);