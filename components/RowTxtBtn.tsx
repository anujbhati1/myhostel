import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import fontSize from '../utils/fontSizes';
import appColors from '../utils/appColors';
import {moderateScale} from 'react-native-size-matters';

interface RowTxtBtnProps {
  title: string;
  btnTxt: string;
  onPress: () => void;
}

const RowTxtBtn = ({title, btnTxt, onPress}: RowTxtBtnProps) => {
  return (
    <View style={styles.rowView}>
      <Text style={styles.titleTxt}>{title}</Text>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Text style={styles.btnTxt}>{btnTxt}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RowTxtBtn;

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  titleTxt: {
    fontSize: fontSize.medium,
    color: appColors.black,
    fontWeight: '400',
  },
  btnTxt: {
    fontSize: fontSize.medium,
    color: appColors.primary,
    fontWeight: '500',
    paddingLeft: moderateScale(3),
  },
});
