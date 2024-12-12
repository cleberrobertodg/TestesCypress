describe('Teste PagMenos', function() {

    beforeEach(() => {
        cy.visit('https://homologd.encinterativa.com.br/bauduccoLeve2025/home/')
        cy.title().should('be.equal', 'Promoção Bauducco Sabor Irresistível')
      })
    
    

    it('Inscreve cupom com dados errados e valida msg de erro', function(){
       
       //Testa login com dados errados, testa suas mensagens de erro de preenchimento  e depois testa com os dados corretos

        cy.get('#adopt-accept-all-button').click()
        cy.get('#novo_cpf').type('16326175364')//insere cpf válido
        cy.get('[type="submit"]').contains('Enviar').click({force:true})//clica em enviar
        cy.wait(1000)
        cy.get('#text-password').type('Senha', {force:true})//digita senha errada
        cy.get('#page--login > div > div > div > div > div > form > div.login-footer.d-flex.align-items-center.justify-content-center.flex-column > button').click({force:true})//clica em enviar
        cy.wait(500)
        cy.get('#modal-primary___BV_modal_body_ > div > div.row > div > div > svg').click({force:true})
        cy.get('#text-password').clear().type('Senha123', {force:true})//digita senha correta
        cy.get('#page--login > div > div > div > div > div > form > div.login-footer.d-flex.align-items-center.justify-content-center.flex-column > button').click({force:true})//clica em enviar

        //Testa preenchimentos errados de dados de cupom e suas respectivas mensagens de erro 

        cy.get('#cupo_cnpj').type('sdhsdh', {force:true}).type('@@#$%¨&*', {force:true}).type('123456', {force:true})//escreve cnpj inválido
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#cupo_codigo').type('sdfasdfasdf', {force:true}).type('@!#@!$%#%¨&**', {force:true})//digita valor inválido no código de cupom
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#cupo_codigo').type('0', {force:true})//digita valor 0 no código de cupom
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#page--cadastro-cupom > section > form > div > div.row.d-flex.align-items-start.justify-content-center > div:nth-child(3) > div > div > div.vdp-datepicker > div:nth-child(1) > input').click({force:true})
        cy.get('#page--cadastro-cupom > section > form > div > div.row.d-flex.align-items-start.justify-content-center > div:nth-child(3) > div > div > div.vdp-datepicker > div:nth-child(2) > div > span:nth-child(38)').click({force:true})//escolhe data do dia 31 no calendario
        cy.get('#cuit_quantidade0').type('XXI', {force:true}).type('****', {force:true}).type('0', {force:true})
        cy.get('[class="error-form invalid-feedback"]').should('be.visible')//valida se aparece msg de erro no preenchimento
        cy.get('#page--cadastro-cupom > section > form > div > div.d-flex.align-items-center.justify-content-center.mt-4.col > button').click({force:true})//clica em finalizar
        cy.get('.col-md-3 > :nth-child(1) > .error-form > span').should('be.visible')
        
        //preenche certo para validar se o form aceita data futura
        cy.get('#cupo_cnpj').clear().type('55.373.525/0001-64', {force:true})//escreve cnpj válido
        cy.get('#cupo_codigo').clear().type('1', {force:true})//escreve valor válido no cupom
        cy.get('#page--cadastro-cupom > section > form > div > div.row.d-flex.align-items-start.justify-content-center > div:nth-child(3) > div > div > div.vdp-datepicker > div:nth-child(1) > input').click({force:true})
        cy.get('#page--cadastro-cupom > section > form > div > div.row.d-flex.align-items-start.justify-content-center > div:nth-child(3) > div > div > div.vdp-datepicker > div:nth-child(2) > div > span:nth-child(38)').click({force:true})//escolhe data do dia 31 no calendario
        cy.get('.vs__search').click({force:true})//habilita seleção de produto
        cy.get('#vs1__option-15').click({force:true})//seleciona produto
        cy.get('#cuit_quantidade0').clear().type('1', {force:true})//preenche corretamente a quantidade de produtos
        cy.get('#page--cadastro-cupom > section > form > div > div.d-flex.align-items-center.justify-content-center.mt-4.col > button').click({force:true})//clica em finalizar
        cy.get('.error-back > span').should('be.visible')//valida se aparece o erro da data futura
        cy.get('#page--cadastro-cupom > section > form > div > div.row.d-flex.align-items-start.justify-content-center > div:nth-child(3) > div > div > div.vdp-datepicker > div:nth-child(1) > input').click({force:true})
        cy.get('.cell.day.today').click({force:true})//escolhe data do dia 31 no calendario
        cy.get('#page--cadastro-cupom > section > form > div > div.d-flex.align-items-center.justify-content-center.mt-4.col > button').click({force:true})//clica em finalizar
        cy.get('#modal-primary___BV_modal_body_ > div > div:nth-child(2) > div > div').should('be.visible').contains('Imagem do cupom obrigatória.')//valida mensagem de erro da imagem do cupom faltante
        cy.wait(3000)
        cy.get('.bi-x').click({force:true})//clica no "x" e fecha mensagem de erro
        cy.wait(1000)
        

    })

    it('Inscreve Cupom corretamente', function(){
        cy.get('#novo_cpf').type('16326175364')//insere cpf válido
        cy.get('[type="submit"]').contains('Enviar').click({force:true})//clica em enviar
        cy.wait(1000)
        cy.get('#text-password').clear().type('Senha123', {force:true})//digita senha correta
        cy.get('#page--login > div > div > div > div > div > form > div.login-footer.d-flex.align-items-center.justify-content-center.flex-column > button').click({force:true})//clica em enviar
        cy.get('#cupo_cnpj').clear().type('55.373.525/0001-64', {force:true})//escreve cnpj válido
        cy.get('#cupo_codigo').clear().type('2', {force:true})//escreve valor válido no cupom
        cy.get('#page--cadastro-cupom > section > form > div > div.row.d-flex.align-items-start.justify-content-center > div:nth-child(3) > div > div > div.vdp-datepicker > div:nth-child(1) > input').click({force:true})
        cy.get('.cell.day.today').click({force:true})//escolhe data do dia atual no calendario
        cy.get('.vs__search').click({force:true})//habilita seleção de produto
        cy.get('#vs1__option-15').click({force:true})//seleciona produto
        cy.get('#cuit_quantidade0').clear().type('1', {force:true})//preenche corretamente a quantidade de produtos
        cy.get('input[type="file"]#fileInput').selectFile('Nota Fiscal.jpg', {force:true})//insere imagem do cupom
        cy.wait(1000)
        cy.get('#page--cadastro-cupom > section > form > div > div.d-flex.align-items-center.justify-content-center.mt-4.col > button').click({force:true})//clica em finalizar
  })

  })