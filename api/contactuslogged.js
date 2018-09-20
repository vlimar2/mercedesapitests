'use strict';

var AuthService = require('../services/authService');
var ContactusloggedService = require('../services/contactusloggedService');
var Contactfactory = require('../factories/contactfactory');
var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var token;

describe('Testes na Api de fale conosco usuário logado', function() {

    before('setup', function() {    
        var authService = new AuthService(this);

        return authService.authParticipant(config.USERNAME, config.PASS, config.CLIENT_ID).then(function(response) {
            token = response.body.access_token;
        });
    });

    it('Deve enviar uma mensagem de fale conosco com usuário logado', function() {
        var authService = new AuthService(this);

        var factory = new Contactfactory();

        var contact = factory.buildDefault(); 

        var contactusloggedService = new ContactusloggedService(this);

        return contactusloggedService.getContactus(token, contact).then(function(response) {
            expect(response,'Deve retornar status 200 ao criar uma mensagem de fale conosco').to.have.status(config.util.HTTP.OK);
        });
    });

});