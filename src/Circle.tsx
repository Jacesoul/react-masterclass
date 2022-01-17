import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
      // borderColor ?? bgColor는 borderColor가 undefined일때 bgColor로 하라는 의미
    >
      {text}
    </Container>
  );
}

export default Circle;
