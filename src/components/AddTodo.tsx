import { HStack, Input, Button } from '@chakra-ui/react';

function AddTodo() {

    function handleSubmit(e) {

    }

    return (
        <form onSubmit={handleSubmit} action="">
            <HStack mt="8">
                <Input variant="filled" placeholder="Aprendendo ChakraUI com todo application" />
                <Button colorScheme="pink" px="8" type="submit">Adicionar tarefa</Button>
            </HStack>
        </form>
    );
}

export default AddTodo;