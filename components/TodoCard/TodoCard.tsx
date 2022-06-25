import React from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'

import { styles } from './todoCardStyle'

import Gap from '../Gap/Gap'
import MyButton from '../MyButton/MyButton'

interface TodoCardProps {
    title: string,
    onUpdate: () => void
    onDelete: () => void
}

const TodoCard: React.FC<TodoCardProps> = ({ title, onUpdate, onDelete }) => {
    const [isActive, setIsActive] = React.useState(false)

    return (
        <Pressable onPress={() => setIsActive(!isActive)}>
            <View style={styles.todoCard}>
                <Text style={styles.todoTitle}>{title}</Text>
            </View>
            {
                isActive && (
                    <View style={styles.buttonWrapper}>
                        <MyButton
                            style={styles.buttonEdit}
                            textColor="#ffae42"
                            onPress={onUpdate}
                            title="Edit" />
                        <Gap width={10} />
                        <MyButton
                            style={styles.buttonDelete}
                            textColor="#dc3545"
                            onPress={onDelete}
                            title="Delete" />
                    </View>
                )
            }
        </Pressable>
    )
}

export default TodoCard