import React from 'react';
import {View} from './styled';
import Logo from '../../../assets/images/logo';
import {Pressable} from 'react-native';
import {THEME} from '../../../assets/theme/theme';
import {useNavigation} from '@react-navigation/native';
import {Title} from '../../../assets/typography/typography';

const NavigationHeader = () => {
  const navigation = useNavigation();

  const goToFavorites = () => navigation.navigate('Favorites');

  return (
    <View>
      <Logo />
      <Pressable onPress={goToFavorites}>
        <Title marginBottom="0" color={THEME.COLORS.PRESSABLES}>
          See favorites
        </Title>
      </Pressable>
    </View>
  );
};

export default NavigationHeader;
