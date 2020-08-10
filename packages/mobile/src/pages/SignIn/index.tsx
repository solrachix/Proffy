import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import { useAuth } from '../../contexts/auth'

// import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signIn } = useAuth()

  function handleSignIn () {
    signIn()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignIn}>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default SignIn
