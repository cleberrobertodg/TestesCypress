describe('Bauducco', function() {

    beforeEach(() => {
        cy.visit('https://homologd.encinterativa.com.br/bauduccoLeve2025/home/')
        cy.title().should('be.equal', 'Promoção Bauducco Sabor Irresistível')
      })
    
    

    it('Valida se o form aceita campos preenchidos em formato inválido, e se retorna mensagens de erro', function(){
        cy.get('#adopt-accept-all-button').click()
        cy.get('#novo_cpf').type('srgtewrgt')//preenche cpf errado
        cy.get('#input-cpf-live-feedback > span').should('be.visible').contains('O campo CPF é obrigatório')//verifica msg de erro
        cy.get('#novo_cpf').type('74966237688')//insere cpf válido
        cy.get('[type="submit"]').contains('Enviar').click({force:true})//clica em enviar
        cy.wait(500)
        cy.get('#part_cpf').clear()//apaga campo de cpf
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#part_cpf').type('abcdefg', {force:true})//escreve string no cpf
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#part_nome').type('@@@', {force:true}).clear().type('12345', {force:true})
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#part_sobrenome').type('@@@', {force:true}).clear().type('12345', {force:true})
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#part_data_nascimento').type('@@@', {force:true}).clear().type('acbkh', {force:true}).clear().type('01011000', {force:true}).clear().type('31313500', {force:true})//escreve datas de nascimento inválidas
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#part_telefone1').type('@@@', {force:true}).clear().type('asdcgg', {force:true})
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#email').type('@@@', {force:true}).clear().type('12345', {force:true}).clear().type('cleber.com@email', {force:true})
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#email_confirmation').type('@@@', {force:true}).clear().type('12345', {force:true}).clear().type('cleber.com@email', {force:true})
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#part_cep').type('wergaefgaeg', {force:true})//escreve cep inválido com strings
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#part_cep').type('99999999', {force:true})//escreve cep inválido somente com 9999
        cy.contains('button', 'Buscar').click()//clica em buscar cep
        cy.get('#page--cadastro > div > div.wrapper-cadastro-body.mt-4 > form > div:nth-child(3) > div:nth-child(1) > div > div > div.error-form.error-back').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.wait(500)
        cy.get('#part_endereco').clear({force:true}).type('@@@@', {force:true})//escreve nome de rua inválido
        cy.get('#part_numero').type('asdfghj', {force:true})//escreve número inválido com strings
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#password').type('asdfghj', {force:true})//digita senha fora do padrão
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#password_confirmation').type('1223456', {force:true})//digita senha fora do padrão
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.wait(500)
        cy.get('#part_regulamento').check({force:true})//aceite de termos
        cy.get('[type="submit"]').contains('Enviar').click({force:true})//clica em enviar
        cy.wait(10000)
    })

    it('Inscreve Participante', function(){
      cy.get('#novo_cpf').type('74966237688')//preenche cpf corretamente
      cy.get('[type="submit"]').contains('Enviar').click({force:true})//clica em enviar
      cy.wait(500)
      cy.get('#part_nome').type('Cleber Cypress', {force:true})//escreve nome
      cy.get('#part_sobrenome').type('Test', {force:true})//escreve sobrenome
      cy.get('#part_data_nascimento').type('12041992', {force:true})
      cy.get('#part_telefone1').type('11946492870', {force:true})
      cy.get('#email').type('cleber+2010@encinterativa.com.br', {force:true})//escreve email correto
      cy.get('#email_confirmation').type('cleber+2010@encinterativa.com.br', {force:true})//escreve email de confirmação
      cy.get('#part_cep').type('06618010', {force:true})//escreve cep
      cy.contains('button', 'Buscar').click({force:true})//clica em buscar cep
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.wait(3000)
      cy.get('#part_numero').type('100', {force:true})//escreve número da casa
      cy.get('#password').type('Senha123', {force:true})//digita senha 
      cy.get('#password_confirmation').type('Senha123', {force:true})//digita confirmação senha
      cy.wait(500)
      cy.get('#part_regulamento').check({force:true})//aceite de termos
      cy.get('#part_regulamento_promocao').check({force:true})//aceite política de privacidade
      cy.get('#part_como_ficou_sabendo > div:nth-child(5) > label').click({force:true})//clica no ícone de como ficou sabendo, opção Google
      cy.get('[type="submit"]').contains('Enviar').click({force:true})//clica em enviar
      cy.wait(10000)
  })

  })