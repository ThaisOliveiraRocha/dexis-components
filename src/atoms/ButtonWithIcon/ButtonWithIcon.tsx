import React, { FC } from "react";
import * as Styles from "./ButtonWithIcon.styles";

export interface Props {
  disabled?: boolean;
  text?: string;
  icon: string;
  iconAlt: string;
  onClick: () => void;
  id: string;
}

const ButtonWithIcon: FC<Props> = ({
  disabled = false,
  text,
  icon,
  iconAlt,
  onClick,
  id,
}: Props) => {
  return (
    <Styles.Container disabled={disabled} onClick={onClick} id={id}>
      <Styles.Icon src={icon} alt={iconAlt} />
      {text && <Styles.Text disabled={disabled}>{text}</Styles.Text>}
    </Styles.Container>
  );
};
export default ButtonWithIcon;
