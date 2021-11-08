import { StyleSheet, Dimensions } from "react-native";

const fullWidth = Dimensions.get('window').width - 40;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: 20
    },
    conteinerPerfumes: {
      width: fullWidth,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
      borderBottomColor: '#000',
      borderBottomWidth: 1
    },
    title:{
      marginBottom: 15,
      fontSize: 22,
      paddingLeft: 5,
      paddingRight: 5,
      borderBottomColor: '#000', 
      borderBottomWidth: 1
    },
    perfumeImg: {
      height: 125,
      width: 90,
      marginRight: 25
    },
    arrowIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
      width: 40,
      borderRadius: 0,
      backgroundColor: '#fff'
    },
    qtdInput: {
      height: 30, 
      width: 45, 
      margin: 5
    },
    StockResult: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 5
    },
    prices: {
      flexDirection: 'row',
      width: fullWidth,
      justifyContent: 'space-between',
      alignItems: 'center'
    }
});