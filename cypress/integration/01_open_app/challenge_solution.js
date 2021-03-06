it('opening the trello application', () => {

  // challenge #1: open the main page. you can either try "localhost:3000" or "/" 
  //π write your command below this line π
  cy.visit('/')

  // challenge #2: open a board detail page. itβs the one you see when you click on a board
  //π write your command below this line π
  cy.visit('/board/1')

  // challenge #3: try clicking on a card. this will open the card detail. observe how 
  // the URL changes. now go ahead and try to use it with .visit() command
  //π write your command below this line π
  cy.visit('/board/1?card=1')

  // π― extra credit challenge: are you familiar with query parameters? itβs the part of the URL
  // that comes after "?" sign. spend some time in documentation, and try to see how to write 
  // these query parameters as an object, that will be passed to the .visit() command
  // π https://docs.cypress.io/api/commands/visit#Add-query-paramaters
  //π write your command below this line π
  cy.visit('/board/1', {
    qs: {
      card: 1
    }
  })

});