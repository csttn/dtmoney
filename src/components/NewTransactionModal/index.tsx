import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, TransactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        closeTimeoutMS={1000}
      >
        <button
          type="button"
          className="react-modal-close"
          onClick={onRequestClose}
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>
        <Container>
          <h2>Cadastrar transação</h2>

          <input placeholder="Título" />

          <input type="number" placeholder="Valor" />

          <TransactionTypeContainer>
            <button type="button">
              <img src={incomeImg} alt="entrada" />
              <span>Entrada</span>
            </button>

            <button type="button">
              <img src={outcomeImg} alt="Saida" />
              <span>Saída</span>
            </button>
          </TransactionTypeContainer>

          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </div>
  );
}
