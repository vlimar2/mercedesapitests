'use strict';

var AuthService = require('../services/authService');
var AvailablestarsService = require('../services/AvailablestarsService')
var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var token;

describe('Testes na Api de Verificação de estrelas disponíveis', function() {

    before('setup', function() {    
        var authService = new AuthService(this);

        return authService.authParticipant(config.USERNAME, config.PASS).then(function(response) {
            token = response.body.access_token;
        });
    });

    it('Deve obter estrelas disponíveis do participante', function(){
        var availablestarsService = new AvailablestarsService(this);

        var authService = new AuthService(this);

        return availablestarsService.getStars(token).then(function(response){//.to.equal(245)
            expect(response, 'Deve responder com OK no status').to.have.status(config.util.HTTP.OK);
            expect(response.body.response[0], 'Deve conter uma quantidade de estrelas').to.be.above(25);
        });
    });

});