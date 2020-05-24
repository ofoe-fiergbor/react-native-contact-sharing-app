import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

function Landing() {
    return (
        <View style={styles.container}>
            <Image source={require('../images/codetrainLogo.png')} style={styles.image}/>
            <View style={{marginBottom:100}}>
                <Text style={styles.title}>codetrain</Text>
                <Text style={styles.title}>contacts</Text>
            </View>
            <TouchableOpacity style={{borderBottomColor:'purple', borderBottomWidth:2, height:25}}>
                <Text style={{fontWeight:'bold', fontSize: 15}}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        height: 150,
        width:150,
        marginBottom: 30
    },
    title:{
        fontSize: 25,
        textTransform: 'uppercase',
    },
})