import { render } from '@testing-library/react';

import Home from '.';

test('render', () => {
  const { getByText } = render(<Home />);

  expect(getByText('Home')).toBeInTheDocument();
});
