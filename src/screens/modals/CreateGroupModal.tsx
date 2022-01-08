import React, { useState } from 'react'
import { Modal, StyleSheet, View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import BaseButton from '../../components/BaseButton';
import CloseBtnModal from '../../components/CloseBtnModal';
import VerticalLine from '../../components/VirticalLine';
import location from '../../location/location';
import { hideDebtModal } from '../../store/actions/visibleActions';
import { addDebt } from '../../store/actions/debtActions';
import { TypeDebt } from '../../types/types';

interface Props {
  visible: boolean,
  hideDebtModal: () => void,
  addDebt: (debtGroup: TypeDebt[]) => void,
}

export const CreateGroupModal: React.FC<Props> = ({ visible, hideDebtModal, addDebt }) => {

  const [name, setName] = useState('');

  const createGroup = (): void => {
    const group: TypeDebt[] = [{
      id:  new Date().getTime(),
      name: 'test',
      sum: 1000,
      people: 2
    }]

    addDebt(group)
  }

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
    >
      <View style={styles.modalContainer}>
        <View style={{ flex: 1, justifyContent: 'space-between', }} >
          <View style={{ flex: 1, alignItems :'center' }} >
            <Text style={styles.title} >{location['ru'].TitleGroup}</Text>
            <VerticalLine />
            <View>
              <Text>Название события</Text>
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={(name) => setName(name)}
                placeholder='Название события' 
              />
            </View>
          </View>
          <View style={{ }}>
            <BaseButton onPress={createGroup} />
          </View>
        </View>
        <CloseBtnModal closeModal={hideDebtModal} />
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
  },
  textInput: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderRadius: 10
  }
});

const mapDispatchToProps = {
  hideDebtModal, addDebt
}

const mapStateToProps = (state: any) => ({
  visible: state.visible.visibleModal,
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupModal);