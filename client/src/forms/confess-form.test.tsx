import {render, screen, fireEvent} from '@testing-library/react';
import ConfessForm from "./confess-form"
import '@testing-library/jest-dom';

describe('tests for <ConfessForm />', () => {
    it('submit button is disabled on the start', () => {
        // ARRANGE
        // ACT
        render(<ConfessForm/>)
        // ASSERT
        expect(screen.getByText('Submit')).toBeDisabled();
        ;
    })
    it('submit button is enabled if form is valid', () => {
        // ARRANGE
        // ACT
        render(<ConfessForm/>)
        const subjectInput = screen.getByLabelText('Subject:');
        const reasonDropdown = screen.getByLabelText('Reason for contact:');
        const confessionTextarea = screen.getByLabelText('Your message:');

        fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
        fireEvent.change(reasonDropdown, { target: { value: 'Some Reason' } });
        fireEvent.change(confessionTextarea, { target: { value: 'Test confession details' } });

        // ASSERT
        expect(screen.getByText('Submit')).not.toBeDisabled();
    })
})
