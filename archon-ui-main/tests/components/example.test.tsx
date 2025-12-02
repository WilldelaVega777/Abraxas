import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

const ExampleComponent = () => <div>Hello World</div>;

describe('Example Component', () => {
    it('renders correctly', () => {
        render(<ExampleComponent />);
        expect(screen.getByText('Hello World')).toBeInTheDocument();
    });
});
