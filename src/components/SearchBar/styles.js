import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginBottom: 15
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    filterButton: {
        backgroundColor: '#dcdcdc',
        borderRadius: 10
    },
    SearchBarStyle: {
        flexGrow: 1,
        borderRadius: 10,
        marginRight: 15
    }
});