import React , {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import { StyleSheet, FlatList, StatusBar } from "react-native";
import ListItem from './ListItem';
import AddItem from './AddItem';
import colors from '../config/colors';
import { ScrollView } from 'react-native-virtualized-view';


const Home = ({title}) => {
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
        <AddItem addItem={addItem} />
        <FlatList style={{ marginVertical: 20, marginHorizontal: 15 }} scrollEnabled={false} data={items} renderItem={({ item }) => <ListItem item={item}
          deleteItem={deleteItem} />} />
      </ScrollView>
  );
};



const styles = StyleSheet.create({
    header: {
   height:60,
   padding:15,
   backgroundColor:colors.primary
  },
  text:{
      color:colors.white,
      fontSize:23,
      textAlign:'center',
  },
  container: {
    flex: 1,
    backgroundColor:colors.secondary
  }
});

export default Home;