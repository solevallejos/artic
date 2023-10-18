import styled from 'styled-components/native';
import {THEME} from '../../../assets/theme/theme';

export const View = styled.View`
  margin-top: ${THEME.GRID.GAP}px;
  padding: ${THEME.GRID.GUTTER}px;
  background-color: ${THEME.COLORS.DIVIDERS};
  border-left-color: ${THEME.COLORS.SECONDARY_TEXT};
  border-left-width: 6px;
`;
