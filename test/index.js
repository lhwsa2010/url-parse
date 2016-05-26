var should = require('chai').should();
var Url = require('../index');

describe('#url parse', function () {

    it('single paramter parse', function () {
        var loc = "http://localhost/s?id=123";

        var url = new Url.Url(loc);
        var param = url.parse();
        console.log(param);
        param.id.should.equal('123');

    });


    it('more paramters parse', function () {

        var loc = "http://localhost/s?id=123&name=LA";
        var url = new Url.Url(loc);
        var param = url.parse();
        console.log(param);
        param.id.should.equal('123');

    });

});