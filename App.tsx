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
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Gap from './components/Gap';
import TodoCard from './components/TodoCard';

const App = () => {
  const [inputTodo, setInputTodo] = React.useState("")
  const [todoList, setTodoList] = React.useState("")

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
          <Pressable style={styles.buttonTodo} >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
        <ScrollView style={styles.listSection}>
          <TodoCard />
          <Gap height={10} />
          <TodoCard />
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
