

describe('Buscar por voos', () => { // inicio describe

    context('Não logado', () => { // inicio context

        // importar a nossa massa de teste
        const massaVoos = require('../../fixtures/massaVoos')

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

                // Clicar no botão do premeiro vôo
                cy.get('input.btn.btn-small')
                    .eq(0)
                    .click()

                // Transição para a página Purchase

                // Validar o titulo da aba/guia
                cy.title().should('eq', 'BlazeDemo Purchase')

                // Escrever o primeiro nome
                cy.get('#inputName').type('Jonas')

                // Selecionar a bandeira do cartão
                cy.get('#cardType')
                    .select("American Express")
                
                // Marcar o checkbox Remember Me
                cy.get('#rememberMe')
                    .check()

                // Clicar no botão Purchase Flight
                cy.get('.btn.btn-primary')
                    .click()

                // Transição para a pagina 
                
                // Validar o titulo da aba/guia
                cy.title().should('eq', 'BlazeDemo Confirmation')

                // Validar a mensagem de agradecimento
                cy.get('.container h1')
                    .should('have.text', 'Thank you for your purchase today!')

                // validar o preço
                cy.get('.table').contains('td', 'Amount')
                    .siblings()
                    .should('contain', '555 USD')
                
            })

            // Este é o nosso teste data driven (usa uma massa de teste)
            massaVoos.array.forEach(({origem, destino, voo, nome, bandeira }) => {
            it(`Buscar voos entre ${origem} e ${destino} - Data Driven`, () => {
                // Veja se o titulo da guia/aba é igual a 'BlazeDemo'
                cy.title().should('eq', 'BlazeDemo') 

                // Seleciona o combo Origem pelo Css
                // Identificando que deve ser o primeiro (0)
                // Selecionando a opção via massa de teste
                cy.get('select.form-inline') 
                    .eq(0)
                    .select(origem)

                cy.get('select.form-inline') 
                    .eq(1)
                    .select(destino)

                // Clicar no botão Find Flights / Procurar Voos 
                cy.get('.btn.btn-primary')
                    .click()

                // Transição para a página Reserve

                // Validar o titulo da aba/guia
                cy.title().should('eq', 'BlazeDemo - reserve')

                // Validar o cabeçalho da página 
                cy.get('.container h3')
                    .should('have.text', `Flights from ${origem} to ${destino}: `)

            // Clicar no botão no botão relativo ao voo
            cy.get('input.btn.btn-small')
            .eq(voo)
            .click()

            // Transição para a página Purchase

            // Validar o titulo da aba/guia
            cy.title().should('eq', 'BlazeDemo Purchase')

            // Escrever o primeiro nome
            cy.get('#inputName').type(nome)

            // Selecionar a bandeira do cartão
            cy.get('#cardType')
                .select(bandeira)
            
            // Marcar o checkbox Remember Me
            cy.get('#rememberMe')
                .check()

            // Clicar no botão Purchase Flight
            cy.get('.btn.btn-primary')
                .click()

            // Transição para a pagina 
            
            // Validar o titulo da aba/guia
            cy.title().should('eq', 'BlazeDemo Confirmation')

            // Validar a mensagem de agradecimento
            cy.get('.container h1')
                .should('have.text', 'Thank you for your purchase today!')

            // validar o preço
            cy.get('.table').contains('td', 'Amount')
                .siblings()
                .should('contain', '555 USD')

                
            }) // final teste/it
            
        }); // final doForEach

        
    }) // final context 

}) // final describe