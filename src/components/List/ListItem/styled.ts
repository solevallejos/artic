import styled from 'styled-components/native';
import {THEME} from '../../../../assets/theme/theme';

export const Card = styled.View`
  margin-bottom: ${THEME.GRID.GAP}px;
`;

export const Pressable = styled.Pressable``;

export const SaveArtwork = styled.Pressable`
  position: absolute;
  top: ${THEME.GRID.GUTTER}px;
  left: ${THEME.GRID.GUTTER}px;
  z-index: 1;
`;
