import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Image } from 'react-native'
import styles from '../styles/global'
import { User, Storetype } from '../types/types'

type Props = {
  user: any
}

export const UserDetails = ({ user }: Props) => {

  const { container, headerText, userCard, cardName, cardEmail, profile, profileContainer } = styles

  return (
    <View style={container} testID="user-wrapper">
      <Text style={headerText}>Post Details</Text>
      <View style={{ ...userCard, flexDirection: 'column', alignItems: 'flex-start' }}>
        <Text style={cardName}>{ user.title }</Text>
        <Text style={cardEmail}>{ user.url }</Text>
        <Text style={cardEmail}>{ user.created_at }</Text>
        <Text style={cardEmail}>{ user.author }</Text>
      </View>
    </View>
  )
}

const mapStateToProps = (state: Storetype) => ({
  user: state.userState.user
})

export default connect(mapStateToProps)(UserDetails)