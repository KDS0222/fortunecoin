import styled from "styled-components";
import { BoxSorting, JoinButton, LoginButton } from "./NavCommon";

const NavTopBox = styled.div`
  height: 40%;
  border-bottom: 1px solid #eff2f5;
  display: flex;
  align-items: center;
`;

const NavTopMenu = styled(BoxSorting)`
  & > button:not(:last-child) {
    margin-right: 10px;
  }
`;

function NavTop() {
  return (
    <NavTopBox>
      <NavTopMenu width="1200px" justify="flex-end">
        <LoginButton>로그인</LoginButton>
        <JoinButton>가입하기</JoinButton>
      </NavTopMenu>
    </NavTopBox>
  );
}

export default NavTop;
