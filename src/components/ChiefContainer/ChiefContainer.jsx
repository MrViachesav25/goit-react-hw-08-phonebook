import PropTypes from 'prop-types';
import { Container, Heading } from "@chakra-ui/react";

const ChiefContainer = ({ title, children }) => {
  return (
    <Container 
        maxWidth={['sm', 'md', 'lg', 'xl', '2xl']}
        position='absolute'
        top={'50%'}
        left={'50%'}
        transform='translate(-50%, -50%)'
        marginTop={'35px'}
        paddingBottom={'20px'}
        paddingTop={'20px'}
        sx={{
          border: '2px solid #086a68',
          borderRadius: '1rem',
        }}
        backgroundColor={'#fff'}
        >
      <Heading mb={4} textAlign='center'>{title}</Heading>
      {children}
    </Container>
  );
};

ChiefContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default ChiefContainer;

