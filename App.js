import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFetch } from "./useFetch";
import { useOpen } from "./useOpen";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainStack from "./navigation/MainStack";
export default function App() {
  /* const { data } = useFetch("https://api.github.com/users/D-ave-code"); */
  let prompt = "quien gano el mundial 2018";

  /* const data1 = useOpen(prompt); */

  /*   return (
    <View style={styles.container}>
      <Text>{data.login}</Text>
      <Text>{data.id}</Text>
      <Text>{data.avatar_url}</Text>
      <Image
        style={{ width: 64, height: 64, borderRadius: 15 }}
        source={{
          uri: data.avatar_url,
        }}
      />
      <Text>{data1.content}</Text> 
      <Text>Open up App.js to5 2ddd ffyour app!</Text>
      <StatusBar style="auto" />
    </View>
      ); */
  return (
    
      <MainStack/>
    
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}
); */
