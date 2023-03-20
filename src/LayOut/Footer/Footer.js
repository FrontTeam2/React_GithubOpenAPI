import styled from "styled-components";
import { FlexCenterCSS, HoverCSS } from "../../Styles/common";

function Footer() {
  return (
    <FooterItem>
      <FooterDiv>
        <FooterUl>
          <li>ForYou</li>
          <li>GitHubApi</li>
          <li>
            Social
            <ul>
              <li>
                <A href="https://www.instagram.com/yunddong_2/" target="_blank">
                  INSTAGRAM
                </A>
              </li>
              <li>
                <A
                  href="https://www.facebook.com/profile.php?id=100001597774331"
                  target="_blank"
                >
                  FACEBOOK
                </A>
              </li>
            </ul>
          </li>
        </FooterUl>

        <div>
          <h5>Created by JacobYun</h5>
        </div>
      </FooterDiv>
    </FooterItem>
  );
}

export default Footer;

const FooterItem = styled.footer`
  width: 100%;
  color: white;
  background-color: black;
`;

const FooterDiv = styled.div`
  ${FlexCenterCSS};
  flex-direction: column;
`;
const FooterUl = styled.ul`
  display: flex;
  gap: 30px;
  font-size: 24px;
  padding: 0;
  li {
    list-style: none;

    ul {
      margin-top: 10px;
      padding: 0;
    }
    li {
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
`;
const A = styled.a`
  text-decoration: none;
  color: white;
`;
