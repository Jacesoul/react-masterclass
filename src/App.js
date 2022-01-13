import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
    </Father>
  );
}

export default App;
