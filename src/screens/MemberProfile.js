import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo, Feather, EvilIcons } from '@expo/vector-icons';


export default function MemberProfile() {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={require('../images/profilePic.jpg')} style={styles.profileImage} />
                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>Anita Yokohama</Text>
                    <Text style={{ color: 'grey' }}>Full Stack Developer</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                <Entypo name="twitter-with-circle" size={30} color="black" />
                <Entypo name="linkedin-with-circle" size={30} color="black" style={{ marginLeft: 15 }} />
            </View>
            <View>
                <View style={styles.itemContainer}>
                    <Feather name="phone" size={23} color="black" style={{ marginRight: 15 }} />
                    <Text style={styles.itemText}>(+233) 54 7454 616</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Feather name="mail" size={23} color="black" style={{ marginRight: 15 }} />
                    <Text style={styles.itemText}>yokohama@codetrain.com</Text>
                </View>
                <View style={styles.itemContainer}>
                    <EvilIcons name="location" size={23} color="black" style={{ marginRight: 15 }} />
                    <Text style={styles.itemText}>Ring Road West, Accra</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 80,
        paddingHorizontal: 20,
    },
    profileContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profileImage: {
        height: 60,
        width: 60,
        borderRadius: 50,
        marginRight: 20
    },
    itemContainer:{
        flexDirection:'row',
        marginVertical:10,
        alignItems:'center'
    },
    itemText:{
        fontSize:16
    }
})
