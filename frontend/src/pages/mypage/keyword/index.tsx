import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import * as K from "./styles";

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
    <K.Container>
      <Header title="키워드 알림 설정" url="/mypage" />
      <K.InputContainer>
        <K.Input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="알림받을 키워드를 입력해주세요."
        />
        <K.Button onClick={handleAddKeyword}>등록</K.Button>
      </K.InputContainer>
      <K.KeywordsList>
        {keywords.length === 0 ? (
          <K.NoKeywordsMessage>알림 설정한 키워드가 없습니다</K.NoKeywordsMessage>
        ) : (
          keywords.map((item, index) => (
            <K.KeywordItem key={index}>
              <span>{item}</span>
              <K.DeleteButton onClick={() => handleDeleteKeyword(index)}>🗑️</K.DeleteButton>
            </K.KeywordItem>
          ))
        )}
      </K.KeywordsList>
      <Footer />
    </K.Container>
  );
}
