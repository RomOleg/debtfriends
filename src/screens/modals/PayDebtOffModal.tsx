import React, { useState } from "react";
import { Modal, StyleSheet, View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import BaseButton from "../../components/BaseButton";
import CloseBtnModal from "../../components/CloseBtnModal";
import VerticalLine from "../../components/VirticalLine";
import location from "../../location/location";
import { hideDebtModal } from "../../store/actions/visibleActions";
import { TypeDebt } from "../../types/types";
import BaseTextInput from "../../components/BaseTextInput";

interface Props {
  visible: boolean;
  value: string;
  hideModal: () => void;
  /**
   * Поле для ввода суммы
   */
  onChangeText: (value: string) => void;
}

export const PayDebtOffModal: React.FC<Props> = ({
  visible,
  value,
  hideModal,
  onChangeText,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <BaseTextInput value={value} onChangeText={onChangeText} placeholder="Укажите сумму"/>
          <BaseButton title={"Отдать указанную сумму"} onPress={() => {}} />
          <BaseButton title={"Отдать всю сумму"} onPress={() => {}} />
        </View>
        <CloseBtnModal closeModal={hideModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    paddingTop: 60,
    padding: 20,
    marginHorizontal: 35,
    marginVertical: 80,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: "relative",
  },
  title: {
    fontSize: 18,
    paddingBottom: 5,
  },
});

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PayDebtOffModal);
