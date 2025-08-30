import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
    { id: '1', title: 'Слайд 1', image: require('../assets/sliderImage.png'), discountPercent: 25 },
    { id: '2', title: 'Слайд 2', image: require('../assets/sliderImage.png'), discountPercent: 30 },
    { id: '3', title: 'Слайд 3', image: require('../assets/sliderImage.png'), discountPercent: 50 },
    { id: '4', title: 'Слайд 4', image: require('../assets/sliderImage.png'), discountPercent: 99 },
];

export default function Slider() {
    const flatListRef = useRef<FlatList<any>>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const ITEM_WIDTH = width * 0.9 + 10;

    const scrollToIndex = (index: number) => {
        flatListRef.current?.scrollToOffset({
            offset: index * ITEM_WIDTH,
            animated: true,
        });
        setActiveIndex(index);
    };

    return (
        <View>
            <FlatList
                ref={flatListRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={slides}
                decelerationRate="fast"
                keyExtractor={(item) => item.id}
                snapToInterval={ITEM_WIDTH}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / (ITEM_WIDTH));
                    setActiveIndex(index);
                }}
                renderItem={({ item }) => (
                    <View style={[
                        styles.slide,
                        item.id === slides[0].id && styles.firstSlide,
                        item.id === slides[slides.length - 1].id && styles.lastSlide,
                    ]}>
                        <Image
                            source={item.image}
                            style={styles.bannerImage}
                        />

                        <View style={styles.discountTag}>
                            <Text style={styles.discountTitle}>Get Disc.</Text>
                            <Text style={styles.discountPercent}>{item.discountPercent}% OFF</Text>
                            <TouchableOpacity style={styles.getButton}>
                                <Text style={styles.getButtonText}>Get it</Text>
                            </TouchableOpacity>
                            <Text style={styles.terms}>* Terms and condition apply</Text>
                        </View>
                    </View>
                )}
            />
            <View style={styles.buttons}>
                {slides.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.button,
                            activeIndex === index && styles.buttonActive,
                        ]}
                        onPress={() => scrollToIndex(index)}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    slide: {
        width: width * 0.9,
        height: 120,
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 5,
        position: 'relative',
    },
    firstSlide: {
        marginLeft: width * 0.05,
    },
    lastSlide: {
        marginRight: width * 0.05,
    },
    bannerImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    discountTag: {
        position: 'absolute',
        top: 5,
        left: width * 0.03,
        backgroundColor: '#E12632',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 10,
        width: 74,
        alignItems: 'center',
    },
    discountTitle: {
        color: '#ffffff',
        fontSize: 10,
        fontWeight: '600',
        fontFamily: 'Inter',
    },
    discountPercent: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '800',
        fontFamily: 'Inter',
        width: 38,
    },
    getButton: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EAF2FF',
        paddingVertical: 3,
        paddingHorizontal: 14,
        alignSelf: 'flex-start',
        marginTop: 2,
        marginLeft: 5,
    },
    getButtonText: {
        color: '#FFFFFF',
        fontSize: 6,
        fontWeight: '700',
    },
    terms: {
        color: '#fff',
        fontSize: 6,
        marginTop: 2,
        marginLeft: 5,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    button: {
        width: 6,
        height: 6,
        borderRadius: 50,
        marginHorizontal: 5,
        backgroundColor: '#E0E0E0',
    },
    buttonActive: {
        width: 21,
        height: 6,
        borderRadius: 10,
        backgroundColor: '#1668E3',
    },
});
