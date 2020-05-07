import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/global'
import { User } from '../types/types'

type Props = {
  user: any
  getDetails: Function
  navigation: {
    navigate: Function
  }
}

const UserCard = ({ user, navigation, getDetails }: Props) => {
  // alert(JSON.stringify(user))

  const { userCard, cardName, cardEmail } = styles

  return(
    <TouchableOpacity
      style={ userCard }
      activeOpacity={ 0.8 }
      onPress={ () => {
        getDetails(user)
        navigation.navigate('SingleUser')
      }}
    >
      
      <View>
        <Text style={ cardName }>{ user.title }</Text>
        <Text style={ cardEmail }>{ user.url }</Text>
        <Text style={ cardEmail }>{ user.created_at }</Text>
        <Text style={ cardEmail }>{ user.author }</Text>
      </View>
    </TouchableOpacity>
  )
}

export default UserCard