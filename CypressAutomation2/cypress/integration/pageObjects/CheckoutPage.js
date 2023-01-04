class CheckoutPage {
    getCheckoutButton() {
        return cy.get("button[class='btn btn-success']")
    }
    getAllTotalAmounts() { //arr
        return cy.get("tr td:nth-child(4) strong")
    }
    getTotalSum() {
        return cy.get("td[class='text-right'] h3 strong")
    }
}
export default CheckoutPage;
