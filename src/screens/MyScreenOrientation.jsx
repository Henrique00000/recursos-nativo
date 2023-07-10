import * as ScreenOrientation from 'expo-screen-orientation';
import React, { useState } from 'react';
import { View, Button, ScrollView } from 'react-native';


import Footer from '../components/Footer';
import Header from '../components/Header';

function MyScreenOrientation() {
    const [cor, setCor] = useState("#000000");

    async function defaultOrientation(type) {
        if (type === 'ALL') {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.ALL
            );
            setCor('#36fa00')
        } else if (type === 'PORTRAIT') {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT
            );
            setCor('#36fa00')
        } else if (type === 'PORTRAIT_UP') {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_UP
            );
            setCor('#36fa00')
        } else if (type === 'PORTRAIT_DOWN') {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.PORTRAIT_DOWN
            );
            setCor('#36fa00')
        } else if (type === 'LANDSCAPE') {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE
            );
            setCor('#36fa00')
        } else if (type === 'LANDSCAPE_LEFT') {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
            );
            setCor('#36fa00')
        } else if (type === 'LANDSCAPE_RIGHT') {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
            );
            setCor('#36fa00')
        } else if (type === 'OTHER') {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.OTHER
            );
            setCor('#36fa00')
        } else if (type === 'UNKNOWN') {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.UNKNOWN
            );
            setCor('#36fa00')
        } else {
            await ScreenOrientation.lockAsync(
                ScreenOrientation.OrientationLock.DEFAULT
            );
        };
    };

    return (
        <ScrollView >
            <View style={[{ backgroundColor: cor }]}>
                <Header title='Orientação de Tela' />
                <View>
                    <Button style={{ margin: 10 }} title='DEFAULT' onPress={() => defaultOrientation()} />
                </View>

                <View>
                    <Button title='ALL' onPress={() => defaultOrientation('ALL')} />
                </View>

                <View>
                    <Button title='PORTRAIT' onPress={() => defaultOrientation('PORTRAIT')} />
                </View>

                <View>
                    <Button title='PORTRAIT_UP' onPress={() => defaultOrientation('PORTRAIT_UP')} />
                </View>

                <View>
                    <Button title='PORTRAIT_DOWN' onPress={() => defaultOrientation('PORTRAIT_DOWN')} />
                </View>
                <Button title='LANDSCAPE' onPress={() => defaultOrientation('LANDSCAPE')} />

                <View>
                    <Button title='LANDSCAPE_LEFT' onPress={() => defaultOrientation('LANDSCAPE_LEFT')} />
                </View>

                <View>
                    <Button title='LANDSCAPE_RIGHT' onPress={() => defaultOrientation('LANDSCAPE_RIGHT')} />
                </View>

                <View>
                    <Button title='OTHER' onPress={() => defaultOrientation('OTHER')} />
                </View>

                <View>
                    <Button title='UNKNOWN' onPress={() => defaultOrientation('UNKNOWN')} />
                </View>
                </View>
            <Footer text='Sair' />
        </View>
        </ScrollView >
    )
};

export default MyScreenOrientation;
