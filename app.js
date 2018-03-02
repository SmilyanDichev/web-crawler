// lint, jquery,jsdom
const {
    JSDOM,
} = require('jsdom');
const url = 'http://www.technopolis.bg/en//Mobile-phones-%26-Tablets/Mobile-phones/c/P11040101';
const $init = require('jquery');
const {
    incrementGenerator,
} = require('./number-incrementer');
const {
    getPages,
    findMaxPages,
} = require('./page-finder');

console.log(getPages());

const extractPhoneBox = async () => {

};

const extractPhoneData = async () => {

};
// const run = async () => {
//     console.log(await extractPageUrls());
// };
// run();
// http://www.technopolis.bg/en//Mobile-phones-%26-Tablets/Mobile-phones/c/P11040101?pageselect=12&page=22&q=:price-asc&text=&layout=List&sort=price-asc
// page == 22 end
