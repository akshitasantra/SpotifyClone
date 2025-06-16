import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const album = {
    id: '11',
    name: 'Good vibes',
    by: 'Spotify',
    numberOfLikes: 38,
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
    songs: [{
        id:'1',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'High on You',
        artist: 'Helen',
    },
    {
        id:'2',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'Lorem Ipsum',
        artist: 'Helen',
    },
    {
        id:'3',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'Hello from the other side',
        artist: 'Helen',
    },
    {
        id:'4',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'High on You',
        artist: 'Helen',
    }]
}
const AlbumScreen = () => {
    const route = useRoute();

    useEffect( () => {
        console.log(route);
    }, [])

    return (
        <View>
            <Text style={{color: 'white'}}>Hello from Album Screen</Text>
        </View>
    )
}

export default AlbumScreen;