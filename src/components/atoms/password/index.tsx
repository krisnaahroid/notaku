import React from 'react';
import {TextInput, View, StyleSheet, Image} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './styles'

const Password = props => {
  const [visible, setVisibility] = React.useState(false);

  const icon = !visible ? require('../../../assets/icons/eye-off.png') : require('../../../assets/icons/ios-eye.png');
  const height = (props.height);

  return (
    <View style={{
        display: 'flex',
        marginVertical: (5)
      }}>
      <View style={styles.container}>
            <TextInput
            style={styles.field}
            onChangeText={props.onchange}
            value={props.value}
            placeholder={props.label}
            secureTextEntry={!visible}
            ref={props.innerRef}
            />
            <TouchableWithoutFeedback
            onPress={() => setVisibility(!visible)}
            style={styles.icons}>
                <Image source={icon}/>
            </TouchableWithoutFeedback> 
      </View>
    </View>
  );
};

Password.defaultProps = {
  label: '',
  height: (20),
};



export default Password