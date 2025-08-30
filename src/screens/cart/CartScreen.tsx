import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import {
    incrementQuantity,
    decrementQuantity,
    removeItem,
    toggleSelectItem,
    toggleSelectAll,
} from '../../store/slices/cartSlice.ts';

const CartScreen = () => {
    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);
    const allSelected = items.length > 0 && items.every(item => item.selected);

    const totalPrice = items
        .filter(item => item.selected)
        .reduce((sum, item) => sum + item.price * item.quantity, 0)
        .toFixed(2);

    const renderItem = ({ item } : any) => (
        <View style={styles.card}>
            <CheckBox
                checked={item.selected}
                onPress={() => dispatch(toggleSelectItem(item.id))}
            />
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                <View style={styles.priceRow}>
                    <Text style={styles.price}>${item.price}</Text>
                    {item.discount && <Text style={styles.oldPrice}>${item.oldPrice}</Text>}
                </View>
                <View style={styles.counter}>
                    <TouchableOpacity
                        onPress={() => dispatch(decrementQuantity(item.id))}
                        style={[styles.qtyBtn, item.quantity > 1 && styles.qtyBtnActive]}
                        disabled={item.quantity === 1}
                    >
                        <Text style={[styles.qtyText, item.quantity > 1 && styles.qtyTextActive]}>−</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyNumber}>{item.quantity}</Text>
                    <TouchableOpacity
                        onPress={() => dispatch(incrementQuantity(item.id))}
                        style={[styles.qtyBtn, styles.qtyBtnActive]}
                    >
                        <Text style={[styles.qtyText, styles.qtyTextActive]}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.deleteBtnContainer}>
                <TouchableOpacity
                    onPress={() => dispatch(removeItem(item.id))}
                    style={styles.deleteBtn}
                >
                    <Image source={require('../../assets/delete_icon.png')} style={styles.deleteBtnIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerRow}>
                <CheckBox checked={allSelected} onPress={() => dispatch(toggleSelectAll())} />
                <Text style={styles.selectAll}>Choose All</Text>
            </View>

            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ padding: 12 }}
            />

            <View style={styles.footer}>
                <Text style={styles.totalText}>Total Price</Text>
                <Text style={styles.totalPrice}>${totalPrice}</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    selectAll: {
        fontSize: 16,
        fontWeight: '500',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 10,
        elevation: 2,
    },
    image: {
        width: 120,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    details: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    priceRow: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: 'center',
    },
    price: {
        color: 'red',
        fontSize: 17,
        marginRight: 8,
    },
    oldPrice: {
        color: '#999',
        fontSize: 12,
        textDecorationLine: 'line-through',
    },
    counter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    qtyBtn: {
        backgroundColor: '#eee',
        paddingHorizontal: 6,
        borderRadius: '50%',
    },
    qtyBtnActive: {
        backgroundColor: '#1668E3',
    },
    qtyTextActive: {
        color: '#fff',
    },
    qtyText: {
        fontSize: 16,
    },
    qtyNumber: {
        marginHorizontal: 10,
        fontSize: 16,
    },
    deleteBtnContainer: {
        height: '100%',
        flexDirection: 'column-reverse',
    },
    deleteBtn: {
        paddingHorizontal: 6,
    },
    deleteBtnIcon: {
        width: 20,
        height: 20,
    },
    footer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: '#eee',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    totalText: {
        fontSize: 16,
        fontWeight: '500',
    },
    totalPrice: {
        fontSize: 16,
        color: 'red',
        fontWeight: '600',
    },
    button: {
        marginBottom: 46,
        marginHorizontal: 20,
        paddingVertical: 18,
        borderRadius: 45,
        backgroundColor: '#1668E3',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
});

export default CartScreen;
