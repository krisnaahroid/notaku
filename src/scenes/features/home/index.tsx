import * as React from 'react'
import { View, Text, Button } from 'react-native'

import {AuthContext} from '../../../navigations/provider'

interface IProps{}
interface IState{} 

class Home extends React.Component<IProps, IState>{
    constructor(props: IProps){
        super()
        this.state = {}
    }

    static contextType = AuthContext;
    

    public render(){
        const { logout } = this.context;
        const { navigation } = this.props;
        return(
            <View>
                <Text>Home</Text>
                <Button title="Logout" onPress={() => logout()}/>
            </View>
        )
    }
}

export default Home