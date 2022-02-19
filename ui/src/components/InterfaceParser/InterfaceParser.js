import { useState } from 'react';
import { Code, Divider, Text } from '@chakra-ui/react';
import InputFormControl from './inputFormControl';

const InterfaceParser = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getParsedData = (inputText) => {
    setIsLoading(true);
    fetch('/api', {
      method: 'POST',
      body: JSON.stringify({ input: inputText }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.output);
        setIsLoading(false);
      });
  };

  let output = null;
  if (data) {
    output = (
      <>
        <Text color="whiteAlpha.600" >Output</Text>
        <Code my={3} p={5}>
          {JSON.stringify(data)}
        </Code>
      </>
    );
  }

  return (
    <div>
      <InputFormControl getParsedData={getParsedData} />
      <Divider my={4} />
      {isLoading ? 'Parsing...' : output}
    </div>
  );
};

export default InterfaceParser;
