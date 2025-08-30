import {Alert, Image, StyleSheet, Text, TouchableOpacity, View, Share} from 'react-native';
import { formatDistance } from 'date-fns';
import { enUS } from 'date-fns/locale';

const HomeNewsCard = ({data, likeOrUnlikeNews} : any) => {

    const shareNews = async () => {
        try {
            const result = await Share.share({
                message: 'Share message',
                title: 'Share title',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('activityType: ', result.activityType);
                } else {
                    console.log('result: ', result);
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('dismissed');
            }
        } catch (error) {
            console.error('error:', error);
        }
    };

    return (
      <TouchableOpacity style={styles.card}>
        <View>
          <Image style={styles.cardImage} source={data.image} />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTextSecondary}>
            {formatDistance(new Date(data.date), new Date(), {
              addSuffix: true,
              locale: enUS,
            })}
          </Text>
          <Text style={styles.cardTitle}>{data.title}</Text>
          <View style={styles.cardStats}>
            <TouchableOpacity
              style={styles.cardStatsItem}
              onPress={() => likeOrUnlikeNews(data.id)}>
              <Image
                style={styles.cardStatsItemIcon}
                source={
                  data.isLiked
                    ? require('../assets/homeNewsCardLikeActiveIcon.png')
                    : require('../assets/homeNewsCardLikeIcon.png')
                }
              />
              <Text style={styles.cardTextSecondary}>{data.likes}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardStatsItem}
              onPress={() => Alert.alert('Pressed Comments', 'Pressed Comments')}>
              <Image
                style={styles.cardStatsItemIcon}
                source={require('../assets/homeNewsCardCommentsIcon.png')}
              />
              <Text style={styles.cardTextSecondary}>{data.comments}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.cardStatsItem}
                onPress={() => shareNews()}
            >
              <Image
                style={styles.cardStatsItemIcon}
                source={require('../assets/homeNewsCardShareIcon.png')}
              />
              <Text style={styles.cardTextSecondary}>{data.shared}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.cardMenuBtn}>
          <Image source={require('../assets/homeNewsCadOptionIcon.png')} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardMenuBtn: {
        position: 'absolute',
        top: 15,
        right: 15,
        shadowColor: 'rgba(0,0,0,0.16)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    card: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 10,
    },
    cardImage: {
        width: 105,
        height: 91,
        borderRadius: 10,
    },
    cardInfo: {
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'space-between',
    },
    cardTitle: {
        width: '70%',
    },
    cardStats: {
        flexDirection: 'row',
        gap: 20,
    },
    cardStatsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
    },
    cardStatsItemIcon: {
        width: 14,
        height: 14,
    },
    cardTextSecondary: {
        fontFamily: 'Inter',
        fontSize: 10,
        fontWeight: '500',
        color: '#A3A3A3',
    },
});
export default HomeNewsCard;
