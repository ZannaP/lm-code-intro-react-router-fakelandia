import {render, screen} from '@testing-library/react';
import InputSubject, {InputSubjectProps} from './input-subject';

describe('tests for <InputSubject />', () => {
    test('correct value from props', () => {
        // ARRANGE
        const requiredProps: InputSubjectProps = {
            value: 'test',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        }
        // ACT
        render(<InputSubject {...requiredProps} />)
        // ASSERT
        expect(screen.getByText(requiredProps.value)).toBeInTheDocument();
    })
})
