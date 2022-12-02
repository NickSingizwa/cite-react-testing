import CitiesRegistration from './CitiesRegistration'

describe('check if it mounts with no errors', () => {
  it('mounts', () => {
    cy.mount(<CitiesRegistration />)
  })
})