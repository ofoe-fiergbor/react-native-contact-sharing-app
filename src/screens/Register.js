import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Registar() {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View>
                    <View style={styles.addPhotoContainer}>
                        <AntDesign name="user" size={60} color="purple" />
                        <TouchableOpacity>
                            <Text style={styles.addPhotoLink}>ADD USER PHOTO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formContainer}>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Full Name</Text>
                            <TextInput placeholder='Joan Shay' fontSize={15} textAlign="right" />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput placeholder='joan.shay@sparrow.com' fontSize={15} textAlign="right" />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Phone Number</Text>
                            <TextInput placeholder='(+233) 483 9837 22' fontSize={15} textAlign="right" keyboardType={"number-pad"} />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Role</Text>
                            <TextInput placeholder='Full Stack Developer' fontSize={15} textAlign="right" />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Twitter</Text>
                            <TextInput placeholder='@jopanii' fontSize={15} textAlign="right" />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>LinkedIn</Text>
                            <TextInput placeholder='/Joan.Shay' fontSize={15} textAlign="right" />
                        </View>
                        <TouchableOpacity style={styles.register}>
                            <Text style={styles.buttonText}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
     paddingHorizontal: 10,
     flex: 1,
     backgroundColor:'#fff'
    },
    addPhotoContainer: {
        height: 170,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addPhotoLink: {
        color: 'purple',
        marginVertical: 10,
        fontWeight: 'bold'
    },
    formContainer:{
        marginTop: 20,
        paddingHorizontal: 20
    },
    formGroup:{
        borderBottomColor: '#F5F5F5',
        borderBottomWidth: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        height: 35,
        alignItems:'center',
        marginBottom:10
    },
    label:{
        fontSize: 16,
        fontWeight: '600',
    },
    register:{
        height: 50,
        backgroundColor:'purple',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5,
        marginVertical: 10,
    },
    buttonText:{
        color: '#fff',
        fontSize: 15
    }
})
