import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

function Landing({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../images/codetrainLogo.png')} style={styles.image} />
            <View style={{ marginBottom: 100 }}>
                <Text style={styles.title}>codetrain</Text>
                <Text style={{ fontSize: 23, textAlign: 'center', textTransform: 'uppercase' }}>contacts</Text>
            </View>
            <TouchableOpacity style={{ borderBottomColor: 'purple', borderBottomWidth: 2, height: 25 }}
                onPress={() => navigation.navigate('welcome')}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff'
    },
    image: {
        height: 150,
        width: 150,
        marginBottom: 70
    },
    title: {
        fontSize: 25,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
})