import styled from "styled-components";
import NavTop from "./NavTop";
import NavButtom from "./NavButton";

const NavContainer = styled.div`
  background-color: #ffffff;
  height: 125px;
  justify-content: center;
  align-items: center;
`;

function Nav() {
  return (
    <NavContainer>
      <NavTop />
      <NavButtom />
    </NavContainer>
  );
}

export default Nav;
