import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={styles.container}>
            <Text>The Game is over</Text>
            <Text>Number of Rounds: {props.roundsNum}</Text>
            <Text>Number was: {props.userNum}</Text>
            <Button title='New Game' onPress={props.onRestart} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;
