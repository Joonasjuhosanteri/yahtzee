import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/style.js'

export default function Gameboard() {

    let board = [];
    const NBR_OF_THROWS = 3;
    const DICE = 5;

    const [throws, setThrows] = useState(NBR_OF_THROWS)
    const [status, setStatus] = useState('')
    const [bonus, setBonus] = useState(0)
    const [selectedDice, setSelectedDice] = useState(new Array(DICE).fill(false))

    const row = [];
    for (let i = 0; i < DICE; i++) {
        row.push(
            <Pressable key={"row" + i}
                onPress={() => selectDice(i)}>
                <MaterialCommunityIcons
                    name={board[i]}
                    key={"row" + i}
                    size={50}
                    color={getDiceColor(i)}>
                </MaterialCommunityIcons>
            </Pressable>
        )
    }

    useEffect(() => {
        checkWinner();
        if (throws === NBR_OF_THROWS) {
            setStatus('Game has not started!');
        } if (throws < 0) {
            setThrows(NBR_OF_THROWS - 1);
        }
    }, [throws])

    function getDiceColor(x) {
        if(board.every((val, x, arr) => val === arr[0])) {
            return "orange";
        } else {
            return selectedDice[x] ? 'black' : 'blue';
        }
    }

    function selectDice(i) {
        let dice = [...selectedDice];
        dice[i] = selectedDice[i] ? false : true;
        setSelectedDice(dice);
    }

    function throwDice() {
        for (let x = 0; x < DICE; x++) {
            if (!selectedDice[x]) {
                let rng = Math.floor(Math.random() * 6 + 1);
                board[x] = 'dice-' + rng;
            }
        }
        setThrows(throws-1);
    }

    function checkWinner() {
        if (board.every((val, i, arr) => val === arr[0]) && throws > 0) {
            setStatus('You won!');
        } else if (board.every((val, i, arr) => val === arr[0]) && throws === 0) {
            setStatus('You won, game over!');
            setSelectedDice(new Array(DICE).fill(false));
        } else if (throws === 0) {
            setStatus('Game over!');
            setSelectedDice(new Array(DICE).fill(false));
        } else {
            return setStatus('Keep throwing!');
        }
    }

    return (
        <View>
            <View></View>
            <Text style={styles.text}>Throws left: {throws}</Text>
            <Text style={styles.text}>{status}</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => throwDice()}>
                <Text style={styles.buttonText}>Throw dice</Text>
            </TouchableOpacity>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.text}>You are {bonus} points away from bonus</Text>
        </View>
    )
}