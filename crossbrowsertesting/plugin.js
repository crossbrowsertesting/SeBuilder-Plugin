// Init namespace.
var cbt = {};

var m = builder.translate.locales['en'].mapping;
m.__cbt_settings = "CrossBrowserTesting Settings";
m.__cbt_username = "CrossBrowserTesting email or username";
m.__cbt_authkey = "CrossBrowserTesting auth key";
m.__cbt_lookup_api_key = "Lookup your api key";
m.__cbt_need_an_account = "Need an account - register for free!";
m.__cbt_config = "Select config / browser to test:"
m.__cbt_savedbrowserlist = "Saved browser(s) to test with:"
m.__cbt_savedbrowserlistempty = "No browsers selected.  Select a browser and press add to save browsers to list."
m.__cbt_run = "Run"
m.__cbt_run_all = "run all"
m.__cbt_faq = "more info"
m.__cbt_add = "Add"
m.__cbt_stop = "stop"
m.__cbt_close = "Close"
m.__cbt_clear = "clear"
m.__cbt_clear_all = "clear all"
m.__cbt_run_test = "Run on CrossBrowserTesting"
m.__cbt_see_all_selenium_tests = "View all selenium tests"
m.__cbt_run_test_suite = "Run Suite on CrossBrowserTesting"
m.__cbt_preparing_stop = "Preparing to stop..."
m.__cbt_runscreenshottest = "Selenium powered screenshot test"
m.__cbt_addscreenshotloginprofile = "Save current selenium script to screenshot system in order to navigate to a particular page / state before taking a screenshot"
m.__cbt_addscreenshotloginprofileinput = "Selenium script name:"
m.__save_login_profile = "Save script to screenshot advanced options page"
m.__cbt_login_profile_name_default_text = "name this profile..."
m.__cbt_seleniumtesting = "Selenium Testing"
m.__screenshot_selenium_script_saved = "Saved!  You can now select this as a selenium script under the advanced options when launching a screenshot test."
m.__cbt_untitled_script = "Untitled Script"
m.__cbt_runsingle = "Run Script"
m.__cbt_runsuite = "Run Suite"
m.__cbt_run_instructions = "Run on remote CrossBrowserTesting.com browsers"
m.__cbt_testfinishedsuccessfully = "Test finished successfully!"
m.__cbt_testfinishedunsuccessfully = "Test Failed - it did not run successfully."

var cbt_runSuite = false;  

!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(n.async=n.async||{})}(this,function(n){"use strict";function t(n,t,e){switch(e.length){case 0:return n.call(t);case 1:return n.call(t,e[0]);case 2:return n.call(t,e[0],e[1]);case 3:return n.call(t,e[0],e[1],e[2])}return n.apply(t,e)}function e(n,e,r){return e=rt(void 0===e?n.length-1:e,0),function(){for(var u=arguments,o=-1,i=rt(u.length-e,0),c=Array(i);++o<i;)c[o]=u[e+o];o=-1;for(var f=Array(e+1);++o<e;)f[o]=u[o];return f[e]=r(c),t(n,this,f)}}function r(n){return n}function u(n,t){return e(n,t,r)}function o(n){return u(function(t,e){var r=ut(function(e,r){var u=this;return n(t,function(n,t){n.apply(u,e.concat(t))},r)});return e.length?r.apply(this,e):r})}function i(n){var t=lt.call(n,pt),e=n[pt];try{n[pt]=void 0;var r=!0}catch(n){}var u=st.call(n);return r&&(t?n[pt]=e:delete n[pt]),u}function c(n){return yt.call(n)}function f(n){return null==n?void 0===n?dt:vt:mt&&mt in Object(n)?i(n):c(n)}function a(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function l(n){if(!a(n))return!1;var t=f(n);return t==bt||t==jt||t==gt||t==St}function s(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=kt}function p(n){return null!=n&&s(n.length)&&!l(n)}function h(){}function y(n){return function(){if(null!==n){var t=n;n=null,t.apply(this,arguments)}}}function v(n,t){for(var e=-1,r=Array(n);++e<n;)r[e]=t(e);return r}function d(n){return null!=n&&"object"==typeof n}function m(n){return d(n)&&f(n)==Et}function g(){return!1}function b(n,t){return t=null==t?Pt:t,!!t&&("number"==typeof n||qt.test(n))&&n>-1&&n%1==0&&n<t}function j(n){return d(n)&&s(n.length)&&!!le[f(n)]}function S(n){return function(t){return n(t)}}function k(n,t){var e=It(n),r=!e&&Ft(n),u=!e&&!r&&Vt(n),o=!e&&!r&&!u&&ge(n),i=e||r||u||o,c=i?v(n.length,String):[],f=c.length;for(var a in n)!t&&!je.call(n,a)||i&&("length"==a||u&&("offset"==a||"parent"==a)||o&&("buffer"==a||"byteLength"==a||"byteOffset"==a)||b(a,f))||c.push(a);return c}function w(n){var t=n&&n.constructor,e="function"==typeof t&&t.prototype||Se;return n===e}function O(n,t){return function(e){return n(t(e))}}function x(n){if(!w(n))return ke(n);var t=[];for(var e in Object(n))Oe.call(n,e)&&"constructor"!=e&&t.push(e);return t}function E(n){return p(n)?k(n):x(n)}function L(n){var t=-1,e=n.length;return function(){return++t<e?{value:n[t],key:t}:null}}function A(n){var t=-1;return function(){var e=n.next();return e.done?null:(t++,{value:e.value,key:t})}}function T(n){var t=E(n),e=-1,r=t.length;return function(){var u=t[++e];return e<r?{value:n[u],key:u}:null}}function F(n){if(p(n))return L(n);var t=xt(n);return t?A(t):T(n)}function I(n){return function(){if(null===n)throw new Error("Callback was already called.");var t=n;n=null,t.apply(this,arguments)}}function _(n){return function(t,e,r){function u(n,t){if(f-=1,n)c=!0,r(n);else{if(t===wt||c&&f<=0)return c=!0,r(null);o()}}function o(){for(;f<n&&!c;){var t=i();if(null===t)return c=!0,void(f<=0&&r(null));f+=1,e(t.value,t.key,I(u))}}if(r=y(r||h),n<=0||!t)return r(null);var i=F(t),c=!1,f=0;o()}}function B(n,t,e,r){_(t)(n,e,r)}function M(n,t){return function(e,r,u){return n(e,t,r,u)}}function U(n,t,e){function r(n,t){n?e(n):++o!==i&&t!==wt||e(null)}e=y(e||h);var u=0,o=0,i=n.length;for(0===i&&e(null);u<i;u++)t(n[u],u,I(r))}function z(n){return function(t,e,r){return n(Ee,t,e,r)}}function V(n,t,e,r){r=r||h,t=t||[];var u=[],o=0;n(t,function(n,t,r){var i=o++;e(n,function(n,t){u[i]=t,r(n)})},function(n){r(n,u)})}function P(n){return function(t,e,r,u){return n(_(e),t,r,u)}}function q(n){return ut(function(t,e){var r;try{r=n.apply(this,t)}catch(n){return e(n)}a(r)&&"function"==typeof r.then?r.then(function(n){e(null,n)},function(n){e(n.message?n:new Error(n))}):e(null,r)})}function D(n,t){for(var e=-1,r=null==n?0:n.length;++e<r&&t(n[e],e,n)!==!1;);return n}function R(n){return function(t,e,r){for(var u=-1,o=Object(t),i=r(t),c=i.length;c--;){var f=i[n?c:++u];if(e(o[f],f,o)===!1)break}return t}}function C(n,t){return n&&Be(n,t,E)}function $(n,t,e,r){for(var u=n.length,o=e+(r?1:-1);r?o--:++o<u;)if(t(n[o],o,n))return o;return-1}function W(n){return n!==n}function N(n,t,e){for(var r=e-1,u=n.length;++r<u;)if(n[r]===t)return r;return-1}function Q(n,t,e){return t===t?N(n,t,e):$(n,W,e)}function G(n,t){for(var e=-1,r=null==n?0:n.length,u=Array(r);++e<r;)u[e]=t(n[e],e,n);return u}function H(n){return"symbol"==typeof n||d(n)&&f(n)==Ue}function J(n){if("string"==typeof n)return n;if(It(n))return G(n,J)+"";if(H(n))return Pe?Pe.call(n):"";var t=n+"";return"0"==t&&1/n==-ze?"-0":t}function K(n,t,e){var r=-1,u=n.length;t<0&&(t=-t>u?0:u+t),e=e>u?u:e,e<0&&(e+=u),u=t>e?0:e-t>>>0,t>>>=0;for(var o=Array(u);++r<u;)o[r]=n[r+t];return o}function X(n,t,e){var r=n.length;return e=void 0===e?r:e,!t&&e>=r?n:K(n,t,e)}function Y(n,t){for(var e=n.length;e--&&Q(t,n[e],0)>-1;);return e}function Z(n,t){for(var e=-1,r=n.length;++e<r&&Q(t,n[e],0)>-1;);return e}function nn(n){return n.split("")}function tn(n){return Qe.test(n)}function en(n){return n.match(pr)||[]}function rn(n){return tn(n)?en(n):nn(n)}function un(n){return null==n?"":J(n)}function on(n,t,e){if(n=un(n),n&&(e||void 0===t))return n.replace(hr,"");if(!n||!(t=J(t)))return n;var r=rn(n),u=rn(t),o=Z(r,u),i=Y(r,u)+1;return X(r,o,i).join("")}function cn(n){return n=n.toString().replace(mr,""),n=n.match(yr)[2].replace(" ",""),n=n?n.split(vr):[],n=n.map(function(n){return on(n.replace(dr,""))})}function fn(n,t){var e={};C(n,function(n,t){function r(t,e){var r=G(u,function(n){return t[n]});r.push(e),n.apply(null,r)}var u;if(It(n))u=n.slice(0,-1),n=n[n.length-1],e[t]=u.concat(u.length>0?r:n);else if(1===n.length)e[t]=n;else{if(u=cn(n),0===n.length&&0===u.length)throw new Error("autoInject task functions require explicit parameters.");u.pop(),e[t]=u.concat(r)}}),Me(e,t)}function an(n){setTimeout(n,0)}function ln(n){return u(function(t,e){n(function(){t.apply(null,e)})})}function sn(){this.head=this.tail=null,this.length=0}function pn(n,t){n.length=1,n.head=n.tail=t}function hn(n,t,e){function r(n,t,e){if(null!=e&&"function"!=typeof e)throw new Error("task callback must be a function");if(a.started=!0,It(n)||(n=[n]),0===n.length&&a.idle())return jr(function(){a.drain()});for(var r=0,u=n.length;r<u;r++){var o={data:n[r],callback:e||h};t?a._tasks.unshift(o):a._tasks.push(o)}jr(a.process)}function o(n){return u(function(t){i-=1;for(var e=0,r=n.length;e<r;e++){var u=n[e],o=Q(c,u,0);o>=0&&c.splice(o),u.callback.apply(u,t),null!=t[0]&&a.error(t[0],u.data)}i<=a.concurrency-a.buffer&&a.unsaturated(),a.idle()&&a.drain(),a.process()})}if(null==t)t=1;else if(0===t)throw new Error("Concurrency must not be zero");var i=0,c=[],f=!1,a={_tasks:new sn,concurrency:t,payload:e,saturated:h,unsaturated:h,buffer:t/4,empty:h,drain:h,error:h,started:!1,paused:!1,push:function(n,t){r(n,!1,t)},kill:function(){a.drain=h,a._tasks.empty()},unshift:function(n,t){r(n,!0,t)},process:function(){if(!f){for(f=!0;!a.paused&&i<a.concurrency&&a._tasks.length;){var t=[],e=[],r=a._tasks.length;a.payload&&(r=Math.min(r,a.payload));for(var u=0;u<r;u++){var l=a._tasks.shift();t.push(l),e.push(l.data)}0===a._tasks.length&&a.empty(),i+=1,c.push(t[0]),i===a.concurrency&&a.saturated();var s=I(o(t));n(e,s)}f=!1}},length:function(){return a._tasks.length},running:function(){return i},workersList:function(){return c},idle:function(){return a._tasks.length+i===0},pause:function(){a.paused=!0},resume:function(){a.paused!==!1&&(a.paused=!1,jr(a.process))}};return a}function yn(n,t){return hn(n,1,t)}function vn(n,t,e,r){r=y(r||h),kr(n,function(n,r,u){e(t,n,function(n,e){t=e,u(n)})},function(n){r(n,t)})}function dn(n,t,e,r){var u=[];n(t,function(n,t,r){e(n,function(n,t){u=u.concat(t||[]),r(n)})},function(n){r(n,u)})}function mn(n){return function(t,e,r){return n(kr,t,e,r)}}function gn(n,t){return function(e,r,u,o){o=o||h;var i,c=!1;e(r,function(e,r,o){u(e,function(r,u){r?o(r):n(u)&&!i?(c=!0,i=t(!0,e),o(null,wt)):o()})},function(n){n?o(n):o(null,c?i:t(!1))})}}function bn(n,t){return t}function jn(n){return u(function(t,e){t.apply(null,e.concat(u(function(t,e){"object"==typeof console&&(t?console.error&&console.error(t):console[n]&&D(e,function(t){console[n](t)}))})))})}function Sn(n,t,e){function r(t,r){return t?e(t):r?void n(o):e(null)}e=I(e||h);var o=u(function(n,u){return n?e(n):(u.push(r),void t.apply(this,u))});r(null,!0)}function kn(n,t,e){e=I(e||h);var r=u(function(u,o){return u?e(u):t.apply(this,o)?n(r):void e.apply(null,[null].concat(o))});n(r)}function wn(n,t,e){kn(n,function(){return!t.apply(this,arguments)},e)}function On(n,t,e){function r(t){return t?e(t):void n(u)}function u(n,u){return n?e(n):u?void t(r):e(null)}e=I(e||h),n(u)}function xn(n){return function(t,e,r){return n(t,r)}}function En(n,t,e){Ee(n,xn(t),e)}function Ln(n,t,e,r){_(t)(n,xn(e),r)}function An(n){return ut(function(t,e){var r=!0;t.push(function(){var n=arguments;r?jr(function(){e.apply(null,n)}):e.apply(null,n)}),n.apply(this,t),r=!1})}function Tn(n){return!n}function Fn(n){return function(t){return null==t?void 0:t[n]}}function In(n,t,e,r){var u=new Array(t.length);n(t,function(n,t,r){e(n,function(n,e){u[t]=!!e,r(n)})},function(n){if(n)return r(n);for(var e=[],o=0;o<t.length;o++)u[o]&&e.push(t[o]);r(null,e)})}function _n(n,t,e,r){var u=[];n(t,function(n,t,r){e(n,function(e,o){e?r(e):(o&&u.push({index:t,value:n}),r())})},function(n){n?r(n):r(null,G(u.sort(function(n,t){return n.index-t.index}),Fn("value")))})}function Bn(n,t,e,r){var u=p(t)?In:_n;u(n,t,e,r||h)}function Mn(n,t){function e(n){return n?r(n):void u(e)}var r=I(t||h),u=An(n);e()}function Un(n,t,e,r){r=y(r||h);var u={};B(n,t,function(n,t,r){e(n,t,function(n,e){return n?r(n):(u[t]=e,void r())})},function(n){r(n,u)})}function zn(n,t){return t in n}function Vn(n,t){var e=Object.create(null),o=Object.create(null);t=t||r;var i=ut(function(r,i){var c=t.apply(null,r);zn(e,c)?jr(function(){i.apply(null,e[c])}):zn(o,c)?o[c].push(i):(o[c]=[i],n.apply(null,r.concat(u(function(n){e[c]=n;var t=o[c];delete o[c];for(var r=0,u=t.length;r<u;r++)t[r].apply(null,n)}))))});return i.memo=e,i.unmemoized=n,i}function Pn(n,t,e){e=e||h;var r=p(t)?[]:{};n(t,function(n,t,e){n(u(function(n,u){u.length<=1&&(u=u[0]),r[t]=u,e(n)}))},function(n){e(n,r)})}function qn(n,t){Pn(Ee,n,t)}function Dn(n,t,e){Pn(_(t),n,e)}function Rn(n,t){if(t=y(t||h),!It(n))return t(new TypeError("First argument to race must be an array of functions"));if(!n.length)return t();for(var e=0,r=n.length;e<r;e++)n[e](t)}function Cn(n,t,e,r){var u=Nr.call(n).reverse();vn(u,t,e,r)}function $n(n){return ut(function(t,e){return t.push(u(function(n,t){if(n)e(null,{error:n});else{var r=null;1===t.length?r=t[0]:t.length>1&&(r=t),e(null,{value:r})}})),n.apply(this,t)})}function Wn(n,t,e,r){Bn(n,t,function(n,t){e(n,function(n,e){t(n,!e)})},r)}function Nn(n){var t;return It(n)?t=G(n,$n):(t={},C(n,function(n,e){t[e]=$n.call(this,n)})),t}function Qn(n){return function(){return n}}function Gn(n,t,e){function r(n,t){if("object"==typeof t)n.times=+t.times||o,n.intervalFunc="function"==typeof t.interval?t.interval:Qn(+t.interval||i),n.errorFilter=t.errorFilter;else{if("number"!=typeof t&&"string"!=typeof t)throw new Error("Invalid arguments for async.retry");n.times=+t||o}}function u(){t(function(n){n&&f++<c.times&&("function"!=typeof c.errorFilter||c.errorFilter(n))?setTimeout(u,c.intervalFunc(f)):e.apply(null,arguments)})}var o=5,i=0,c={times:o,intervalFunc:Qn(i)};if(arguments.length<3&&"function"==typeof n?(e=t||h,t=n):(r(c,n),e=e||h),"function"!=typeof t)throw new Error("Invalid arguments for async.retry");var f=1;u()}function Hn(n,t){Pn(kr,n,t)}function Jn(n,t,e){function r(n,t){var e=n.criteria,r=t.criteria;return e<r?-1:e>r?1:0}Le(n,function(n,e){t(n,function(t,r){return t?e(t):void e(null,{value:n,criteria:r})})},function(n,t){return n?e(n):void e(null,G(t.sort(r),Fn("value")))})}function Kn(n,t,e){function r(){c||(o.apply(null,arguments),clearTimeout(i))}function u(){var t=n.name||"anonymous",r=new Error('Callback function "'+t+'" timed out.');r.code="ETIMEDOUT",e&&(r.info=e),c=!0,o(r)}var o,i,c=!1;return ut(function(e,c){o=c,i=setTimeout(u,t),n.apply(null,e.concat(r))})}function Xn(n,t,e,r){for(var u=-1,o=nu(Zr((t-n)/(e||1)),0),i=Array(o);o--;)i[r?o:++u]=n,n+=e;return i}function Yn(n,t,e,r){Te(Xn(0,n,1),t,e,r)}function Zn(n,t,e,r){3===arguments.length&&(r=e,e=t,t=It(n)?[]:{}),r=y(r||h),Ee(n,function(n,r,u){e(t,n,r,u)},function(n){r(n,t)})}function nt(n){return function(){return(n.unmemoized||n).apply(null,arguments)}}function tt(n,t,e){if(e=I(e||h),!n())return e(null);var r=u(function(u,o){return u?e(u):n()?t(r):void e.apply(null,[null].concat(o))});t(r)}function et(n,t,e){tt(function(){return!n.apply(this,arguments)},t,e)}var rt=Math.max,ut=function(n){return u(function(t){var e=t.pop();n.call(this,t,e)})},ot="object"==typeof global&&global&&global.Object===Object&&global,it="object"==typeof self&&self&&self.Object===Object&&self,ct=ot||it||Function("return this")(),ft=ct.Symbol,at=Object.prototype,lt=at.hasOwnProperty,st=at.toString,pt=ft?ft.toStringTag:void 0,ht=Object.prototype,yt=ht.toString,vt="[object Null]",dt="[object Undefined]",mt=ft?ft.toStringTag:void 0,gt="[object AsyncFunction]",bt="[object Function]",jt="[object GeneratorFunction]",St="[object Proxy]",kt=9007199254740991,wt={},Ot="function"==typeof Symbol&&Symbol.iterator,xt=function(n){return Ot&&n[Ot]&&n[Ot]()},Et="[object Arguments]",Lt=Object.prototype,At=Lt.hasOwnProperty,Tt=Lt.propertyIsEnumerable,Ft=m(function(){return arguments}())?m:function(n){return d(n)&&At.call(n,"callee")&&!Tt.call(n,"callee")},It=Array.isArray,_t="object"==typeof n&&n&&!n.nodeType&&n,Bt=_t&&"object"==typeof module&&module&&!module.nodeType&&module,Mt=Bt&&Bt.exports===_t,Ut=Mt?ct.Buffer:void 0,zt=Ut?Ut.isBuffer:void 0,Vt=zt||g,Pt=9007199254740991,qt=/^(?:0|[1-9]\d*)$/,Dt="[object Arguments]",Rt="[object Array]",Ct="[object Boolean]",$t="[object Date]",Wt="[object Error]",Nt="[object Function]",Qt="[object Map]",Gt="[object Number]",Ht="[object Object]",Jt="[object RegExp]",Kt="[object Set]",Xt="[object String]",Yt="[object WeakMap]",Zt="[object ArrayBuffer]",ne="[object DataView]",te="[object Float32Array]",ee="[object Float64Array]",re="[object Int8Array]",ue="[object Int16Array]",oe="[object Int32Array]",ie="[object Uint8Array]",ce="[object Uint8ClampedArray]",fe="[object Uint16Array]",ae="[object Uint32Array]",le={};le[te]=le[ee]=le[re]=le[ue]=le[oe]=le[ie]=le[ce]=le[fe]=le[ae]=!0,le[Dt]=le[Rt]=le[Zt]=le[Ct]=le[ne]=le[$t]=le[Wt]=le[Nt]=le[Qt]=le[Gt]=le[Ht]=le[Jt]=le[Kt]=le[Xt]=le[Yt]=!1;var se,pe="object"==typeof n&&n&&!n.nodeType&&n,he=pe&&"object"==typeof module&&module&&!module.nodeType&&module,ye=he&&he.exports===pe,ve=ye&&ot.process,de=function(){try{return ve&&ve.binding&&ve.binding("util")}catch(n){}}(),me=de&&de.isTypedArray,ge=me?S(me):j,be=Object.prototype,je=be.hasOwnProperty,Se=Object.prototype,ke=O(Object.keys,Object),we=Object.prototype,Oe=we.hasOwnProperty,xe=M(B,1/0),Ee=function(n,t,e){var r=p(n)?U:xe;r(n,t,e)},Le=z(V),Ae=o(Le),Te=P(V),Fe=M(Te,1),Ie=o(Fe),_e=u(function(n,t){return u(function(e){return n.apply(null,t.concat(e))})}),Be=R(),Me=function(n,t,e){function r(n,t){b.push(function(){f(n,t)})}function o(){if(0===b.length&&0===d)return e(null,v);for(;b.length&&d<t;){var n=b.shift();n()}}function i(n,t){var e=g[n];e||(e=g[n]=[]),e.push(t)}function c(n){var t=g[n]||[];D(t,function(n){n()}),o()}function f(n,t){if(!m){var r=I(u(function(t,r){if(d--,r.length<=1&&(r=r[0]),t){var u={};C(v,function(n,t){u[t]=n}),u[n]=r,m=!0,g=Object.create(null),e(t,u)}else v[n]=r,c(n)}));d++;var o=t[t.length-1];t.length>1?o(v,r):o(r)}}function a(){for(var n,t=0;j.length;)n=j.pop(),t++,D(l(n),function(n){0===--S[n]&&j.push(n)});if(t!==p)throw new Error("async.auto cannot execute tasks due to a recursive dependency")}function l(t){var e=[];return C(n,function(n,r){It(n)&&Q(n,t,0)>=0&&e.push(r)}),e}"function"==typeof t&&(e=t,t=null),e=y(e||h);var s=E(n),p=s.length;if(!p)return e(null);t||(t=p);var v={},d=0,m=!1,g=Object.create(null),b=[],j=[],S={};C(n,function(t,e){if(!It(t))return r(e,[t]),void j.push(e);var u=t.slice(0,t.length-1),o=u.length;return 0===o?(r(e,t),void j.push(e)):(S[e]=o,void D(u,function(c){if(!n[c])throw new Error("async.auto task `"+e+"` has a non-existent dependency `"+c+"` in "+u.join(", "));i(c,function(){o--,0===o&&r(e,t)})}))}),a(),o()},Ue="[object Symbol]",ze=1/0,Ve=ft?ft.prototype:void 0,Pe=Ve?Ve.toString:void 0,qe="\\ud800-\\udfff",De="\\u0300-\\u036f",Re="\\ufe20-\\ufe2f",Ce="\\u20d0-\\u20ff",$e=De+Re+Ce,We="\\ufe0e\\ufe0f",Ne="\\u200d",Qe=RegExp("["+Ne+qe+$e+We+"]"),Ge="\\ud800-\\udfff",He="\\u0300-\\u036f",Je="\\ufe20-\\ufe2f",Ke="\\u20d0-\\u20ff",Xe=He+Je+Ke,Ye="\\ufe0e\\ufe0f",Ze="["+Ge+"]",nr="["+Xe+"]",tr="\\ud83c[\\udffb-\\udfff]",er="(?:"+nr+"|"+tr+")",rr="[^"+Ge+"]",ur="(?:\\ud83c[\\udde6-\\uddff]){2}",or="[\\ud800-\\udbff][\\udc00-\\udfff]",ir="\\u200d",cr=er+"?",fr="["+Ye+"]?",ar="(?:"+ir+"(?:"+[rr,ur,or].join("|")+")"+fr+cr+")*",lr=fr+cr+ar,sr="(?:"+[rr+nr+"?",nr,ur,or,Ze].join("|")+")",pr=RegExp(tr+"(?="+tr+")|"+sr+lr,"g"),hr=/^\s+|\s+$/g,yr=/^(function)?\s*[^\(]*\(\s*([^\)]*)\)/m,vr=/,/,dr=/(=.+)?(\s*)$/,mr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,gr="function"==typeof setImmediate&&setImmediate,br="object"==typeof process&&"function"==typeof process.nextTick;se=gr?setImmediate:br?process.nextTick:an;var jr=ln(se);sn.prototype.removeLink=function(n){return n.prev?n.prev.next=n.next:this.head=n.next,n.next?n.next.prev=n.prev:this.tail=n.prev,n.prev=n.next=null,this.length-=1,n},sn.prototype.empty=sn,sn.prototype.insertAfter=function(n,t){t.prev=n,t.next=n.next,n.next?n.next.prev=t:this.tail=t,n.next=t,this.length+=1},sn.prototype.insertBefore=function(n,t){t.prev=n.prev,t.next=n,n.prev?n.prev.next=t:this.head=t,n.prev=t,this.length+=1},sn.prototype.unshift=function(n){this.head?this.insertBefore(this.head,n):pn(this,n)},sn.prototype.push=function(n){this.tail?this.insertAfter(this.tail,n):pn(this,n)},sn.prototype.shift=function(){return this.head&&this.removeLink(this.head)},sn.prototype.pop=function(){return this.tail&&this.removeLink(this.tail)};var Sr,kr=M(B,1),wr=u(function(n){return u(function(t){var e=this,r=t[t.length-1];"function"==typeof r?t.pop():r=h,vn(n,t,function(n,t,r){t.apply(e,n.concat(u(function(n,t){r(n,t)})))},function(n,t){r.apply(e,[n].concat(t))})})}),Or=u(function(n){return wr.apply(null,n.reverse())}),xr=z(dn),Er=mn(dn),Lr=u(function(n){var t=[null].concat(n);return ut(function(n,e){return e.apply(this,t)})}),Ar=z(gn(r,bn)),Tr=P(gn(r,bn)),Fr=M(Tr,1),Ir=jn("dir"),_r=M(Ln,1),Br=z(gn(Tn,Tn)),Mr=P(gn(Tn,Tn)),Ur=M(Mr,1),zr=z(Bn),Vr=P(Bn),Pr=M(Vr,1),qr=jn("log"),Dr=M(Un,1/0),Rr=M(Un,1);Sr=br?process.nextTick:gr?setImmediate:an;var Cr=ln(Sr),$r=function(n,t){return hn(function(t,e){n(t[0],e)},t,1)},Wr=function(n,t){var e=$r(n,t);return e.push=function(n,t,r){if(null==r&&(r=h),"function"!=typeof r)throw new Error("task callback must be a function");if(e.started=!0,It(n)||(n=[n]),0===n.length)return jr(function(){e.drain()});t=t||0;for(var u=e._tasks.head;u&&t>=u.priority;)u=u.next;for(var o=0,i=n.length;o<i;o++){var c={data:n[o],priority:t,callback:r};u?e._tasks.insertBefore(u,c):e._tasks.push(c)}jr(e.process)},delete e.unshift,e},Nr=Array.prototype.slice,Qr=z(Wn),Gr=P(Wn),Hr=M(Gr,1),Jr=function(n,t){return t||(t=n,n=null),ut(function(e,r){function u(n){t.apply(null,e.concat(n))}n?Gn(n,u,r):Gn(u,r)})},Kr=z(gn(Boolean,r)),Xr=P(gn(Boolean,r)),Yr=M(Xr,1),Zr=Math.ceil,nu=Math.max,tu=M(Yn,1/0),eu=M(Yn,1),ru=function(n,t){function e(o){if(r===n.length)return t.apply(null,[null].concat(o));var i=I(u(function(n,r){return n?t.apply(null,[n].concat(r)):void e(r)}));o.push(i);var c=n[r++];c.apply(null,o)}if(t=y(t||h),!It(n))return t(new Error("First argument to waterfall must be an array of functions"));if(!n.length)return t();var r=0;e([])},uu={applyEach:Ae,applyEachSeries:Ie,apply:_e,asyncify:q,auto:Me,autoInject:fn,cargo:yn,compose:Or,concat:xr,concatSeries:Er,constant:Lr,detect:Ar,detectLimit:Tr,detectSeries:Fr,dir:Ir,doDuring:Sn,doUntil:wn,doWhilst:kn,during:On,each:En,eachLimit:Ln,eachOf:Ee,eachOfLimit:B,eachOfSeries:kr,eachSeries:_r,ensureAsync:An,every:Br,everyLimit:Mr,everySeries:Ur,filter:zr,filterLimit:Vr,filterSeries:Pr,forever:Mn,log:qr,map:Le,mapLimit:Te,mapSeries:Fe,mapValues:Dr,mapValuesLimit:Un,mapValuesSeries:Rr,memoize:Vn,nextTick:Cr,parallel:qn,parallelLimit:Dn,priorityQueue:Wr,queue:$r,race:Rn,reduce:vn,reduceRight:Cn,reflect:$n,reflectAll:Nn,reject:Qr,rejectLimit:Gr,rejectSeries:Hr,retry:Gn,retryable:Jr,seq:wr,series:Hn,setImmediate:jr,some:Kr,someLimit:Xr,someSeries:Yr,sortBy:Jn,timeout:Kn,times:tu,timesLimit:Yn,timesSeries:eu,transform:Zn,unmemoize:nt,until:et,waterfall:ru,whilst:tt,all:Br,any:Kr,forEach:En,forEachSeries:_r,forEachLimit:Ln,forEachOf:Ee,forEachOfSeries:kr,forEachOfLimit:B,inject:vn,foldl:vn,foldr:Cn,select:zr,selectLimit:Vr,selectSeries:Pr,wrapSync:q};n.default=uu,n.applyEach=Ae,n.applyEachSeries=Ie,n.apply=_e,n.asyncify=q,n.auto=Me,n.autoInject=fn,n.cargo=yn,n.compose=Or,n.concat=xr,n.concatSeries=Er,n.constant=Lr,n.detect=Ar,n.detectLimit=Tr,n.detectSeries=Fr,n.dir=Ir,n.doDuring=Sn,n.doUntil=wn,n.doWhilst=kn,n.during=On,n.each=En,n.eachLimit=Ln,n.eachOf=Ee,n.eachOfLimit=B,n.eachOfSeries=kr,n.eachSeries=_r,n.ensureAsync=An,n.every=Br,n.everyLimit=Mr,n.everySeries=Ur,n.filter=zr,n.filterLimit=Vr,n.filterSeries=Pr,n.forever=Mn,n.log=qr,n.map=Le,n.mapLimit=Te,n.mapSeries=Fe,n.mapValues=Dr,n.mapValuesLimit=Un,n.mapValuesSeries=Rr,n.memoize=Vn,n.nextTick=Cr,n.parallel=qn,n.parallelLimit=Dn,n.priorityQueue=Wr,n.queue=$r,n.race=Rn,n.reduce=vn,n.reduceRight=Cn,n.reflect=$n,n.reflectAll=Nn,n.reject=Qr,n.rejectLimit=Gr,n.rejectSeries=Hr,n.retry=Gn,n.retryable=Jr,n.seq=wr,n.series=Hn,n.setImmediate=jr,n.some=Kr,n.someLimit=Xr,n.someSeries=Yr,n.sortBy=Jn,n.timeout=Kn,n.times=tu,n.timesLimit=Yn,n.timesSeries=eu,n.transform=Zn,n.unmemoize=nt,n.until=et,n.waterfall=ru,n.whilst=tt,n.all=Br,n.allLimit=Mr,n.allSeries=Ur,n.any=Kr,n.anyLimit=Xr,n.anySeries=Yr,n.find=Ar,n.findLimit=Tr,n.findSeries=Fr,n.forEach=En,n.forEachSeries=_r,n.forEachLimit=Ln,n.forEachOf=Ee,n.forEachOfSeries=kr,n.forEachOfLimit=B,n.inject=vn,n.foldl=vn,n.foldr=Cn,n.select=zr,n.selectLimit=Vr,n.selectSeries=Pr,n.wrapSync=q,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=async.min.map

//var run;

//
//alert("Starting up CBT !!!");
builder.registerPostLoadHook(function() {  
  //alert("Starting up CBT #2 !!!");
  builder.gui.menu.addItem('file', _t('__cbt_settings'), 'file-cbt-settings', function() { cbt.settingspanel.show(false); });

  builder.gui.menu.addItem('run', _t('__cbt_run_test'), 'run-cbt-test', function() {
    cbt.settingspanel.show(false);
  });

  builder.gui.menu.addItem('run', _t('__cbt_run_test_suite'), 'run-cbt-test-suite', function() {
    cbt.settingspanel.show(true);
  });  
})

cbt.settingspanel = {};
/** The dialog. */
cbt.settingspanel.dialog = null;


cbt.loginManager = Components.classes["@mozilla.org/login-manager;1"].getService(Components.interfaces.nsILoginManager);

cbt.loginInfo = new Components.Constructor(
  "@mozilla.org/login-manager/loginInfo;1",
  Components.interfaces.nsILoginInfo,
  "init"
);



cbt.getCredentials = function() {
  var logins = cbt.loginManager.findLogins(
    {},
    /*hostname*/      'chrome://seleniumbuilder',
    /*formSubmitURL*/ null,
    /*httprealm*/     'CrossBrowserTesting User Login'
  );
  
  for (var i = 0; i < logins.length; i++) {
    return {'username': logins[i].username, 'authkey': logins[i].password};
  }
  return {'username': "", 'authkey': ""};
};



cbt.setCredentials = function() {
  var username = jQuery('#cbt_username').val();
  var authkey = jQuery('#cbt_authkey').val();

  var logins = cbt.loginManager.findLogins(
    {},
    /*hostname*/      'chrome://seleniumbuilder',
    /*formSubmitURL*/ null,
    /*httprealm*/     'CrossBrowserTesting User Login'
  );
  
  for (var i = 0; i < logins.length; i++) {
    cbt.loginManager.removeLogin(logins[i]);
  }
  
  var loginInfo = new cbt.loginInfo(
    /*hostname*/      'chrome://seleniumbuilder',
    /*formSubmitURL*/ null,
    /*httprealm*/     'CrossBrowserTesting User Login',
    /*username*/      username,
    /*password*/      authkey,
    /*usernameField*/ "",
    /*passwordField*/ ""
  );
  cbt.loginManager.addLogin(loginInfo);
};

cbt.getSavedBrowsers = function() {
  var prefName = "extensions.seleniumbuilder.plugins.cbt.savedBrowsers";
  try {
    browsers = JSON.parse(bridge.prefManager.prefHasUserValue(prefName) ? bridge.prefManager.getCharPref(prefName) : "{}");

    for (var browserIndex = 0; browserIndex < browsers.length; browserIndex++) {
      cbt.addSavedBrowser(browsers[browserIndex].configApiName, browsers[browserIndex].browserApiName, browsers[browserIndex].resolutionApiName);
    }

  } catch (e) {
    return {};
  }

  
};

cbt.setSavedBrowsers = function() {
  browsers=[]
  jQuery('#cbtSavedBrowserList li').each(function(){

    savedBrowserId = this.id

    savedBrowserIdParts = savedBrowserId.split("_");
    configApiName = savedBrowserIdParts[1];
    browserApiName = savedBrowserIdParts[2];
    resolutionApiName = savedBrowserIdParts[3];
    
    browser = {browserApiName: browserApiName, configApiName: configApiName, resolutionApiName: resolutionApiName}   
    browsers.push(browser);
  })

  
  var prefName = "extensions.seleniumbuilder.plugins.cbt.savedBrowsers";
  try {
    bridge.prefManager.setCharPref(prefName, JSON.stringify(browsers));
  } catch (e) { /* ignore */ }
};


cbt.shutdown = function() {

};

cbt.settingspanel.show = function(runSuite, callback) {
  cbt_runSuite = runSuite;
  var credentials = cbt.getCredentials();
  if (cbt.settingspanel.open) { return; }
  cbt.settingspanel.open = true;

  var testDescription = _t('__cbt_runsingle');
  if (runSuite) {
    testDescription = _t('__cbt_runsuite');
  } 

  cbt.getConfigs( function(err, configs) {
    cbt.settingspanel.dialog =
      newNode('div', {'class': 'dialog'},
        newNode('h2', _t('__cbt_settings')),
        newNode('table', {style: 'border: none;', id: 'rc-options-table'},
          newNode('tr',
            newNode('td', _t('__cbt_username') + " "),
            newNode('td', newNode('input', {id: 'cbt_username', type: 'text', value: credentials.username, 'change': function() {
            }}))
          ),
          newNode('tr',
            newNode('td', _t('__cbt_authkey') + " "),
            newNode('td', newNode('input', {id: 'cbt_authkey', type: 'text', value: credentials.authkey})),
            newNode('td', 
              newNode('span', ' ('),
              newNode('a', {'href': 'http://crossbrowsertesting.com/account?authkey', 'target': '_blank'}, _t('__cbt_lookup_api_key')),
              newNode('span', ') ')
            )
          ),
          newNode('tr',
            newNode('td', ' '),
            newNode('td', {'colspan':'2'},
              newNode('a', {'href': 'http://crossbrowsertesting.com/freetrial', 'target': '_blank'}, _t('__cbt_need_an_account'))
            )
          )
        ),
        newNode('hr'),
        newNode('h3', _t('__cbt_runscreenshottest')),
        newNode('div', 
          newNode('span', ' '),
          newNode('span', _t('__cbt_addscreenshotloginprofile')),
          newNode('span', ' '),
          newNode('a', {'href': 'http://crossbrowsertesting.com/faq/can-i-use-selenium-script-screenshot-system', 'target': '_blank'}, _t('__cbt_faq'))          
        ),
        newNode('div', 
          newNode('span', ' '),
          newNode('span', _t('__cbt_addscreenshotloginprofileinput')),
          newNode('span', ' '),
          newNode('input', {id: 'cbt_login_profile_name', type: 'text', value: _t('__cbt_login_profile_name_default_text'), 'change': function() {
            }}),
          newNode('span', ' '),
          newNode('a', {'href': '#', 'class': 'button', 'id': 'cbt-cancel', 'click': function() {
            cbt.saveLoginProfile();
            }}, _t('__save_login_profile')
          ) 
        ),
        newNode('hr'),
        newNode('h3', _t('__cbt_seleniumtesting') + ' - ' + testDescription),
        newNode('div',
          newNode('span', _t('__cbt_run_instructions')),
          newNode('span', ' | '),
          newNode('a', {'href': 'http://app.crossbrowsertesting.com/selenium/run', 'target': '_blank'}, _t('__cbt_see_all_selenium_tests')),
          newNode('span', ' | '),
          newNode('a', {'href': 'http://crossbrowsertesting.com/faq/how-do-i-record-and-run-selenium-tests-selenium-builder', 'target': '_blank'}, _t('__cbt_faq'))  
        ),
        newNode('div', 
          newNode('table', {style: 'border: none; margin-left: 20px; margin-bottom: 20px; background-color: ddd; width:90%', id: 'browserlisttable'},
            newNode('tr',
              newNode('td', {style: 'font-weight:bold'}, _t('__cbt_savedbrowserlist'))
            ),
            newNode('tr',
              newNode('td', 
                newNode('div', {'id' : 'cbtSavedBrowserListEmpty'}, _t('__cbt_savedbrowserlistempty')),
                newNode('ul', {'id' : 'cbtSavedBrowserList'}),
                newNode('div', {'id' : 'cbtSavedBrowserListRunAllControls'}, '')
              )
            )
          )
        ),
        newNode('div', _t('__cbt_config')),
        newNode('div',{'id': 'cbtImmediateRun'},
          newNode('span', newNode('select', {'id': 'cbtConfigList', 'change': function() { cbt.configSelected(configs, jQuery('#cbtConfigList').val()) }}),
            newNode('select', {'id': 'cbtBrowserList'}),
            newNode('select', {'id': 'cbtResolutionList'}),
            newNode('a', {'style': 'margin: 10px;', 'href': '#', 'id': 'cbtImmediateRun_run', 'click': function() {
                var configApiName = jQuery('#cbtConfigList').val();
                var browserApiName = jQuery('#cbtBrowserList').val();
                var resolutionApiName = jQuery('#cbtResolutionList').val();
                var elementResults = '#cbtImmediateRun_status'
                var browser={browserApiName: browserApiName, configApiName:configApiName, resolutionApiName:resolutionApiName, elementResults:elementResults }
                
                if (runSuite) {
                  browsers=[]
                  browsers.push(browser)
                  cbt.runAllTests(browsers);
                } else {
                  cbt.runTest(browser);
                }
              }}, _t('__cbt_run')
            ),
            newNode('a', {'style': 'margin: 10px;', 'href': '#', 'id': 'cbtImmediateRun_add', 'click': function() {
                var configApiName = jQuery('#cbtConfigList').val();
                var browserApiName = jQuery('#cbtBrowserList').val();
                var resolutionApiName = jQuery('#cbtResolutionList').val();
                cbt.addSavedBrowser(configApiName, browserApiName, resolutionApiName);

              }}, _t('__cbt_add')
            )
          )
        ),
        newNode('div', {'style': 'display: none', 'id': 'cbtImmediateRun_status'}, ""),        
        newNode('div', {style: 'margin-top:20px;'},
          //newNode('a', {'href': '#', 'class': 'button', 'id': 'cbt-ok', 'click': function() {
            ////var username = jQuery('#cbt_username').val();
            ////var authkey = jQuery('#cbt_authkey').val();
            ////cbt.setCredentials(username, authkey);
            //cbt.setCredentials();
            //cbt.setSavedBrowsers();
            //cbt.settingspanel.hide();
          //}}, _t('ok')),
          newNode('a', {'href': '#', 'class': 'button', 'id': 'cbt-cancel', 'click': function() {
            cbt.setCredentials();
            cbt.setSavedBrowsers();
            cbt.settingspanel.hide();
            }}, _t('__cbt_close')
          ) 
        )   
      );
    builder.dialogs.show(cbt.settingspanel.dialog);
    cbt.fillConfigs(configs);
    cbt.configSelected(configs, configs[0].api_name)
    cbt.getSavedBrowsers();
  });
};

cbt.fillConfigs = function(configs) {
  for (var i = 0; i < configs.length; i++) {
    var name = configs[i].name;
    
    jQuery('#cbtConfigList').append(newNode(
      'option',
      {'value': configs[i].api_name},
      name
    ));
  }
}


cbt.saveLoginProfile = function(callback) {
  cbt.setCredentials();
  jQuery('#edit-rc-connecting').show();

  var loginprofilename = jQuery('#cbt_login_profile_name').val();
  
  scriptJson=builder.selenium2.io.getScriptDefaultRepresentation(builder.suite.getCurrentScript());

  if (loginprofilename.toUpperCase() == _t('__cbt_login_profile_name_default_text').toUpperCase() || loginprofilename.length==0) {
    alert('You must enter a name of the login profile you want this selenium script stored under')
    return;
  }

  var data = {
    "profile_name": loginprofilename,
    "custom_script": scriptJson
  };

  jQuery.ajax({
    beforeSend: function(xhr){ 
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(jQuery('#cbt_username').val() + ":" + jQuery('#cbt_authkey').val())); 
    },
    url: 'https://app.crossbrowsertesting.com/api/v3/screenshots/loginprofiles',
    type: 'POST',
    data: data,
    success: function(loginProfile) {
      jQuery('#edit-rc-connecting').hide();
      alert(_t('__screenshot_selenium_script_saved'))
      callback(true)
    },
    error: function(jqXHR, textStatus, errorThrown){ 
      jQuery('#edit-rc-connecting').hide();
      alert('Error saving login profile. Error: '+textStatus)
     
      jQuery('#edit-rc-connecting').show();
      callback(false);
    }
    
  });
};


cbt.configSelected = function(configs, configApiName) {
  //clear the list
  jQuery('#cbtBrowserList').html("");
  jQuery('#cbtResolutionList').html("");
  for (var i = 0; i < configs.length; i++) {
    if (configs[i].api_name == configApiName ) {
      var browsers = configs[i].browsers;
      var resolutions = configs[i].resolutions;
      for (var j = 0; j < browsers.length; j++) {
        var name = browsers[j].name;      
        jQuery('#cbtBrowserList').append(newNode(
          'option',
          {'value': browsers[j].api_name},
          name
        ));
      }
      for (var k = 0; k < resolutions.length; k++) {
        var name = resolutions[k].name;      
        jQuery('#cbtResolutionList').append(newNode(
          'option',
          {'value': resolutions[k].name},
          name
        ));
      }
    }
  }
}


cbt.settingspanel.hide = function() {
  jQuery(cbt.settingspanel.dialog).remove();
  cbt.settingspanel.dialog = null;
  cbt.settingspanel.open = false;
};


cbt.escapePeriodsInSelectors = function(selector) {
  return selector.replace(".", "\\.")
}

cbt.runTest = function(run, callback) {

  cbt.setCredentials();

  var configApiName = run.configApiName;
  var browserApiName = run.browserApiName;
  var resolutionApiName = run.resolutionApiName;
  var elementResults = run.elementResults;
  var name = run.name;


  builder.views.script.clearResults(); 

  var browserName = "internet explorer";
  if (browserApiName.toUpperCase().indexOf("FF") > -1) browserName = "firefox";
  if (browserApiName.toUpperCase().indexOf("CHROME") > -1) browserName = "chrome";
  if (browserApiName.toUpperCase().indexOf("OPERA") > -1) browserName = "opera";
  if (browserApiName.toUpperCase().indexOf("SAFARI") > -1) browserName = "safari";

  
  builder.suite.switchToScript(run.index);


  var runName = _t('__cbt_untitled_script');
  //if running a suite and saving state between scripts (ie same config), name the test the suite name, not the script name
  if (cbt_runSuite && builder.doShareSuiteState()) {
    if (builder.suite.path) {
      runName = builder.suite.path.path.split("/");
      runName = runName[runName.length - 1];
      runName = runName.split(".")[0];
    } 
  } else {
    if (builder.getScript().path) {
      runName = builder.getScript().path.path.split("/");
      runName = runName[runName.length - 1];
      runName = runName.split(".")[0];
    }     
  }

  var settings = {
    hostPort: jQuery('#cbt_username').val() + ":" + jQuery('#cbt_authkey').val() + "@hub.crossbrowsertesting.com:80",
    browser_api_name: browserApiName,
    browserName: browserName,
    os_api_name: configApiName,
    screen_resolution: resolutionApiName,
    record_video: "true",
    browserstring: browserName,
    name: runName,
    timeout: 180000
  };

  var elementResultsBase = elementResults.replace('_status','');
  

  jQuery.ajax(
    "https://" + jQuery('#cbt_username').val() + ":" + jQuery('#cbt_authkey').val() + "@app.crossbrowsertesting.com/api/v3/account",
    {
      "headers": {"Authorization": "Basic " + btoa(jQuery('#cbt_username').val() + ":" + jQuery('#cbt_authkey').val())},
      success: function(accountInfo) {
        //builder.suite.switchToScript(run.index);
        builder.stepdisplay.update();

        if (builder.suite.getCurrentScript().seleniumVersion == builder.selenium1) {
          alert("CrossBrowserTesting.com support begins with Selenium 2.  Please convert your script to Selenium 2 and run it.")
        } else {  

          //need run.seleniumVersion set so stop works
          run.seleniumVersion = builder.getScript().seleniumVersion;      

          if(document.getElementById(elementResultsBase.replace('#', '')+'_stop')) {
            jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_stop').remove();
          }
          if(document.getElementById(elementResultsBase.replace('#', '')+'_view')) {
            jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_view').remove();
          }
          if(document.getElementById(elementResultsBase.replace('#', '')+'_clear')) {
            jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_clear').remove();
          }        

          var postRunCallback = function (runResult) {
            run.complete = true;

            var score = 'pass';

            if (!runResult.success) {
              score = 'fail'
            }

            data = {"action": "set_score",
                  "score":score};
            
            jQuery.ajax("https://" + jQuery("#cbt_username").val() + ":" + jQuery("#cbt_authkey").val() + "@app.crossbrowsertesting.com/api/v3/selenium/" + run.sessionId, {
              "headers": {"Authorization": "Basic " + btoa(jQuery('#cbt_username').val() + ":" + jQuery('#cbt_authkey').val())},
              "type": "PUT",
              "contentType": "application/json",
              "data": JSON.stringify(data)
            });

            var finishedMessage = _t('__cbt_testfinishedsuccessfully')
            if (! runResult.success) {
              finishedMessage = _t('__cbt_testfinishedunsuccessfully') + " Error: " + runResult.errormessage
              jQuery(cbt.escapePeriodsInSelectors(elementResults)).css("background-color", "red")
            }
            jQuery(cbt.escapePeriodsInSelectors(elementResults)).html("Run finished.  Results:" + finishedMessage);
            jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_stop').remove();

            if ( ! jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_clear').length) {
              jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)).append(
                newNode('a', {'id': elementResultsBase.replace('#','')+'_clear', 'href': '#', 'style':'padding-left:10px;', 'click': function() { 
                    cbt.clearElements(elementResultsBase);
                  }}, _t('__cbt_clear'))
              );
            }

            builder.views.script.onEndRCPlayback(); 
            //show all the elements with an id starting with cbt and ending with _run (ie all the run links....)
            //jQuery("[id^='cbt']:[id$='_run']").show();
            //todo! figure out why this causes err out. 

            jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_run').show();
            jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_del').show();
            
            if (callback) {
              callback(runResult);
            }
          };
          
          var jobStartedCallback = function(response) {

            builder.views.script.onConnectionEstablished();

            //response is null when it is a rerun with the same session
            if (response) {
              run.sessionId = response.sessionId;
            } else {
              //if this was a continuation of a previous run, then response will be null.
              if (run.prevRun) {
                run.sessionId = run.prevRun.playbackRun.sessionID;
              }
            }
            jQuery(cbt.escapePeriodsInSelectors(elementResults)).show();

      
            var elementResultsBase = elementResults.replace('_status','');
            jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_run').hide();
            jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_del').hide();
            jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)).append(
              newNode('a', {'id': elementResultsBase.replace('#','')+'_view', 'href': '#', 'style':'padding-left:10px;', 'click': function() { window.open("http://app.crossbrowsertesting.com/selenium/"+response.sessionId); }}, 'view')
            );
                     
           
            var path = _t('__cbt_untitled_script');
            if (builder.getScript().path) {
              var path = builder.getScript().path.path.split("/");
              path = path[path.length - 1];
              path = path.split(".")[0];
            }          
            
            //var path = builder.suite.hasScript() ? builder.getScript().path.path : null;
            jQuery(cbt.escapePeriodsInSelectors(elementResults)).html("Starting to run "+path);
            jQuery(cbt.escapePeriodsInSelectors(elementResults)).css("background-color", "#BFEE85")
          };
         
          //var stepStateCallback = builder.stepdisplay.updateStepPlaybackState;

          stepStateCallback = function(r, script, step, stepIndex, state, message, error, percentProgress) {
            if (error) {
              if (r.currentStepIndex === -1) {
                // If we can't connect to the server right at the start, just attach the error message to the
                // first step.
                r.currentStepIndex = 0;
              }
              if (!step) {
                step = script.steps[r.currentStepIndex];
              }
            } 
            builder.stepdisplay.updateStepPlaybackState(r, script, step, stepIndex, state, message, error, percentProgress);
          };



          jQuery(cbt.escapePeriodsInSelectors(elementResults)).show();
          jQuery(cbt.escapePeriodsInSelectors(elementResults)).css("background-color", "yellow");
          jQuery(cbt.escapePeriodsInSelectors(elementResults)).html("Launching configuration at CrossBrowserTesting.com...");

          var initialVars = run.initialVars;


          var pausedCallback =builder.views.script.onPauseRCPlayback;
          var preserveRunSession = run.preserveRunSession;
          if (run.reuseSession) {

            run.playbackRun = builder.selenium2.rcPlayback.runReusing(
              run.prevRun.playbackRun,
              postRunCallback,
              jobStartedCallback,
              stepStateCallback,
              initialVars,
              pausedCallback,
              preserveRunSession
            );

          } else {
            run.playbackRun = builder.selenium2.rcPlayback.run(
              settings,
              postRunCallback,
              jobStartedCallback,
              stepStateCallback,
              initialVars,
              pausedCallback,
              preserveRunSession
            );

          }

          //hide all the elements with an id starting with cbt and ending with _run (ie all the run links....)
          jQuery("[id^='cbt']:[id$='_run']").hide();

          jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_del').hide();
          jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)).append(
            newNode('a', {'id': elementResultsBase.replace('#', '')+'_stop', 'href': '#', 'style':'padding-left:10px;', 'click': function() { 
                  jQuery(cbt.escapePeriodsInSelectors(elementResults)).html(_t('__cbt_preparing_stop'));
                  jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_stop').remove();
                  run.preserveRunSession = false;
                  run.playbackRun.preserveRunSession = false;
      
                  //kill this run and any pending runs
                  cbt.runall.runIndex=cbt.runall.length;
                  builder.selenium2.rcPlayback.stopTest(run);
                  builder.selenium2.rcPlayback.shutdown(run);

                  if (run.playbackRun) {
                    run.seleniumVersion.rcPlayback.stopTest(run.playbackRun);
                    builder.selenium2.rcPlayback.shutdown(run.playbackRun);
                  }
                }
              }, _t('__cbt_stop'))
          );
        }
      },
      error: function(xhr, textStatus, errorThrown) {
        jQuery('#edit-rc-connecting').hide();
        jQuery(cbt.escapePeriodsInSelectors(elementResults)).css("background-color", "red")
        jQuery(cbt.escapePeriodsInSelectors(elementResults)).html("Could not login.  Results:" + errorThrown); 
      }
    }
  );
}

cbt.clearElements = function(elementResultsBase) {
  jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_view').remove()
  jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_clear').remove()
  jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_status').html('')
  jQuery(cbt.escapePeriodsInSelectors(elementResultsBase)+'_status').hide('')
  builder.views.script.clearResults();

}

cbt.addSavedBrowser = function(configApiName, browserApiName, resolutionApiName) {
  //cbtSavedBrowsers

  //populate cbtSavedBrowserListRunAllControls if this is the first element added
  if ( ! jQuery("#cbtSavedBrowserList").has("li").length) {
    jQuery('#cbtSavedBrowserListRunAllControls').append(
      newNode('a', {'id':'cbtSavedBrowserList_run', 'href': '#', 'style':'padding-left:10px;', 'click': function() { cbt.runAllSavedBrowsers(); }}, _t('__cbt_run_all'))  
    );    
  }

  var name = cbt.getSavedBrowserId(configApiName, browserApiName, resolutionApiName);
  //add this browser as long as it does not already exist
  if(! document.getElementById(name)) {
    jQuery('#cbtSavedBrowserListEmpty').hide();

    jQuery('#cbtSavedBrowserList').append(newNode('li', {'id': cbt.getSavedBrowserId(configApiName, browserApiName, resolutionApiName)},
        newNode('div',
          newNode('span', configApiName+" "+browserApiName+" "+resolutionApiName),
          newNode('a', {'id': cbt.getSavedBrowserId(configApiName, browserApiName, resolutionApiName)+'_run', 'href': '#', 'style':'padding-left:10px;', 'click': function() { cbt.runSavedBrowser(cbt.getSavedBrowserId(configApiName, browserApiName, resolutionApiName)); }}, _t('__cbt_run')),
          newNode('a', {'id': cbt.getSavedBrowserId(configApiName, browserApiName, resolutionApiName)+'_del', 'href': '#', 'style':'padding-left:10px;', 'click': function() {cbt.delSavedBrowser(this)}}, 'x')
        ),
        newNode('div', {'id': cbt.getSavedBrowserId(configApiName, browserApiName, resolutionApiName)+'_status', 'style':'display:none'},'')
      )
    );
  }
}

cbt.delSavedBrowser = function(element) {
  jQuery(element).parent().parent().remove(); 
  if ( ! jQuery("#cbtSavedBrowserList").has("li").length) {
    jQuery('#cbtSavedBrowserListEmpty').show();
  }

  //remove cbtSavedBrowserListRunAllControls if this is the first element added
  if ( ! jQuery("#cbtSavedBrowserList").has("li").length) {
    jQuery('#cbtSavedBrowserList_run').remove()   
  }

}


cbt.runSavedBrowser = function(savedBrowserId) {

  var savedBrowserIdParts = savedBrowserId.split("_");
  var configApiName = savedBrowserIdParts[1];
  var browserApiName = savedBrowserIdParts[2];
  var resolutionApiName = savedBrowserIdParts[3];
  var run = {browserApiName: browserApiName, configApiName: configApiName, resolutionApiName: resolutionApiName, elementResults: '#'+savedBrowserId+'_status' }
  if (cbt_runSuite) {
    var browsers = []
    browsers.push(run);
    cbt.runAllTests(browsers)
  } else {
    cbt.runTest(run);
  }
}


cbt.runAllSavedBrowsers = function() {

  //first, lets save the current list:
  cbt.setSavedBrowsers();

  //build a browsers array
  var browsers = [];
  jQuery('#cbtSavedBrowserList li').each(function(){

    savedBrowserId = this.id

    //clean up ui
    if ( jQuery('#'+cbt.escapePeriodsInSelectors(savedBrowserId)+'_clear').length) {
      cbt.clearElements('#'+savedBrowserId);
    }

    
    savedBrowserIdParts = savedBrowserId.split("_");
    configApiName = savedBrowserIdParts[1];
    browserApiName = savedBrowserIdParts[2];  
    resolutionApiName = savedBrowserIdParts[3];
    run = {browserApiName: browserApiName, configApiName: configApiName, resolutionApiName: resolutionApiName, elementResults: '#'+savedBrowserId+'_status' }   
    browsers.push(run);
  })
  cbt.runAllTests(browsers);

}

cbt.clearAllSavedBrowsers = function() {
  jQuery('#cbtSavedBrowserList li').each(function(){

    savedBrowserId = this.id

    //clean up ui
    if ( jQuery('#'+cbt.escapePeriodsInSelectors(savedBrowserId)+'_clear').length) {
      cbt.clearElements('#'+savedBrowserId);
    }
  })
  jQuery('#cbtSavedBrowserList_clear').remove()
}


cbt.getSavedBrowserHtml = function(configs, configApiName, browserApiName, resolutionApiName) {
  return("<li id='"+cbt.getSavedBrowserId(configApiName, browserApiName, resolutionApiName)+"'>"+configApiName+" "+browserApiName+" "+resolutionApiName+"<\li>");
}

cbt.getSavedBrowserId = function(configApiName, browserApiName, resolutionApiName, getSavedBrowserId) {
  return("cbt_"+configApiName+"_"+browserApiName+"_"+resolutionApiName+"_"+getSavedBrowserId);
}


cbt.getConfigs = function(callback) {
  jQuery.ajax(
    "https://app.crossbrowsertesting.com/api/v3/selenium/browsers",
    {
      success: function(configs) {
        callback(true, configs)
      },
      error: function() {
        callback(false, null);
      }
    }
  );
};

cbt.runall = {};
cbt.runall.scriptNames = [];
cbt.runall.runs = [];


cbt.runAllTests = function(browsers) {
  jQuery('#edit-suite-editing').hide();
  
  var scripts = [];
  var scriptIndexes = [];
  
  var isSel2orLater = true;
  if (cbt_runSuite) {
    for (var i = 0; i < builder.suite.getScriptNames().length; i++) {
      scriptIndexes.push(i); 
      if (builder.suite.scripts[i].seleniumVersion == builder.selenium1) {
        isSel2orLater = false;
      }
    }
    scripts = builder.suite.scripts;
  } else {
    scriptIndexes = [builder.suite.getSelectedScriptIndex()];
    scripts = [builder.getScript()];
  }

  if ( ! isSel2orLater ) {
    alert("CrossBrowserTesting.com support begins with Selenium 2.  Please convert your scripts to Selenium 2 and run them.")
  } else {

    cbt.runall.scriptNames = builder.suite.getScriptNames();
    builder.dialogs.runall.getAllRows(scripts, function(scriptsIndexToRows) {
      cbt.runall.runs = [];
      
      var runIndex = 0;
      var prevRun = null;
      
      for (var browserIndex = 0; browserIndex < browsers.length; browserIndex++) {
        for (var scriptIndex = 0; scriptIndex < scriptIndexes.length; scriptIndex++) {
          var script = builder.suite.scripts[scriptIndexes[scriptIndex]];

          if (script.seleniumVersion != builder.selenium2) { continue; }
          var rows = scriptsIndexToRows[scriptIndex];
          for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
            var row = rows[rowIndex];
            var name = cbt.runall.scriptNames[scriptIndexes[scriptIndex]] + " " + browsers[browserIndex].browserApiName;
            if (rows.length > 1) {
              name += " " + _t('row', rowIndex);
            }
            var firstSuiteRun = scriptIndex == 0 && rowIndex == 0;
            var lastSuiteRun = scriptIndex == scriptIndexes.length - 1 && rowIndex == rows.length - 1;
            var new_run = {
              'name': name,
              'script': script,
              /*'settings': settings.sel2[settingsIndex],*/
              'browserApiName': browsers[browserIndex].browserApiName,
              'configApiName': browsers[browserIndex].configApiName,
              'resolutionApiName': browsers[browserIndex].resolutionApiName,
              'elementResults': browsers[browserIndex].elementResults,
              'index': scriptIndexes[scriptIndex],
              'sessionId': null,
              'complete': false,
              'runIndex': runIndex++,
              'playbackRun': null,
              'seleniumVersion': script.seleniumVersion,
              'stopRequested': false,
              'initialVars': row,
              'prevRun': prevRun,
              'reuseSession': builder.doShareSuiteState() && !firstSuiteRun,
              'preserveRunSession': builder.doShareSuiteState() && !lastSuiteRun
            };
            prevRun = new_run;
            cbt.runall.runs.push(new_run);
          }
        }
        prevRun = null;
      }
      async.eachSeries(cbt.runall.runs, function(runItem, outCb) {
      	var configApiName = runItem.configApiName;
     	var browserApiName = runItem.browserApiName;
    	var resolutionApiName = runItem.resolutionApiName;
     		//cbt.runall.runScript(configApiName, browserApiName, resolutionApiName, cbt.runall.runs.indexOf(cbt.runall.runs[runIndex]));
  		jQuery("#script-num-" + runIndex).css('background-color', '#ffffaa');
   		cbt.runTest(runItem, function(result) { 
   			cbt.runall.processResult(result, configApiName, browserApiName, resolutionApiName, runItem);
   			outCb(null); 
   		});
      });

  	  if ( jQuery("#cbtSavedBrowserList_clear").length == 0 ) {
		jQuery('#cbtSavedBrowserListRunAllControls').append(
 		newNode('a', {'id':'cbtSavedBrowserList_clear', 'href': '#', 'style':'padding-left:10px;', 'click': function() { cbt.clearAllSavedBrowsers(); }}, _t('__cbt_clear_all'))  
	  );  
 	}
    })
  }
}  



//cbt.runall.runNext = function(configApiName, browserApiName) {
  cbt.runall.runNext = function(runIndex) {
  runIndex++;
  if (runIndex < cbt.runall.runs.length )  {
    configApiName = cbt.runall.runs[runIndex].configApiName;
    browserApiName = cbt.runall.runs[runIndex].browserApiName;
    resolutionApiName = cbt.runall.runs[runIndex].resolutionApiName;
    cbt.runall.runScript(configApiName, browserApiName, resolutionApiName, cbt.runall.runs.indexOf(cbt.runall.runs[runIndex]));
    cbt.runall.runNext(runIndex);
  } else {
    if ( jQuery("#cbtSavedBrowserList_clear").length == 0 ) {
      //if ( ! jQuery("#cbtSavedBrowserList") ) {
        jQuery('#cbtSavedBrowserListRunAllControls').append(
         newNode('a', {'id':'cbtSavedBrowserList_clear', 'href': '#', 'style':'padding-left:10px;', 'click': function() { cbt.clearAllSavedBrowsers(); }}, _t('__cbt_clear_all'))  
        );    
      //}
    }
  }
};

cbt.runall.processResult = function(result, configApiName, browserApiName, resolutionApiName, runItem ) {
  // todo! figure out why this errs out 
  runItem.complete = true;
  //cbt.runall.runNext(configApiName, browserApiName);
};


cbt.runall.runScript = function(configApiName, browserApiName, resolutionApiName, runIndex) {
  jQuery("#script-num-" + runIndex).css('background-color', '#ffffaa');
  
  cbt.runTest(cbt.runall.runs[runIndex], function(result) { cbt.runall.processResult(result, configApiName, browserApiName, resolutionApiName, runIndex); });
};


var to_add = [];
for (var name in builder.selenium2.io.lang_infos) {
  if (name.startsWith && name.startsWith("Java") && name.toLowerCase().indexOf('On Demand')==-1 ) {
    to_add.push(name);
  }
}

