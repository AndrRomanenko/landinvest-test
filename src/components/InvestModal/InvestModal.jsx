import React, { useState } from "react";
import { remainingTimeFormat } from "../../utils/remainingTimeFormat";

import Button from "../../shared/Button";
import { ReactModal, Title, Info, InputContaiter, Input } from "./styled";

const InvestModal = (props) => {
  const { isOpen, onRequestClose, loanData, handleSubmit } = props;
  const [inputValue, setInputValue] = useState("");

  const { id, available, term_remaining } = loanData;

  const handleInput = (event) => {
    if (Number(event.target.value) < 0) {
      return;
    }
    setInputValue(event.target.value);
  };

  const handleInvestClick = () => {
    handleSubmit(id, inputValue);
  };

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      shouldCloseOnOverlayClick
      onRequestClose={onRequestClose}
    >
      <Title>Invest in Loan</Title>
      <Info>
        Loan title you've clicked
        <br />
        <br />
        Available: £{available}
        <br />
        Term remaining: {remainingTimeFormat(term_remaining)}
        <br />
        <br />
        Investment amount (£)
        <InputContaiter>
          <Input
            value={inputValue}
            type="number"
            min={0}
            onChange={handleInput}
          />
          <Button onClick={handleInvestClick}>Invest</Button>
        </InputContaiter>
      </Info>
    </ReactModal>
  );
};

export default InvestModal;
