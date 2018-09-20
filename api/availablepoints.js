'use strict';

var AuthService = require('../services/authService');
var AvailablepointsService = require('../services/AvailablepointsService')
var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
var token;

describe('Testes na Api de Verificação de pontos disponíveis', function() {

    before('setup', function() {    
        var authService = new AuthService(this);

        return authService.authParticipant(config.USERNAME, config.PASS).then(function(response) {
            token = response.body.access_token;
        });
    });

    it('Deve obter pontos disponíveis do participante', function(){
        var availablepointsService = new AvailablepointsService(this);

        var authService = new AuthService(this);

        return availablepointsService.getDoc(token).then(function(response){
            expect(response, 'Deve responder com OK no status').to.have.status(config.util.HTTP.OK);
            //expect(response.body.response[0], 'Deve conter uma quantidade de estrelas').to.be.above(0);
        });
    });

});