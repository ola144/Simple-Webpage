import styled from "styled-components";
import StyledButton from "./StyledButton";
import Card from "./Card";

const Container = styled.div`
  min-height: 100vh;
  background: #f3f4f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  font-family: "Poppins", sans-serif;
`;

const Title = styled.h1`
  color: #1f2937;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  color: #4b5563;
  font-size: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 600px;
`;

const Task7 = () => {
  return (
    <Container>
      <Title>Styled Components Practice</Title>
      <Subtitle>
        This mini project demonstrates how to use{" "}
        <strong>styled-components</strong> in React to create reusable and
        dynamic UI elements.
      </Subtitle>
      <Card
        title="Styled Components"
        description="Styled Components let you write CSS directly inside your JavaScript files. 
        They make styling components modular, scoped, and reusable."
      />

      <StyledButton primary>Primary Button</StyledButton>
      <StyledButton>Default Button</StyledButton>
    </Container>
  );
};

export default Task7;
