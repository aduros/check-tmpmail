"use strict";

const fetch = require("node-fetch");

async function call (params) {
    const url = "https://www.1secmail.com/api/v1/?" + new URLSearchParams(params).toString();
    const res = await fetch(url);
    return res.json();
}

function genRandomMailbox (count) {
    return call({
        action: "genRandomMailbox",
        count,
    });
}
exports.genRandomMailbox = genRandomMailbox;

function getMessages (login, domain) {
    return call({
        action: "getMessages",
        login, domain,
    });
}
exports.getMessages = getMessages;

function readMessage (login, domain, id) {
    return call({
        action: "readMessage",
        login, domain, id,
    });
}
exports.readMessage = readMessage;
