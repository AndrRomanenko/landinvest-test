import styled from "styled-components";
import * as ReactModalBasic from "react-modal";

export const ReactModal = styled(ReactModalBasic)`
  color: #444444;
  width: 250px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  padding: 15px;
  margin: 15px 0;
  height: fit-content;

  &: focus {
    outline: none;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  width: 75%;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  font-size: 13px;
`;

export const InputContaiter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Input = styled.input`
  width: 100%;
  margin-right: 10px;
  border: 1px solid #e6e6e6;
  height: 35px;
  text-align: right;
  padding: 0 5px;
`;
