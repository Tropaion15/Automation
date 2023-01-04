class DeliveryPage {
    getLocationText() {
        return cy.get('#country')
    }
    getSuggestedLocation() {
        return cy.get("div[class='suggestions'] ul li a")
    }
    getCheckbox() {
        return cy.get("#checkbox2")
    }
    getPurchaseBtn() {
        return cy.get("input[type='submit']")
    }
    getConfirmationText() {
        return cy.get(".alert")
    }
}
export default DeliveryPage;
