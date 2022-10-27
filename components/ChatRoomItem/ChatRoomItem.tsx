import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";

import { Avatar } from "react-native-elements";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../store";
import { getMessages } from "../../store/reducers/messageSlice";
import { setCurrentConversation } from "../../store/reducers/conversationSlice";
import CustomAvatar from "../CustomAvatar/CustomAvatar";

export default function ChatRoomItem({ chatRoom }: { chatRoom: any }) {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const onPress = (conversation: any) => {
    dispatch(setCurrentConversation(conversation));
    dispatch(getMessages(conversation._id));
    navigation.navigate("ChatRoom");
  };

  return (
    <Pressable style={styles.container} onPress={() => onPress(chatRoom)}>
      {chatRoom.avatar ? (
        <CustomAvatar props={chatRoom} />
      ) : (
        <CustomAvatar props={chatRoom} />
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {chatRoom.name}
          </Text>
          {/* {chatRoom.newMessages ? (
            <Text style={styles.textBold}>
              {data?.getMyFriendByConversationId.createdAt}
            </Text>
          ) : (
            <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
          )} */}
        </View>
        <View>
          {/* {chatRoom.newMessages ? (
            <Text
              numberOfLines={1}
              style={[styles.textBold, { maxWidth: 280 }]}
            >
              {chatRoom.lastMessage.content}
            </Text>
          ) : (
            <Text numberOfLines={1} style={styles.text}>
              {chatRoom.lastMessage.content}
            </Text>
          )}
          {chatRoom.newMessages && (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
            </View>
          )} */}
        </View>
      </View>
    </Pressable>
  );
}
