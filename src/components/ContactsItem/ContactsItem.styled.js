import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 2px solid #000;
  background-color: #EDF2F7;
  padding-left: 10px;
  padding-right: 5px;

  & + li {
    margin-top: 12px;
  }

`;

export const ContactName = styled.p`
  margin: 0;
  font-weight: 700;
  padding-left: 5px;
  font-size: 20px;
`;

export const ContactNumber = styled.span`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #086a68;
`;

export const Button = styled.button`
  background-color: white;
  border-radius: 8px;
  border: 3px solid lightgray;
  padding: 10px;
  cursor: pointer;
  transition: background-color 250ms linear;
`;