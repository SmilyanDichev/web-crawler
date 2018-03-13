const {
    JSDOM,
} = require('jsdom');
const $init = require('jquery');
// const {
//     eachLimit,
// } = require('../node_modules/async');
const {
    createEntry,
} = require('../db/db2');
const technopolisParser = async (productUrl) => {
    const dom = await JSDOM.fromURL(productUrl);
    const $ = $init(dom.window);
    const table = '#tab-characteristics-holder';
    const brand = $( table + ' td:contains(\'Brand\')' ).next().html();
    const model = $(table + ' td:contains(\'MODEL\')' ).next().html();
    let cpu = $(table + ' td:contains(\'CPU\')' ).next().text();
    if ( cpu.includes('YES')) {
        cpu = 'YES';
    } else if (cpu.includes('НЕ')) {
        cpu = 'NO';
    }
    const display = $(table + ' td:contains(\'DISPLAY SIZE INCH\')' )
    .next().html();
    let internalMemory =
    $(table + ' td:contains(\'INTERNAL MEMORY\')' ).next().html();
    if ( internalMemory.includes('YES')) {
        internalMemory = 'YES';
    } else if (internalMemory.includes('НЕ')) {
        internalMemory = 'NO';
    }
    let ram = $(table + ' td:contains(\'RAM\')' ).next().html();
    if ( ram.includes('YES')) {
        ram = 'YES';
    } else if (ram.includes('НЕ')) {
        ram = 'NO';
    }
    const frontCam = $(table + ' td:contains(\'FRONT CAMERA\')' )
    .next().html() || 'NONE';
    let os = $(table + ' td:contains(\'OS\')' ).next().html();
    if ( os.includes('YES')) {
        os = 'YES';
    } else if (os.includes('НЕ')) {
        os = 'NO';
    }
    const batType = $(table + ' td:contains(\'BATTERY TYPE\')' ).next().html();
    createEntry({ brand, model, cpu, display,
        internalMemory, os, frontCam, ram, batType });
};
module.exports.technopolisParser = technopolisParser;
