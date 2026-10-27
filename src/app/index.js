import {useRouter} from 'expo-router';
import {userState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function RegistrationonScreen() {
    const router = useRouter();
    const[userName, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');


    const handleReview = () => {
        if(!userName || !email || !phoneNumber || !confirmPassword){
            Alert.alert('Error', 'Please fill in all fields');
            return;
    
        }

        if (password != confirmPassword){
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        router.push({
            pathname: '/review',
            params: {userName,email,phoneNumber}}
        );};

return (
    <View style={styles.container}>
        <Text style={styles.title}>Create Your Account</Text>
        <TextInput style={styles.input} placeholder="Username" value={userName} onChangeText={setUserName}/>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail}/>
        <TextInput style={styles.input} placeholder="Phone Number" keyboardTYpe="phone-pad" value={phoneNumber} onChangeTExt={setPhoneNumber}/>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value ={password} onChangeText={setPassword}/>
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword}/>
    
        <Button title="Review Details" onPress={handleReview} />
        </View>

);
}

const styles = StyleSheet.create({
    container:{flex: 1, padding: 20, justifyContent: 'center'},
    title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign:'center'},
        input: {borderWidth: 1, borderColor: '#ccc', padding: 12, marginBottom: 15, borderRadius: 8}}
    );
    
