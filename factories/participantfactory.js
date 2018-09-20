'use strict';

var Participantfactory = function(){

};
Participantfactory.prototype.build = function()
{

    var participant = { 
        participanteId: null,       
        funcaoParticipante: null,
        funcaoParticipanteDetalhe: null,
        senha: null,
        confirmacaoSenha: null,
        documentoParticipante: null,
        documentoEmpresa:null,
        email:null,
        nome:null,
        telefone:null,
        googleId:null,
        receberNovidades:null,
        termoAceite:null,
        meioConfirmacao:null,
    };

    return participant;
}
Participantfactory.prototype.buildDefault = function(){
    var participant = this.build();
    
    participant.participanteId = "2189"
    participant.funcaoParticipante = "fc0b26f9-e059-4446-b9ec-1f73a4be05d6";
    participant.funcaoParticipanteDetalhe = "5945342b-cce1-4eb8-97ee-9355a2d09337";
    participant.senha = "123456";
    participant.confirmacaoSenha = "123456";
    participant.documentoParticipante =new Date().getTime().toString();
    participant.documentoEmpresa =new Date().getTime().toString();
    participant.email = "rafael.lima@ltm.digital";
    participant.nome = "Rafael Simião";
    participant.telefone = "11974382096";
    participant.googleId = "";
    participant.receberNovidades = true;
    participant.termoAceite = true;
    participant.meioConfirmacao = "EMAIL";

    return participant;
};

module.exports = Participantfactory;