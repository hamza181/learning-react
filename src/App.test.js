import { render, screen } from '@testing-library/react';
import App from './App';

// this test fails

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});

test('Find Hello', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/Hello/i);
	expect(linkElement).toBeInTheDocument();
});
