// import eachLimit from 'async/eachLimit';
const {
    eachLimit,
} = require('./node_modules/async');

const {
    JSDOM,
} = require('jsdom');
let url = 'http://www.technopolis.bg/en//Mobile-phones-%26-Tablets/Mobile-phones/c/P11040101';
const $init = require('jquery');
const {
    numberIncreaser,
} = require('./number-increaser');
const {
    findMaxPages,
} = require('./page-finder');
const {
    nextPage,
} = require('./next-page');

const counter = numberIncreaser();
const test = async (oof) => {
    const limit = await findMaxPages();
    console.log('max pages are '+limit);
    const arrOfURLs = [];
    const arrOfProductURLs = [];
    let currentPage = 0;
    const recursion = () => {
        if (currentPage <= limit) {
            currentPage += 1;
            url = nextPage();
            arrOfURLs.push(url);
            console.log(url);
            recursion();
        }
    };
    recursion();
    const getProductLinksArr = async (pageUrl) => {
        console.log('getting products from a page');
        const dom = await JSDOM.fromURL(pageUrl);
    const $ = $init(dom.window);
    const pageLinksSelector =
    '.products-list.list-view .product-box .text h2 a';
    [...$(pageLinksSelector)]
    .map((link) => {
        const productPageUrl = $(link).attr('href');
        arrOfProductURLs.push(productPageUrl);
        console.log(counter.next().value+ ' ' +productPageUrl);
});
    };
    eachLimit(arrOfURLs, 40, getProductLinksArr);
    console.log('no u');
};
test();
console.log('ur mom gae');
