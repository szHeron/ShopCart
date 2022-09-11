import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      padding: 15,
      paddingTop: 80,
    },
    productContent:{
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginBottom: 20
    },
    textInfo: {
      fontSize: 25,
      marginBottom: 15
    },
    textProductName: {
      fontSize: 30, 
      fontWeight: '600'
    },
    textProductBrand: {
      fontSize: 18, 
      marginBottom: 10
    },
    textProductPrice: {
      fontSize: 17, 
      fontWeight: '800',
      color: 'green',
      marginTop: 5
    },
    productSale: {
      marginTop: 15,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    buttonSendCart: {
      padding: 10,
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20
    },
    navigationButtonBack: {
      position: 'absolute', 
      left: 10, 
      top: 30
    },
    favoriteButton: {
      position: 'absolute', 
      right: 10, 
      top: 30
    }
});