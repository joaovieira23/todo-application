import { useState, useEffect } from 'react';
import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Home() {
  const todos = [
    {
        id: 1,
        body: 'Pegar pão',
    },
    {
        id: 2,
        body: 'Pegar manteira',
    },
];
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    setTodosList(() => JSON.parse(localStorage.getItem('todos')) || [])
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  function deleteTodo(id: number) {
    const newTodos = todosList.filter((todo) => {
      return todo.id !== id;
    });

    console.log('newTodos', newTodos);
    setTodosList(newTodos);
  };

  function addTodo(todo: { id: number, body: string }) {
    setTodosList([...todosList, todo]);
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // AddTodo
    // TodoList
    <VStack p={4}>
      <IconButton 
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} 
        isRound="true" 
        size="lg" 
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading 
        mb="8" 
        fontWeight="extrabold" 
        size="2xl" 
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
        >
          Todo Application
        </Heading>
        <TodoList todos={todosList} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
    </VStack>
  )
}
