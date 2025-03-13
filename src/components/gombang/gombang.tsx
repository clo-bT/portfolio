import styled from "styled-components";
import Header from "./gom_header";
import RoomFilter from "./gom_filter";
import PopularList from "./gom_popular";

const GombangContainer = styled.div``;
const MainWrapper = styled.div``;

const Gombang = () => {
  return (
    <GombangContainer>
      <Header/>
      <MainWrapper>
        <RoomFilter/>
        <PopularList/>
      </MainWrapper>
    </GombangContainer>
  )
};

export default Gombang;
