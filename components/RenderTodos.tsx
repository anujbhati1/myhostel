import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appColors from '../utils/appColors';
import {moderateScale} from 'react-native-size-matters';

const RenderTodos = ({item}: any) => {
  return (
    <View style={styles.mainView}>
      <Text>{item.todo}</Text>
    </View>
  );
};

export default RenderTodos;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: appColors.white,
    elevation: 10,
    paddingVertical: moderateScale(5),
    // marginVertical: 10,
  },
});
