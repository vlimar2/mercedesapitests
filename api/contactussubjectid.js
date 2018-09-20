'use strict';

var AuthService = require('../services/authService');
var ContactussubjectidService = require('../services/contactussubjectidService')
var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var token;

describe('Testes na Api de listagem de fale conosco por status', function() {

    before('setup', function() {    
        var authService = new AuthService(this);

        return authService.authParticipant(config.USERNAME, config.PASS, config.CLIENT_ID).then(function(response) {
            token = response.body.access_token;
        });
    });

    it('Deve obter status de fale conosco por id', function(){
        var contactussubjectidService = new ContactussubjectidService(this);

        var authService = new AuthService(this);

        return contactussubjectidService.getStatuses(token).then(function(response){
            expect(response, 'Deve responder com OK no status').to.have.status(config.util.HTTP.OK);
        });
    });

});