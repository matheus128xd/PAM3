import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, IconButton, Icon, Box, Center, NativeBaseProvider } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';



const Example = () => {
  return <Box alignItems="center">
      <IconButton icon={<Icon as={Entypo} name="emoji-happy" />} borderRadius="full" _icon={{
      color: "orange.500",
      size: "md"
    }} _hover={{
      bg: "orange.600:alpha.20"
    }} _pressed={{
      bg: "orange.600:alpha.20",
      _icon: {
        name: "emoji-flirt"
      },
      _ios: {
        _icon: {
          size: "2xl"
        }
      }
    }} _ios={{
      _icon: {
        size: "2xl"
      }
    }} />
    </Box>;
};





export default function App() {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Cannabis.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        Veja imagens do Produto!
        O melhor cannabis da região quisá do mundo!!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Faça seu Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 205,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#00BFFF',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00BFFF',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
