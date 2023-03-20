import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useInput from "../../hooks/useInput";
import { FlexCenterCSS } from "../../Styles/common";

function Header() {
  const [writeUrl, onChange] = useInput();

  const navigate = useNavigate();

  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      onSubmitUrl();
    }
  };
  const onSubmitUrl = () => {
    const splitUrl = writeUrl.split("/");

    const owner = splitUrl[3];
    const repository = splitUrl[4];
    console.log(owner);
    console.log(repository);

    navigate(`/${owner}/${repository}/issues/1/created/10`);
  };

  return (
    <>
      <HeaderItem>
        <ImgLogo src={require("../../Logo/gitlogoblack.jpg")}></ImgLogo>
        <InputItem>
          <Input
            placeholder="URL을 입력하세요"
            value={writeUrl}
            onChange={onChange}
            onKeyDown={onEnterPress}
          ></Input>
          <ImgSearch
            onclick={onSubmitUrl}
            src={require("../../Logo/search.png")}
          />
        </InputItem>
      </HeaderItem>
    </>
  );
}

export default Header;

const HeaderItem = styled.header`
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px 0 10px 0;
  ${FlexCenterCSS};
`;

const ImgLogo = styled.img`
  width: 100px;
  height: 100px;
`;
const InputItem = styled.div`
  position: relative;
`;

const ImgSearch = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  right: 0;
  width: 30px;
  height: 30px;
`;

const Input = styled.input`
  width: 550px;
  height: 60px;
  border-radius: 30px;
  padding: 20px 20px;
  font-size: 1rem;
`;
