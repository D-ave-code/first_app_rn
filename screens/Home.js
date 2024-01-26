import { View, Text } from "react-native";
import { Button, style } from "react-native";
import { useFetch } from "../useFetch";
import { ScrollView } from "react-native";
import Cards from "../componentes/cards";

const Home = ({ navigation }) => {
  const { data } = useFetch("https://api.github.com/users/D-ave-code");

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <View style={{ flex: 1, backgroundColor: "red" }}>
          

          <Cards
            red_social="Github"
            imagen={data.avatar_url}
            username={data.login}
            repos={data.public_repos}
            link={data.html_url}
            
          />
          <Cards
            red_social="Facebook"
            imagen="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/277656962_4975582702522342_3117911792138315574_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeEdUSSOufNwOdzGQAQsAPad2zG8gVSL9PXbMbyBVIv09YYyGHJLJENjJ2O1EVP2crlQfbX8hpCGnKRNpEHbHgpj&_nc_ohc=1n582nqZwvoAX8LPW0g&_nc_ht=scontent.fuio10-1.fna&oh=00_AfCxCghXoOzVPTb1C2ydTbUGl2EaIUy9wBfYjOW6Llbwxw&oe=65B5BF8D"
            username="urb san jose"
            link="https://m.facebook.com/profile.php/?id=100002119843884"
            
          />
          <Cards
            red_social="X"
            
            imagen="https://pbs.twimg.com/profile_images/746956315319230464/ob06EJxy_400x400.jpg"
            username="@david_andres5"
            link="https://m.twitter.com/david_andre5"
            
          />
        </View>

        <View style={{ flex: 1, backgroundColor: "green" }}>
          <Button
            color="#228b22"
            title="ir a perfil"
            onPress={() => {
              navigation.navigate("Profile");
            }}
          ></Button>
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
