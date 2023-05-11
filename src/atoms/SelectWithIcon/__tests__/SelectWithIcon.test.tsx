/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import SelectWithIcon from "../SelectWithIcon";

const list = [
  { value: "0", label: "Item 1" },
  { value: "1", label: "Item 2" },
  { value: "2", label: "Item 3" },
  { value: "3", label: "Item 4" },
];

const defaultProps = {
  value: "Teste",
  list: list,
  icon: { src: "icon.png", alt: "icon" },
  onChange: jest.fn(),
  id: "test",
};

describe("<SelectWithIcon />", () => {
  it("should render SelectWithIcon with placeholder", () => {
    const { getByTestId, getByText } = render(
      <SelectWithIcon {...defaultProps} placeholder="Teste placeholder" />
    );
    expect(getByTestId("placeholder").textContent).toBe("Teste placeholder");
  });

  it("should render SelectWithIcon options", () => {
    const { getByText } = render(
      <SelectWithIcon {...defaultProps} />
    );
    expect(getByText('Item 1')).toBeInTheDocument;
    expect(getByText('Item 2')).toBeInTheDocument;
    expect(getByText('Item 3')).toBeInTheDocument;
    expect(getByText('Item 4')).toBeInTheDocument;
  });
});
