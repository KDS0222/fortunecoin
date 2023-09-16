import styled from "styled-components";

const WrapperBox = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => props.direction};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  padding: ${props=> props.padding};
  margin: ${props=> props.margin};
`;


function Wrapper(props) {
  return (
    <WrapperBox
      width={props.width}
      height={props.height}
      display={props.display}
      justify={props.justify}
      align={props.align}
      direction={props.direction}
      background={props.background}
      padding={props.padding}
      margin={props.margin}
    >
      {props.children}
    </WrapperBox>
  );
}

export default Wrapper;
