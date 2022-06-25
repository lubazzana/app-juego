import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    scrollLayout: {
        flex: 1,    
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLandscape: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
        marginRight: 50,
    },
    result: {
        marginVertical: 10,
        padding: 20,
        width: width / 1.5,
        maxWidth: '80%',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    resultLandscape: {
        flexDirection: 'column',
        marginVertical: 10,
        padding: 20,
        width: width / 3,
        maxWidth: '80%',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: '80%',
        height: 300,
    },
    imageLandscape: {
        width: '50%',
        height: 220,
    }    
});