// const link = 'http://www.technopolis.bg/en//Mobile-phones-&-Tablets/Mobile-phones/c/P11040101?page='
// + 0
// + '&pageselect=12&q=:price-asc&text=&layout=List&sort=price-asc';
const {
    numberIncreaser,
} = require('../generator/number-increaser');
const number = numberIncreaser();

const nextPage = () => {
    return 'http://www.technopolis.bg/en//Mobile-phones-&-Tablets/Mobile-phones/c/P11040101?page='
            + number.next().value
            + '&pageselect=12&q=:price-asc&text=&layout=List&sort=price-asc';
};

module.exports.nextPage = nextPage;
// http://www.technopolis.bg/en//Mobile-phones-&-Tablets/Mobile-phones/c/P11040101?page=1&pageselect=12&q=:price-asc&text=&layout=List&sort=price-asc