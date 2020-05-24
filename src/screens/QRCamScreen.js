import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QRCamScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate('member')
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.footerContainer}>
        <Text style={{ fontSize: 16, color: 'grey' }}>Want to share your contact?</Text>
        <TouchableOpacity style={styles.scanBtn} onPress={() => navigation.navigate('qrCode')}>
          <Text style={{ color: 'purple' }}>Send QR</Text>
        </TouchableOpacity>
      </View>
      {/* {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )} */}
    </View>
  );
}
const styles = StyleSheet.create({
  footerContainer:{
    flexDirection:'row',
    position:'absolute',
    bottom: 0,
    height: 60,
    alignItems:'center',
    paddingHorizontal: 30,
    backgroundColor:'#fff'
},
scanBtn:{
    width: 80,
    height: 35,
    marginLeft: 20,
    justifyContent:'center',
    alignItems:'center',
    borderColor: 'purple',
    borderWidth:2
}
})