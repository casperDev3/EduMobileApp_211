import {Image, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import InfoButtons from "./InfoButtons.tsx";

const ForumCard = ({forum, changePinnedStatus}: any) => {
  const navigation = useNavigation();
  const {creator} = forum;
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const hideMenu = () => setMenuVisible(false);

  return (
      <TouchableWithoutFeedback onPress={hideMenu}>
      <View style={styles.container}>
        <View style={styles.info}>
          <Text style={styles.infoText}>12 month ago</Text>
          <InfoButtons
              forum={forum}
              changePinnedStatus={changePinnedStatus}
              menuVisible={menuVisible}
              toggleMenu={toggleMenu}
              hideMenu={hideMenu}
          />
        </View>
        <TouchableOpacity
          style={styles.topic}
          onPress={() => {
            // @ts-ignore
            navigation.navigate('SingleForumScreen', {forum});
          }}>
          <View style={styles.topicCreator}>
            {/* TODO: Can't load img from net*/}
            <Image
              source={require('../assets/tech_events_img.jpg')}
              style={styles.topicCreatorAvatar}
            />
            <View style={styles.topicCreatorInfo}>
              <View style={styles.topicCreatorInfoName}>
                <Text style={styles.topicCreatorInfoNameTxt}>
                  {creator?.name}
                </Text>
                {creator?.approved && <Image
                  source={require('../assets/Verify.png')}
                  style={styles.topicCreatorInfoApproved}
                />}
              </View>
              <Text style={styles.topicCreatorDetails}>
                {creator?.poster} | {creator?.role}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.topicContentText}>{forum?.topic}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.interactions}>
          <View style={styles.interactionsInfo}>
            <Image
              source={require('../assets/bx_like.png')}
              style={styles.interactionsInfoImg}
            />
            <Text style={styles.interactionsInfoTxt}>{forum.likes}</Text>
          </View>

          <View style={styles.interactionsInfo}>
            <Image
              source={require('../assets/fa6-regular_comment-dots.png')}
              style={styles.interactionsInfoImg}
            />
            <Text style={styles.interactionsInfoTxt}>{forum.comments}</Text>
          </View>

          <View style={styles.interactionsInfo}>
            <Image
              source={require('../assets/bx_share.png')}
              style={styles.interactionsInfoImg}
            />
            <Text style={styles.interactionsInfoTxt}>{forum.share}</Text>
          </View>
        </View>
      </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.15)',
    borderWidth: 1,
    marginBottom: 20,
  },
  // interaction
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interactionsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionsInfoImg: {
    minHeight: 16,
    maxHeight: 16,
    minWidth: 16,
    maxWidth: 16,
  },
  interactionsInfoTxt: {
    fontSize: 12,
    fontWeight: 500,
    color: '#A3A3A3',
    marginLeft: 4,
  },
  // topic
  topic: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#EAF2FF',
    marginBottom: 16,
  },
  topicCreatorInfo: {
    marginLeft: 6,
  },
  topicCreator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  topicCreatorInfoNameTxt: {
    fontSize: 12,
    fontWeight: '600',
  },
  topicCreatorDetails: {
    fontSize: 8,
    fontWeight: '500',
    color: '#7A7A7A',
  },
  topicCreatorInfoName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topicCreatorAvatar: {
    minHeight: 28,
    maxHeight: 28,
    minWidth: 28,
    maxWidth: 28,
    borderRadius: 50,
  },
  topicCreatorInfoApproved: {
    minHeight: 16,
    maxHeight: 16,
    minWidth: 16,
    maxWidth: 16,
    marginLeft: 4,
  },
  topicContentText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#3D3D3D',
  },
  // info
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#B8B8B8',
  },
});

export default ForumCard;
