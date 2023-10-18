import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {THEME} from '../../../assets/theme/theme';

export const View = styled.View`
  background-color: ${THEME.COLORS.BACKGROUND};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: ${THEME.GRID.PADDING}px 0;
  ${Platform.OS === 'ios' &&
  `
    margin-top: ${THEME.GRID.PADDING}px;
  `}
  border-bottom-width: 1px;
  border-bottom-color: ${THEME.COLORS.SECONDARY_TEXT};
`;
