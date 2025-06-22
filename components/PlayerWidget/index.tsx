import React from 'react';
import { Text, Image, View, ViewStyle } from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import styles from './styles';
import { Song } from '../../app/types';

const song = {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
};

const PlayerWidget = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <AntDesign name="hearto" size={30} color={"white"}/>
                    <Entypo name="controller-play" size={30} color="white" />
                </View>
            </View>
        </View>
    )
}

export default PlayerWidget;
