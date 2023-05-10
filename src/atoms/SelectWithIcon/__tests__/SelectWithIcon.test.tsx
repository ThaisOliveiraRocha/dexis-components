import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import SelectWithIcon from "../SelectWithIcon";

describe("ButtonWithIcon", () => {
  const onClickMock = jest.fn();
  const defaultProps = {
    icon: "test-icon",
    iconAlt: "Test Icon",
    onClick: onClickMock,
    id: "test-button",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render the button with an icon", () => {
    const { getByRole, getByAltText } = render(
      <ButtonWithIcon {...defaultProps} />
    );
    const button = getByRole("button");
    const icon = getByAltText("Test Icon");
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(icon.getAttribute("src")).toBe("test-icon");
  });

  it("should render the button with text if text prop is provided", () => {
    const { getByText } = render(
      <ButtonWithIcon {...defaultProps} text="Test Button" />
    );
    const text = getByText("Test Button");
    expect(text).toBeInTheDocument();
  });

  it("should call the onClick function when the button is clicked", () => {
    const { getByRole } = render(<ButtonWithIcon {...defaultProps} />);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should not call the onClick function when the button is disabled", () => {
    const { getByRole } = render(
      <ButtonWithIcon {...defaultProps} disabled={true} />
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });

  it("should be disabled if the disabled prop is true", () => {
    const { getByRole } = render(
      <ButtonWithIcon {...defaultProps} disabled={true} />
    );
    const button = getByRole("button");
    expect(button).toBeDisabled();
  });
});
