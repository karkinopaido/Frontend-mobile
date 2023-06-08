import React , {useState}from 'react';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Feather, Entypo } from "@expo/vector-icons";


import {ScrollView ,FlatList ,TouchableOpacity , Dimensions,StyleSheet,Text,View,Pressable,TextInput,KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native' ;
export default function EditScreenInfo({ path }: { path: string }) {
  
  const renderitem = null ;
  const ItemData = [
    {
      id: 13,
      name: 'b',
      year:'2001',
    },
    {
      id: 41,
      name: 'a',
      year:'1999',
    },
    {
      id: 12,
      name: 'c',
      year:'4002',
    },
    {
      id: 132,
      name: 'd',
      year:'2003',
    },
    {
      id: 123123123123,
      name: 'f',
      year:'1820',
    },
    {
      id: 44551,
      name: 'e',
      year:'1300',
    },
  ];


  const ItemData2 = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'giorgos',
      year:'',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'aggelos',
      year:'',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'ilias',
      year:'',
    },
  ];

  
  const [listItems, setListItems] = useState(ItemData);
  
  function SortByRating(){
    ItemData.sort((a,b) => a.id > b.id ? 1 : -1);
    setListItems(ItemData);
  }

  function SortByAlphabetic(){
    ItemData.sort((a,b) => a.name > b.name ? 1 : -1);
    setListItems(ItemData);
  }

  function SortByear(){
    ItemData.sort((a,b) => a.year > b.year ? 1 : -1);
    setListItems(ItemData);
  }

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View>
        <Text onPress={() => getItem(item)}>
          {item.name}
          {item.id}
          {item.year}
        </Text>
      </View>
    );
  };


  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
          style={{
              marginTop : 12,
              height: 0.5,
              width: '100%',
              backgroundColor: '#C8C8C8'
          }}
      />
    );
  };    
 
  const getItem = (item) => {
    //Function for click on an item
    alert('Id: ' + item.id + '\n Name: ' + item.name);
  };


  const [text, onChangeText] = React.useState('Search here');
  const [anwser, anwserChange] = React.useState('');

  const Filters = ["Year", "A-Z", "Rate"]
  

  function press1(){
    alert('You long-pressed the Movies button!');
    setListItems(ItemData2);

  }

  function press2(){
    
    alert('You long-pressed the Series button!');
    SortByear();
    
  }

  return (
    <View  >
      <View style={styles.getStartedContainer}>
      <TouchableOpacity style = {styles.Pressablecontainer}  onPress={()=>press1()} >
            <Text style = {styles.buttonstyle}>Movies</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.Pressablecontainer } onPress={()=>press2()}>
            <Text style = {styles.buttonstyle}>Series</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.searchbar}>
      <Feather
          name="search"
          size={20}
          color="black"
          style={styles.searchbarinside}
        />
        <TextInput style={styles.searchbarinside} onChangeText={onChangeText} value={text}/>
      </View>
      
      
      <View>
        <View>
              <Text style={styles.resultcontainer}>New Realeases</Text>
              <View>
                    
              </View>

        </View>
      </View>
      <ScrollView>
          <View style={styles.searchbarout} >{}
            <FlatList style={styles.searchcontent}
            data = {listItems} 
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ ItemView}/>
          </View>
       
      </ScrollView>
      
    </View >
    
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    flexDirection : 'row',
  },
  Pressablecontainer:{
    marginLeft : 20 ,
    marginRight :20 ,
    alignItems : 'center',
    fontStyle : 'italic' ,
  },
  buttonstyle : {
    fontStyle : 'italic' ,
    color : 'white',
    fontSize: 25,
    fontWeight: 'bold',
    borderStyle : 'solid' ,
    borderColor : 'red',
    borderRadius : 80 ,
    width : 100 ,
    height : 40  ,
    alignItems : 'center' ,
    textAlign : 'center' ,
    backgroundColor: 'white',
    opacity: 0.9
  },
  searchbar:{
    marginTop :55,
    textAlign : 'center',
    flexDirection : 'row' ,
    alignItems : 'center',
    fontSize : 30 ,
    width : 300,
    borderColor : 'white' ,
    borderStyle : 'solid' ,
    borderRadius : 80 ,
    fontsize : 23 ,
    backgroundColor: 'white',
    opacity: 0.9
  
  },
  searchbarinside:{
    textAlign : 'center',
    marginLeft : 10 
  },
  searchbvarResult:{
    fontSize : 25 ,
    color : '#b22222',
    textAlign : 'center',
  },
  searchbarout:{
    marginTop : 10 ,
    width :300 ,
    borderColor : 'blue' ,
    borderStyle : 'solid' ,
    height : '80%', 
    borderRadius : 15 ,
    backgroundColor: 'white',
    opacity: 0.9
  },
  searchcontent:{
    marginTop : 18
  },
  resultcontainer:{
    marginTop : 35 , 
    fontSize : 18 ,
    fontStyle : 'italic' ,
    fontWeight: 'bold',
  }
  
  
});
