import "./App.css";
import "./reset.css";
import Nav from "./components/UI/Nav/Nav";
import Main from "./components/UI/Coin/Main";
import { useQuery } from "react-query";
import { Route, Routes } from "react-router-dom";
import CoinDetails from "./components/UI/Coin/CoinDetails";
import Wrapper from "./components/UI/Wrapper";
import { SpinnerCircularFixed } from "spinners-react";

function App() {
  const { isLoading, error } = useQuery("repoData", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json()
    )
  );

  if (error) return "An error has occurred: " + error.message;

  if (isLoading) {
    return ( 
      <Wrapper
        width="100%"
        heigth="100vh"
        display="flex"
        justify="center"
        align="center"
      >
        <SpinnerCircularFixed
          size={90}
          thickness={100}
          speed={100}
          color="rgba(57, 148, 172, 1)"
          secondaryColor="rgba(57, 135, 172, 0.19)"
        />
      </Wrapper>
    );
  }

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/coinDetails/:id" element={<CoinDetails />} />
      </Routes>
    </>
  );
}

export default App;
