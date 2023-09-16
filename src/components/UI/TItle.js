import styled from "styled-components";

const TitleBox = styled.h1`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeigth};
  color: ${(props) => props.color};
`;

export function Title(props) {
  return (
    <TitleBox
      fontSize={props.fontSize}
      fontWeigth={props.fontWeigth}
      color={props.color}
    >
      {props.children}
    </TitleBox>
  );
}
