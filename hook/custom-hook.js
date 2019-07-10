import {useState} from 'react';

const useInput = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
 
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleInputChange,
    inputs
  };
}
export default useInput;