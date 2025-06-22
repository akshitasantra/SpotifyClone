import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native';

import albumDetails from '../../data/albumDetails'
import SongListItem from '../../components/SongListItem';
import AlbumHeader from "../../components/AlbumHeader";

const _AlbumScreen = () => {
    const route = useRoute();

    useEffect( () => {
        console.log(route);
    }, [])

    return (
        <View>

            <FlatList
                contentContainerStyle={{paddingBottom: 100}}
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={( item ) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={albumDetails}/>}
            />
        </View>
    )
}

export default _AlbumScreen;