import * as React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default function Information({ image, name, description }) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{uri: image}}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
    display:"flex",
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'space-between'

    
  },
  image:{
    width: 250,
    height: 280,
    borderWidth: 2,
    borderColor: "#046b5e",
    margin: 6,
    borderRadius: 10,
  },
  description:{},
  title:{},
});