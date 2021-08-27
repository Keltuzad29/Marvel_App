import * as React from 'react';
import { TouchableOpacity, StyleSheet ,Text, View,  Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CharacterCard({image, name, id}) {
  console.log("imagen :",image, "Nombre :", name)
	const navigation = useNavigation();
  return (
    <View>
    <TouchableOpacity 
			style={styles.container}
			onPress={() => navigation.navigate('Detail', {id})}
	>
			<Image source={image}
				style={styles.image}
			/>
      <Text style={styles.font}>{name}</Text>
    </TouchableOpacity>
    </View>
  );
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