import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { addFilter } from 'redux/filterSlice';
import { Box, Input, Text } from '@chakra-ui/react';



const FilterInput = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  
  const onChangeFilter = event => {
    dispatch(addFilter(event.currentTarget.value))
  };
  
  return (
      <Box>
          <form>
            <Text mb={'10px'} fontSize={16} fontWeight='bold' color='#086a68'>Find contacts by name</Text>
            <Input
              type="text"
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Enter contact name"
              value={filter}
              onChange={onChangeFilter}
            />
          </form>     
      </Box>
  );
};


export default FilterInput;