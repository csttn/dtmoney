import React from "react";
import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenTransactionNewModal: () => void;
}

export function Header({ onOpenTransactionNewModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenTransactionNewModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
