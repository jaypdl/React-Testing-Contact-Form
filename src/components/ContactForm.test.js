import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

//Initial Sanity test

test('Renders ContactForm without Errors', () => {
   render(<ContactForm/>);
});

// Happy path: User can fill in ALL fields, hit submit, and object with entered information appears
test('User can fully fill out and submit form',  async () => {
   // Arrange: Render Component
   render(<ContactForm/>);

   // Act: Execute Behavior:
      // 1. Get our input fields
   const fNameInput = screen.getByLabelText(/first name/i);
   const lNameInput = screen.getByLabelText(/last name/i);
   const emailInput = screen.getByLabelText(/email/i);
   const messageInput = screen.getByLabelText(/message/i);

      // 2. Type Values into inputs
   userEvent.type(fNameInput, 'John');
   userEvent.type(lNameInput, 'Smith');
   userEvent.type(emailInput, 'email@email.com');
   userEvent.type(messageInput, 'This is my message');

      // 3. Find Button
   const button = screen.getByRole('button');

      // 4. Push submit
   userEvent.click(button);
   
   // Assert: Test component response
   const newObj = await screen.findByText(/"firstName": "John", "lastName": "Smith", "email": "email@email.com", "message": "This is my message"/i);

      //Find submitted information
   expect(newObj).toBeInTheDocument();
});

// User can fill in ALL fields, submit, and have no form error appears
test('User can fully fill out form, submit, and no error',  async () => {
   // Arrange: Render Component
   render(<ContactForm/>);

   // Act: Execute Behavior:
      // 1. Get our input fields
   const fNameInput = screen.getByLabelText(/first name/i);
   const lNameInput = screen.getByLabelText(/last name/i);
   const emailInput = screen.getByLabelText(/email/i);
   const messageInput = screen.getByLabelText(/message/i);

      // 2. Type Values into inputs
   userEvent.type(fNameInput, 'jay');
   userEvent.type(lNameInput, 'Smith');
   userEvent.type(emailInput, 'email@email.com');
   userEvent.type(messageInput, 'This is my message');

      // 3. Find Button
   const button = screen.getByRole('button');

      // 4. Push submit
   userEvent.click(button);
   
   // Assert: Test component response
      // 1. Search for all error messages
   const errorMessages =  screen.queryAllByText(/Looks like there was an error:/i)

      // 2. Check that there are no errorsFind submitted information
   expect(errorMessages).toHaveLength(0);
});

//User Can fill just required fields, hit submit, and object with entered information appears

//User can fill All fields, submit, and object with entered info appears. Then user can change All fields, and object updates appropriately.

//User tries to submit all blank form and error messages appears

//