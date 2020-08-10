import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import { useAuth } from '../../contexts/auth'

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth()

  function handleSignIn () {
    signOut()
  }

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <TouchableOpacity onPress={handleSignIn}>
        <Text>Sign Out</Text>
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
export default Dashboard
