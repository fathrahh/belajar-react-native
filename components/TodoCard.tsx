import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TodoCard = () => {
    return (
        <View style={styles.todoCard}>
            <Text style={styles.todoTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste sapiente aperiam sunt perferendis eaque voluptatem error blanditiis eos ullam sequi.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    todoCard: {
        padding: 15,
        backgroundColor: '#2196F3',
        borderRadius: 5,
    },
    todoTitle: {
        fontWeight: '600',
        color: 'white'
    }

})

export default TodoCard