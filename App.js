import React , {useState} from "react";
import { StyleSheet, View, FlatList, Alert,ScrollView, StatusBar } from "react-native";
import Header from './app/components/Header';
import { v4 as uuidv4 } from 'uuid';
import ListItem from './app/components/ListItem';
import AddItem from './app/components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id:uuidv4(),text:'Eggs' },
    {id:uuidv4(),text:'Milk' },
    {id:uuidv4(),text:'Beef' },
    {id:uuidv4(),text:'Bread' },
    {id:uuidv4(),text:'Juice' }, 
    {id:uuidv4(),text:'Eggs' },
    {id:uuidv4(),text:'Milk' },
    {id:uuidv4(),text:'Beef' },
    {id:uuidv4(),text:'Bread' },
    {id:uuidv4(),text:'Juice' }, 
    {id:uuidv4(),text:'Eggs' },
    {id:uuidv4(),text:'Milk' },
    {id:uuidv4(),text:'Beef' },
    {id:uuidv4(),text:'Bread' },
    {id:uuidv4(),text:'Juice' }, 
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

  const addItem = text => {
    if(!text){
        Alert.alert('Erro','Campo não pode estar vazio', [{text:'Ok'}]);
    }
    else{
      setItems(prevItems => {
        return [{id: uuidv4(),text},...prevItems];
      });
    }
  }

    return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <AddItem addItem={addItem}/>
      <FlatList style={{marginVertical:20,marginHorizontal:15}} scrollEnabled={false} data={items} renderItem={({item}) => <ListItem item={item}
      deleteItem={deleteItem}/>}
      />
    </ScrollView>
  );
};



const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor:'#09F'
  }
});

export default App;