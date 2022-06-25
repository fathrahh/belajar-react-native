import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    todoCard: {
        padding: 15,
        backgroundColor: '#2196F3',
        borderRadius: 5,
    },
    todoTitle: {
        fontWeight: '600',
        color: 'white'
    },
    buttonWrapper: {
        flexDirection: 'row',
        marginTop: 3,
        justifyContent: 'space-between',
        maxWidth: 200,
    },
    buttonEdit: {
        borderColor: '#ffae42',
        borderWidth: 1,
        borderRadius: 5
    },
    buttonDelete: {
        borderColor: '#dc3545',
        borderWidth: 1,
        borderRadius: 5
    }

})
