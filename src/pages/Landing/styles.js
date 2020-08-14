import { StyleSheet } from 'react-native'


const width_proportion = '80%';
const height_proportion = '20%';


const styles = StyleSheet.create({
    containerHeader: {
        flex: 2,
        flexDirection: "row",
        width: '80%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
 
        paddingLeft: 10,
        paddingRight: 10,
 
    },
    containerBody: {
        height: '100%',
        width: '100%',
        backgroundColor: '#454140',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerContent: {
        flex: 1,
        width: 170,
        marginTop: 20,
        marginBottom: 180,
        justifyContent: 'space-between',

    },
    resultArea: {
        width: 180,
        height: 50,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: '#333'
    },
    resultAreaText: {
        color: 'white'
    },
    button: {
        fontSize: 20,
        color: 'blue',
        backgroundColor: 'green',
    },
    buttonClear: {
        height: 20
    },
    buttonAdd: {
        fontSize: 20,
        padding: 10,

    }
})

export default styles