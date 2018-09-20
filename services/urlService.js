'use strict';

var Util = require('../util.js');
var config = require('../config')
 
var UrlService = function(that) {
this.util = new Util(that);
this.urls = config.env['staging']; //config.env[this.util.getEnv()];
};

UrlService.prototype.getFullUrlPrincipalApi = function() {
    return this.urls.urlMercedesAPI;
};

module.exports = UrlService;

