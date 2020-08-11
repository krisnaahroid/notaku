import * as React from 'react'
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native'
import { Button } from '../../../components/molecules'
import { Input } from '../../../components/atoms'

const { width, height } = Dimensions.get('window');

const Onboarding: React.SFC = ({navigation}) => {

   
    return (
        <View style={styles.container}>
            <Image style={{width, height: height - 400}} source={require('../../../assets/images/Illustration.png')} resizeMode="cover"/>
            <View style={styles.content}>
                <View style={styles.contentTitle}>
                    <Text style={styles.title}>What is your</Text>
                    <Text style={styles.title}>monthly budget?</Text>
                    <Text style={styles.subtitle}>Getting a handle on your income and expenses can be eye-opening, humbling and empowering all at the same time.</Text>
                </View>
                <View style={styles.form}>
                    <Input placeholder="Amounts"/>
                </View>
                <Button title="Continue" handler={() => navigation.navigate("Home")}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: 'pink',
        width: width,
        height: height - 400
    },
    content: {
        flex: 1,
        padding: 30
    },
    contentTitle: {
        marginTop: 0
    },
    title: {
        color: "#151834",
        fontSize: 24,
        fontWeight: '600'
    },
    subtitle: {
        color: '#656567',
        fontSize: 14,
        fontWeight: '400',
        marginTop: 15
    },
    form: {
        marginTop: 30
    }
})

export default Onboarding