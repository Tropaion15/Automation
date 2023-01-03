/// <reference types="Cypress"/>
describe('My First Test', () => {

    before(function() {
        cy.fixture('fixData').then(function(data) {
            this.data = data
        })
    })

    it('Visits Robbans suggested site', () => {
      cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        cy.log(cy.get('#name'))
        

    })
  })