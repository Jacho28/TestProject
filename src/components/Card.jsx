import React, { Children } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export default function Card({ children, style, ...props }) {
    return (
      <TouchableOpacity 
        style={[styles.container, style]} 
        activeOpacity={.5} 
        underlayColor='trasnparent' 
        {...props}
      >
        {children}
      </TouchableOpacity>
    )
  }

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        //alignSelf: 'center',
        //alignContent: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOpacity: .5,
        shadowRadius: 1,
        elevation: 5,
    }
})