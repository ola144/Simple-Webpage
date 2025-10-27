import styled from "styled-components";

const CardWrapper = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  width: 90%;
  max-width: 500px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h2`
  color: #111827;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

const CardDesc = styled.p`
  color: #374151;
  font-size: 0.95rem;
  line-height: 1.5;
  text-align: justify;
`;

const Card = ({ title, description }) => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDesc>{description}</CardDesc>
    </CardWrapper>
  );
};

export default Card;
