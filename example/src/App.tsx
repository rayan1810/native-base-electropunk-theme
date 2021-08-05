import React from 'react';
import { NativeBaseProvider, Center, Heading } from 'native-base';
import { nativebaseElectroPunkTheme } from 'native-base-electropunk-theme';

export default function App() {
  return (
    <NativeBaseProvider theme={nativebaseElectroPunkTheme}>
      <Center flex={1} bg="punky.100">
        <Heading color="yellow.400" italic>
          Electropunk{' '}
          <Heading color="indigo.500" italic>
            Theme
          </Heading>
        </Heading>
      </Center>
    </NativeBaseProvider>
  );
}
