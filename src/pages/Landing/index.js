import React from 'react'
import { View, Button, Text } from 'react-native'
import styles from './styles'

function Landing() {
    return (
        <View style={styles.containerBody}>
            <View style={styles.containerHeader}>
                <Button title='Clear' style={styles.buttonClear}></Button>
                <View style={styles.resultArea}>
                    <Text style={styles.resultAreaText}>0</Text>
                </View>

             
            </View>

            <View style={styles.containerContent}>
                <Button title={'1'} style={styles.buttonAdd} ></Button>
                <Button title={'0.75'} style={styles.buttonAdd}></Button>
                <Button title={'0.5'} style={styles.buttonAdd}></Button>
                <Button title={'0.25'} style={styles.buttonAdd}></Button>

            </View>
          
        </View>
    )
}

export default Landing