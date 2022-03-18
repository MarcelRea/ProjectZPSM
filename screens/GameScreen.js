import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { View, Text, Button, Image, StyleSheet, ImageBackground, TouchableHighlight, Pressable } from 'react-native';

function GameScreen({ navigation }) {
    const [map, setMap] = useState([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);

    const copyArray = (original) => {
        const copy = JSON.parse(JSON.stringify(original));
        return copy;
    }

    const [turn, setTurn] = useState('x');
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(turn ==='o'){
            bot();
        }
    }, [turn]);

    useEffect(() => {
        const winner = winState(map);
        if (winner) {
          gameWon(winner);
        }
      }, [map]);

    const onPress = (rowIndex, cellIndex) => {
        if (map[rowIndex][cellIndex] !== ''){
            return;
        }

    setMap((exist) => {
        const update = [...exist];
        update[rowIndex][cellIndex] = turn;
        return update;
    });

    setTurn(turn === 'x' ? 'o' : 'x');

    winState();
    }

    const winState = () => {
        for (let i=0; i < 3; i++){
            const isRowXWin = map[i].every((cell) => cell === 'x');
            const isRowOWin = map[i].every((cell) => cell === 'o');
            if(isRowXWin){
                return 'x';
            }
            if(isRowOWin){
                return 'o';
            }
        }

        for (let col = 0; col < 3; col++){
            let isColXWin = true;
            let isColOWin = true;

            for (let row = 0; row < 3; row++){
                if(map[row][col] !== 'x'){
                    isColXWin = false;
                }
                if(map[row][col] !== 'o'){
                    isColOWin = false;
                }
            }
            if(isColXWin){
                return 'x';
            }
            if(isColOWin){
                return 'o';
            }
        }

        let isCrossOneXWin = true;
        let isCrossOneOWin = true;
        let isCrossTwoXWin = true;
        let isCrossTwoOWin = true;
        for(let i = 0; i < 3; i++){
            if(map[i][i] !== 'x'){
                isCrossOneXWin = false;
            }
            if(map[i][i] !== 'o'){
                isCrossOneOWin = false;
            }
            if(map[i][2 - i] !== 'x'){
                isCrossTwoXWin = false;
            }
            if(map[i][2 - i] !== 'o'){
                isCrossTwoOWin = false;
            }
        }

        if(isCrossOneXWin || isCrossTwoXWin){
            return 'x';
        }
        if(isCrossOneOWin || isCrossTwoOWin){
            return 'o';
        }
    };

    const gameWon = (player) => {
        alert(`Player ${player} won`, [
          {
            text: "Restart",
            onPress: reset(),
          },
        ]);
         setTurn('')
            if(turn === ''){
               setCount(count);
            }
            else{
               setCount(count + 1)
               setTimeout(() => {
               reset();
               }, 300);
           }

    };

    const reset = () => {
        setMap([
         ['', '', ''],
         ['', '', ''],
         ['', '', ''],
         ]);
         setTurn('x');
    };

    const resetPoint = () => {
        setCount(0);
    };

    const bot = () => {
        const positionsPossible = [];
        map.forEach((row, rowIndex) => {
            row.forEach((cell, cellIndex) => {
                if(cell === ''){
                    positionsPossible.push({row: rowIndex, col: cellIndex});
                }
            });
        });

        let chosenOption;

              if (!chosenOption) {
                positionsPossible.forEach((positionsPossible) => {
                  const mapCopy = copyArray(map);

                  mapCopy[positionsPossible.row][positionsPossible.col] = "x";

                  const winner = winState(mapCopy);
                  if (winner === "x") {
                    chosenOption = positionsPossible;
                    setTurn('x')
                  }
                });
              }

        if(!chosenOption){
            chosenOption = positionsPossible[Math.floor(Math.random() * positionsPossible.length)];
        }

        if(chosenOption){
        //Włącz albo wyłącz bota
        setTimeout(() => {
        onPress(chosenOption.row, chosenOption.col);
        },300);
        }
    };

  return (
    <View style={styles.container}>
    <ImageBackground source={require('../img/background3.jpg')} style={{width: '100%', height: '100%'}}>
    <Image style={styles.logo} source={require('../img/kk.gif')}/>
    <View style={styles.view1}>
    <TouchableHighlight
        underlayColor='#663d00'
        onPress={() => navigation.goBack()}>
    <View style={styles.view11}>
    <Text style={styles.text}> GO BACK MENU </Text>
    </View>
    </TouchableHighlight>
    <Button onPress={() => reset()} title='Reset Game' color='#663d00'> </Button>
    <View style={styles.viewW}>
    <Button onPress={() => resetPoint()} title='Reset Your Points' color='#663d00'> </Button>
    </View>
    <Text style={styles.countText}> YOUR POINTS: {count} </Text>
    <Text style={styles.currentText}> CURRENT TURN: {turn} </Text>
    <ImageBackground source={require('../img/bck3.png')} style={{width: '100%', height: '83%', alignItems:'center', marginTop:-30, justifyContent:'center'}} resizeMode='contain'>
        <View style={styles.map}>
        {map.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
            {row.map((cell, cellIndex) => (
             <Pressable onPress={() => onPress(rowIndex, cellIndex)} style={styles.cell} key={cellIndex}>
                {cell==='o' && <View style={styles.o}></View>}
                {cell==='x' && (
                    <View style={styles.cross}>
                                    <View style={styles.x}>
                                    </View>
                                    <View style={[styles.x, styles.x2]}>
                                    </View>
                                </View>
                )}
             </Pressable>
        ))}
        </View>
        ))}
        </View>
    </ImageBackground>
    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
       container:{
           flex: 1,
           alignItems: 'center',
           justifyContent: 'center'
       },
       view1:{
           marginTop:20,
       },
       o:{
           width:'82%',
           height:'85%',
           marginTop:'-6%',
           marginLeft:'8%',
           borderRadius:60,
           alignItems:'center',
           justifyContent:'center',
           borderWidth:12,
           borderColor:'#FF6600',
       },
       x:{
           width:'10%',
           height:'105%',
           backgroundColor:'#FF6600',
           position:'absolute',
           marginTop:'-10%',
           left:'44%',
           borderRadius:10,
           transform:[
               {
               rotate:'42deg'
               },
           ],
       },
       x2:{
           transform:[
               {
               rotate:'-42deg'
               },
           ],
       },
       map:{
           width:'100%',
           aspectRatio:1,
           marginTop:'-15.3%',
       },
       cross:{
           flex:1,
       },
       cell:{
           flex:1,
       },
       row:{
           flex:1,
           flexDirection:'row',
       },
       logo:{
           marginTop:20,
           width:400,
           height:50,
       },
       countText:{
           color:'white',
           fontSize:15,
           marginLeft:48,
       },
       viewW:{
           marginTop:1,
       },
       view11:{
           backgroundColor:'#663d00',
           width:'100%',
           height:40,
           marginBottom:1,
           justifyContent:'center',
       },
       text:{
           color:'white',
           fontSize:20,
           textAlign:'center',
      },
      currentText:{
           color:'white',
           marginLeft:215,
           fontSize:15,
           marginTop:-20,
           textTransform: 'uppercase',
      }
})

export default GameScreen;