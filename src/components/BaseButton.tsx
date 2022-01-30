import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import location from "../location/location";

interface Props {
  onPress: () => void;
  title: string;
  btnStyle?: StyleProp<TextStyle>;
  props?: TouchableOpacityProps;
}

export const BaseButton: React.FC<Props> = ({
  onPress,
  title,
  props,
  btnStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, btnStyle]}
      {...props}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f87",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "60%",
  },
  text: {
    fontSize: 18,
  },
});

export default BaseButton;
