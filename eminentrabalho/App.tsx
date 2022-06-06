import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

const Example = () => {
  return <Box alignItems="center">
      <Box maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image source={{
            uri: "https://i.uai.com.br/o_qshLGzm4zHLJpa2Vg-KPKzkxI=/750x0/imgsapp2.uai.com.br/app/noticia_133890394703/2020/01/20/255043/20200120074023148429u.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="yellow.500" _dark={{
          bg: "yellow.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            Eminem
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              O rei do RAP
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Uma história de superação.
            </Text>
          </Stack>
          <Text fontWeight="400">
           50 Cent: “O Hip Hop é preto, mas Eminem faz isso melhor do que artistas negros”
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }} fontWeight="400">
                1 semana-
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <Example />
            </Center>
          </NativeBaseProvider>
        );
    };
    