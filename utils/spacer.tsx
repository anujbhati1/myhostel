import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface SpacerProps {
  height: number;
}

const Spacer = ({height = 0}: SpacerProps) => {
  return <View style={{height}} />;
};

export default Spacer;
