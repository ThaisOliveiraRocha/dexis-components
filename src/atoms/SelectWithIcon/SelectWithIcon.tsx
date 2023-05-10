import React, { FC } from "react";
import * as Styles from "./SelectWithIcon.styles";

export interface Props {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  list: Array<any>;
  icon: {
    src: string;
    alt: string;
  };
  onChange: () => void;
  id: string;
}

const SelectWithIcon: FC<Props> = ({
  disabled = false,
  value,
  placeholder,
  icon,
  list,
  onChange,
  id,
}: Props) => {
  return (
    <Styles.Container disabled={disabled}>
      <Styles.Icon src={icon.src} alt={icon.alt} />
      <Styles.Dropdown disabled={disabled}>
        {placeholder && (
          <Styles.Option
            value={""}
            disabled
            selected={value ? false : true}
            hidden
            data-testid="select-option"
          >
            {placeholder}
          </Styles.Option>
        )}
        {list.length > 0 &&
          list.map((option) => {
            return (
              <Styles.Option
                value={option}
                key={option}
                selected={option == value}
                data-testid="select-option"
              >
                {option}
              </Styles.Option>
            );
          })}
      </Styles.Dropdown>
    </Styles.Container>
  );
};
export default SelectWithIcon;
