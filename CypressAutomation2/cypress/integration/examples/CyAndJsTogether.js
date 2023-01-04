/// <reference types = "Cypress" />

describe("Myfirst test suite", function() {

    it("My first test case", function() {

        //test step
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('fieldset > #product')

        cy.get("tr td:nth-child(2)").each(($el, index, $list) => {
            
            const courseName = $el.text()

            if (courseName.includes("Python Language")) {

                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) {

                    const priceText = price.text()
                    expect(priceText).to.equal("25")

                })

            }

        })

        cy.get('div.mouse-hover-content').invoke("show")
        cy.contains("Top").click()

        cy.url().should("include","top")


    })

})