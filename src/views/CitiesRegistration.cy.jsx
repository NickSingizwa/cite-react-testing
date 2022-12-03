import CitiesRegistration from './CitiesRegistration'

describe('check if it mounts with no errors', () => {
  it('mounts', () => {
    cy.mount(<CitiesRegistration />)
  })
})

//check if button is disabled until all fields are entered
describe('check if button is disabled until all fields are entered', () => {
  it('button is disabled', () => {
    cy.mount(<CitiesRegistration />)
    cy.get('button').should('be.disabled')
    cy.get('input.cityname').type('Nyabihu')
    cy.get('input.pop').type('10000')
    cy.get('input.weather').type('20')
    cy.get('button').should('not.be.disabled')
  })
})

// describe('change events', () => {
//   it('clicking + fires a change event with the incremented value', () => {
//     const onChangeSpy = cy.spy().as('handleCityChange')
//     cy.mount(<CitiesRegistration onChange={onChangeSpy} />)
//     cy.get('input.cityname').type('Nyabihu') 
//     cy.get('@handleCityChange').should('have.been.calledWith', 'Nyabihu')
//   })
// })