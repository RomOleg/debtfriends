import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TypeDebtInfo } from "../types/types";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { stylesDefault } from '../styles/styles';

interface Props {
  debtInfo: TypeDebtInfo;
}

export const DebtItemItem: React.FC<Props> = ({ debtInfo }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.nameBlock}>
          <Text style={stylesDefault.text}>{debtInfo.debtorName}</Text>
          <TouchableOpacity onPress={() => console.log('details information')}>
            <Icon name="trash" size={25} color="lightblue" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.debtBlock}>
        <Text style={stylesDefault.text}>{debtInfo.debtMe}</Text>
        <Text style={stylesDefault.text}>{debtInfo.debtMy}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    padding: 10
  },
  debtBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nameBlock: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DebtItemItem);
