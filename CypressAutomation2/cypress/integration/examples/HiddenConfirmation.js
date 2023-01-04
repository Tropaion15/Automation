/// <reference types = "Cypress" />

describe("Myfirst test suite", function() {

    it("My first test case", function() {

        //test step
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#checkBoxOption1').check().should("be.checked").and("have.value","option1")
        cy.get('#checkBoxOption1').uncheck().should("not.be.checked")

        cy.get("input[type='checkbox']").check(["option2",'option3'])

        cy.get('select').select('option3').should("have.value","option3")

        cy.get("#autocomplete").type("ind")

        cy.get(".ui-menu-item div").each(($el, index, $list) => {

            if($el.text() == "India") {

                cy.wrap($el).click()

            }

        })

        cy.get("#autocomplete").should("have.value","India")

        cy.get('#displayed-text').should("be.visible")

        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').should("not.be.visible")

        cy.get('#show-textbox').click()

        cy.get('#displayed-text').should("be.visible")

        cy.get("[value = 'radio2']").check().should("be.checked")

        cy.get('#alertbtn').click()

        cy.get('#confirmbtn').click()

        cy.on("window:alert", (str) => {

            expect(str).to.equal('Hello , share this practice page and share your knowledge')

        })

        cy.on("window:confirm", (str) => {

            expect(str).to.equal('Hello , Are you sure you want to confirm?')

        })

        cy.get("#opentab").invoke("removeAttr","target").click()

        cy.url().should("include","rahulshettyacademy")

        cy.go("back")

    })

})