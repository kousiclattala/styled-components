import React from 'react'
import { Button, TouchableButton } from './styles/Button';
import { Text } from './styles/Text';
import { Container } from './styles/Container';
import TextOTP from './components/TextOTP';


const App = () => {

  return(
    <Container>
      {/* styled Text component using Native Text component */}
      {/* <Text>Text and Button using Styled Component</Text> */}
      {/* styled Button component using Native Button Component */}
      {/* <Button title="Styled Button" /> */}
      {/* styled TouchableButton using Native TouchableOpacity */}
      {/* <TouchableButton>
        <Text>Touchable Button</Text>
      </TouchableButton> */}

      {/* styled Input component using Native TextInput */}

      <TextOTP />
      
      </Container>
  )
}

export default App;