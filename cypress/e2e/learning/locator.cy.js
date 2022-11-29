/// <reference types="cypress" />

describe("learn about locators", ()=> {
    it("visit google home page",()=>{
        //

    });

    it("find the search button",()=>{ 

        cy.visit("https://google.com")
        //cy.get("input") //search by tag
        //cy.get('.gLFyf') //search by class
        //cy.get('input[title=Search]') //search by attibute
        cy.get('[name="q"]') //search by name
        cy.get('.iblpc')
    })


    it("assert-making sure the element is available",()=>{ 
        cy.get('[name="q"]').should("be.visible") //making sure of the visibility
    })

    it("assert-making sure the class is there",()=>{ 
        cy.get('.gLFyf',{timeout:5000})
        .should("be.visible")
        .and("have.class","gLFyf")
        .and("have.value","")
        .should("have.attr","maxlength","2048") //making sure of the visibility
    })

    //very important thing in timeout is assertion
})