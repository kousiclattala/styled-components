import React from 'react'

// import {View, Text} from 'react-native'
import { Button, TouchableButton } from './styles/Button';
import { Text } from './styles/Text';
import { Container } from './styles/Container';

const App = () => {
  return(
    <Container>
      {/* styled Text component using Native Text component */}
      <Text>Text and Button using Styled Component</Text>
      {/* styled Button component using Native Button Component */}
      <Button title="Styled Button" />
      {/* styled TouchableButton using Native TouchableOpacity */}
      <TouchableButton>
        <Text>Touchable Button</Text>
      </TouchableButton>
    </Container>
  )
}

export default App;