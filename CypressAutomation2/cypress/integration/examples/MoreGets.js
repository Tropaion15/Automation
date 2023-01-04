/// <reference types = "Cypress" />

describe("Myfirst test suite", function() {

    it("My first test case", function() {

        //test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get(".search-keyword").type("ca")

        cy.wait(1000)

        cy.get(".products").find(".product").each(($el, index, $list) => {
            
            const textVeg = $el.find('h4.product-name').text()

            if (textVeg.includes("Cashews")) {

                cy.wrap($el).find("button").click()
            }

        })

        cy.get('.cart-icon > img').click()

        cy.contains("PROCEED TO CHECKOUT").click()

        cy.contains("Place Order").click()

    })

})