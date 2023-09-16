import styled from "styled-components";

export const TableCelAttr = styled.th`
  padding: 7px;
  text-align: center;
  vertical-align: middle;
`;

export const TrBox = styled.tr`
  border: 1px solid #eff2f5;
  border-left: none;
  border-right: none;
  height: 60px;
`;

export const TdBox = styled(TableCelAttr).attrs({ as: "td" })`
  height: 60px;
`;

export const TableIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
