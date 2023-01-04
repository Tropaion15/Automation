class ProductsPage {
    getCheckoutButton() {
        return cy.get('a[class="nav-link btn btn-primary"]')
    }
}
export default ProductsPage;