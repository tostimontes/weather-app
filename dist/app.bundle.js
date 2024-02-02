(()=>{"use strict";var t={902:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(537),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([t.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n:root {\n  font-size: 62.5%;\n}\n\nhtml {\n  width: 100%;\n  height: 100vh;\n}\n\nbody {\n  font-size: 1.6rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(\n      217deg,\n      rgba(255, 255, 0, 0.2),\n      rgba(255, 255, 0, 0) 70.71%\n    ),\n    linear-gradient(\n      127deg,\n      rgba(191, 10, 10, 0.2),\n      rgba(64, 224, 208, 0) 70.71%\n    ),\n    linear-gradient(\n      336deg,\n      rgba(144, 238, 144, 0.2),\n      rgba(49, 164, 49, 0) 70.71%\n    ),\n    linear-gradient(\n      45deg,\n      rgba(128, 128, 128, 0.2),\n      rgba(128, 128, 128, 0) 70.71%\n    );\n}\n\n#header {\n  width: 100%;\n  height: 20%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  > h2 {\n    font-size: 3rem;\n    padding-top: 2rem;\n  }\n  & input {\n    padding: 0.7rem;\n    width: 30rem;\n    margin-right: 1rem;\n    border-radius: 15px;\n    border: 0.5px solid gray;\n    box-shadow: 1px 1px 4px 1px gray;\n  }\n  & button {\n    padding: 0.7rem;\n    cursor: pointer;\n    border-radius: 15px;\n    border: 2px solid black;\n    &:hover {\n      background-color: #e5e5e5;\n    }\n  }\n}\n\n#main {\n  width: 100%;\n  height: 80%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n#location {\n  height: 4rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.8rem;\n}\n\n#weather_cards_container {\n  display: flex;\n  gap: 5rem;\n  justify-content: center;\n  align-items: center;\n}\n\n.weather_cards {\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: center;\n  padding: 2rem;\n  gap: 1rem;\n  width: 25rem;\n  height: 37rem;\n  border: 0;\n  border-radius: 1rem;\n  box-shadow: 1px 1px 6px 3px gray;\n  background-color: rgba(127, 255, 212, 0.42);\n}\n\n.overall_weather_div {\n  display: flex;\n  align-items: center;\n}\n\n.weather_conditions_div {\n  display: grid;\n  grid:\n    'a b' 1fr\n    'c d' 1fr\n    / 1fr 1fr;\n  height: 60%;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.temperatures {\n  grid-area: a;\n}\n\n.winds {\n  grid-area: b;\n}\n\n.humidities {\n  grid-area: c;\n}\n\n.rains {\n  grid-area: d;\n}\n\nsvg {\n  width: 3rem;\n  height: 3rem;\n}\n\n#sun_div {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n","",{version:3,sources:["webpack://./style.css"],names:[],mappings:"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB;sDACoD;AACtD;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB;;;;;;;;;;;;;;;;;;;KAmBG;AACL;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,wBAAwB;IACxB,gCAAgC;EAClC;EACA;IACE,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB;MACE,yBAAyB;IAC3B;EACF;AACF;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,wBAAwB;EACxB,mBAAmB;EACnB,aAAa;EACb,SAAS;EACT,YAAY;EACZ,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,gCAAgC;EAChC,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb;;;aAGW;EACX,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX",sourcesContent:["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\r\n    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n}\r\n\r\n:root {\r\n  font-size: 62.5%;\r\n}\r\n\r\nhtml {\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\nbody {\r\n  font-size: 1.6rem;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: linear-gradient(\r\n      217deg,\r\n      rgba(255, 255, 0, 0.2),\r\n      rgba(255, 255, 0, 0) 70.71%\r\n    ),\r\n    linear-gradient(\r\n      127deg,\r\n      rgba(191, 10, 10, 0.2),\r\n      rgba(64, 224, 208, 0) 70.71%\r\n    ),\r\n    linear-gradient(\r\n      336deg,\r\n      rgba(144, 238, 144, 0.2),\r\n      rgba(49, 164, 49, 0) 70.71%\r\n    ),\r\n    linear-gradient(\r\n      45deg,\r\n      rgba(128, 128, 128, 0.2),\r\n      rgba(128, 128, 128, 0) 70.71%\r\n    );\r\n}\r\n\r\n#header {\r\n  width: 100%;\r\n  height: 20%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2rem;\r\n  > h2 {\r\n    font-size: 3rem;\r\n    padding-top: 2rem;\r\n  }\r\n  & input {\r\n    padding: 0.7rem;\r\n    width: 30rem;\r\n    margin-right: 1rem;\r\n    border-radius: 15px;\r\n    border: 0.5px solid gray;\r\n    box-shadow: 1px 1px 4px 1px gray;\r\n  }\r\n  & button {\r\n    padding: 0.7rem;\r\n    cursor: pointer;\r\n    border-radius: 15px;\r\n    border: 2px solid black;\r\n    &:hover {\r\n      background-color: #e5e5e5;\r\n    }\r\n  }\r\n}\r\n\r\n#main {\r\n  width: 100%;\r\n  height: 80%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n}\r\n\r\n#location {\r\n  height: 4rem;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 2.8rem;\r\n}\r\n\r\n#weather_cards_container {\r\n  display: flex;\r\n  gap: 5rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.weather_cards {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: stretch;\r\n  align-items: center;\r\n  padding: 2rem;\r\n  gap: 1rem;\r\n  width: 25rem;\r\n  height: 37rem;\r\n  border: 0;\r\n  border-radius: 1rem;\r\n  box-shadow: 1px 1px 6px 3px gray;\r\n  background-color: rgba(127, 255, 212, 0.42);\r\n}\r\n\r\n.overall_weather_div {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.weather_conditions_div {\r\n  display: grid;\r\n  grid:\r\n    'a b' 1fr\r\n    'c d' 1fr\r\n    / 1fr 1fr;\r\n  height: 60%;\r\n  width: 100%;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.temperatures {\r\n  grid-area: a;\r\n}\r\n\r\n.winds {\r\n  grid-area: b;\r\n}\r\n\r\n.humidities {\r\n  grid-area: c;\r\n}\r\n\r\n.rains {\r\n  grid-area: d;\r\n}\r\n\r\nsvg {\r\n  width: 3rem;\r\n  height: 3rem;\r\n}\r\n\r\n#sun_div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1rem;\r\n}\r\n"],sourceRoot:""}]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},537:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var m=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(h);else{var f=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{const t={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function e(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const r={date:e({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:e({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:e({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},a={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function o(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const i={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:o({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:o({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:o({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:o({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:o({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function s(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const c={ordinalNumber:(u={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(u.matchPattern);if(!n)return null;const r=n[0],a=t.match(u.parsePattern);if(!a)return null;let o=u.valueCallback?u.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:s({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:s({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:s({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:s({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var u;const d={code:"en-US",formatDistance:(e,n,r)=>{let a;const o=t[e];return a="string"==typeof o?o:1===n?o.one:o.other.replace("{{count}}",n.toString()),r?.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a},formatLong:r,formatRelative:(t,e,n,r)=>a[t],localize:i,match:c,options:{weekStartsOn:0,firstWeekContainsDate:1}};let l={};function m(){return l}Math.pow(10,8);const h=6048e5,f=864e5;function g(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function A(t){const e=g(t);return e.setHours(0,0,0,0),e}function y(t){const e=g(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function p(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function w(t){const e=g(t);return function(t,e){const n=A(t),r=A(e),a=+n-y(n),o=+r-y(r);return Math.round((a-o)/f)}(e,function(t){const e=g(t),n=p(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function b(t,e){const n=m(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=g(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function C(t){return b(t,{weekStartsOn:1})}function v(t){const e=g(t),n=e.getFullYear(),r=p(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=C(r),o=p(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=C(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function x(t){const e=g(t),n=+C(e)-+function(t){const e=v(t),n=p(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),C(n)}(e);return Math.round(n/h)+1}function E(t,e){const n=g(t),r=n.getFullYear(),a=m(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=p(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=b(i,e),c=p(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=b(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function S(t,e){const n=g(t),r=+b(n,e)-+function(t,e){const n=m(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=E(t,e),o=p(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),b(o,e)}(n,e);return Math.round(r/h)+1}function B(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const M={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return B("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):B(n+1,2)},d:(t,e)=>B(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>B(t.getHours()%12||12,e.length),H:(t,e)=>B(t.getHours(),e.length),m:(t,e)=>B(t.getMinutes(),e.length),s:(t,e)=>B(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return B(Math.trunc(r*Math.pow(10,n-3)),e.length)}},k={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return M.y(t,e)},Y:function(t,e,n,r){const a=E(t,r),o=a>0?a:1-a;return"YY"===e?B(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):B(o,e.length)},R:function(t,e){return B(v(t),e.length)},u:function(t,e){return B(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return B(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return B(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return M.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return B(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=S(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):B(a,e.length)},I:function(t,e,n){const r=x(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):B(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):M.d(t,e)},D:function(t,e,n){const r=w(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):B(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return B(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return B(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return B(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return M.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):M.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):B(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):B(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):M.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):M.s(t,e)},S:function(t,e){return M.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return D(r);case"XXXX":case"XX":return P(r);default:return P(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return D(r);case"xxxx":case"xx":return P(r);default:return P(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+W(r,":");default:return"GMT"+P(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+W(r,":");default:return"GMT"+P(r,":")}},t:function(t,e,n){return B(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return B(t.getTime(),e.length)}};function W(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+B(o,2)}function D(t,e){return t%60==0?(t>0?"-":"+")+B(Math.abs(t)/60,2):P(t,e)}function P(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+B(Math.trunc(r/60),2)+e+B(r%60,2)}const q=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},T=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},_={p:T,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return q(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",q(r,e)).replace("{{time}}",T(a,e))}},Y=/^D+$/,j=/^Y+$/,N=["D","DD","YY","YYYY"];function F(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=g(t);return!isNaN(Number(n))}const O=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,L=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,z=/^'([^]*?)'?$/,H=/''/g,I=/[a-zA-Z]/;function X(t,e,n){const r=m(),a=n?.locale??r.locale??d,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=g(t);if(!F(s))throw new RangeError("Invalid time value");let c=e.match(L).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,_[e])(t,a.formatLong):t})).join("").match(O).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:$(t)};if(k[e])return{isToken:!0,value:t};if(e.match(I))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return j.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return Y.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),N.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,k[o[0]])(s,o,a.localize,u)})).join("")}function $(t){const e=t.match(z);return e?e[1].replace(H,"'"):t}function G(t,e){const n=g(t);return isNaN(e)?p(t,NaN):e?(n.setDate(n.getDate()+e),n):n}var Q=n(379),R=n.n(Q),U=n(795),J=n.n(U),Z=n(569),V=n.n(Z),K=n(565),tt=n.n(K),et=n(216),nt=n.n(et),rt=n(589),at=n.n(rt),ot=n(902),it={};function st(t,e){return"C"===e?Math.round(10*(9*t/5+32))/10:"F"===e?Math.round(5*(t-32)/9*10)/10:"Invalid unit"}function ct(t){const e=function(t){const[e,n]=t.split(" ");let[r,a]=e.split(":");return"12"===r&&(r="00"),"PM"===n&&(r=parseInt(r,10)+12),`${r}:${a}`}(t),[n,r]=e.split(":"),a=new Date;return a.setHours(n),a.setMinutes(r),X(a,"H:mm")}async function ut(t){try{const e=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ad93355e721349a09c8150136242801&q=${t}&days=3`,{mode:"cors"}),n=await e.json(),r=t=>({tempC:t.day.avgtemp_c,wind:t.day.maxwind_kph,humidity:t.day.avghumidity,rain:t.day.daily_chance_of_rain,condition:t.day.condition.text,icon:t.day.condition.icon,...t.astro?{sunrise:t.astro.sunrise,sunset:t.astro.sunset}:{}});return{location:{locationName:n.location.name,locationRegion:n.location.region,locationCountry:n.location.country,locationTime:n.location.localtime},firstDay:r(n.forecast.forecastday[0]),secondDay:r(n.forecast.forecastday[1]),thirdDay:r(n.forecast.forecastday[2])}}catch(t){throw console.error("Error fetching data:",t),new Error("Failed to fetch weather data")}}it.styleTagTransform=at(),it.setAttributes=tt(),it.insert=V().bind(null,"head"),it.domAPI=J(),it.insertStyleElement=nt(),R()(ot.Z,it),ot.Z&&ot.Z.locals&&ot.Z.locals;const dt=t=>{const e=new Date,n=G(e,1),r=G(e,2);document.querySelector("#location").textContent=`${t.location.locationName}, ${t.location.locationRegion}, ${t.location.locationCountry} at ${t.location.locationTime.slice(-5)} local time`,document.querySelector("#sunrise").textContent=`${ct(t.firstDay.sunrise)}`,document.querySelector("#sunset").textContent=`${ct(t.firstDay.sunset)}`;const a=[t.firstDay,t.secondDay,t.thirdDay],o=[e,n,r],i=[{title:document.querySelector("#first_day_title"),icon:document.querySelector("#first_day_icon"),condition:document.querySelector("#first_day_condition"),temperature:document.querySelector("#temp_first"),wind:document.querySelector("#wind_first"),humidity:document.querySelector("#humidity_first"),rain:document.querySelector("#rain_first")},{title:document.querySelector("#second_day_title"),icon:document.querySelector("#second_day_icon"),condition:document.querySelector("#second_day_condition"),temperature:document.querySelector("#temp_second"),wind:document.querySelector("#wind_second"),humidity:document.querySelector("#humidity_second"),rain:document.querySelector("#rain_second")},{title:document.querySelector("#third_day_title"),icon:document.querySelector("#third_day_icon"),condition:document.querySelector("#third_day_condition"),temperature:document.querySelector("#temp_third"),wind:document.querySelector("#wind_third"),humidity:document.querySelector("#humidity_third"),rain:document.querySelector("#rain_third")}];a.forEach(((t,e)=>{var n,r,a;n=t,a=o[e],(r=i[e]).title.textContent=`${X(a,"iii d MMM")}`,r.icon.src=n.icon,r.condition.textContent=n.condition,r.temperature.textContent=`${n.tempC}ºC`,r.wind.textContent=`${n.wind} Km/h`,r.humidity.textContent=`${n.humidity} %`,r.rain.textContent=`${n.rain} %`}))};document.querySelector("#search_button").addEventListener("click",(()=>{const t=document.querySelector("#search_location").value;try{ut(t).then((t=>{dt(t)}))}catch(t){}})),document.querySelector("#temperature_toggle").addEventListener("click",(t=>{"Celsius"===t.target.textContent?(t.target.textContent="Farhenheit",document.querySelectorAll(".temperature_texts").forEach((t=>{t.textContent=`${st(parseFloat(t.textContent.slice(0,-2)),"C")}ºF`}))):(t.target.textContent="Celsius",document.querySelectorAll(".temperature_texts").forEach((t=>{t.textContent=`${st(parseFloat(t.textContent.slice(0,-2)),"F")}ºC`})))})),document.querySelector("#search_location").addEventListener("keypress",(t=>{"Enter"===t.key&&(t.preventDefault(),ut(t.target.value).then((t=>{dt(t)})))})),ut("auto:ip").then((t=>{dt(t)}))})()})();
//# sourceMappingURL=app.bundle.js.map