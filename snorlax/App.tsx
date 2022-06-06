
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image, ScrollView, TextInput } from 'react-native';
<style>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
</style>


const Pokemon = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontFamily: 'Shadows Into Light',
            fontSize: 30,
            alignSelf: "center",
            color: "black",
            textAlign: "center",
          }}
        >
          Coringão da massa 
          Gaviões Da Fiel 
        </Text>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Sport_Club_Corinthians_Paulista_crest.svg/220px-Sport_Club_Corinthians_Paulista_crest.svg.png',
          }}
          style={{ width: 200, height: 260, alignSelf: "center" }}
        />
      </View>
      <TextInput
        style={{
          borderRadius: 10,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1, 
          padding: 5,
          margin: 15,
        }}
        defaultValue="Vai corinthians"
      />
    </ScrollView>
  );
}

export default Pokemon;