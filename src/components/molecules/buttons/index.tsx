import * as React from 'react'
import { TouchableWithoutFeedback, Text, StyleSheet, View } from 'react-native'

interface IProps{
    primary?: boolean;
    title: string;
    handler: () => void;
}

const Button: React.SFC<IProps> = props => {

    return(
        <TouchableWithoutFeedback onPress={props.handler}>
            <View style={[styles.container, props.primary ? styles.primary : styles.secondary]}>
             <Text style={props.primary ? styles.textPrimary : styles.textSecondary}>{props.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 45,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: 'center',
        borderColor: 'blue',
        borderWidth: 1,
    },
    primary: {
        backgroundColor: 'blue',
    },
    secondary: {
        borderColor: 'blue',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    textPrimary: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600'
    },
    textSecondary: {
        color: 'blue',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default Button