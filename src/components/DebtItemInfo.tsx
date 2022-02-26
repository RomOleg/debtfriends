import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TypeDebtInfo } from "../types/types";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";
import { stylesDefault } from "../styles/styles";

interface Props {
  debtInfo: TypeDebtInfo;
}

export const DebtItemItem: React.FC<Props> = ({ debtInfo }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.nameBlock}>
          <Text style={stylesDefault.text}>{debtInfo.debtorName}</Text>
          <TouchableOpacity style={styles.info} onPress={() => console.log("details information")}>
            <Icon name="trash" size={25} color="lightblue" />
          </TouchableOpacity>
        </View>
        <View style={styles.debtBlock}>
          <Text style={[stylesDefault.text, styles.debtor, {backgroundColor: 'green'}]}>{debtInfo.debtClaim}</Text>
          <Text style={[stylesDefault.text, styles.debtor, {backgroundColor: 'red'}]}>{debtInfo.debtMy}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 16,
    padding: 16,
    backgroundColor: "#fff",
    position: 'relative',
    marginHorizontal: 20,
    height: 140,
    justifyContent: 'space-between',
    borderRadius: 140/6,
  },
  nameBlock: {
    alignItems: "center",
  },
  info: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  debtBlock: {
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: 'center'
  },
  debtor: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    width: 100,
    borderRadius: 100/6,
    textAlign: "center"
  },
});

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DebtItemItem);
