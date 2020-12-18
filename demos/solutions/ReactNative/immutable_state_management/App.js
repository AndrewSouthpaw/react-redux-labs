import { assocPath } from 'ramda'
import { Button, SafeAreaView, Switch, Text, View } from 'react-native'

export const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    const newTodo = { id: todos.length + 1, done: false }
    setTodos([...todos, newTodo])
  }

  const toggleSwitch = (todo, val, index) => {
    // find the todo
    // const todo = todos.find(t => t.id === id)
    // console.log('todo', todo)

    // update it
    // todo.done = val // MUTATION
    // todos[index] = todo // MUTATION

    // // approach #1: map
    // const newTodo = { ...todo, done: val }
    // const newTodos = todos.map((t) => t.id === todo.id ? newTodo : t)
    // setTodos(newTodos)

    // approach #2: all inline
    // setTodos(
    //   todos.map(
    //     (t) => t.id === todo.id
    //       ? { ...todo, done: val }
    //       : t
    //   )
    // )

    // approach #3: ramda
    setTodos(assocPath([index, 'done'], val, todos))

    // // approach #3: make a copy
    // const index = todos.indexOf(todo) // 👍
    // const newTodos = [...todos]
    // newTodos[index] = newTodo
    // setTodos(newTodos)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title="Add new todo" onPress={addTodo} />
      {todos.map((todo, index) => (
        <View key={todo.id} style={{ padding: 20 }}>
          <Text>Todo ID: {todo.id}</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={todo.done ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(val) => toggleSwitch(todo, val, index)}
            value={todo.done}
          />
        </View>
      ))}
    </SafeAreaView>
  )
}
