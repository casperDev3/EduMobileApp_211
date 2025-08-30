import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/StackNavigator';

const CartButton = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const goToCart = () => {
        navigation.navigate('CartScreen');
    };

    return (
        <TouchableOpacity onPress={goToCart}>
            <Image source={require('../assets/cart_icon.png')} style={styles.icon} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 22,
        height: 22,
        marginLeft: 10,
    },
});

export default CartButton;
