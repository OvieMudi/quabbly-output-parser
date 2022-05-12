import { useState } from 'react';
import { Code, Divider, Text } from '@chakra-ui/react';
import axios from 'axios';
import InputFormControl from './inputFormControl';

const InterfaceParser = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);

  const getParsedData = async (inputText) => {
    try {
      setIsLoading(true);
      const response = await axios.post('/api', { input: inputText });
      setData(response.data.output);
    } catch (err) {
      console.log('getParsedData ~ err', err);
      setHasApiError(true);
    } finally {
      setIsLoading(false);
    }
  };

  let output = null;
  if (data) {
    output = (
      <>
        <Text color="whiteAlpha.600">Output</Text>
        <Code my={3} p={5}>
          {JSON.stringify(data)}
        </Code>
      </>
    );
  }

  return (
    <div>
      <InputFormControl getParsedData={getParsedData} hasApiError={hasApiError} setHasApiError={setHasApiError} />
      <Divider my={4} />
      {isLoading ? 'Parsing...' : output}
    </div>
  );
};

export default InterfaceParser;
