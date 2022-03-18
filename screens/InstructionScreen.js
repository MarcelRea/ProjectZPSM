import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, Image, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';


function InstructionScreen({ navigation }) {
  return (
  <ImageBackground source={require('../img/background.jpg')} style={{width: '100%', height: '100%'}}>
    <View style={styles.container}>
    <Image style={styles.logo} source={require('../img/kk.gif')}/>
    <View style={styles.view3}>
        <Text style={styles.text2}> JAK GRAĆ W GRĘ "KÓŁKO I KRZYŻYK"? </Text>
        <Text style={styles.text3}>NA POCZĄTKU NALEŻY WYBRAĆ TRYB GRY. ABY WYGRAĆ JEDEN Z GRACZY MUSI USTAWIĆ
        TRZY SWOJE ZNAKI (X LUB O) OBOK SIEBIE W PIONIE, POZIOMIE LUB SKOSIE. WSZYSTKIE ZDOBYTE PUNTY SĄ ZLICZANE,
        MOŻNA JE ZDOBYĆ JEDYNIE DZIĘKI ZWYCIĘSTWU.</Text>
    </View>
    <View style={styles.view2}>
      <TouchableHighlight
              underlayColor='green'
              onPress={() => navigation.goBack()}>
              <View style={styles.view1}>
              <Text style={styles.text}> GO BACK MENU </Text>
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
        fontSize:20,
        textAlign:'center',
    },
    view1:{
        backgroundColor:'#CC0000',
        width:200,
        height:70,
        padding:10,
        justifyContent:'center',
    },
    view2:{
        margin:70,
    },
    view3:{
        backgroundColor:'#99FF66',
        width:300,
        height:350,
    },
    text2:{
        color:'#CC0099',
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        margin:10,
    },
    text3:{
        color:'#CC0099',
        marginTop:50,
        margin:15,
        fontSize:15,
        textAlign:'justify',
    },
    logo:{
        margin:30,
        marginTop:-10,
        width:400,
        height:50,
    },
})

export default InstructionScreen;