// const {
//     eachLimit,
// } = require('../node_modules/async');

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
    technopolisParser,
} = require('../parsers/technopolis-parser');
const {
    printDB,
} = require('../db/db2.js');
const {
    numberIncreaser,
} = require('../generator/number-increaser');
const getProducts = async () => {
    const limit = await findMaxPages();
    const pageCounter = numberIncreaser();

    const getProductLinks = async (pageUrl) => {
        const dom = await JSDOM.fromURL(pageUrl);
        const $ = $init(dom.window);
        const pageLinksSelector =
            '.products-list.list-view .product-box .text h2 a';
        return Promise.all([...$(pageLinksSelector)]
            .map((link) => {
                const productPageUrl = 'http://www.technopolis.bg' + $(link).attr('href');
                console.log('phone #' + pageCounter.next().value + ' found');
                return technopolisParser(productPageUrl);
                // scrape and push to DB
            }));
    };
    const recursionEnvironment = async () => {
        let currentPage = 0;
        const recursion = async () => {
            if (currentPage <= limit) {
                currentPage += 1;
                url = nextPage();
                await getProductLinks(url);
                return recursion();
            }
            return 0;
        };
        return recursion();
    };

    const readyPrint = async () => {
        console.log('begin recursion');
        await recursionEnvironment();
        console.log('printing DB');
        printDB();
        console.log('printed');
    };
    readyPrint();
    // eachLimit(arrOfPageURLs, 80, getProductLinks,
    //     makeProductObjects(arrOfProductURLs)
    // );
};

module.exports.getProducts = getProducts;
