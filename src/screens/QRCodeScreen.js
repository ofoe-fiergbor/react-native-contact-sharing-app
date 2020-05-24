import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'


export default function QRCodeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.title}>Exchange Contact Information</Text>
                    <Text style={{ color: 'grey', fontWeight: '600' }}>Scan this QR below to share your contacts</Text>
                </View>
                <Image source={require('../images/qr_code_PNG37.png')} style={styles.image} />
            </View>
            <View style={styles.profile}>
                <Image source={require('../images/man-in-red-jacket-1681010.jpg')} style={styles.profileImg} />
                <View>
                    <Text style={{fontWeight:'bold',fontSize: 16}}>Straw Hat Luffy</Text>
                    <Text style={{color:'grey'}}>Full Stack Developer</Text>
                </View>
            </View>
            <View style={styles.footerContainer}>
                <Text style={{fontSize:16, color:'grey'}}>Want to add a new connection?</Text>
                <TouchableOpacity style={styles.scanBtn} onPress={()=>navigation.navigate('qrScan')}>
                    <Text style={{color:'purple'}}>Scan QR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#fff'
    },
    subContainer: {
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    image: {
        height: 250,
        width: 250,
    },
    profile: {
        flexDirection: 'row',
        marginHorizontal: 50,
        marginVertical:20,
        alignItems:'center'
    },
    profileImg: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginRight: 15

    },
    footerContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom: 0,
        borderTopColor: '#C8C8C8',
        borderTopWidth: 1,
        height: 60,
        alignItems:'center',
        paddingHorizontal: 30
    },
    scanBtn:{
        width: 80,
        height: 35,
        marginLeft: 10,
        justifyContent:'center',
        alignItems:'center',
        borderColor: 'purple',
        borderWidth:2
    }

})
