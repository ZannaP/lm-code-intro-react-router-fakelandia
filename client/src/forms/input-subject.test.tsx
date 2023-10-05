import {render, screen} from '@testing-library/react';
import InputSubject, {InputSubjectProps} from './input-subject';
import '@testing-library/jest-dom';

describe('tests for <InputSubject />', () => {
    it('correct value from props', () => {
        // ARRANGE
        const requiredProps: InputSubjectProps = {
            value: 'test',
            onChange: jest.fn(),
        }
        // ACT
        render(<InputSubject {...requiredProps} />)
        // ASSERT
        expect(screen.getByTestId('inputField')).toHaveValue(requiredProps.value);
    })
})
