import React from 'react'
import { View, Button, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

var ResSum = 0;


function Landing() {
    return (
        <View style={styles.containerBody}>
            <View style={styles.containerHeader}>
                <Button title='Clear' style={styles.buttonClear}></Button>
                <View  style={styles.resultArea}>
                    <Text name="resultAreaText" style={styles.resultAreaText} value={ResSum}></Text>
                </View>

             
            </View>

            <View style={styles.containerContent}>
                <TouchableOpacity title={'1'} style={styles.buttonAdd} onPress={resultAreaText.value = ResSum += 1}></TouchableOpacity>
                <TouchableOpacity title={'0.75'} style={styles.buttonAdd} onPress={ResSum += 0.75}></TouchableOpacity>
                <TouchableOpacity title={'0.5'} style={styles.buttonAdd} onPress={ResSum += 0.5}></TouchableOpacity>
                <TouchableOpacity title={'0.25'} style={styles.buttonAdd} onPress={ResSum += 0.25}></TouchableOpacity>
                {/* <TouchableOpacity title={'0.25'} style={styles.buttonAdd} onPress={alert(ResSum += 0.25)}>
                    <Text> 0.25</Text>
                </TouchableOpacity> */}

            </View>
          
        </View>
    )
}

export default Landing