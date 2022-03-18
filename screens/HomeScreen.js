import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, Image, StyleSheet, BackHandler, TouchableOpacity, ImageBackground, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './Welcome';
import * as React from 'react';

function HomeScreen({ navigation }) {
    AsyncStorage.clear();
  return (
  <ImageBackground source={require('../img/background.jpg')} style={{width: '100%', height: '100%'}}>

    <View style={styles.container}>
    <Image style={styles.logo} source={require('../img/kk.gif')}/>
    <WelcomeScreen pagekey={"uniquekey"} title={"Regulamin"} description={"I. POSTANOWIENIA OGÓLNE:               Aplikacja mobilna o nazwie Kółko i Krzyżyk dostępna w systemie Android.                                                                    2.REGULAMIN OGÓLNY:                           Niniejszy Regulamin świadczenia Usług drogą elektroniczną przez Usługodawcę za pośrednictwem Aplikacji.                                   3.KÓŁKO I KRZYŻYK POSTANOWIENIA:    Funkcjonalność Aplikacji polegająca na tym, że Gracze stawiają na przemian kółko i krzyżyk dążąc do zajęcia trzech pól w jednej linii. Wygrywa ten z graczy, któremu jako pierwszemu uda ułożyć się trzy znaki w jednej linii.                                                        4.RODO POSTANOWIENIA OGÓLNE:      Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE."}
    />
      <TouchableHighlight
        underlayColor='#24b24e'
        onPress={() => navigation.navigate('Game')}>
        <View style={styles.view1}>
        <Text style={styles.text}> PLAY </Text>
        </View>
      </TouchableHighlight>

      <View style={styles.view3}>
      <TouchableHighlight
        underlayColor='#24b24e'
        onPress={() => navigation.navigate('Instruction')}>
        <View style={styles.view2}>
        <Text style={styles.text}> HOW TO PLAY? </Text>
        </View>
      </TouchableHighlight>
      </View>

      <TouchableHighlight
        underlayColor='#24b24e'
        onPress={() => navigation.navigate('Authors')}>
        <View style={styles.view2}>
        <Text style={styles.text}> AUTHORS </Text>
        </View>
      </TouchableHighlight>

      <View style={styles.view3}>
      <TouchableHighlight
        underlayColor='#24b24e'
        onPress={()=> BackHandler.exitApp()}>
        <View style={styles.view2}>
        <Text style={styles.text}> QUIT </Text>
        </View>
     </TouchableHighlight>
     </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color:'white',
        fontSize:30,
        textAlign:'center',
    },
    view1:{
        backgroundColor:'#CC0000',
        width:270,
        height:110,
        borderRadius:40,
        justifyContent:'center',
    },
    view2:{
        backgroundColor:'#CC0000',
        width:270,
        height:110,
        padding:10,
        borderRadius:40,
        justifyContent:'center'
    },
    view3:{
        margin:30,
    },
    logo:{
        margin:30,
        marginTop:-10,
        width:400,
        height:50,
    },
})

export default HomeScreen;