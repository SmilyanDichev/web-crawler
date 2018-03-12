const {
    eachLimit,
} = require('../node_modules/async');

const {
    JSDOM,
} = require('jsdom');
let url = 'http://www.technopolis.bg/en//Mobile-phones-%26-Tablets/Mobile-phones/c/P11040101';
const $init = require('jquery');

const {
    findMaxPages,
} = require('./page-finder');
const {
    nextPage,
} = require('./next-page');
const {
    makeObjOfProductObjects,
} = require('../parsers/technopolis-parser');

const getProducts = async () => {
    const limit = await findMaxPages();
    const arrOfPageURLs = [];
    let currentPage = 0;
    const recursion = () => {
        if (currentPage <= limit) {
            currentPage += 1;
            url = nextPage();
            arrOfPageURLs.push(url);
            recursion();
        }
    };
    recursion();

    const arrOfProductURLs = [];
    const getProductLinks = async (pageUrl) => {
        const dom = await JSDOM.fromURL(pageUrl);
        const $ = $init(dom.window);
        const pageLinksSelector =
        '.products-list.list-view .product-box .text h2 a';
        [...$(pageLinksSelector)]
            .map((link) => {
                const productPageUrl = 'http://www.technopolis.bg' + $(link).attr('href');
                arrOfProductURLs.push(productPageUrl);
            });
    };
    eachLimit(arrOfPageURLs, 80, getProductLinks, function() {
        makeObjOfProductObjects(arrOfProductURLs);
    });
};

module.exports.getProducts = getProducts;
