/// <reference types = "Cypress" />

describe("Myfirst test suite", function() {

    it("My first test case", function() {

        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")

        

        cy.intercept({ //intercept call
            method  : 'GET',
            url     : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        
        { //response
            statuscode:200,
            body: 
            [	
                {
                    "book_name":"null",
                    "isbn":"SPY40",
                    "aisle":"2529857"
                }
            ]
        }).as("bookretrival") //named to use later

        cy.get(".btn.btn-primary").click()
        cy.wait('@bookretrival').then(({request,response}) => {

            cy.get('tr').should("have.length",response.body.length+1)
            
        }) 
        cy.get('p').should('have.text', "Oops only 1 Book available")

        //lenght of response array ? rows of the table

    })
})
