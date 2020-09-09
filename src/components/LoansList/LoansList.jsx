import React, { useState, useEffect } from "react";

import LoanCard from "../LoanCard";
import InvestModal from "../InvestModal";
import { Container, Content, Title, TotalInfo } from "./styled";

import curentLoans from "../../mocks/currentLoans.json";

const LoansList = () => {
  const [loans, setLoans] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null);

  useEffect(() => {
    setLoans(curentLoans.loans);
  }, []);

  const handleLoanInvest = (loanId, investValue) => {
    const loanIndex = loans.findIndex((item) => item.id === loanId);
    let loanElement = loans[loanIndex];
    loanElement = {
      ...loanElement,
      invested: true,
      available: (
        parseInt(loanElement.available.replace(/,/g, "")) -
        parseInt(investValue)
      ).toLocaleString(),
      amount: (
        parseInt(loanElement.amount.replace(/,/g, "")) + parseInt(investValue)
      ).toLocaleString(),
    };
    setLoans([
      ...loans.slice(0, loanIndex),
      loanElement,
      ...loans.slice(loanIndex + 1),
    ]);
    setSelectedLoan(null);
  };

  const getAvailableTotal = () => {
    return loans
      .reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.available.replace(/,/g, ""));
      }, 0)
      .toLocaleString();
  };

  return (
    <Container>
      <Content>
        <Title>Current Loans</Title>
        {loans.map((item) => (
          <LoanCard
            key={item.id}
            loanData={item}
            onInvestClick={() => setSelectedLoan(item)}
          />
        ))}
        <TotalInfo>
          Total amount available for investments: <b>£{getAvailableTotal()}</b>
        </TotalInfo>
      </Content>
      {selectedLoan && (
        <InvestModal
          isOpen={!!selectedLoan}
          onRequestClose={() => setSelectedLoan(null)}
          loanData={selectedLoan}
          handleSubmit={handleLoanInvest}
        />
      )}
    </Container>
  );
};

export default LoansList;
