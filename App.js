import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  // list of tasks
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Make the bed' },
    { id: '2', text: 'Brush your teeth' },
    { id: '3', text: 'Cook some food' },
    { id: '4', text: 'Do laundry' },
    { id: '5', text: 'Take a bath' },
    { id: '6', text: 'Get ready for school' },
  ]);

  // store the current task
  const [taskText, setTaskText] = useState('');

  // Function to add a new task to the list
  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, { id: tasks.length.toString(), text: taskText }]);
      setTaskText('');
    }
  };

  // Function to remove a task from the list
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Philip's To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter some task bossing malupit"
          value={taskText}
          onChangeText={(text) => setTaskText(text)}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.text}</Text>
            <Button
              title="Remove"
              onPress={() => removeTask(item.id)}
              color="#FF0000" 
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EFEFEF', // background color
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333', // text color
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    backgroundColor: '#D6E8DB', // background color for task container
    padding: 8,
    borderRadius: 4,
  },
  taskText: {
    flex: 1,
    marginRight: 8,
  },
});

export default App;
