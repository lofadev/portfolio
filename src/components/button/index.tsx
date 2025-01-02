import { ButtonProps } from 'antd';
import React, { FC } from 'react';
import { ButtonStyled } from './styled';

export const Button: FC<ButtonProps> = (props) => <ButtonStyled {...props} />;
