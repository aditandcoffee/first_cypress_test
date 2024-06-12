// This is necessary for cypress snipets
/// <reference types = "cypress"/>

// Automation Functions
  it("Google Search", () => {
    cy.visit('https://google.com')  

    cy.wait(1000)

    cy.get('#APjFqb').type('Nepal{Enter}')

    cy.contains('Change to English').click()

    cy.contains('Images').click()

    cy.wait(1000)

    cy.contains('News').click()

    cy.wait(1000)

    cy.contains('Videos').click()

    cy.wait(1000)

    cy.get('.jfN4p').click()


  })

    it('Youtube', ()=> {
      cy.visit('https://youtube.com')  

      cy.wait(2000)
    
      cy.get('#search-input > #search').type('Nepal 4k{Enter}')

      cy.wait(3000)

      cy.get(':nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope').click()

      
    })