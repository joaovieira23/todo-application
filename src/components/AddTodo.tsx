import { useState } from 'react';
import { HStack, Input, Button } from '@chakra-ui/react';

interface TodoProps {
    id: number;
    body: string;
}

interface AddTodoProps {
    addTodo: (todo: TodoProps) => void
}

function AddTodo({ addTodo }: AddTodoProps) {

    function handleSubmit(e) {
        e.preventDefault();
        console.log(content);
    };

    const [content, setContent] = useState('');

    return (
        <form onSubmit={handleSubmit} action="">
            <HStack mt="8">
                <Input variant="filled" placeholder="Aprendendo ChakraUI com todo application" value={content} onChange={(e) => setContent(e.target.value)}/>
                <Button colorScheme="pink" px="8" type="submit">Adicionar tarefa</Button>
            </HStack>
        </form>
    );
}

export default AddTodo;