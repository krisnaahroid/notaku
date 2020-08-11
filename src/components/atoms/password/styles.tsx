import * as React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 45,
      backgroundColor: '#F3F4FA',
      borderRadius: 10,
      paddingLeft: 15,
    },
    icons: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50
    },
    field: {
      width: '85%'
    }   
});

export default styles