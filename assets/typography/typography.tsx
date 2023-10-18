import styled from 'styled-components/native';

interface TextProps {
  color?: string;
  marginBottom?: string;
}

const BaseFont = styled.Text<TextProps>`
  color: ${props => props.color || 'black'};
  margin-bottom: ${props => props.marginBottom || 'auto'};
`;

export const LargeTitle = styled(BaseFont)`
  font-size: 32px;
  margin-bottom: ${(props) => props.marginBottom || "12px"};
`;

export const Title = styled(BaseFont)`
  font-size: 24px;
  margin-bottom: ${(props) => props.marginBottom || "12px"};
`;

export const LargeBody = styled(BaseFont)`
  font-size: 18px;
  font-weight: ${props => (props.bold ? '700' : 'normal')};
`;

export const Body = styled(BaseFont)`
  font-size: 16px;
  font-weight: ${props => (props.bold ? '700' : 'normal')};
`;

export const SmallBody = styled(BaseFont)`
  font-size: 14px;
  font-weight: ${props => (props.bold ? '700' : 'normal')};
  `;