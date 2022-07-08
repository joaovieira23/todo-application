import { Badge, VStack, HStack, Text, Spacer, IconButton, StackDivider } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

interface TodoListProps {
    todos: { id: number; body: string; }[]
    deleteTodo: (id: number) => void
};

function TodoList({ todos, deleteTodo }: TodoListProps) {

    if(!todos.length) {
        return (
            <Badge colorScheme="green" p="4" m="4">
                Sem tarefas, yay!!
            </Badge>
        );
    }
    
    return (
        <VStack
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w="100%"
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}}
            alignItems="stretch"
            divider={<StackDivider />}
        >
            {todos.map((todo) => (
                <HStack key={todo.id}>
                    <Text>{todo.body}</Text>
                    <Spacer />
                    <IconButton icon={<FaTrash />} isRound="true" onClick={() => deleteTodo(todo.id)} />
                </HStack>
            ))}
        </VStack>

    );
}

export default TodoList;