import styled from "styled-components";
import { BoxSorting, NavTopBox } from "./NavCommon";
import NavSearch from "./NavSearch";
import Logo from "../Logo/Logo";

const NavBottomBox = styled(NavTopBox)`
  height: 60%;
`;

function NavButtom() {
  return (
    <NavBottomBox>
      <BoxSorting width="1200px" justify="space-between">
        <Logo />
        <NavSearch />
      </BoxSorting>
    </NavBottomBox>
  );
}

export default NavButtom;
