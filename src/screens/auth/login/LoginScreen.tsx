import {Text, TouchableOpacity, View, TextInput, StyleSheet} from 'react-native';
import auth from '../../../utils/auth.ts';
import {useDispatch} from 'react-redux';
import {setToken} from '../../../store/slices/authSlice.ts';

const LoginScreen = () => {
  const dispatch = useDispatch();
  return (
        <View style={styles.container}>
            <Text style={styles.title}>Login with Email</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"

            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                secureTextEntry
            />

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}
                              onPress={async () => {
                                  await auth.setToken('accessToken');
                                  dispatch(setToken('accessToken'));
                              }}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.termsText}>
                By registering, you agree to the <Text style={styles.linkText}>Terms of Service</Text>,{' '}
                <Text style={styles.linkText}>Privacy Policy</Text> and{' '}
                <Text style={styles.linkText}>Cookie Policy</Text>.
            </Text>
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
    },
    forgotPassword: {
        color: '#007bff',
        textAlign: 'center',
        marginBottom: 30,
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#007bff',
        borderRadius: 25,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
    },
    termsText: {
        marginTop: 20,
        fontSize: 12,
        color: '#888',
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    linkText: {
        textDecorationLine: 'underline',
        color: '#007bff',
    },
});

export default LoginScreen;
