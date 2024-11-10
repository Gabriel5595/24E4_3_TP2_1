import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from './components/ListItems';

export default function App() {
  const items = [
    { id: '1', text: 'Item A' },
    { id: '2', text: 'Item B' },
    { id: '3', text: 'Item C' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem text={item.text} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});
