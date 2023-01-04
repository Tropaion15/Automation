/// <reference types = "Cypress" />

import HomePage from "../pageObjects/HomePage"
import ProductsPage from "../pageObjects/ProductsPage"
import CheckoutPage from "../pageObjects/CheckoutPage"
import DeliveryPage from "../pageObjects/DeliveryPage"

describe("My first test suite", function() {

    before(function() {
        //runs before test once
        cy.fixture("testData").then(function(data){
            this.data = data
        })

    })

    it("My first test case", function() {
        const homePage = new HomePage()
        const productsPage = new ProductsPage()
        const checkoutPage = new CheckoutPage()
        const deliveryPage = new DeliveryPage()

        cy.visit(Cypress.env("url")+"angularpractice/")

        //home
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should("have.value",this.data.name)
        homePage.getEditBox().should("have.attr",'minlength','2')
        homePage.getEntrepreneurRadioButton().should("be.disabled")
        homePage.getShopTab().click()

        //shop
        this.data.productName.forEach(element => { 
            cy.selectProduct(element)
        })

        productsPage.getCheckoutButton().click()

        //checkout
        var sum = 0

        checkoutPage.getAllTotalAmounts().each(($el, index, $list) => {

            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum)+Number(res)
        })

        checkoutPage.getTotalSum().then(function(element){
            element = element.text().split(" ")
            element = element[1].trim()
            var total = Number(element)

            expect(total).to.equal(sum)
        })

        checkoutPage.getCheckoutButton().click()

        //delivery
        Cypress.config('defaultCommandTimeout',8000)

        deliveryPage.getLocationText().type("India")
        deliveryPage.getSuggestedLocation().click()
        deliveryPage.getCheckbox().click({force: true})
        deliveryPage.getPurchaseBtn().click()
        deliveryPage.getConfirmationText().then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})
