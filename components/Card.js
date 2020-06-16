import React from 'react';
import { View, StyleSheet } from 'react-native';
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    // Only works on the IOS
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // Only works on the IOS

    // Only works on the Android
    elevation: 8,
    // Only works on the Android

    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
