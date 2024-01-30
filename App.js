import { Text, Image } from 'react-native';
import useFetch from './src/hooks/useFetch';
import Card from './src/components/Card';
import { useState } from 'react';
import TabNavigator from './src/navigation/TabNavigator';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const {data, error, isLoading, refetch} = useFetch('character');
  const [selectedId, setSelectedId] = useState(null);
  //const { id, name, status, species, type, gender, location, image } = data;
  //console.log(location);
  //console.log(data);

  const renderItem = ({ item }) => {
    // console.log(item);
    return(
      <Card style={styles.card}>
        <Image 
          src={item.image} 
          style={styles.image}
        />
        <Text>{item.name}</Text>
      </Card>
    );
  };

  const onRefresh = () => {

  };


  return (
    <>
      <StatusBar translucent={false} style='light'/>
      <TabNavigator />
    </>
  );
}

