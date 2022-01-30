import React, { ReactNode } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  StyleProp,
  TouchableOpacityProps,
  TextStyle,
} from "react-native";

interface Props {
  children?: ReactNode;
  onPress: () => void;
  styleBtn?: StyleProp<TextStyle>;
  props?: TouchableOpacityProps;
}

export const BaseIconBtn: React.FC<Props> = ({
  onPress,
  styleBtn,
  props,
  children
}) => {
  return (
    <View>
      <TouchableOpacity
        style={[styles.container, styleBtn]}
        onPress={onPress}
        {...props}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BaseIconBtn;
