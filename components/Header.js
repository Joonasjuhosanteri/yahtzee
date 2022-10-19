import React from 'react';
import { Text, View } from 'react-native'
import {styles} from '../styles/style.js'

export default function Header() {
    return (
    <View>
        <Text style={styles.header}>Mini-Yahtzee</Text>
    </View>
    )
}