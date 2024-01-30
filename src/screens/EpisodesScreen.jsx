import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ContentList from '../components/ContentList';

const EpisodesScreen = () => {

    return (
        <>
        <View style={style.container}>
            <ContentList endpoint={'episode'} />
        </View>
        </>
    );

} 

export default EpisodesScreen;

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});