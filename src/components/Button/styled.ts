import styled from 'styled-components/native';
import {THEME} from '../../../assets/theme/theme';

export const Button = styled.Pressable`
  background-color: ${THEME.COLORS.PRESSABLES};
  padding: ${THEME.GRID.GUTTER}px;
  border-radius: ${THEME.GRID.BORDER_RADIUS}px;
  align-items: center;
  margin-top: ${THEME.GRID.GUTTER}px;
`;
