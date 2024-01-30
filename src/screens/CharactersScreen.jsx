import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ContentList from '../components/ContentList';

const CharactersScreen = () => {

    return (
      <>
        <View style={style.container}>
            <ContentList endpoint={'character'} />
        </View>
        </>
    );

} 

export default CharactersScreen;

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});