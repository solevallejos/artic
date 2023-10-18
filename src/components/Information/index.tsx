import React from 'react';
import {View} from './styled';
import {LargeBody, Body} from '../../../assets/typography/typography';

const Information = () => (
  <View>
    <LargeBody bold>Important</LargeBody>
    <Body>
      Dates are not always precisely known, but the Art Institute strives to
      present this information as consistently and legibly as possible. Dates
      may be represented as a range that spans decades, centuries, dynasties, or
      periods and may include qualifiers such as c. (circa) or BCE.
    </Body>
  </View>
);

export default Information;
