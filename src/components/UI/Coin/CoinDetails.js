import styled from "styled-components";
import TempChartData from "../../../data/Chart.json";
import TempData from "../../../data/TemporaryData.json";
import { BoxSorting } from "../Nav/NavCommon";
import { useParams } from "react-router-dom";
import Chart from "react-apexcharts";
import Wrapper from "../Wrapper";
import { Title } from "../TItle";
import { TableIcon } from "../Table/TableCommon";

const UlBox = styled(Wrapper).attrs({ as: "ul" })`
  margin-top: 30px;
`;

const Libox = styled(Wrapper).attrs({ as: "li" })`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #dee2e6;
`;

const SymbolText = styled(Title).attrs({ as: "p" })`
  margin-left: 5px;
  margin-bottom: 2px;
`;

const Text = styled(Title).attrs({ as: "p" })`
  &:not(:last-child){
    color: rgba(100,116,139);
    font-weight: 400;
  }

  font-size: 14px;
  font-weight: 500;
`;

function CoinDetails() {
  const params = useParams();
  console.log(params);

  const paramsKey = Object.keys(TempData).filter(
    (key) => TempData[key].id === params.id
  );
  const paramsData = TempData[paramsKey];

  console.log(paramsData);

  // https://api.coingecko.com/api/v3/coins/{id}/ohlc?vs_currency=usd&days={일수}

  const series = [
    //data on the y-axis
    {
      name: "candle",
      data: TempChartData?.map((value) => value),
    },
  ];
  const options = {
    //data on the x-axis
    chart: { id: "candlestick" },
    xaxis: {
      type: "datetime",
    },
  };
  return (
    <Wrapper padding="60px 0">
      <BoxSorting width="1200px" justify="center">
        <Wrapper display="flex" width="100%" justify="space-between">
          <Wrapper width="60%">
            <Chart
              options={options}
              series={series}
              type="candlestick"
              width="100%"
            />
          </Wrapper>

          <Wrapper width="440px" background="rgb(241,245,249)" padding="20px">
            <Wrapper display="flex" align="center">
              <TableIcon src={paramsData.image} />
              <Wrapper display="flex" align="flex-end">
                <Title fontSize="24px" fontWeigth="600">
                  {paramsData.name}
                </Title>
                <SymbolText fontSize="14px">
                  {paramsData.symbol.toUpperCase()}
                </SymbolText>
              </Wrapper>
            </Wrapper>

            <UlBox>
              <Libox>
                <Text>비트코인 Price</Text>
                <Text>{`US$ ${paramsData.current_price.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
              </Libox>

              <Libox>
                <Text>24시간 저가 / 24시간 고가</Text>
                <Text>{`US$ ${paramsData.low_24h
                  .toString()
                  .replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ","
                  )} / US$ ${paramsData.high_24h
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
              </Libox>

              <Libox>
                <Text>7일 저가 / 7일 고가</Text>
                <Text>{`US$ ${paramsData.price_change_24h}`}</Text>
              </Libox>

              <Libox>
                <Text>거래대금</Text>
                <Text>{`US$ ${paramsData.total_volume
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
              </Libox>

              <Libox>
                <Text>시가총액 순위</Text>
                <Text>{`#${paramsData.market_cap_rank}`}</Text>
              </Libox>

              <Libox>
                <Text>시가총액</Text>
                <Text>{`US$ ${paramsData.market_cap
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
              </Libox>

              <Libox>
                <Text>역대 최고가</Text>
                <Text>{`US$ ${paramsData.ath
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Text>
              </Libox>

              <Libox>
                <Text>역대 최저가</Text>
                <Text>{`US$ ${paramsData.atl}`}</Text>
              </Libox>
            </UlBox>
          </Wrapper>
        </Wrapper>
      </BoxSorting>
    </Wrapper>
  );
}

export default CoinDetails;
