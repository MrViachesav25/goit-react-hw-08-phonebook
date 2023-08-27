import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectAuthentificated } from "redux/selectors";


const HomePage = () => {
    const authentification = useSelector(selectAuthentificated);
return (
    authentification ? 
    (
        <Stack position='relative'>
            <Box
            position='absolute'
            backgroundImage="url('https://cdn.pixabay.com/photo/2015/07/10/15/13/building-839362_1280.jpg')"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            width='100vw'
            height='100vh'
            opacity={0.5}
                
        />
            <VStack position='relative' alignItems="center" justifyContent="center" height="100vh" maxWidth="100vw">
                <Heading fontSize={76} color='#1C4532' mt={-200}>Welcome to your PhoneBook</Heading>
                <Text fontSize={50} fontWeight='bold' color='#171923' >Create and enjoy</Text>
            </VStack>
        </Stack>
    ):( 
        <Stack position='relative'>
            <Box
            position='absolute'
            backgroundImage="url('https://cdn.pixabay.com/photo/2015/07/10/15/13/building-839362_1280.jpg')"
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            width='100vw'
            height='100vh'
            opacity={0.5}
                
        />
            <VStack position='relative' alignItems="center" justifyContent="center" height="100vh" maxWidth="100vw">
                <Heading fontSize={76} color='#1C4532' mt={-200}>Welcome to your PhoneBook</Heading>
                <Text fontSize={50} fontWeight='bold' color='#171923' >Create and enjoy</Text>
            </VStack>
        </Stack>)
)
}

export default HomePage;