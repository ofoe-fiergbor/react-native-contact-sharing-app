import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'

export default function Login() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../images/signin.jpg')} style={styles.image} />
                <View style={{ marginTop: 50, paddingHorizontal: 30 }}>
                    <View style={styles.formCtn}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput placeholder='joan.shay@sparrow.com' fontSize={15} textAlign="right" />
                    </View>
                    <View style={[styles.formCtn, { marginTop: 20 }]}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput placeholder='*********' secureTextEntry={true} textAlign="right" />
                    </View>
                    <TouchableOpacity style={styles.btnCtn}>
                        <Text style={styles.btnText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <View style={{marginRight:5}}>
                            <Text>Forgot?</Text>
                        </View>
                        <TouchableOpacity style={{borderBottomColor:'purple', borderBottomWidth:2}}>
                            <Text>Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 80
    },
    image: {
        height: 200,
        width: 360
    },
    formCtn: {
        flexDirection: 'row',
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    btnCtn: {
        backgroundColor: 'purple',
        marginVertical: 25,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 15
    },
})