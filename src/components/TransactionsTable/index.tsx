import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { api } from "../../services/api";

interface TransactionItemProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

export const TransactionsTable: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionItemProps[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then(({ data }) => setTransactions(data.transactions));
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
          {transactions.map((item: TransactionItemProps) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className={item.type}>
                {item.type === "withdraw" ? "- " : ""}
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.amount)}
              </td>
              <td>{item.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(item.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
