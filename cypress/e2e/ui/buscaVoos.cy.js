describe('Buscar por voos', () => { // inicio describe

    context('Não logado', () => { // inicio context

        beforeEach(() =>{ // Inicio do before

            cy.visit('/') // abre o navegador na página da urlBase

        }) // final do before

        // Este é o nosso primeiro teste
        it('Buscar voos entre São paolo e Cairo', () => {
            // Veja se o titulo da guia/aba é igual a 'BlazeDemo'
            cy.title().should('eq', 'BlazeDemo') 

            // Seleciona o combo Origem pelo Css
            // Identificando que deve ser o primeiro (0)
            // Selecionando a opção 'São Paolo'
            cy.get('select.form-inline') 
                .eq(0)
                .select('São Paolo')

            cy.get('select.form-inline') 
                .eq(1)
                .select('Cairo')

            // Clicar no botão Find Flights / Procurar Voos 
            cy.get('.btn.btn-primary')
                .click()

            // Transição para a página Reserve

            // Validar o titulo da aba/guia
            cy.title().should('eq', 'BlazeDemo - reserve')

            // Validar o cabeçalho da página 
            cy.get('.container h3')
                .should('have.text', 'Flights from São Paolo to Cairo: ')

            
        });

        
    }); // final context 

}) // final describe