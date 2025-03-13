import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FilterContainer = styled.div``;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
`;

const FilterTitle = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Option = styled.div<{ selected: boolean }>`
  font-size: 1.25rem;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    `
      font-weight: bold;
      text-decoration: underline;
    `}
`;

const Input = styled.input`
  width: 80%;
  padding: 15px;
  margin-top: 12px;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  text-indent: 50px;
  background-image: url("https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png");
  background-size: 35px;
  background-position: 20px center;
  background-repeat: no-repeat;

  &:focus {
    outline: none;
  }

  &::placeholder {
    text-indent: 50px;
    font-size: 1rem;
  }
`;

const SearchResultContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  max-height: 280px;
  margin-top: 10px;
  border-radius: 10px;
`;

const SearchResultItem = styled.div`
  border: 1px solid #ddd;
  background-color: #f6f6f6;
  padding: 12px;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

interface SearchResult {
  searchWord: string;
  searchType: string;
  lat: string;
  lon: string;
}

const RoomFilter: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOpt, setSelectedOpt] = useState<string>("전체");
  const optionList = ["전체", "원룸", "오피스텔", "빌라", "아파트"];
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const handleOptionClick = (option: string) => {
    setSelectedOpt(option);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
      e.preventDefault();
    }
  };

  const handleSearch = () => {
    // Mocking search results (no backend call)
    if (searchTerm.length > 1) {
      setSearchResults([
        { searchWord: searchTerm, searchType: "address", lat: "37.5665", lon: "126.9780" },
      ]);
    } else {
      setSearchResults([]);
    }
  };

  const handleClick = (word: string, type: string, lat: string, lon: string) => {
    if (type === "address") {
      localStorage.setItem("searchloc", word);
      navigate(`/map/${word}/${lat}/${lon}`);
    } else {
      navigate(`/map/${word}/${lat}/${lon}`);
    }
  };

  return (
    <FilterContainer>
      <FilterTitle>어떤 방을 찾으시나요?</FilterTitle>
      <FilterGroup>
        {optionList.map((value) => (
          <Option key={value} selected={selectedOpt === value} onClick={() => handleOptionClick(value)}>
            {value}
          </Option>
        ))}
      </FilterGroup>
      <Input
        type="text"
        placeholder="지역을 입력하세요"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <SearchResultContainer>
        {searchResults.length > 0 ? (
          searchResults.map((value, index) => (
            <SearchResultItem key={index} onClick={() => handleClick(value.searchWord, value.searchType, value.lat, value.lon)}>
              {value.searchWord}
            </SearchResultItem>
          ))
        ) : (
          searchTerm.length > 1 && <SearchResultItem>검색 결과가 없습니다.</SearchResultItem>
        )}
      </SearchResultContainer>
    </FilterContainer>
  );
};

export default RoomFilter;
