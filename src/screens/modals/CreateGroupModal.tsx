import React, { useState } from "react";
import { Modal, StyleSheet, View, Text, TextInput } from "react-native";
import { connect } from "react-redux";
import BaseButton from "../../components/BaseButton";
import CloseBtnModal from "../../components/CloseBtnModal";
import VerticalLine from "../../components/VirticalLine";
import location from "../../location/location";
import { hideDebtModal } from "../../store/actions/visibleActions";
import { addDebt } from "../../store/actions/debtActions";
import { TypeDebt, TypeFriend } from "../../types/types";
import BaseTextInput from "../../components/BaseTextInput";
import BaseIconBtn from "../../components/BaseIconBtn";
import Icon from "react-native-vector-icons/Ionicons";
import { BaseModal } from "../../components/BaseModal";
import { ChoiseeFriendList } from "../../components/ChoiseeFriendList";

interface Props {
  visible: boolean;
  hideDebtModal: () => void;
  addDebt: (debtGroup: TypeDebt[]) => void;
  friends: TypeFriend[];
}

export const CreateGroupModal: React.FC<Props> = ({
  visible,
  hideDebtModal,
  addDebt,
  friends,
}) => {
  const [name, setName] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<TypeFriend[]>([]);

  const createGroup = (): void => {
    if (!name.trim()) return;

    const group: TypeDebt[] = [
      {
        id: new Date().getTime(),
        name: name,
        sum: 1000,
        people: 2,
        debtInfo: [],
      },
    ];

    setName("");

    addDebt(group);
    hideDebtModal();
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.title}>{location["ru"].TitleGroup}</Text>
            {/* <VerticalLine /> */}
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text>Название события</Text>
              <BaseTextInput
                value={name}
                onChangeText={setName}
                placeholder="Название события"
              />
              <BaseIconBtn onPress={() => setModal(true)}>
                <Icon name="person-add" size={30} />
              </BaseIconBtn>
              {selectedFriend.length > 0 ?
                selectedFriend.map(friend => (
                  <Text key={friend.id}>{friend.name}</Text>
                ))
                : <Text>Добавте друзей</Text>
              }
            </View>
          </View>
          <View style={{}}>
            <BaseButton
              title={location["ru"].AddNewGroup}
              onPress={createGroup}
            />
          </View>
        </View>
        <BaseModal visible={modal} hideModal={() => setModal(false)}>
          <ChoiseeFriendList hideModal={() => setModal(false)} friends={friends} selectedFriend={(selectedFriend) => setSelectedFriend(selectedFriend)} />
        </BaseModal>
        <CloseBtnModal closeModal={hideDebtModal} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center',
    paddingTop: 40,
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
    paddingBottom: 20,
  },
});

const mapDispatchToProps = {
  hideDebtModal,
  addDebt,
};

const mapStateToProps = (state: any) => ({
  visible: state.visible.visibleModal,
  friends: state.friends,
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroupModal);
