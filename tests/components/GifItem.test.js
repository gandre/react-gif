import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

const title = 'Saitama';
const url = 'https://one-punch.com/saitama.jpg';

const props = { title, url };

describe('GifItem components test', () => {
  test('Debe hacer match con snapshot', () => {
    const { container } = render(<GifItem {...props} />);

    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar la imagen con URL y ALT indicados', () => {
    render(<GifItem {...props} />);
    const { src, alt } = screen.getByRole('img');

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Debe mostrar el titulo en el componente', () => {
    render(<GifItem {...props} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});