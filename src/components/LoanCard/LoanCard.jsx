import React from "react";
import { remainingTimeFormat } from "../../utils/remainingTimeFormat";

import { CardContainer, Title, Info, ButtonsContainer } from "./styled";
import Button from "../../shared/Button";

const LoanCard = ({ loanData }) => {
  const {
    id,
    title,
    tranche,
    available,
    annualised_return,
    term_remaining,
    ltv,
    amount,
  } = loanData;

  return (
    <CardContainer>
      <Title>{title}</Title>
      <Info>
        Loan id: {id}
        <br />
        Tranche: {tranche}
        <br />
        Available: £{available}
        <br />
        Annualised return: {annualised_return}
        <br />
        Term remaining: {remainingTimeFormat(term_remaining)}
        <br />
        Ltv: {ltv}
        <br />
        Amount: £{amount}
      </Info>
      <ButtonsContainer>
        <Button>Invest</Button>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default LoanCard;
