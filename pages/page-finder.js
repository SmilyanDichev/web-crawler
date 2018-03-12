const {
    JSDOM,
} = require('jsdom');
const url = 'http://www.technopolis.bg/en//Mobile-phones-%26-Tablets/Mobile-phones/c/P11040101';
const $init = require('jquery');

const findMaxPages = async () => {
    const array = [];
    const dom = await JSDOM.fromURL(url);
    const $ = $init(dom.window);
    const pageLinksSelector = '.paging a';
    [...$(pageLinksSelector)]
    .map((link) => $(link))
    .map(($link) => {
        const pageUrl = $link.attr('href');
        const currentPage = pageUrl.match(new RegExp(/page=\d*/));
        const currentPageNumber = currentPage[0].replace(/page=/, '');
        array.push(+currentPageNumber);
});
return Math.max(...array);
};


module.exports.findMaxPages = findMaxPages;

