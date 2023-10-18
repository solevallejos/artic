import React from 'react';
import HTMLView from 'react-native-htmlview';
import {View} from 'react-native';
import {styleView, styles} from './style';

interface RenderHTMLProps {
  content: string;
}

const RenderHTML: React.FC<RenderHTMLProps> = ({content}) => (
  <View style={styleView.container}>
    <HTMLView value={content} stylesheet={styles} />
  </View>
);

export default RenderHTML;
