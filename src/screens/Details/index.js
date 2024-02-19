import React, { useContext } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";

import MainContext from "../../context/store";

import { sampleImage } from "../../constants/image";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import color from "../../constants/colors";

const Details = (props) => {
  const route = useRoute();
  const { item } = route.params;
  const { movies } = useContext(MainContext);

  const [movieData, setMovieData] = movies;

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: sampleImage }} />
      <View style={{ margin: 2 }}>
        <View style={styles.actions}>
          <Icon name="star" size={18} style={styles.icon} color={color.text} />
          <Text style={styles.rating}>{item.vote_average.toFixed(1)}/10 </Text>
          <Text style={styles.votes}>
            {String(item.vote_count).slice(0, 2) + `K Votes`}
          </Text>
        </View>
        {item.adult ? (
          <Icon2
            name="18-up-rating"
            size={32}
            style={styles.icon18}
            color={color.background}
          />
        ) : null}
        <View style={styles.actions}>
          <Text style={styles.release}>Release Date: </Text>
          <Text
            style={[{ ...styles.release, fontWeight: "500", marginLeft: 0 }]}
          >
            {item.release_date.split("-").reverse().join("-")}
          </Text>
        </View>
      </View>
      <Text style={styles.description}>{item.overview}</Text>
      <View style={styles.hideButtonView}>
        <TouchableOpacity
          onPress={() => {
            setMovieData(() => {
              if (movieData.length) {
                return movieData.concat(item);
              }
              return [item];
            });
            props.navigation.navigate("Home");
          }}
          styles={styles.hideButton}
        >
          <Text style={styles.hideButtonText}>Add to favourite</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.headings,
    alignContent: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 5,
  },
  actions: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: -10,
  },
  icon: {
    marginTop: 22,
    marginRight: 5,
  },
  icon18: {
    marginTop: -18,
    position: "absolute",
    right: 5,
    bottom: 15,
  },
  rating: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    fontWeight: "800",
    marginVertical: 20,
  },
  votes: {
    marginTop: 22,
    fontSize: 14,
    color: "grey",
    textAlign: "center",
  },
  release: {
    fontSize: 16,
    color: "black",
    marginLeft: 10,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    marginHorizontal: 20,
  },
  hideButton: { marginHorizontal: 20 },
  hideButtonView: {
    backgroundColor: "black",
    width: 180,
    borderRadius: 20,
    marginHorizontal: 95,
    marginVertical: 70,
  },
  hideButtonText: {
    fontSize: 20,
    textAlign: "center",
    color: color.text,
    marginVertical: 6,
  },
});

export default Details;
