import styled from "styled-components";

export const BoxSorting = styled.div`
  width: ${props => props.width};
  margin: 0 auto; 
  display: flex;
  justify-content: space-between;
  justify-content: ${props => props.justify};
`;

// NavButton

export const LoginButton = styled.button`
  height: 32px;
  padding: 0 16px;
  border: 1px solid #3861fb;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
  background-color: #ffffff;
  cursor: pointer;
`;

export const JoinButton = styled(LoginButton)`
  background-color: #3861fb;
  color: #ffffff;
`;

export const NavTopBox = styled.div`
  height: 40%;
  border-bottom: 1px solid #eff2f5;
  display: flex;
  align-items: center;
`;
