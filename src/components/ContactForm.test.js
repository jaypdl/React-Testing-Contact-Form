import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';


// What to test for:
//  0. Renders ContactForm without crashing
//  1. Error message appears when form submitted without required data
//  2. Can insert text in all fields and can submit with something returned
//  3. When user clicks submit, the information submitted shows up on screen
//  4.

test('renders without errors', () => {
  render(<ContactForm />);
});

test('error message appears if fields empty when submit clicked', () => {
  // Arrange: setup react component
  render(<ContactForm />);

  // Act: Execute out behavior
  const submitButton = screen.getByRole('button');

  userEvent.click(button);
  
  // Assert: Test our App Response



});
