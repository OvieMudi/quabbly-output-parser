import { useState } from 'react';
import { Textarea, FormControl, FormLabel, FormErrorMessage, Button } from '@chakra-ui/react';

function InputFormControl({ getParsedData, hasApiError, setHasApiError }) {
  const [inputText, setInputText] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const textContent = inputText.trim();
  const isError = (inputTouched && !textContent) || hasApiError;

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    if (hasApiError) {
      setHasApiError(false);
    }
  };

  const handleFocus = () => {
    if (!inputTouched) {
      setInputTouched(true);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (!isError && textContent) {
      getParsedData(inputText);
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    <FormControl isInvalid={isError}>
      <FormLabel color="whiteAlpha.600" htmlFor="interface">
        Interface
      </FormLabel>
      <Textarea
        id="interface"
        type="interface"
        value={inputText}
        placeholder="Paste your interface here"
        size="sm"
        rows={5}
        required
        onChange={handleInputChange}
        onBlur={handleFocus}
      />
      {isError ? <FormErrorMessage>Seriously? 🙄</FormErrorMessage> : null}
      <Button my={2} onClick={handleClick}>
        Parse
      </Button>
    </FormControl>
    // </form>
  );
}

export default InputFormControl;
