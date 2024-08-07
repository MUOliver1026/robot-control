describe('Robot Control', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it('should move the robot forward', () => {
      cy.get('button').contains('Move Forward').click()
      cy.get('.bg-bellroy-orange').should('have.css', 'top', '0px')
      cy.get('.bg-bellroy-orange').should('have.css', 'left', '0px')
    })
  
    it('should rotate the robot left', () => {
      cy.get('button').contains('Rotate Left').click()
      cy.get('.bg-bellroy-orange').contains('←')
    })
  
    it('should rotate the robot right', () => {
      cy.get('button').contains('Rotate Right').click()
      cy.get('.bg-bellroy-orange').contains('→')
    })
  
    it('should not move out of bounds', () => {
      // Move to top-left corner
      for (let i = 0; i < 5; i++) {
        cy.get('button').contains('Move Forward').click()
      }
      cy.get('button').contains('Rotate Left').click()
      for (let i = 0; i < 5; i++) {
        cy.get('button').contains('Move Forward').click()
      }
      
      // Try to move out of bounds
      cy.get('button').contains('Move Forward').click()
      cy.get('.bg-bellroy-orange').should('have.css', 'top', '0px')
      cy.get('.bg-bellroy-orange').should('have.css', 'left', '0px')
    })
  })