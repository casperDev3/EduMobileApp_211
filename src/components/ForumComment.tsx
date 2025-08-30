import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import { formatDistance } from 'date-fns';
import { enUS } from 'date-fns/locale';

const ForumComment = ({comment} : any) => {
    const { commentator } = comment;
    // @ts-ignore
    return (
    <>
        <View key={comment.id} style={styles.comment}>
            <Image
                source={require('../assets/tech_events_img.jpg')}
                style={styles.commentCreatorAvatar}
            />
            <View style={styles.commentCloud}>
                <View style={styles.commentCloudCreator}>
                    <View style={styles.commentCloudCreatorInfo}>
                        <View style={styles.commentCloudCreatorInfoName}>
                            <Text style={styles.commentCloudCreatorInfoNameTxt}>
                                {commentator?.name}
                            </Text>
                            { commentator?.approved && <Image
                                source={require('../assets/Verify.png')}
                                style={styles.commentCloudCreatorInfoApproved}
                            />}
                        </View>
                        <Text style={styles.commentCloudCreatorDetails}>
                            {commentator?.poster} | {commentator?.role}
                        </Text>
                    </View>
                </View>
                <View style={styles.commentCloudContent}>
                    <Text style={styles.commentCloudContentText}>
                        {comment.comment}
                    </Text>
                </View>
            </View>
            <View style={styles.commentLike}>
                <Image
                    source={require('../assets/forumCommentLikeIcon.png')}
                    style={styles.commentLikeIcon}
                />
                <Text style={styles.commentLikeCount}>
                    {comment.likes}
                </Text>
            </View>
        </View>
        <View style={styles.commentAdditionalInfo}>
            <Text style={styles.commentTime}>
                {formatDistance(new Date(comment.commentedAt), new Date(), {
                    addSuffix: true,
                    locale: enUS,
                })}
            </Text>
            {comment.replies > 0 &&
                <>
                    {/* eslint-disable-next-line react-native/no-inline-styles */}
                    <View style={{width: 4, height: 4, borderRadius: 50, backgroundColor: '#B8B8B8'}} />
                    <TouchableOpacity>
                        <Text style={styles.commentReply}>{comment.replies} Reply</Text>
                    </TouchableOpacity>
                </>
            }
        </View>
    </>
    );
};

const styles = StyleSheet.create({
    comment: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 8,
        width: '83%',
    },
    // comment avatar
    commentCreatorAvatar: {
        minHeight: 28,
        maxHeight: 28,
        minWidth: 28,
        maxWidth: 28,
        borderRadius: 50,
    },
    commentCloud: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'rgba(0,0,0,0.16)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
        backgroundColor: '#fff',
        // marginRight: 40,
        width: 299,
    },
    commentCloudCreatorInfo: {
        marginLeft: 0,
    },
    commentCloudCreator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    commentCloudCreatorInfoNameTxt: {
        fontSize: 12,
        fontWeight: '600',
    },
    commentCloudCreatorDetails: {
        fontSize: 8,
        fontWeight: '500',
        color: '#7A7A7A',
    },
    commentCloudCreatorInfoName: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    commentCloudCreatorInfoApproved: {
        minHeight: 16,
        maxHeight: 16,
        minWidth: 16,
        maxWidth: 16,
        marginLeft: 4,
    },
    commentCloudContent: {
        // flexDirection: 'row',
        // alignItems: 'flex-start',
        // justifyContent: 'space-between',
    },
    commentCloudContentText: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Inter',
        color: '#3D3D3D',
    },

    commentLike: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    commentLikeIcon: {
        width: 18.33,
        height: 17.42,
    },
    commentLikeCount: {
        fontSize: 10,
        fontWeight: '600',
        color: '#8F8F8F',
        fontFamily: 'Inter',
    },
    commentAdditionalInfo: {
        flexDirection: 'row',
        gap: 10,
        marginLeft: 40,
        marginBottom: 15,
        alignItems: 'center',
    },
    commentTime: {
        fontSize: 10,
        fontWeight: '500',
        fontFamily: 'Inter',
        color: '#B8B8B8',
    },
    commentReply: {
        fontSize: 10,
        fontWeight: '500',
        fontFamily: 'Inter',
        color: '#1668E3',

    },
});

export default ForumComment;
