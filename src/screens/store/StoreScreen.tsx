import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
} from 'react-native';
import { useState } from 'react';
import CourseCard from '../../components/CourseCard';
import CartButton from "../../components/CartButton.tsx";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/slices/cartSlice.ts";

const StoreScreen = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const filters = ['All', 'Modul', 'Course', 'Bootcamp'];

    const data = {
        Modul: [
            {
                id: 1,
                title: 'Business Legalization',
                price: 29,
                oldPrice: 49,
                discount: false,
                discountPercent: '30',
                isFree: true,
                currencySymbol: '$',
                sold: '20',
                meta: '10 Page',
                image: 'https://picsum.photos/200/300',
            },
            {
                id: 2,
                title: 'Business Legalization',
                price: 29,
                oldPrice: 49,
                discount: false,
                discountPercent: '30',
                isFree: false,
                currencySymbol: '$',
                sold: '20',
                meta: '10 Page',
                image: 'https://picsum.photos/200/300',
            },
            {
                id: 3,
                title: 'Business Legalization',
                price: 29,
                oldPrice: 49,
                discount: false,
                discountPercent: '30',
                isFree: true,
                currencySymbol: '$',
                sold: '20',
                meta: '10 Page',
                image: 'https://picsum.photos/200/300',
            },
        ],
        Course: [
            {
                id: 4,
                title: 'Investment Instruments',
                price: 29,
                oldPrice: 49,
                discount: true,
                discountPercent: '30',
                isFree: false,
                currencySymbol: '$',
                sold: '20',
                meta: '10 Page',
                image: 'https://picsum.photos/200/300?2',
            },
        ],
        Bootcamp: [
            {
                id: 5,
                title: 'Business Legalization',
                price: 29,
                oldPrice: 49,
                discount: false,
                discountPercent: '30',
                isFree: false,
                currencySymbol: '$',
                sold: '20',
                meta: '10 Page',
                image: 'https://picsum.photos/200/300?3',
            },
        ],
    };

    const renderSection = (title : any, items : any) => (
        <View style={styles.section}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{title}</Text>
                <Text style={styles.viewMore}>View More</Text>
            </View>
            <FlatList
                horizontal
                data={items}
                renderItem={({ item }) =>
                    <TouchableOpacity key={item} onPress={() => handleAddToCart(item)}>
                        <CourseCard data={item} />
                    </TouchableOpacity>
            }
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );

    const dispatch = useDispatch();

    const handleAddToCart = (item : any) => {
        dispatch(addToCart(item));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <TextInput placeholder="Search something..." style={styles.searchInput} />
                <Image source={require('../../assets/favorite_icon.png')} style={styles.icon} />
                <CartButton />
                {/*<Image source={require('../../assets/cart_icon.png')} style={styles.icon} />*/}
            </View>

            <View style={styles.filters}>
                {filters.map(f => (
                    <TouchableOpacity key={f} onPress={() => setSelectedFilter(f.toLowerCase())}>
                        <Text style={[styles.filterText, selectedFilter === f.toLowerCase() && styles.activeFilter]}>
                            {f}
                        </Text>
                    </TouchableOpacity>
                ))}
                <Image source={require('../../assets/filter_settings_icon.png')} style={styles.filterIcon} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                {(selectedFilter === 'all' || selectedFilter === 'modul') &&
                    renderSection('Modul', data.Modul)}
                {(selectedFilter === 'all' || selectedFilter === 'course') &&
                    renderSection('Course', data.Course)}
                {(selectedFilter === 'all' || selectedFilter === 'bootcamp') &&
                    renderSection('Bootcamp', data.Bootcamp)}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    searchInput: {
        flex: 1,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    icon: {
        width: 22,
        height: 22,
        marginLeft: 10,
    },
    filters: {
        flexDirection: 'row',
        marginBottom: 16,
        justifyContent: 'space-between',
    },
    filterText: {
        marginRight: 10,
        fontSize: 12,
        color: '#888',
    },
    filterIcon: {
        width: 15,
        height: 15,
    },
    activeFilter: {
        color: '#1668E3',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    section: {
        marginBottom: 20,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    viewMore: {
        fontSize: 12,
        color: '#1668E3',
    },
});

export default StoreScreen;
