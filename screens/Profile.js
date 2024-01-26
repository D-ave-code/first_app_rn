import { View, Text } from "react-native";
import { Button } from "react-native";
const Profile = ({ navigation }) => {
  return (
    <View >
      <Text>SOY profile ssXD</Text>
      <View style ={{bottom: 0}}>
        <Text style={{bottom:0}}>sddd</Text>
      </View>
      <Button
        color="#228b22"
        title="ir a Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></Button>
    </View>
  );
};
export default Profile;
