import React from 'react'
import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native'

interface MyButtonProps {
    title: string | React.ReactElement
    textColor?: string | undefined
    onPress?: () => void | ((event: GestureResponderEvent) => void)
    style?: object
}

const MyButton: React.FC<MyButtonProps> = ({ style, title, textColor, onPress }) => {

    const styles = StyleSheet.create({
        button: {
            backgroundColor: 'transparent',
            alignItems: 'center',
            flex: 1,
            paddingHorizontal: 10,
            paddingVertical: 6
        },
        buttonText: {
            color: textColor || 'black',
            fontWeight: '700'
        }
    })
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}




export default MyButton