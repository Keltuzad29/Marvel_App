import React from 'react';
import { View, Image, Text , StyleSheet} from 'react-native';

export default function Comic({ name, image }) {
    return (
      <View>
              <Image
              style={styles.image}
                  source={{uri: image}}
              />
              <Text>{name}</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      display:'flex',
      marginTop: 50,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent:"center",
      borderWidth: 2,
      borderColor: "#537480",
      width: 300,
      height:400,
      borderRadius: 10,
      backgroundColor: 'white',
opacity: 0.7,

      
    },
    image: {
      width: 250,
      height: 280,
      borderWidth: 2,
      borderColor: "#046b5e",
      margin: 6,
      borderRadius: 10,
    },
    font:{
      fontSize:26,
      fontStyle: 'italic',
      fontWeight: 'bold',
    }
  });