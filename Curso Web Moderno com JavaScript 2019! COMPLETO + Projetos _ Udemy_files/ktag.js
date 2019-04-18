/* ktag.js - 2019-04-14 */
var KENSHOO_GCLID_NAME="ken_gclid",GOOGLE_CLICK_ID_PARAM_NAME="gclid",BING_CLICK_ID_PARAM_NAME="msclkid",DOMAIN_DEVICE_ID_COOKIE_NAME="ken_xd",NO_PUBLISHER_CLICK_ID_PARAM_NAME="npclid",AMP_CHANNEL_CLICK_ID_COOKIE_NAME="ken_amp_gclid",AMP_LINKER_PARAM_NAME="linker",Kenshoo_Toggles=function(){return{isCrossDevice:function(){return!1},isSendCrossDeviceMatchEvent:function(){return!1},isParseAmpLinkerParameters:function(){return!1},isUseNpclid:function(){return!0},isDummyEnabled:function(){return!0},isDummyDisabled:function(){return!1},isDummyEnabledForDummyTids:function(){return!1},isDummyDisabledForDummyTids:function(){return!0}}}(),Amp_Helpers=function(){var t="*",r=/^[a-zA-Z0-9\-_.]+$/,n={"-":"+",_:"/",".":"="},i=function(e){var n=e.split(t),i=n.length%2==0;return n.length<4||!i?null:(n.shift(),n.shift(),n?o(n):null)},o=function(e){for(var n={},i=0;i<e.length;i+=2){var t=e[i];if(r.test(t)&&(n[t]=a(e[i+1]),!n[t]))return null}return n},a=function(e){return c(e)?null:atob(e.replace(/[-_.]/g,function(e){return n[e]}))},c=function(e){return!e||" "===e};return{parseLinker:function(e){return i(e)}}}(),Kenshoo_Helpers=function(){var n=Amp_Helpers,c=function(){for(var e=[],n=0;n<256;n++)e[n]=(n<16?"0":"")+n.toString(16);var i=a(),t=a(),r=a(),o=a();return e[255&i]+e[i>>8&255]+e[i>>16&255]+e[i>>24&255]+"-"+e[255&t]+e[t>>8&255]+"-"+e[t>>16&15|64]+e[t>>24&255]+"-"+e[63&r|128]+e[r>>8&255]+"-"+e[r>>16&255]+e[r>>24&255]+e[255&o]+e[o>>8&255]+e[o>>16&255]+e[o>>24&255]},a=function(){return 4294967296*Math.random()>>>0};return{loadPixel:function(e,n){var i=document.location.protocol;0!==i.indexOf("http")&&(i="https:");var t=new Image(1,1);return t.onload=n,t.src=i+"//"+e,t},getParameter:function(e,n){n||(n=window.location.href);var i=n.indexOf("?");if(-1==i)return null;for(var t=n.substring(i+1).split("&"),r=0;r<t.length;r++){var o=t[r].split("=");if(o[0]===e)return o[1]}return null},generateUUID:function(){return c()},getDomainCookie:function(e){e||(e="k_user_id");for(var n=e+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var r=i[t];" "==r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null},createDomainCookie:function(e,n,i,t){if(e){n||(n=c()),i||(i=31536e6);var r=new Date;r.setTime(r.getTime()+i);var o="; expires="+r.toGMTString(),a="";return t&&(a="; domain="+t),document.cookie=e+"="+n+o+a+"; path=/",n}},createRandomDomainCookie:function(e,n){return this.createDomainCookie(e,"",n)},isEmptyString:function(e){return null==e||(Kenshoo_Helpers.isString(e)?""===Kenshoo_Helpers.trim(e):!Kenshoo_Helpers.isNumber(e))},isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},trim:function(e){return e.replace(/^\s+|\s+$/g,"")},getDomain:function(){return window.location.host},makeCORSRequestGET:function(e,n){this.makeCORSRequest(e,n,"GET")},makeCORSRequest:function(e,n,i,t){var r=new XMLHttpRequest;"withCredentials"in r?(r.open(i,e,!0),r.withCredentials=!0):"undefined"!=typeof XDomainRequest?(r=new XDomainRequest).open(i,e):r=null,r&&(r.onload=function(){200==r.status?n(r.responseText):404==r.status&&n(null)},r.onerror=function(){n(null)},r.send(t))},isValidUUID:function(e){return/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e)},isValidGclid:function(e){return/^[A-Za-z0-9_-]{20,120}$/.test(e)},isValidMsclkid:function(e){return/^[A-Fa-f0-9]{32}$/.test(e)},getSecondLevelDomain:function(e){if(!e)return null;var n=["ac","ad","ae","aero","af","ag","ai","al","am","an","ao","aq","ar","arpa","as","asia","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","biz","bj","bm","bn","bo","br","bs","bt","bv","bw","by","bz","ca","cat","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","com","coop","cr","cu","cv","cx","cy","cz","de","dj","dk","dm","do","dz","ec","edu","ee","eg","er","es","et","eu","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gov","gp","gq","gr","gs","gt","gu","gw","gy","hk","hm","hn","hr","ht","hu","id","ie","il","im","in","info","int","io","iq","ir","is","it","je","jm","jo","jobs","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mg","mh","mil","mk","ml","mm","mn","mo","mobi","mp","mq","mr","ms","mt","mu","museum","mv","mw","mx","my","mz","na","name","nc","ne","net","nf","ng","ni","nl","no","np","nr","nu","nz","om","org","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","pro","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","st","su","sv","sy","sz","tc","td","tel","tf","tg","th","tj","tk","tl","tm","tn","to","tp","tr","travel","tt","tv","tw","tz","ua","ug","uk","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","xn--0zwm56d","xn--11b5bs3a9aj6g","xn--3e0b707e","xn--45brj9c","xn--80akhbyknj4f","xn--90a3ac","xn--9t4b11yi5a","xn--clchc0ea0b2g2a9gcd","xn--deba0ad","xn--fiqs8s","xn--fiqz9s","xn--fpcrj9c3d","xn--fzc2c9e2c","xn--g6w251d","xn--gecrj9c","xn--h2brj9c","xn--hgbk6aj7f53bba","xn--hlcj6aya9esc7a","xn--j6w193g","xn--jxalpdlp","xn--kgbechtv","xn--kprw13d","xn--kpry57d","xn--lgbbat1ad8j","xn--mgbaam7a8h","xn--mgbayh7gpa","xn--mgbbh1a71e","xn--mgbc0a9azcg","xn--mgberp4a5d4ar","xn--o3cw4h","xn--ogbpf8fl","xn--p1ai","xn--pgbs0dh","xn--s9brj9c","xn--wgbh1c","xn--wgbl6a","xn--xkc2al3hye2a","xn--xkc2dl3a5ee0h","xn--yfro4i67o","xn--ygbi2ammx","xn--zckzah","xxx","ye","yt","za","zm","zw"].join(),i=e.split(".");"www"===i[0]&&"com"!==i[1]&&i.shift();for(var t,r=i.length,o=r,a=i[i.length-1].length;null!==(t=i[--o]);)if(0===o||o<r-2||t.length<a||n.indexOf(t)<0&&o<r-1)return i.slice(o,i.length).join(".");return e},createSecondLevelDomainCookie:function(e,n,i){if(e&&n){var t=this.getSecondLevelDomain(i);this.createDomainCookie(e,n,null,t)}},getChannelClickIdFromUri:function(){var e=this.getValidGclidFromUrl();return e||(e=this.getValidMsclkidFromUrl(),Kenshoo_Toggles.isUseNpclid()&&!e&&(e=this.getValidNpclidFromUrl())),e},storeChannelClickId:function(){var e=this.getChannelClickIdFromUri();if(e)this.createSecondLevelDomainCookie(KENSHOO_GCLID_NAME,e,document.domain);else if(Kenshoo_Toggles.isParseAmpLinkerParameters()){var n=this.getAmpLinkerParamsFromUrl();this.createCookiesFromLinkerParameters(n)}},readParameterFromUrl:function(e){var n=this.getParameter(e);if(n)return n.split("#")[0]},getAmpLinkerParamsFromUrl:function(){var e=this.readParameterFromUrl(AMP_LINKER_PARAM_NAME);if(e)return n.parseLinker(e)},getValidGclidFromUrl:function(){var e=this.readParameterFromUrl(GOOGLE_CLICK_ID_PARAM_NAME);if(this.isValidGclid(e))return e},getValidMsclkidFromUrl:function(){var e=this.readParameterFromUrl(BING_CLICK_ID_PARAM_NAME);if(this.isValidMsclkid(e))return e},getValidNpclidFromUrl:function(){var e=this.readParameterFromUrl(NO_PUBLISHER_CLICK_ID_PARAM_NAME);if(this.isValidGclid(e)||this.isValidMsclkid(e))return e},createDomainSpecificDeviceId:function(){var e=this.getDomainCookie(DOMAIN_DEVICE_ID_COOKIE_NAME);if(!e||!this.isValidUUID(e)){var n=this.generateUUID();this.createSecondLevelDomainCookie(DOMAIN_DEVICE_ID_COOKIE_NAME,n,document.domain)}},createCookiesFromLinkerParameters:function(e){if(e){var n=e.channelClickId;(this.isValidGclid(n)||this.isValidMsclkid(n))&&(this.createSecondLevelDomainCookie(KENSHOO_GCLID_NAME,n,document.domain),this.createSecondLevelDomainCookie(AMP_CHANNEL_CLICK_ID_COOKIE_NAME,n,document.domain))}}}}(),Ktag_Functions=function(){var t=Kenshoo_Helpers,i="ken_xg",r="ken_xd",o="https://services.xg4ken.com/kid?client_domain=".concat(t.getDomain()),a=864e5,c={thirdPartyUrlPrefix:"pixel.tapad.com/idsync/ex/receive?partner_id=2978&partner_device_id=",firstPartyUrlPrefix:"pixel.tapad.com/idsync/ex/receive?partner_id=3043&partner_device_id=",syncCookieName:"kenshoo_tapad_id_sync",cookieExpiry:18e5},s=function(e,n){t.isValidUUID(e)&&m(e),t.isValidUUID(n)&&d(n)},e=function(){if(g()){var e=t.getDomainCookie(i),n=t.getDomainCookie(r);l(e)?t.makeCORSRequestGET(o,function(e){t.createDomainCookie(i,e,a),s(e,n)}):s(e,n)}},l=function(e){return t.isEmptyString(e)||!t.isValidUUID(e)},n=function(){var e=t.getChannelClickIdFromUri(),n=t.getDomainCookie(r);if(!t.isEmptyString(e)&&t.isValidUUID(n)){var i=h(t.getDomain(),n,e);t.loadPixel(i)}},u=function(e,n){return e+n},m=function(e){var n=u(c.thirdPartyUrlPrefix,e);f(e,n)},d=function(e){var n=u(c.firstPartyUrlPrefix,e);f(e,n)},f=function(e,n){t.loadPixel(n,function(){t.createRandomDomainCookie(c.syncCookieName,c.cookieExpiry)})},g=function(){return t.isEmptyString(t.getDomainCookie(c.syncCookieName))},h=function(e,n,i){return"services.xg4ken.com/services/uds/match?source="+e+"&ken_id="+n+"&partner_uid="+i+"&creator=ktag&hmac="};return{crossDeviceSync:function(){e()},crossDeviceMatch:function(){n()}}}(),setup=function(){Kenshoo_Helpers.storeChannelClickId(),Kenshoo_Toggles.isCrossDevice()&&(Kenshoo_Helpers.createDomainSpecificDeviceId(),Ktag_Functions.crossDeviceSync(),Kenshoo_Toggles.isSendCrossDeviceMatchEvent()&&Ktag_Functions.crossDeviceMatch())};try{!function(e){var n=window.ktag;function i(){if(n.ktq)for(;n.ktq.length;){t(n.ktq.shift())}}function t(e){switch(e[0]){case"setup":setup();break;case"event":console.log("event "+e[1])}}n?(n.sendEvent=t,i()):console.log("ktag undefined")}()}catch(e){console.log("Caught unexpected error: "+e)}
//# sourceMappingURL=ktag.js.map