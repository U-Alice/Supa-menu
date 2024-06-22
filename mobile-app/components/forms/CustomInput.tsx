import { ThemeProps, useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { KeyboardType } from "react-native";
import TextInput from "react-native-paper/src/components/TextInput/TextInput";

export type TextInputProps = ThemeProps;
interface FormInputProps extends TextInputProps {
  label: string;
  required?: boolean;
  value?: any;
  onChangeText?: any;
  secureTextEntry?: boolean;
  right?: React.ReactNode;
  left?: React.ReactNode;
  type?: "text" | "password" | "secure-text";
  keyboardType?: KeyboardType;
  textContentType?: any;
}

const CustomInput: React.FC<FormInputProps> = ({
  label,
  type,
  required,
  value,
  onChangeText,
  secureTextEntry,
  lightColor,
  darkColor,
  keyboardType,
  right,
  left,
  ...otherProps
}) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );
  const textColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "text"
  );
  return (
    <TextInput
      style={{
        backgroundColor,
        fontSize: 12,
        color: "black",
        marginTop: 6,
      }}
      textColor={textColor}
      label={label}
      mode="outlined"
      autoCapitalize="none"
      outlineColor="#E6E8EE"
      activeOutlineColor="#F7951C"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      left={left}
      right={right}
      {...otherProps}
    />
  );
};

export default CustomInput;
