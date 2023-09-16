import styled from "styled-components";
import TempData from "../../../data/TemporaryData.json";
import TheadBox from "../Table/TheadBox";
import TbodyBox from "../Table/TbodyBox";

const ContainerBox = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
`;

const TableBox = styled.table`
  width: 100%;
  border-collapse: collapse;
`;


function Main() {
  // const coinList = async () => {
  //   return await fetch(
  //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=krw&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  //     //   "https://api.themoviedb.org/3/movie/popular?api_key=e81185a43efae1fa764c99b459ac3548"
  //   ).then((res) => res.json());
  // };

  // const data = useQuery("coinList", coinList);

  return (
    <ContainerBox>
      <TableBox>
        <TheadBox />
        <TbodyBox TempData={TempData} />
      </TableBox>
    </ContainerBox>
  );
}

export default Main;
