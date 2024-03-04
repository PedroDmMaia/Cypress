/// <reference types="cypress" />

describe('Testes para a página candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('deve levar o usuário até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('deve preencher o formulário de inscrção', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('pedro maia')
        cy.get('input[name="email"]').type('pedrodelmonico@teste.com')
        cy.get('input[name="telefone"]').type('11 12345678')
        cy.get('input[name="endereco"]').type('rua jest, bairro cypress, são paulo-sp')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
        cy.screenshot('tela-inscricao-preenchido')

    })
})