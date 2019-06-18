import * as React from 'react';
import Styled from 'styled-components';

const Label = Styled.h1`
  color: red;
`;
interface Props {
  label: string;
}

const Title = ({ label }: Props) => {
  return <Label>{label}</Label>;
};

export default Title;
