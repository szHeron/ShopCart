import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: 15,
      paddingTop: 35
    },
    conteinerPerfumes: {
      flexDirection: 'row',
      margin: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    perfumeImg: {
      height: 150,
      width: 100,
      marginRight: 25
    },
    removeButton: {
      backgroundColor: '#f00'
    }
});