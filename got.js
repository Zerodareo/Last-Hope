const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

got("https://fr.wikipedia.org/wiki/WWE")
    .then(async (response) => {
        const dom = new JSDOM(response.body);
        return dom;
    })
    .then(async (response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });