import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import { useState } from 'react';
import useFetch from "../hooks/useFetch";
import Card from "./Card";

export default function ContentList ({ endpoint }) {
  const {data, error, isLoading, refetch} = useFetch(endpoint);
  const [selectedId, setSelectedId] = useState(null);

	const renderItem = ({ item }) => {
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
    <View style={styles.container}>
				<FlatList
					data={data.results}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					extraData={selectedId}
					refreshing={false}
					onRefresh={onRefresh}
					ItemSeparatorComponent={() => {}}
				/>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '200',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 60,
    height: 60,
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
