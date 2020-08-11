import * as React from 'react'
import { AuthContext } from '../../../navigations/provider'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Input, Password } from '../../../components/atoms'
import { Button } from '../../../components/molecules'

import styles from './styles'

interface IState{}

interface IProps{}

const Register: React.SFC = ({ navigation }) => {
    const {register} = React.useContext(AuthContext)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={styles.headerTitle}>Create</Text>
                <Text style={styles.headerTitle}>Account</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.contentTitle}>Sign Up</Text>
                <Input placeholder="Email" onchange={val => setEmail(val)} value={email}/>
                <Password label="password" onchange={val => setPassword(val)} value={password}/>
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button primary={true} title="Register" handler={() => register(email, password)}/>
                    </View>
                    <View>
                        <Button handler={() => navigation.goBack()} title="Sign In"/>
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </View>
            </View>
        </View>
    )
}



export default Register