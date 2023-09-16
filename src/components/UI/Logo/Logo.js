import styled from "styled-components";
import { CustomLink } from "../CustomLink";

const LogoBox = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

function Logo() {
  return (
    <CustomLink to="/">
      <LogoBox className="main__logo__box">FortuneCoin</LogoBox>
    </CustomLink>
  );
}

export default Logo;
