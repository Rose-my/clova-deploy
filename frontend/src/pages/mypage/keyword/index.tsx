import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function index() {
  const [keyword, setKeyword] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>([]);

  const handleAddKeyword = () => {
    if (keyword.trim() !== "") {
      setKeywords([...keywords, keyword]);
      setKeyword("");
    }
  };

  const handleDeleteKeyword = (index: number) => {
    // 'index' typed as number
    const newKeywords = keywords.filter((_, i) => i !== index);
    setKeywords(newKeywords);
  };

  return (
    <Container>
      <Header title="키워드 알림 설정" url="/mypage" />
      <InputContainer>
        <Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="알림받을 키워드를 입력해주세요."
        />
        <Button onClick={handleAddKeyword}>등록</Button>
      </InputContainer>
      <KeywordsList>
        {keywords.length === 0 ? (
          <NoKeywordsMessage>알림 설정한 키워드가 없습니다</NoKeywordsMessage>
        ) : (
          keywords.map((item, index) => (
            <KeywordItem key={index}>
              <span>{item}</span>
              <DeleteButton onClick={() => handleDeleteKeyword(index)}>🗑️</DeleteButton>
            </KeywordItem>
          ))
        )}
      </KeywordsList>
      <Footer />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  padding: 1rem;
  background-color: #f9f9f9;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
  padding: 0 2rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid #4caf50;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #388e3c;
  }
`;

const Button = styled.button`
  margin-left: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #4caf50;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #388e3c;
  }

  &:active {
    background-color: #2e7d32;
  }
`;

const KeywordsList = styled.ul`
  width: 100%;
  max-width: 400px;
  list-style-type: none;
  padding: 0 2rem;
`;

const NoKeywordsMessage = styled.p`
  padding: 10rem 2rem 0;
  color: #6c757d;
  font-size: 1.2rem;
  text-align: center;
`;

const KeywordItem = styled.li`
  ${({ theme }) => theme.fonts.Field};

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #d9d9d9;
  color: black;
  font-size: 2rem;
  transition: box-shadow 0.3s ease;
`;

const DeleteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.3s ease;
`;
