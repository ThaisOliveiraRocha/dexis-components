/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import ChipsWithIcon from '../ChipsWithIcon';

describe('<ChipsWithIcon />', () => {
  test('should render button and click', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <ChipsWithIcon title={'Chips'} selected={false} id="chips" />,
    );
    const btn = getByRole('button');
    expect(btn).toBeInTheDocument;
    fireEvent.click(btn);
    waitFor(() => expect(handleClick).toBeCalledTimes(1));
    expect(btn).toHaveStyle('height: 36px');
    expect(btn).toHaveStyle('padding: 6px 12px');
    expect(btn).toHaveStyle('border-radius: 20px');
    expect(btn).toHaveStyle('background-color: #FFFFFF');
  });

  test('should render button with icon when selected and enabled', () => {
    const { getByRole } = render(
      <ChipsWithIcon title={'Chips'} selected={true} id="chips" />,
    );
    const img = getByRole('img');
    expect(img).toBeInTheDocument;
    expect(img).toHaveAttribute('src', '/images/checked.svg');
    const btn = getByRole('button');
    expect(btn).toHaveStyle('background-color: #D7E6C8');
  });

  test('should render button with icon when selected and disabled', () => {
    const { getByRole } = render(
      <ChipsWithIcon title={'Chips'} selected={true} disabled id="chips" />,
    );
    const img = getByRole('img');
    expect(img).toBeInTheDocument;
    expect(img).toHaveAttribute('src', '/images/checkeddisabled.svg');
    const btn = getByRole('button');
    expect(btn).toHaveStyle('background-color: #666666');
  });
});
