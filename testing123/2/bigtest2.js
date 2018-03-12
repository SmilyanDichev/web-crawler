const {
    doSomething,
} = require('C:\\Users\\Don\\Desktop\\webbo\\testing123\\1\\bigtest.js');
doSomething.then((dom) => {
    dom.forEach((eachDom) =>{
        // console.log(eachDom.window.document.body.innerHTML);
        console.log('you did it my lad!');
    });
}, (er) => {
    console.log('ur mum gae ' +er);
});
