/// <reference types="cypress" />

describe("learn about locators", ()=> {
    it("visit googel home page",()=>{
        //

    });

    it("visit googel home page",()=>{ 

        cy.visit("https://google.com")
        //cy.get("input") //search by tag
        //cy.get('.gLFyf') //search by class
        //cy.get('input[title=Search]') //search by attibute
        cy.get('[name="q"]') //search by name
    })
})