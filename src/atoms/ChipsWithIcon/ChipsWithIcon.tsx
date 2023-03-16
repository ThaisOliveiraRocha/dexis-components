import React, { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import * as Styles from './ChipsWithIcon.styles';

interface Props {
  disabled?: boolean;
  title: string;
  selected: boolean;
  onClick?: () => void;
  id: string;
}

const ChipsWithIcon: FC<Props> = ({
  disabled = false,
  title,
  selected,
  onClick,
  id,
}: Props) => {
  const customTheme = {
    selected,
    disabled,
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Styles.Container disabled={disabled} onClick={onClick} id={id}>
        {selected && (
          <Styles.Icon
            src={
              disabled ? '/images/checkeddisabled.svg' : '/images/checked.svg'
            }
            alt="selecionado"
          />
        )}
        <Styles.Title>{title}</Styles.Title>
      </Styles.Container>
    </ThemeProvider>
  );
};
export default ChipsWithIcon;
