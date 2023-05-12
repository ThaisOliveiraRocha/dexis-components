import React, { FC } from "react";

import * as Styles from "./SkeletonLoading.styles";

export interface Props {
  width?: string;
  height: string;
  isCircle?: boolean;
}

const SkeletonLoading: FC<Props> = (props: Props) => {
  return <Styles.Skeleton {...props} />;
};

export default SkeletonLoading;
