import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

const NavSearchBox = styled.div`
  border: 1px solid #e5e5e5;
  width: 240px;
  height: 40px;
  border-radius: 8px;
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
`;

const NavSearchInput = styled.input`
  outline: none;
  width: 90%;
  height: 100%;
  background-color: #fafafa;
  border: none;
  border-radius: 8px;
`;

function NavSearch() {
  return (
    <NavSearchBox>
      <HiSearch />
      <NavSearchInput placeholder="검색" />
    </NavSearchBox>
  );
}

export default NavSearch;
