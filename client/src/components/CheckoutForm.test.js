import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
    // ARRANGE & ACT
    render(<CheckoutForm />);

    // ASSERT
    const header = await screen.findByText(/Checkout Form/i);
});

test("form shows success message on submit with form details", async () => {
    // ARRANGE
    render(<CheckoutForm />);

    // ACT
    const firstnameInput = screen.getByLabelText(/First Name:/i);
    const lastnameInput = screen.getByLabelText(/Last Name:/i);
    const addressInput = screen.getByLabelText(/Address:/i);
    const cityInput = screen.getByLabelText(/City:/i);
    const stateInput = screen.getByLabelText(/State:/i);
    const zipInput = screen.getByLabelText(/Zip:/i);
    const submitButton = screen.getByRole(/button/i);

    fireEvent.change(firstnameInput, { target: {value: 'John'}})
    fireEvent.change(lastnameInput, { target: {value: 'Doe'}})
    fireEvent.change(addressInput, { target: {value: '225 Green  Valley St'}})
    fireEvent.change(cityInput, { target: {value: 'Reno'}})
    fireEvent.change(stateInput, { target: {value: 'Nevada'}})
    fireEvent.change(zipInput, { target: {value: '89523'}})

    fireEvent.click(submitButton);

    screen.debug();

    // ASSERT
    const successMsg = await screen.findByText(/You have ordered some plants! Woo-hoo!/i);
    const successMsg2 = await screen.findByText(/Your new green friends will be shipped to:/i);
    const orderDetails = await screen.findByText(/John Doe/i);

});
