import * as React from 'react'
import { AuthContext } from '../../../navigations/provider'
import { View, Text, StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Input, Password } from '../../../components/atoms'
import { Button } from '../../../components/molecules'

import styles from './styles'


const Login: React.SFC = ({ navigation }) => {
    const {login} = React.useContext(AuthContext)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const ref2 = React.useRef()

    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={styles.headerTitle}>Welcome</Text>
                <Text style={styles.headerTitle}>Back!</Text>
            </View>
            <KeyboardAvoidingView style={{flex: 1}} behavior="height" >
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Sign In</Text>
                    <Input placeholder="Email" onchange={val => setEmail(val)} value={email} keyType="next" 
                    submit={() => ref2.current.focus()}/>
                    <Password innerRef={ref2} label="password" onchange={val => setPassword(val)} value={password}/>
                    <View style={styles.buttons}>
                        <View style={styles.button}>
                            <Button primary={true} title="Sign In" handler={() => login(email, password)}/>
                        </View>
                        <View>
                            <Button handler={() => navigation.navigate("Register")} title="Sign Up"/>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.forgot}>Forgot your password?</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}



export default Login