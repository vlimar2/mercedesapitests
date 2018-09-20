'use strict';

var ContactsubjectService = require('../services/ContactsubjectService')
var chai = require('chai')
var assert = chai.assert
var expect = chai.expect

describe('Testes na Api de lista de perguntas frequentes do fale conosco', function() {

    it('Deve obter lista de perguntas frequentes do fale conosco', function(){
        var contactsubjectService = new ContactsubjectService(this);

        return contactsubjectService.getsubject().then(function(response){
            expect(response, 'Deve responder com OK no status').to.have.status(config.util.HTTP.OK);
            expect(response.body[0].id, 'Deve retornar o ID numero 1').to.be.equal(1);
            expect(response.body[0].descricao, 'Deve retornar Busca de Concessionários participantes').to.be.equal('Busca de Concessionários participantes');
            expect(response.body[1].id, 'Deve retornar o ID numero 2').to.be.equal(2);
            expect(response.body[1].descricao, 'Deve retornar Como Funciona o Programa Mercedes Club').to.be.equal('Como Funciona o Programa Mercedes Club');
            expect(response.body[2].id, 'Deve retornar o ID numero 3').to.be.equal(3);
            expect(response.body[2].descricao, 'Deve retornar Como realizar o Primeiro Acesso').to.be.equal('Como realizar o Primeiro Acesso');
            expect(response.body[3].id, 'Deve retornar o ID numero 4').to.be.equal(4);
            expect(response.body[3].descricao, 'Deve retornar Como utilizar Clube de benefícios').to.be.equal('Como utilizar Clube de benefícios');
            expect(response.body[4].id, 'Deve retornar o ID numero 5').to.be.equal(5);
            expect(response.body[4].descricao, 'Deve retornar Como utilizar os pontos').to.be.equal('Como utilizar os pontos');
            expect(response.body[5].id, 'Deve retornar o ID numero 6').to.be.equal(6);
            expect(response.body[5].descricao, 'Deve retornar Elogios').to.be.equal('Elogios');
            expect(response.body[6].id, 'Deve retornar o ID numero 7').to.be.equal(7);
            expect(response.body[6].descricao, 'Deve retornar Esqueci minha senha').to.be.equal('Esqueci minha senha');
            expect(response.body[7].id, 'Deve retornar o ID numero 8').to.be.equal(8);
            expect(response.body[7].descricao, 'Deve retornar Outros Temas').to.be.equal('Outros Temas');
            expect(response.body[8].id, 'Deve retornar o ID numero 9').to.be.equal(9);
            expect(response.body[8].descricao, 'Deve retornar Reclamações').to.be.equal('Reclamações');
        });
    });

});