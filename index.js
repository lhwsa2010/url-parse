"use strict";
var Url = (function () {
    function Url(url) {
        this.url = url;
    }
    Url.prototype.parse = function () {
        var params = {};
        var loc = String(this.url);
        // console.log(loc);
        if (loc.indexOf("?") > 0)
            loc = loc.substr(loc.indexOf('?') + 1);
        else
            loc = "";
        var pieces = loc.split('&');
        for (var i = 0; i < pieces.length; i += 1) {
            var keyVal = pieces[i].split('=');
            params[keyVal[0]] = decodeURIComponent(keyVal[1]);
        }
        return params;
    };
    return Url;
}());
exports.Url = Url;
