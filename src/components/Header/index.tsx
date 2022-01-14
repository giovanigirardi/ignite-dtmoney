import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney logo" />
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
};
