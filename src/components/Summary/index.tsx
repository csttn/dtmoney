import React from "react";

import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export const Summary: React.FC = () => {
  return (
    <Container>
      <div>
        <header>
          <p>entradas </p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>entradas </p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong> - R$600</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>total </p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$400</strong>
      </div>
    </Container>
  );
};
