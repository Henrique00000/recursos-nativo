import * as React from 'react';

import { View, Button } from 'react-native';

import Header from '../components/Header';



const Home = ({ navigation }) => {
    return (
        <View>
            <Header title='Home' />
            <View>
                <Button title='Informações do dispositivo' onPress={() => navigation.navigate('DeviceInfo')} />
                <Button title='Informações da bateria' onPress={() => navigation.navigate('BatteryInfo')} />
                <Button title='Orientação de tela' onPress={() => navigation.navigate('MyScreenOrientation')} />
                <Button title='Notificações' onPress={() => navigation.navigate('Notify')} />
                <Button title='Contatos' onPress={() => navigation.navigate('ContactsInfo')} />
            </View>
        </View>
    )
};

export default Home;