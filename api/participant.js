'use strict';

var AuthService = require('../services/authService');
var ParticipantService = require('../services/participantService');
var Participantfactory = require('../factories/participantfactory');
var chai = require('chai')
var assert = chai.assert
var expect = chai.expect
//var token;
//var usertoken;

describe('Testes na Api de Participante', function() {


    it('Deve criar um participante', function() {

        var factory = new Participantfactory();

        var currentdate = new Date();

        var participant = factory.buildDefault(); 

        var participantService = new ParticipantService(this);

        return participantService.createParticipant(participant).then(function(response) {
            expect(response,'Deve retornar status 200 ao criar o participante').to.have.status(config.util.HTTP.OK);
            expect(response.body).to.equal("Usuario criado com sucesso");
        });
    });

});