import { render } from '@testing-library/react';

import Resurrection from './resurrection';

describe('Resurrection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Resurrection />);
    expect(baseElement).toBeTruthy();
  });
});
