/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import SkeletonLoading from "../SkeletonLoading";

describe("<SkeletonLoading />", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(
      <SkeletonLoading width="230px" height="40px" isCircle={false} />
    );

    const item = getByTestId("skeleton");
    expect(item).toHaveStyle("height: 40px");
  });
});
