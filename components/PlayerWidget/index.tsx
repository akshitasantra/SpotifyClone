import React, {useEffect, useState} from 'react';
import { Text, Image, View, ViewStyle, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import styles from './styles';
import { Song } from '../../app/types';
import {Audio}  from "expo-av"
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Sound} from "expo-av/build/Audio/Sound";

const song = {
    id: '1',
    uri: 'https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'notJust Dev Beats',
    artist: 'Vadim',
};

const PlayerWidget = () => {
    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const onPlaybackStatusUpdate = (status) =>{
        setIsPlaying(status.isPlaying);
    }
    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newSound } = await Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        )
        setSound(newSound)
    }

    useEffect(() => {
        playCurrentSong();
    }, [])

    const onPlayPausePress = async () => {
        if(!sound){
            return;
        }
        if(isPlaying){
            await sound.stopAsync();
        } else{
            await sound.playAsync();
        }
    }
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
                    <TouchableOpacity onPress={onPlayPausePress}>
                        <FontAwesome name={isPlaying? 'pause' : 'play'}size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PlayerWidget;
