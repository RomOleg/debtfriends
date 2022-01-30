import React, { ReactNode } from "react";
import { Modal, StyleSheet, View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import CloseBtnModal from "./CloseBtnModal";

interface Props {
  visible: boolean;
  hideModal: () => void;
  children?: ReactNode;
}

export const BaseModal: React.FC<Props> = ({
  visible,
  hideModal,
  children,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        {children}
        <CloseBtnModal closeModal={hideModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // alignItems: "center",
    paddingTop: 60,
    padding: 25,
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
});

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BaseModal);
