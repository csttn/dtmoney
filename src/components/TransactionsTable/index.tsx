import React, { useEffect } from "react";

import { Container } from "./styles";
import { api } from "../../services/api";

export const TransactionsTable: React.FC = () => {
  useEffect(() => {
    api.get("/transactions").then(({ data }) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento App Mobile</td>
            <td className="deposit">R$ 6.000</td>
            <td>Desenvolvimento</td>
            <td>29/03/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw"> - R$ 1.000</td>
            <td>Casa</td>
            <td>29/03/2021</td>
          </tr>
          <tr>
            <td>Desenvolvimento App Mobile</td>
            <td className="deposit">R$ 6.000</td>
            <td>Desenvolvimento</td>
            <td>29/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
