import styled from "styled-components";
import { TableCelAttr, TrBox } from "./TableCommon";



const ThBox = styled(TableCelAttr)``;


function TheadBox(){
    return(
        <thead>
          <TrBox>
            <ThBox>번호</ThBox>
            <ThBox>이름</ThBox>
            <ThBox>가격</ThBox>
            <ThBox>1h %</ThBox>
            <ThBox>24h %</ThBox>
            <ThBox>7d %</ThBox>
            <ThBox>시가총액</ThBox>
            <ThBox>거래량(24h)</ThBox>
            <ThBox>유통 공급량</ThBox>
          </TrBox>
        </thead>
    );
}

export default TheadBox;