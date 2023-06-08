import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  ImageBackground,
} from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { View } from '../../components/Themed';

export default function TabOneScreen() {


  const image = {uri: 'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/04/04/16806167695710.jpg'};


  return (
    <View  style={styles.container}>
      <ImageBackground  source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.title}>ERT FLIX</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      </ImageBackground >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontStyle : 'italic' ,
    marginTop : '60%' ,
    fontSize: 40,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },image: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
});
