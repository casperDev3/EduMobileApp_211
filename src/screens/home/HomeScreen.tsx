import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Slider from '../../components/Slider.tsx';
import HomeNewsCard from '../../components/HomeNewsCard.tsx';
import {useState} from 'react';

const userInfo = {
    username: 'John Snow',
    coupons: '5',
    points: '1000',
};

const HomeScreen = () => {
    const [news, setNews] = useState<any[]>([
        {
            id: 1,
            image: require('../../assets/homeNewsCadImage.png'),
            date: new Date('2025-05-25T11:45:00Z'),
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            likes: 12,
            comments: 5,
            shared: 3,
            isLiked: true,
        },
        {
            id: 2,
            image: require('../../assets/homeNewsCadImage.png'),
            date: new Date('2025-05-25T11:45:00Z'),
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            likes: 12,
            comments: 5,
            shared: 3,
            isLiked: false,
        },
        {
            id: 3,
            image: require('../../assets/homeNewsCadImage.png'),
            date: new Date('2025-05-25T11:45:00Z'),
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            likes: 12,
            comments: 5,
            shared: 3,
            isLiked: true,
        },
        {
            id: 4,
            image: require('../../assets/homeNewsCadImage.png'),
            date: new Date('2025-05-25T11:45:00Z'),
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            likes: 12,
            comments: 5,
            shared: 3,
            isLiked: false,
        },
        {
            id: 5,
            image: require('../../assets/homeNewsCadImage.png'),
            date: new Date('2025-05-25T11:45:00Z'),
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            likes: 12,
            comments: 5,
            shared: 3,
            isLiked: false,
        },
        {
            id: 6,
            image: require('../../assets/homeNewsCadImage.png'),
            date: new Date('2025-05-25T11:45:00Z'),
            title: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
            likes: 12,
            comments: 5,
            shared: 3,
            isLiked: false,
        },
    ]);

    const likeOrUnlikeNews = (id: number) => {
        const updatedNews = news.map(item =>
            item.id === id ? { ...item,
                isLiked: !item.isLiked,
                likes: item.isLiked ? item.likes - 1 : item.likes + 1 } : item
        );
        setNews(updatedNews);
    };

  return (
    <ScrollView style={{backgroundColor: 'rgba(255,255,255,0.93)'}}>
        <View style={styles.headerBackground}/>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerSearchArea} >
                    <Image
                        style={styles.headerSearchIcon}
                        source={require('../../assets/homeSearchIcon.png')}
                    />
                    <TextInput
                        style={styles.headerSearch}
                        placeholder="Search something..."
                        placeholderTextColor="#FFFFFF"
                    />
                    <TouchableOpacity>
                        <Image
                            style={{width: 16.67, height: 20.83}}
                            source={require('../../assets/homeCartIcon.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{width: 18.75, height: 20.84}}
                            source={require('../../assets/homeNotificationIcon.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerUserInfo}>
                    <Text style={styles.headerUserName}>
                        Hello, {userInfo.username}
                    </Text>
                    <View style={styles.headerUserPointsArea}>
                        <View style={styles.headerUserPointsBlock}>
                            <Image
                                style={{width: 20, height: 16}}
                                source={require('../../assets/homeCouponIcon.png')}
                            />
                            <Text style={styles.headerUserPointsText}>
                                {userInfo.coupons}
                            </Text>
                        </View>
                        <View style={styles.headerUserPointsBlock}>
                            <Image
                                style={{width: 20, height: 20}}
                                source={require('../../assets/homePointsIcon.png')}
                            />
                            <Text style={styles.headerUserPointsText}>
                                {userInfo.points}
                            </Text>
                            <Text style={styles.headerUserPointsTextUnit}>
                                pts
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        <Slider/>
        <View style={styles.container}>
            <View style={{marginBottom: 62}}>
                <View style={styles.features}>
                    <TouchableOpacity
                        style={styles.featuresItem}
                        onPress={() => console.log('Module')}
                    >
                        <View style={styles.featuresIconArea}>
                            <Image
                                style={styles.featuresItemIcon}
                                source={require('../../assets/homeFeaturesModuleIcon.png')}
                            />
                        </View>
                        <Text style={styles.featuresItemText}>
                            Module
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.featuresItem}
                        onPress={() => console.log('Course')}
                    >
                        <View style={styles.featuresIconArea}>
                            <Image
                                style={styles.featuresItemIcon}
                                source={require('../../assets/homeFeaturesCourseIcon.png')}
                            />
                        </View>
                        <Text style={styles.featuresItemText}>
                            Course
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.featuresItem}
                        onPress={() => console.log('Challenge')}
                    >
                        <View style={styles.featuresIconArea}>
                            <Image
                                style={styles.featuresItemIcon}
                                source={require('../../assets/homeFeaturesChallengeIcon.png')}
                            />
                        </View>
                        <Text style={styles.featuresItemText}>
                            Challenge
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.featuresItem}
                        onPress={() => console.log('Bootcamp')}
                    >
                        <View style={styles.featuresIconArea}>
                            <Image
                                style={styles.featuresItemIcon}
                                source={require('../../assets/homeFeaturesBootcampIcon.png')}
                            />
                        </View>
                        <Text style={styles.featuresItemText}>
                            Bootcamp
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.featuresItem}
                        onPress={() => console.log('Others')}
                    >
                        <View style={styles.featuresIconArea}>
                            <Image
                                style={styles.featuresItemIcon}
                                source={require('../../assets/homeFeaturesOthersIcon.png')}
                            />
                        </View>
                        <Text style={styles.featuresItemText}>
                            Others
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.joinMember}>
                    <View style={styles.joinMemberContent}>
                        <Image
                            style={styles.joinMemberContentIcon}
                            source={require('../../assets/homeJoinMemberIcon.png')}
                        />
                        <View>
                            <Text style={styles.joinMemberContentTitle}>
                                Increase your Knowledge
                            </Text>
                            <Text style={styles.joinMemberContentText}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.joinMemberBtn}
                        onPress={() => console.log('Join')}
                    >
                        <Text style={styles.joinMemberBtnText}>
                            Join Member
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.news}>
                <View style={styles.newsHeader}>
                    <Text style={styles.newsHeaderText}>
                        News
                    </Text>
                    <TouchableOpacity
                        onPress={() => console.log('View More')}
                    >
                        <Text style={styles.newsHeaderBtnText}>
                            View More
                        </Text>
                    </TouchableOpacity>
                </View>
                {news.map((item) => (
                    <HomeNewsCard key={item.id} data={item} likeOrUnlikeNews={likeOrUnlikeNews}/>
                ))}
            </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    headerBackground: {
        width: '100%',
        height: 242,
        backgroundColor: '#014BBA',
        position: 'absolute',
        zIndex: -1,
    },
    container: {
        paddingHorizontal: 20,
    },
    // header
    header: {

    },
    headerSearchArea: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 60,
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    headerSearch: {
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 50,
        height: 36,
        width: '84%',
        color: '#FFFFFF',
        fontSize: 12,
        paddingHorizontal: 30,
    },
    headerSearchIcon: {
        position: 'absolute',
        left: 12,
        width: 11.5,
        height: 12.05,
    },
    // headerUserInfo
    headerUserInfo: {
        backgroundColor: '#FFFFFF',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18,
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    headerUserName: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '600',
    },
    headerUserPointsArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    headerUserPointsBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    headerUserPointsText: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: '600',
    },
    headerUserPointsTextUnit: {
        fontFamily: 'Inter',
        fontSize: 10,
        fontWeight: '500',
        color: '#A3A3A3',
    },
    // features
    features: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: '#EAF2FF',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    featuresItem: {
        alignItems: 'center',
        gap: 5,
    },
    featuresIconArea: {
        backgroundColor: '#EAF2FF',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
    },
    featuresItemIcon: {
        width: 24,
        height: 24,
    },
    featuresItemText: {
        fontFamily: 'Inter',
        fontSize: 8,
        fontWeight: '500',
    },
    // joinMember
    joinMember: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#EAF2FF',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        paddingTop: 20,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#C5DCFF',
        position: 'absolute',
        bottom: -47,
        zIndex: -1,
    },
    joinMemberContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    joinMemberContentIcon: {
        width: 23,
        height: 23,
    },
    joinMemberContentTitle: {
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: '600',
        color: '#1668E3',
    },
    joinMemberContentText: {
        fontFamily: 'Inter',
        fontSize: 6,
        fontWeight: '400',
        color: '#A3A3A3',
    },
    joinMemberBtn: {
        backgroundColor: '#C5DCFF',
        borderColor: '#7BAFFF',
        borderWidth: 1,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 7,
    },
    joinMemberBtnText: {
        fontFamily: 'Inter',
        fontSize: 8,
        fontWeight: '700',
        color: '#1668E3',
    },
    // news
    news: {},
    newsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    newsHeaderText: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '600',
    },
    newsHeaderBtnText: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '500',
        color: '#7BAFFF',
    },
});
export default HomeScreen;
