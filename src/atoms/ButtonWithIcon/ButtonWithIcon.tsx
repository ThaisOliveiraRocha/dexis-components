import React, { FC } from "react";
import * as Styles from "./ButtonWithIcon.styles";
import "../../styles/global.css";

export interface Props {
  disabled?: boolean;
  title?: string;
  icon: {
    src: string;
    alt: string;
  }
  onClick: () => void;
  id: string;
}

const ButtonWithIcon: FC<Props> = ({
  disabled = false,
  title,
  icon,
  onClick,
  id,
}: Props) => {
  return (
    <Styles.Container disabled={disabled} onClick={onClick} id={id}>
      <Styles.Icon src={icon.src} alt={icon.alt} />
      {title && <Styles.Title disabled={disabled}>{title}</Styles.Title>}
    </Styles.Container>
  );
};
export default ButtonWithIcon;
