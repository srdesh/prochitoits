"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/prochitoits/index.html","6f18908542239c6b9320133106a54a24"],["/prochitoits/static/css/main.da717cef.css","883539227af726b6a1ea87d46b8ec313"],["/prochitoits/static/js/main.b0d98bfe.js","a42470b5dabbaea7bc009b84244715e2"],["/prochitoits/static/media/alam.ecabfe0f.jpg","ecabfe0f5d572505d4eb0c7ebcc7de09"],["/prochitoits/static/media/bari.c2ea95e9.jpg","c2ea95e9c5d2f89cb51552ebcf5deadb"],["/prochitoits/static/media/bindu.3b36113d.jpg","3b36113d30968b4e7e712d916d2c9b4f"],["/prochitoits/static/media/chairman.e9daab15.jpg","e9daab152e0cc9228531acce8cb70820"],["/prochitoits/static/media/design.b9f3038b.png","b9f3038be0282220ea4b90719a8590be"],["/prochitoits/static/media/mahbub.0ac3fc21.jpg","0ac3fc2169a1abadaaa27cc1ae70cfcc"],["/prochitoits/static/media/mobile.cfb95cec.png","cfb95cec966789eefa8a6e69dbc3adae"],["/prochitoits/static/media/rony.a90c995d.jpg","a90c995dc927715ec81c300852f30025"],["/prochitoits/static/media/rushow.eaba605c.jpg","eaba605c98136acc0ef718260b33b350"],["/prochitoits/static/media/sabina-reviewer.99306db0.jpg","99306db03506176eacea10cc88eecbc9"],["/prochitoits/static/media/saef.7efa5852.jpg","7efa5852e23e705bf640899a8d23338d"],["/prochitoits/static/media/salman.1ea70b3d.jpg","1ea70b3d084ca8f104d4bb4505b5ad0c"],["/prochitoits/static/media/santow.183ed75e.jpg","183ed75e59e705c564ac21912709036a"],["/prochitoits/static/media/zahin.e9bd0569.jpg","e9bd056984b04eeb13a20b202ac7f7e5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/prochitoits/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});