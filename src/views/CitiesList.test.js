import { render, screen } from "@testing-library/react";
import CitiesList from "./CitiesList";

test('a title of list of registered cities is displayed', async () => {
    render(<CitiesList/>)
    const title = await screen.findByText(/List of registered cities/i)
    expect(title).toBeInTheDocument()
    // expect(screen.getByRole('heading')).toHaveTextContent('List of Registered Cities')
  })

test('contains list of cities', async () => {
    render(<CitiesList/>);

    expect(screen.getByRole('div')).toHaveTextContent('Nyabihu')

});
