import React , {useState}from 'react';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Feather, Entypo } from "@expo/vector-icons";

import {Image ,ScrollView ,FlatList ,TouchableOpacity , Dimensions,StyleSheet,Text,View,Pressable,TextInput,KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown' ;
import axios from "axios";
export default function EditScreenInfo({ path }: { path: string }) {
  
  //api
  const api  = "http://www.omdbapi.com/?" ; 
  const name  = 'matrix' ; 
  //api key
  const apiKey = "apikey=5387b024" ; 

  

 
  const [movies, setMovies] = useState([])

  const getInfoformovies = () => {
    axios.get( 'http://www.omdbapi.com/?apiKey=5387b024&s=BAtman&type=movie' )
    .then((response) => {
      if(response){
        
        setMovies(response.data.Search);
      }
    })

    .catch((error) => {
      console.log(error);
    });
  }
 
  const getInfoforseries = () => {
    axios.get( 'http://www.omdbapi.com/?apiKey=5387b024&s=MAma&type=series' )
    .then((response) => {
      if(response){
        
        setMovies(response.data.Search);
      }
    })

    .catch((error) => {
      console.log(error);
    });
  }


  const getInfoforSearch = () => {
    axios.get( 'http://www.omdbapi.com/?apiKey=5387b024&s='+ text )
    .then((response) => {
      if(response){
        
        setMovies(response.data.Search);
      }
    })

    .catch((error) => {
      console.log(error);
    });
  }
    
  
  const renderItem = ({ item }) => (
    <Item Poster={item.Poster} Title={item.Title} Year={item.Year} Rate={item.Rate}Type={item.Type}/>
     
  );
  
  const Item = ({Year ,  Title, Poster , Rate , Type }) => (
    
    <View style = {styles.moviewcontainer}>
      <Image style={{width:100 , height: 130}}source = {{uri : Poster}} alt="" />
      <View style={styles.info}>
          <Text>Title : {Title}</Text>
          <Text>Year : {Year}</Text>
          <Text>Rate : {Rate}</Text>
          <Text>Type : {Type}</Text>
      </View>
    </View>
  );



  
  function SortByRating(){
    
    movies.sort((a,b) => a.Rate > b.Rate ? 1 : -1);
    movies.map(movie => (movie.Rate));
    setMovies(movies);
  }

  function SortByAlphabetic(){
    movies.sort((a,b) => a.Title > b.Title ? 1 : -1);
    movies.map(movie => (movie.Title));
    setMovies(movies);
  }

  function SortByear(){
    movies.sort((a,b) => a.Year > b.Year ? 1 : -1);
    movies.map(movie => (movie.Year));
    setMovies(movies);
  }

  


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
 
  


  const [text, onChangeText] = React.useState('Search here');
  const [anwser, anwserChange] = React.useState('');

  const Filters = ["Year", "A-Z", "Rate"]
  
  function statemachine(num : any){
      if(num == 0 ){
        alert("year") ;
        SortByear(); 
      }else if(num == 1){
        SortByAlphabetic();
        alert("A-Z") ;
      }else if(num == 2){
        SortByRating();
        alert("Rate") ;
      }
  }

  function searchText(){
    
    getInfoforSearch();
  }

  function press1(){
    //alert('You long-pressed the Movies button!');
    getInfoformovies();
    //alert(movies.map(movie => (movie.Title)));
  }

  function press2(){
    getInfoforseries();
    //alert('You long-pressed the Series button!');
    
    
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
      <Feather onPress={()=>searchText()}
          name="search"
          size={20}
          color="black"
          style={styles.searchbarinside}
        />
        <TextInput style={styles.searchbarinside} onChangeText={onChangeText} value={text}/>
      </View>
      
      
      <View>
        <View>
              <Text style = { styles.resultcontainer}>New Realeases</Text>
              <View >
                <SelectDropdown  data={Filters} defaultButtonText={"Sort by"} buttonStyle = {styles.filter}
                    onSelect={(selectedItem, index) => {
                      statemachine(index)
            
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem
                    }}  
                    rowTextForSelection={(item, index) => {
                      return item
                    }}
                  
                />
              </View>

        </View>
      </View>
      <ScrollView style={styles.searchbarout}>
          <View>
            
            <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    height : '90%', 
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
  },
  realeasrbar : {
    textAlign : 'center'
  },
  filter : {
    color :  'white' , 
    fontSize : 15 , 
    fontStyle : 'italic' ,
    width : 130 ,
    marginTop : 10 , 
    backgroundColor: 'white',
    opacity: 0.9 ,
    borderStyle : 'solid' ,
    borderRadius : 25 ,
  },
  moviewcontainer : {
    opacity: 0.9 ,
    borderRadius : 25 ,
    backgroundColor : 'cyan' ,
    marginRight : 15 ,
    marginLeft : 25  ,
    marginTop: 25 ,
    alignItems : 'center' ,
    flexDirection : 'row'
  },
  info: {
    marginLeft : 15 ,
    fontSize : 15 , 
    fontStyle : 'italic' ,
  }
});
