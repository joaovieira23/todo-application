import { useState } from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

interface TodoProps {
    id: number;
    body: string;
}

interface AddTodoProps {
    addTodo: (todo: TodoProps) => void
}

function AddTodo({ addTodo }: AddTodoProps) {

    const toast = useToast();

    function handleSubmit(e) {
        e.preventDefault();

        if(!content) {
            toast({
                title: 'Sem conteúdo',
                status: 'error',
                duration: 3000,
                isClosable: true
            })
            return 
        }

        const todo = {
            id: nanoid(),
            body: content
        };

        addTodo(todo);
        setContent('');
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