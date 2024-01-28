import { View, Text } from "react-native";
import { Button } from "react-native";
const Openai = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ flex: 1 }}>
        <Text>SOY OPENAI </Text>
      </View>
      <View /* style={{flexDirection: 'row',alignItems: "center",
    justifyContent: "center", gap:50}} */
      >
        <Button
          color="#228b22"
          title="ir a Home"
          onPress={() => {
            navigation.navigate("Home");
          }}
        ></Button>
      </View>
    </View>
  );
};
export default Openai;
