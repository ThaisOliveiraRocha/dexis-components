import React, { FC } from "react";
import * as Styles from "./SelectWithIcon.styles";

export interface Props {
  disabled?: boolean;
  placeholder?: string;
  value?: any;
  list: Array<{
    value: any;
    label: string;
  }>;
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

      <Styles.Dropdown disabled={disabled} data-testid="select">
        {placeholder && (
          <Styles.Option
            value={""}
            disabled
            selected={value ? false : true}
            hidden
            data-testid="placeholder"
          >
            {placeholder}
          </Styles.Option>
        )}
        {list.length > 0 &&
          list.map((option) => {
            return (
              <Styles.Option
                value={option.value}
                key={option.value}
                selected={option.value == value}
                data-testid="option"
              >
                {option.label}
              </Styles.Option>
            );
          })}
      </Styles.Dropdown>
    </Styles.Container>
  );
};
export default SelectWithIcon;
