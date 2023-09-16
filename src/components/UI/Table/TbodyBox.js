import styled from "styled-components";
import { TableIcon, TdBox, TrBox } from "./TableCommon";
import { CustomLink } from "../CustomLink";

const TableFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TbodyBox(props) {
  const TempData = props.TempData;

  console.log(TempData);

  return (
    <tbody>
      {TempData?.map((value, i) => (
        <TrBox key={i}>
          <TdBox>{i + 1}</TdBox>
          <TdBox>
            <CustomLink to={"/coinDetails/" + `${value.id}`}>
              {/* 코인 상세페이지 링크 여기에 */}
              <TableFlexbox>
                <TableIcon src={value.image} />
                <span>{value.name}</span>
              </TableFlexbox>
            </CustomLink>
          </TdBox>
          <TdBox>
            {"$" +
              value.current_price
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </TdBox>
          <TdBox>
            {value.price_change_percentage_1h_in_currency.toFixed(2)}
          </TdBox>
          <TdBox>
            {value.price_change_percentage_24h_in_currency.toFixed(2)}
          </TdBox>
          <TdBox>
            {value.price_change_percentage_7d_in_currency.toFixed(2)}
          </TdBox>
          <TdBox>
            {"$" +
              value.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </TdBox>
          <TdBox>
            {"$" +
              value.total_volume
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </TdBox>
          <TdBox>
            {"$" +
              Math.floor(value.total_supply)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
              " " +
              value.symbol.toUpperCase()}
          </TdBox>
        </TrBox>
      ))}
    </tbody>
  );
}

export default TbodyBox;
