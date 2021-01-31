"use strict";
console.log('i am here');
const test = 'hello';
self.addEventListener('fetch', (event) => {
    //console.log(event);
    event.respondWith(
    //fetchWithParamAddedToRequestBody(event.request)
    fetch2(event));
    // if (/\.jpg$/.test(event.request.url)) {
    //   event.respondWith(
    //     fetch('/images/unicorn.jpg'));
    // }
});
function fetch2(event) {
    console.log(event.request.url);
    return fetch(event.request);
}
function serialize(request) {
    const headers = {};
    for (const entry of request.headers.entries()) {
        headers[entry[0]] = entry[1];
    }
    const serialized = {
        url: request.url + '?a=b',
        headers: headers,
        method: request.method,
        mode: request.mode,
        credentials: request.credentials,
        cache: request.cache,
        redirect: request.redirect,
        referrer: request.referrer
    };
    if (request.method !== 'GET' && request.method !== 'HEAD') {
        return request.clone().text().then(function (body) {
            serialized.body = body;
            return Promise.resolve(serialized);
        });
    }
    return Promise.resolve(serialized);
}
function deserialize(data) {
    return Promise.resolve(new Request(data.url, data));
}
async function fetchWithParamAddedToRequestBody(request) {
    console.log('iam here 2');
    const serialized = await serialize(request);
    const request2 = await deserialize(serialized);
    return fetch(request2);
}
self.addEventListener('message', event => {
    var data = event.data;
    if (data.command === "h2o-intercept") {
        console.log("Message the Page : ", data.message);
    }
});
