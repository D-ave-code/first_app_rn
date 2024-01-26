import React, { Component } from 'react';
import * as Linking from 'expo-linking';
import { View, Image, Text, StyleSheet,Button} from 'react-native';

const cards  = props => {
    return (
        <View style={styles.card}>
        <Image style={styles.image} source={{
          uri: props.imagen,
        }} />
        <View style={styles.content}>
          <Text style={styles.red_social}>{props.red_social}</Text>
          <Text style={styles.username}>{props.username}</Text>
          <Text style={styles.age}>  {props.repos == null ? "": "repos publicos:"+ props.repos}</Text>
          
        </View>
        <Button style={{rigth:15}} color="green" title="ir" onPress={() => {
                    Linking.openURL(props.link)
                }} ></Button>
      </View>
    );
  };
    

  const styles = StyleSheet.create({
    // Estilos de la tarjeta
    card: {
      height: 120,
      borderRadius: 10,
      backgroundColor: '#fff',
      margin: 10,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding:15
    },
  
    // Estilos de la imagen
    image: {
      width: 100,
      height: 100,
      borderRadius: 5,
      marginRight: 10,
    },
    
  
    // Estilos del contenido
    content: {
      flex: 1,
    
      alignItems: 'center',
    },
  
    // Estilos red social
    red_social: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    // Estilos del username
    username: {
      fontSize: 14,
    },
  
    
   
  });
export default cards;