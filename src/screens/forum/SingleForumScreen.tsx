import {Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import {useState} from "react";
import ForumComment from "../../components/ForumComment.tsx";
import InfoButtons from "../../components/InfoButtons.tsx";

type Forum = {
    id: number;
    topic: string;
    pinned: boolean;
    category: string;
    creator: {
        name: string;
        role: string;
        poster: string;
        approved: boolean;
        avatar: string;
    };
    createdAt: Date;
    likes: number;
    comments: number;
    share: number;
};

type RouteParams = {
    forum: Forum;
};

const SingleForumScreen = () => {
    const route = useRoute<RouteProp<{ SingleForumScreen: RouteParams }, 'SingleForumScreen'>>();
    const [forum, setForum] = useState<Forum>(route.params.forum);
    const { creator } = forum;
    const [comments] = useState<any[]>([
        {
            id: 1,
            commentator: {
                name: 'Ірина Петренко',
                role: 'moderator',
                poster: 'contributor',
                approved: true,
                avatar: 'https://unsplash.com/photos/1Z2niiBPg5A',
            },
            comment: 'Це справді цікава тема! Дякую за детальне пояснення.',
            commentedAt: new Date('2025-05-24T09:20:00Z'),
            likes: 12,
            replies: 3,
        },
        {
            id: 2,
            commentator: {
                name: 'Михайло Сидоренко',
                role: 'user',
                poster: 'student',
                approved: false,
                avatar: 'https://tabler.io/avatars/3.jpg',
            },
            comment: 'У мене залишились питання після прочитання. Можна трохи детальніше?',
            commentedAt: new Date('2025-05-25T11:45:00Z'),
            likes: 5,
            replies: 1,
        },
        {
            id: 3,
            commentator: {
                name: 'Наталія Литвин',
                role: 'admin',
                poster: 'mentor',
                approved: true,
                avatar: 'https://unsplash.com/photos/7YVZYZeITc8',
            },
            comment: 'Добре структурований матеріал. Зберегла собі!',
            commentedAt: new Date('2025-05-23T08:05:00Z'),
            likes: 26,
            replies: 6,
        },
        {
            id: 4,
            commentator: {
                name: 'Олександр Коваль',
                role: 'admin',
                poster: 'mentor',
                approved: true,
                avatar: 'https://unsplash.com/photos/6anudmpILw4',
            },
            comment: 'Lorem ipsum dolor sit amet consectetur radicalising elit. Quisquater, voluptuary.',
            commentedAt: new Date('2025-05-20T10:00:00Z'),
            likes: 42,
            replies: 18,
        },
        {
            id: 5,
            commentator: {
                name: 'Світлана Романюк',
                role: 'user',
                poster: 'student',
                approved: false,
                avatar: 'https://unsplash.com/photos/8xAA0f9yQnE',
            },
            comment: 'Знайшла кілька нових інструментів для себе. Дякую!',
            commentedAt: new Date('2025-05-26T07:30:00Z'),
            likes: 8,
            replies: 0,
        },
        {
            id: 6,
            commentator: {
                name: 'Вікторія Шевченко',
                role: 'admin',
                poster: 'mentor',
                approved: true,
                avatar: 'https://tabler.io/avatars/7.jpg',
            },
            comment: 'Такі публікації дуже мотивують! Чекаю на наступну частину.',
            commentedAt: new Date('2025-05-22T17:50:00Z'),
            likes: 19,
            replies: 4,
        },
        {
            id: 7,
            commentator: {
                name: 'Денис Кравчук',
                role: 'moderator',
                poster: 'contributor',
                approved: true,
                avatar: 'https://unsplash.com/photos/mEZ3PoFGs_k',
            },
            comment: 'Цікаво, а які ще ресурси рекомендуєте для глибшого вивчення?',
            commentedAt: new Date('2025-05-25T14:10:00Z'),
            likes: 10,
            replies: 2,
        },
    ]);
    const [menuVisible, setMenuVisible] = useState(false);
    const toggleMenu = () => setMenuVisible(!menuVisible);
    const hideMenu = () => setMenuVisible(false);
    const changePinnedStatus = () => {
        setForum({ ...forum, pinned: !forum.pinned });
    };
  return (
      <>
          <ScrollView style={styles.container}>
              <View style={styles.info}>
                  <InfoButtons
                      forum={forum}
                      changePinnedStatus={changePinnedStatus}
                      menuVisible={menuVisible}
                      toggleMenu={toggleMenu}
                      hideMenu={hideMenu}
                  />
              </View>
              <View style={styles.topic}>
                  <View style={styles.topicCreator}>
                      {/* TODO: Can't load img from net*/}
                      <Image
                          source={require('../../assets/tech_events_img.jpg')}
                          style={styles.topicCreatorAvatar}
                      />
                      <View style={styles.topicCreatorInfo}>
                          <View style={styles.topicCreatorInfoName}>
                              <Text style={styles.topicCreatorInfoNameTxt}>
                                  {creator?.name}
                              </Text>
                              <Image
                                  source={require('../../assets/Verify.png')}
                                  style={styles.topicCreatorInfoApproved}
                              />
                          </View>
                          <Text style={styles.topicCreatorDetails}>
                              {creator?.poster} | {creator?.role}
                          </Text>
                      </View>
                  </View>
                  <View>
                      <Text style={styles.topicContentText}>{forum?.topic}</Text>
                  </View>
              </View>
              {/* eslint-disable-next-line react-native/no-inline-styles */}
              <View style={{height: 1, backgroundColor: 'rgba(0,0,0,0.09)'}}/>
              <View style={styles.comments}>
                  <View style={styles.commentsHeader}>
                      <Text style={styles.commentsHeaderTitle}>Comments ({comments.length})</Text>
                  </View>
                  {comments.map((comment) => (
                      <ForumComment key={comment.id} comment={comment} />
                  ))}
              </View>
          </ScrollView>
          <View style={styles.downPanel}>
              <TextInput style={styles.downPanelInput}>
                  <Text>Enter your comment</Text>
              </TextInput>
              <View style={styles.downPanelStats}>
                  <Image
                      source={require('../../assets/singleForumChatIcon.png')}
                      style={{width: 21.92, height: 19.29}}
                  />
                  <Text style={styles.downPanelStatsText}>
                      {forum.comments}
                  </Text>
              </View>
              <View style={styles.downPanelStats}>
                  <Image
                      source={require('../../assets/singleForumLikeIcon.png')}
                      style={{width: 18.33, height: 17.42}}
                  />
                  <Text style={styles.downPanelStatsText}>
                      {forum.likes}
                  </Text>
              </View>
              <View style={styles.downPanelStats}>
                  <Image
                      source={require('../../assets/singleForumShareIcon.png')}
                      style={{width: 18.33, height: 14.67}}
                  />
                  <Text style={styles.downPanelStatsText}>
                      {forum.share}
                  </Text>
              </View>
          </View>
      </>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 18,
    },
    // topic
    topic: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#EAF2FF',
        marginBottom: 16,
        borderRadius: 10,
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
        justifyContent: 'flex-end',
        marginBottom: 16,
        height: 20,
    },
    // comments
    comments: {
        marginTop: 16,
    },
    commentsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    commentsHeaderTitle: {
        fontSize: 16,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    // down panel
    downPanel: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff',
        height: 75,
    },
    downPanelInput: {
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 10,
        // padding: 10,
        width: '58%',
        height: 40,
    },
    downPanelStatsText: {
        fontSize: 10,
        fontWeight: '500',
        fontFamily: 'Poppins',
        color: '#8F8F8F',
    },
    downPanelStats: {
        alignItems: 'center',
        gap: 2,
    },
});


export default SingleForumScreen;
