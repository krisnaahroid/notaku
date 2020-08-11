import * as React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2434D0',
        flex: 1
    },
    header:{
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30
    },
    headerTitle:{
        color: '#fff',
        fontSize: 32
    },
    content: {
        backgroundColor: '#ffffff',
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: height - (height - 500),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    contentTitle: {
        marginBottom: 30,
        color: '#151834',
        fontSize: 18,
        fontWeight: '600'
    },
    buttons: {
        marginTop: 50
    },
    button: {
        marginBottom: 20
    },
    footer: {
        marginTop: 30,
        alignItems: "center"
    },
    forgot: {
        fontSize: 14,
        fontWeight: '400'
    }
})

export default styles