'use strict';

var AuthService = require('../services/authService')
var chai = require('chai')
var assert = chai.assert
var expect = chai.expect

describe('Teste de autenticação', function() {

   
    it('Deve logar em mercedes através da autenticação por participante', function() {
        var authService = new AuthService(this);

        return authService.authParticipant(config.USERNAME, config.PASS, config.CLIENT_ID)
        .then(function(response){
        //console.log(response.body)
        expect(response).to.have.status(config.util.HTTP.OK);
        //expect(response.error).to.equal(false);
        expect(response.body.access_token).to.not.equal('');
        })
    });
    
});