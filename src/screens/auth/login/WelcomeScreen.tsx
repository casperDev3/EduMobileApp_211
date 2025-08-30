import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter to get closer to Bosedu{'\n'}and explore more</Text>

            <TouchableOpacity style={[styles.button, { backgroundColor: '#1877F2' }]}>
                <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: '#DB4437' }]}>
                <Text style={styles.buttonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: '#8ab4f8' }]} onPress={goToLogin}>
                <Text style={styles.buttonText}>Email</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, { backgroundColor: '#000' }]}>
                <Text style={styles.buttonText}>Apple</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
                Register using Email <Text style={styles.linkText}>Here!</Text>
            </Text>

            <Text style={styles.termsText}>
                By registering, you agree to the <Text style={styles.link}>Terms of Service</Text>,{' '}
                <Text style={styles.link}>Privacy Policy</Text> and{' '}
                <Text style={styles.link}>Cookie Policy</Text>.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    button: {
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    registerText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
    },
    linkText: {
        color: '#007bff',
        textDecorationLine: 'underline',
    },
    termsText: {
        marginTop: 30,
        fontSize: 12,
        color: '#888',
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    link: {
        color: '#007bff',
        textDecorationLine: 'underline',
    },
});

export default WelcomeScreen;
