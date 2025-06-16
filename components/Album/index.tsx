import * as React from 'react';
import { View, Image, Text} from 'react-native';
import styles from '../Album/styles';
export type AlbumProps = {
    album:{
        id: string;
        imageUri: string;
        artistsHeadline: string;
    }
}
const AlbumComponent = (props: AlbumProps) => (
    <View style={styles.container}>
        <Image source ={{uri: props.album.imageUri}} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
)

export default AlbumComponent;