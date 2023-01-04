/// <reference types = "Cypress" />

describe("Myfirst test suite", function() {

    it("My first test case", function() {

        //test step
        //not allowerd to switch main domain adress

        //FROM google.com/ 
        //TO
        //google.com/someearch IS OK
        //yahoo.com/somesearch IS NOK
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#opentab").then(function(el){
            const url = el.prop("href")

            cy.visit(url)

        })

    })

})