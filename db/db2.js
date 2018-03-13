const Sequelize = require('sequelize');
const {
    numberIncreaser,
} = require('../generator/number-increaser');
const counter = numberIncreaser();
let table;
const createEntry = (product) => {
    const num = counter.next().value;
    console.log('phone #' +num+ 'in process');
    const connection = new Sequelize(
        'phonesdb', 'root', 'gotinsum', {
            dialect: 'mysql',
            logging: false,
        });
        table = connection.define('table', {
        brand: Sequelize.STRING,
        model: Sequelize.STRING,
        cpu: Sequelize.STRING,
        display: Sequelize.STRING,
        internal_memory: Sequelize.STRING,
        os: Sequelize.STRING,
        front_camera: Sequelize.STRING,
        ram: Sequelize.STRING,
        battery_type: Sequelize.STRING,
    });

    connection.sync().then(function() {
            table.create({
                brand: product.brand,
                model: product.model,
                cpu: product.cpu,
                display: product.display,
                internal_memory: product.internalMemory,
                os: product.os,
                front_camera: product.frontCam,
                ram: product.ram,
                battery_type: product.batType,
            });
            console.log('phone #' + num+ ' added to DB');
        });
};

const printDB = async function() {
    const rows = await table.findAll();
        rows.forEach((row) => {
            console.log(row.brand, row.model, row.cpu, row.display,
                row.internalMemory, row.os, row.frontCam,
                row.ram, row.batType);
        });
};

module.exports.createEntry = createEntry;
module.exports.printDB = printDB;
