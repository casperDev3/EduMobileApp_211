import { View, Text, Image, StyleSheet } from 'react-native';

const CourseCard = ({ data }: any) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: data.image }} style={styles.cardWrapper} />

            {data.isFree ? (
                <Text style={[styles.cardType, styles.cardTypeFree]}>FREE</Text>
            ) : data.discount ? (
                <Text style={[styles.cardType, styles.cardTypeSale]}>{data.discountPercent}%</Text>
            ) : null}

            <Text style={styles.cardTitle}>{data.title}</Text>

            <View style={styles.cardPrice}>
                <Text style={[styles.cardPriceDicount, data.isFree && styles.cardPriceFree]}>
                    {(data.currencySymbol && data.isFree) || '$'}
                    {data.isFree ? 'FREE' : data.price}
                </Text>
                {data.discount && (
                    <Text style={styles.cardPriceRegular}>
                        {data.currencySymbol || '$'}{data.oldPrice}
                    </Text>
                )}
            </View>

            <View style={styles.cardDetails}>
                <Text style={styles.sold}>{data.sold} Sold</Text>
                <Text style={styles.meta}>{data.meta}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        position: 'relative',
        width: 180,
        marginRight: 12,
        paddingBottom: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
    },
    cardWrapper: {
        width: '100%',
        height: 140,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 10,
    },
    cardType: {
        position: 'absolute',
        top: 14,
        right: 0,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        fontSize: 12,
        fontWeight: '800',
        color: '#fff',
        zIndex: 1,
    },
    cardTypeFree: {
        backgroundColor: '#1668E3',
    },
    cardTypeSale: {
        backgroundColor: '#FF3A46',
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: '#000',
        marginBottom: 10,
        marginLeft: 10,
    },
    cardPrice: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 10,
    },
    cardPriceDicount: {
        fontSize: 12,
        color: '#FF3A46',
        fontWeight: '600',
        marginRight: 8,
    },
    cardPriceFree: {
        color: '#1668E3',
    },
    cardPriceRegular: {
        fontSize: 10,
        color: '#A3A3A3',
        fontWeight: '500',
        textDecorationLine: 'line-through',
    },
    cardDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        alignItems: 'center',
    },
    meta: {
        fontSize: 10,
        color: '#1668E3',
    },
    sold: {
        fontSize: 10,
        color: '#888',
    },
});

export default CourseCard;
