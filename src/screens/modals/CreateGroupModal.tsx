import React, { useState } from 'react'
import { Modal, StyleSheet, View, Text } from 'react-native';
import BaseButton from '../../components/BaseButton';
import CloseBtnModal from '../../components/CloseBtnModal';
import VerticalLine from '../../components/VirticalLine';
import location from '../../location/location';

interface Props {
  visible: boolean,
  closeModal: () => void,
}

export const CreateGroupModal: React.FC<Props> = ({ visible, closeModal }) => {


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
      }}
    >
      <View style={styles.modalContainer}>
        <View style={{ flex: 1, justifyContent: 'space-between', }} >
          <View style={{ flex: 1, alignItems :'center' }} >
            <Text style={styles.title} >{location['ru'].TitleGroup}</Text>
            <VerticalLine />
          </View>
          <View style={{ }}>
            <BaseButton onPress={() => { }} />
          </View>
        </View>
        <CloseBtnModal closeModal={closeModal} />
      </View>
    </Modal>
  );
}

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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    paddingBottom: 5,
  }
});

export default CreateGroupModal;