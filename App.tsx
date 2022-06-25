/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Gap, TodoCard } from './components';

type todoListType = {
  id: number | string,
  todo: string
}

const getCurrentTime = () => {
  return new Date().getTime()
}

const App = () => {
  const [inputTodo, setInputTodo] = React.useState("")
  const [todoList, setTodoList] = React.useState<Array<todoListType>>([])
  const [editId, setEditID] = React.useState<string | number>("")

  const findItemByIndex = (todoId: string | number) => {
    let number: number | undefined
    todoList.forEach((item, idx) => {
      if (item.id === todoId) {
        number = idx
      }
    })
    return number
  }

  const handleSubmit = () => {
    if (editId) {
      const copyList = [...todoList]
      let index = findItemByIndex(editId)
      if (index === undefined) {
        setEditID('')
        setInputTodo("")
        return
      }
      copyList[index].todo = inputTodo
      setTodoList(copyList)
      setInputTodo("")
      setEditID("")
      return
    }
    if (inputTodo === "") return
    const currentInput = {
      id: getCurrentTime(),
      todo: inputTodo,
    }
    setTodoList([...todoList, currentInput])
    setInputTodo("")
  }

  const filterDataById = (todoId: (string | number)) => {
    return todoList.find(item => item.id === todoId)
  }

  const handleUpdate = (todoId: (string | number)) => {
    const filtererData = filterDataById(todoId)
    if (filtererData && filtererData.id) {
      setEditID(filtererData.id)
      setInputTodo(filtererData.todo)
    }
  }

  const handleDeleted = (todoId: string | number) => {
    const filtererData = todoList.filter(item => item.id !== todoId)
    setTodoList(filtererData)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>My Todo List</Text>
        <View style={styles.todoInputWrapper}>
          <TextInput
            style={styles.textInput}
            placeholder='Todo'
            onChangeText={(newText) => setInputTodo(newText)}
            defaultValue={inputTodo}
          />
          <Gap width={5} />
          <Pressable style={styles.buttonTodo} onPress={handleSubmit} >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
        <ScrollView style={styles.listSection}>
          {todoList.map((item: todoListType, idx: number) => (
            <View key={idx}>
              <TodoCard
                title={item.todo}
                onUpdate={() => handleUpdate(item.id)}
                onDelete={() => handleDeleted(item.id)} />
              <Gap height={10} />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  title: {
    fontSize: 32,
    marginBottom: 12,
    fontWeight: 'bold'
  },
  listSection: {
    marginTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.5)',
    paddingHorizontal: 10,
    paddingVertical: 8,
    flex: 1
  },
  todoInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonTodo: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    padding: 24
  }
});

export default App;
