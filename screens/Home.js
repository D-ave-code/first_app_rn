import { View, Text, Image, ImageBackground } from "react-native";
import { Button, style } from "react-native";
import { useState, useEffect } from "react";
import { useFetch } from "../useFetch";
import { ScrollView, StyleSheet } from "react-native";
import Cards from "../componentes/Cards";

const Home = ({ navigation }) => {
  const { data } = useFetch("https://api.github.com/users/D-ave-code");

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
        }}
      >
        <ImageBackground
          style={styles.image}
          source={
            require("../assets/load.gif") //Indicator
          }
        >
          <Image
            style={styles.image}
            source={{
              uri: "https://www.fotoefectos.com/i/4285_portada-facebook-personalizable-un-gato-gafas.jpg",
            }}
          />
        </ImageBackground>
        <Text
          style={{
            color: "black",
            paddingTop: 10,
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          REDES SOCIALES
        </Text>
      </View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Cards
              red_social="Github"
              imagen={data.avatar_url}
              username={data.login}
              repos={data.public_repos}
              link={data.html_url}
              icon="github"
              color_icon="black"
            />
            <Cards
              red_social="Facebook"
              imagen="https://scontent.fuio10-1.fna.fbcdn.net/v/t39.30808-6/277656962_4975582702522342_3117911792138315574_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeEdUSSOufNwOdzGQAQsAPad2zG8gVSL9PXbMbyBVIv09YYyGHJLJENjJ2O1EVP2crlQfbX8hpCGnKRNpEHbHgpj&_nc_ohc=1n582nqZwvoAX8LPW0g&_nc_ht=scontent.fuio10-1.fna&oh=00_AfCxCghXoOzVPTb1C2ydTbUGl2EaIUy9wBfYjOW6Llbwxw&oe=65B5BF8D"
              username="Dave Code"
              amigos="364"
              link="https://m.facebook.com/profile.php/?id=100002119843884"
              icon="facebook"
              color_icon="blue"
            />
            <Cards
              red_social="X-twitter"
              seguidores="4"
              imagen="https://pbs.twimg.com/profile_images/746956315319230464/ob06EJxy_400x400.jpg"
              username="@david_andres5"
              link="https://m.twitter.com/david_andre5"
              icon="twitter"
              color_icon="blue"
            />
            <Cards
              red_social="Twitch"
              seguidores="2"
              imagen="https://static.wikia.nocookie.net/breakingbad/images/3/3a/Alfombra-breaking-bad-mod3-large2.jpg/revision/latest?cb=20190622081645&path-prefix=es"
              username="D4veCode"
              link="https://www.twitch.tv/D4veCode"
              icon="twitch"
              color_icon="purple"
            />
            <Cards
              red_social="Reddit"
              seguidores="0"
              imagen="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png"
              username="ocelotte_dave"
              link="https://www.reddit.com/user/ocelotte_dave/"
              icon="reddit"
              color_icon="orange"
            />
          </View>
        </View>
      </ScrollView>
      <Button
        color="#228b22"
        title="ir a Lista"
        onPress={() => {
          navigation.navigate("Lista");
        }}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  // Estilos de la imagen
  image: {
    width: 400,
    height: 128,
    borderRadius: 5,
    marginRight: 10,
  },
});
export default Home;
