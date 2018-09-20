'use strict';

var config = require('../config');
var Util = require('../util');
var UrlService = require('./urlService');



var ParticipantService = function(that) {
    this.util = new Util(that);
    this.urlService = new UrlService(that);
};

ParticipantService.prototype.createParticipant = function(participant) {
    this.util.timeout(config.util.DEFAULT_SECONDS);
    
    var urlservice = this.urlService.getFullUrlPrincipalApi('');

    var url = '/participante';
    
    var header = this.util.getHeaderJson1();

    return this.util.postUrl(urlservice, participant, header, url);
}

module.exports = ParticipantService;