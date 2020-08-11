import * as React from 'react'
import { TextInput, StyleSheet } from 'react-native'

interface IProps{
    value: string;
    secure?: boolean;
    placeholder?: string;
    onchange: () => void;
    keyType?: string;
    innerRef?: any;
    submit?: () => void;
}

const Input: React.SFC<IProps> = props => {
    return(
        <TextInput 
        ref={props.innerRef} 
        style={styles.field} 
        value={props.value} 
        secureTextEntry={props.secure} 
        placeholder={props.placeholder} 
        onChangeText={props.onchange} 
        onSubmitEditing={props.submit}
        returnKeyType={props.keyType}/>
    )
}

const styles = StyleSheet.create({
    field: {
        width: '100%',
        height: 45,
        backgroundColor: '#F3F4FA',
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 30
    }
})

export default Input