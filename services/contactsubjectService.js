'use strict';

var Util = require('../util')
var UrlService = require('../services/urlService')

var ContactsubjectService = function(that) {
    this.util = new Util(that);
    this.urlService = new UrlService(that);
};

ContactsubjectService.prototype.getsubject = function() {
    this.util.timeout(config.util.DEFAULT_SECONDS);

    var baseurl = this.urlService.getFullUrlPrincipalApi();   

    return this.util.getUrl(baseurl, '/faleconosco/assunto');
};

module.exports = ContactsubjectService