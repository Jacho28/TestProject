import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ContentList from '../components/ContentList';
import Card from '../components/Card';

const EpisodesScreen = () => {

    const renderItem = ({ item }) => { 
    return(
      <Card style={styles.card}>
        <Text>{item.id}</Text>
        <Text>{item.name}</Text>
      </Card>
    );
  };

    return (
        <>
        <View style={styles.container}>
            <ContentList endpoint={'episode'} renderItem={renderItem}/>
        </View>
        </>
    ); 
} 

export default EpisodesScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    card: {
      marginBottom: 15,
      width: 370,
      height: 80,
      marginVertical: 9,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf: 'center',
    },
});