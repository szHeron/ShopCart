import { StyleSheet, Dimensions } from "react-native";

const fullWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: 25
    },
    conteinerPerfumes: {
      width: fullWidth,
      flexDirection: 'row',
      paddingRight: 60,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: '#000',
      borderBottomWidth: 1,
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
    }
});