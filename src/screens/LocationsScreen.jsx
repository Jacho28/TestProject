import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ContentList from '../components/ContentList';

const LocationsScreen = () => {

  return (
    <>
      <View style={style.container}>
        <ContentList endpoint={'location'} />
      </View>
    </>
  );

} 

export default LocationsScreen;

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});