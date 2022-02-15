import React , {useState} from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id:uuidv4(),text:'Eggs' },
    {id:uuidv4(),text:'Milk' },
    {id:uuidv4(),text:'Beef' },
    {id:uuidv4(),text:'Bread' },
    {id:uuidv4(),text:'Juice' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

    return (
    <View style={styles.container}>
      <Header />
      <AddItem/>
      <FlatList style={{marginTop:15}} data={items} renderItem={({item}) => <ListItem item={item}
      deleteItem={deleteItem}/>}
      />
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
    marginTop:60,
    flex: 1,
    backgroundColor:'#09F'
  }
});

export default App;