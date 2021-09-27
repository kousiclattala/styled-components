import React from 'react'

// import {View, Text} from 'react-native'
import { Button } from './styles/Button';
import { Text } from './styles/Text';
import { Container } from './styles/Container';

const App = () => {
  return(
    <Container>
      <Text>Text and Button using Styled Component</Text>
      <Button title="Styled Button" />
    </Container>
  )
}

export default App;