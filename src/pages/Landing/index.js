import React, { useState } from 'react'
import { View, Button, Text, TouchableOpacity } from 'react-native'
import styles from './styles'


const Landing = () => {
   const [result, setCount] = useState(0)
   const onPress1 = () => setCount(result => result +1)
   const onPress075 = () => setCount(result => result +0.75)
   const onPress05 = () => setCount(result => result +0.5)
   const onPress025 = () => setCount(result => result +0.25)
   const onPressClear = () => setCount(result => result *0)
   
    return (
        <View style={styles.containerBody}>
            <View style={styles.containerHeader}>
                <Button title='Clear' style={styles.buttonClear} onPress={onPressClear}></Button>
                <View  style={styles.resultArea}>
                    <Text name="resultAreaText" style={styles.resultAreaText}>{result}</Text>
                </View>

             
            </View>

            <View style={styles.containerContent}>
                <TouchableOpacity title={'1'} style={styles.buttonAdd} onPress={onPress1}><Text>1</Text></TouchableOpacity>
                <TouchableOpacity title={'0.75'} style={styles.buttonAdd} onPress={onPress075}><Text>0.75</Text></TouchableOpacity>
                <TouchableOpacity title={'0.5'} style={styles.buttonAdd} onPress={onPress05}><Text>0.5</Text></TouchableOpacity>
                <TouchableOpacity title={'0.25'} style={styles.buttonAdd} onPress={onPress025}><Text>0.25</Text></TouchableOpacity>
                {/* <TouchableOpacity title={'0.25'} style={styles.buttonAdd} onPress={alert(ResSum += 0.25)}>
                    <Text> 0.25</Text>
                </TouchableOpacity> */}

            </View>
          
        </View>
    )
}

export default Landing