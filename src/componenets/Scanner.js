import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,Button,Linking} from 'react-native'
import { BarCodeScanner } from "expo-barcode-scanner";


export default function Scanner(){
    const [hasPermission , setHasPermission] = useState(null)
    const [scanned , setScanned] = useState(false)

    useEffect(()=>{

        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted')
        })();
    },[]);

    const handleBarCodeScanned = ({type,data}) => {
       setScanned(true);
       alert(`Bar Code with Type ${type} and data ${Linking.openURL(`${data}`)} has been scanned`)
    }

    if(hasPermission === null){
        return <Text>Requesting for camera Permission</Text>
    }

    if(hasPermission === false){
        return <Text>No Access to camera</Text>
    }
    return (
        <View style={styles.container}>
            <BarCodeScanner
             onBarCodeScanned={ scanned? undefined: handleBarCodeScanned}
             style = {StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title="Tap to scan again" style={styles.txt} onPress={() => setScanned(false)} />}
        </View>
    )
}
    
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center'
    }
    ,
    txt:{
        alignSelf:'flex-end',
        paddingLeft:20,
        paddingRight:20
    }
})



