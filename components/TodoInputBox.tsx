import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import appColors from '../utils/appColors';
import appIcons from '../utils/appIcons';
import {moderateScale} from 'react-native-size-matters';
import fontSize from '../utils/fontSizes';

interface TodoInputBoxProps {
  title?: string;
  placeholder: string;
  value: string;
  onChangeText: (txt: string) => void;
  isPassword?: boolean;
}

const TodoInputBox = ({
  title,
  placeholder,
  value,
  isPassword = false,
  onChangeText,
}: TodoInputBoxProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <View style={styles.inputView}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={styles.txtInputView}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={appColors.grey}
          value={value}
          onChangeText={onChangeText}
          style={styles.textInput}
          secureTextEntry={isPassword && !showPassword}
        />
        {isPassword ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowPassword(pre => !pre)}>
            <Image
              source={showPassword ? appIcons.eyeclose : appIcons.eye}
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default TodoInputBox;

const styles = StyleSheet.create({
  inputView: {},
  txtInputView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: moderateScale(1),
    borderColor: appColors.lightGrey,
    paddingHorizontal: moderateScale(7),
    borderRadius: moderateScale(5),
  },
  title: {
    color: appColors.black,
    fontWeight: '500',
    marginBottom: moderateScale(4),
  },
  textInput: {
    flex: 1,
    fontSize: fontSize.medium,
    fontWeight: '500',
    color: appColors.black,
  },
  icon: {
    height: moderateScale(22),
    width: moderateScale(22),
    resizeMode: 'contain',
  },
});
