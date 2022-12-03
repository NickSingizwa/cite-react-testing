// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

describe('city', () => {
  it('user can register a city', () => {
    cy.visit('http://127.0.0.1:5174/')
    cy.get('input.cityname').type('Nyabihu')
    cy.get('input.pop').type('10000')
    cy.get('input.weather').type('20')
    cy.get('button[type="submit"]').click()

    //send a request to localhost:8080/api/cities/add
    cy.request('POST', 'localhost:8080/api/cities/add', {
      Name: 'Nyabihu',
      Weather: '20',
    })

    //check if it displays a success message
    cy.get('div.Toastify__toast-body').should('contain', 'City added successfully')

    //check if the city is added
    cy.get('button.viewcities').click()
    cy.url().should('include', '/cities')
    cy.get('div.city').should('contain', 'Nyabihu')

  })
})