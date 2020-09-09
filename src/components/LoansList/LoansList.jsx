import React, { useState, useEffect } from "react";
import LoanCard from "../LoanCard";
import { Container, Content, Title, TotalInfo } from "./styled";
import curentLoans from "../../mocks/currentLoans.json";

const LoansList = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    setLoans(curentLoans.loans);
  }, []);

  const getAvailableTotal = () => {
    return loans
      .reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.available.replace(/,/g, ""));
      }, 0)
      .toLocaleString();
  };

  console.log(getAvailableTotal());

  return (
    <Container>
      <Content>
        <Title>Current Loans</Title>
        {loans.map((item) => (
          <LoanCard key={item.id} loanData={item} />
        ))}
        <TotalInfo>
          Total amount available for investments: <b>£{getAvailableTotal()}</b>
        </TotalInfo>
      </Content>
    </Container>
  );
};

export default LoansList;
