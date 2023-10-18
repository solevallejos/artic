import {StyleSheet} from 'react-native';
import {THEME} from '../../../assets/theme/theme';
import {Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  p: {
    fontFamily: 'IdealSans-Light-Pro',
    fontSize: 18,
  },
  a: {
    color: THEME.COLORS.PRESSABLES,
  },
});

export const styleView = StyleSheet.create({
  container: {
    maxWidth: Dimensions.get('window').width - THEME.GRID.GAP,
  },
});
