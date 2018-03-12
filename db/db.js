const Sequelize = require('sequelize');
const connection = new Sequelize(
    'phonesdb', 'root', 'gotinsum', {
        dialect: 'mysql',
    }
);

const FindPhonesCrawler = connection.define('FindPhonesCrawler', {
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

connection.sync({
    force: true,
    });
const addRow = function(brand, model, cpu, display, internalMemory,
    os, frontCamera, ram, batteryType) {
    // connection.sync().then(() => {
         FindPhonesCrawler.create({
            brand: brand,
            model: model,
            cpu: cpu,
            display: display,
            internal_memory: internalMemory,
            os: os,
            front_camera: frontCamera,
            ram: ram,
            battery_type: batteryType,
        });
    // });
};
const printDB = function() {
    FindPhonesCrawler.findAll().then((rows) => {
        rows.forEach((row) => {
            console.log(row.brand, row.model, row.cpu, row.display,
                row.internal_memory, row.os, row.front_camera,
                row.ram, row.battery_type);
            console.log('EYY YOU DID IT MY BOY<<<<<<<<<<<');
        });
    });
};

const closeConnection = () => {
    connection.close();
};
module.exports.printDB = printDB;
module.exports.addRow = addRow;
module.exports.closeConnection = closeConnection;

