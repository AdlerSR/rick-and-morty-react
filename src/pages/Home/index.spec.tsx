import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Home from '.';

describe('App', () => {
  beforeEach(() => {
    render(<Home />);
  });

  it('should display text "Rick"', async () => {
    fireEvent.input(screen.getByLabelText('name'), {
      target: {
        value: 'Rick',
      },
    });

    const label = screen.getByLabelText('name') as HTMLInputElement;

    expect(label.value).toBe('Rick');
  });
});
