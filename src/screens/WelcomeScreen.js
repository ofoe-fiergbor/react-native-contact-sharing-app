import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

function WelcomeScreen({navigation}) {
    return (
        <View>
            <Image source={require('../images/welcome.jpg')} style={styles.image} />
            <View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
                <View>
                    <Text style={styles.title}>KEEP IN TOUCH WITH THE POEPLE OF CODETRAIN</Text>
                    <Text style={{ marginVertical: 10, color: '#a1a1a1' }}>Sign in or register with your Codetrain email</Text>
                </View>
                <View style={styles.bottomLinksCtn}>
                    <TouchableOpacity style={styles.btnLink} onPress={()=>navigation.navigate('registar')}>
                        <Text style={styles.btnText}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLink} onPress={()=>navigation.navigate('login')}>
                        <Text style={styles.btnText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    image: {
        height: 290,
        width: 360
    },
    title: {
        fontSize: 18,
    },
    bottomLinksCtn: { 
        marginTop: 100, 
        paddingHorizontal: 30, 
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnLink:{
        borderBottomColor: 'purple',
        borderBottomWidth: 2
    },
    btnText:{
        fontWeight:'bold',
    },
})