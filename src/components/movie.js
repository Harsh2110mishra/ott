import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

import colors from "../constants/colors";
import { sampleImage } from "../constants/image";
import { baseUrl } from "../constants/env";
import color from "../constants/colors";

const Movie = (props) => {
  const { item, navigation } = props;
  return (
    <View>
      <TouchableOpacity
        testID="movieDetailsBtn"
        onPress={() =>
          props.navigation.navigate("Details", {
            item: item,
          })
        }
      >
        <View style={styles.buttonView}>
          <View>
            {/* using sample image as `${baseUrl}/now_playing${item.poster_path}` is not working */}
            <Image
              style={styles.imageStyle}
              source={{
                uri: sampleImage,
              }}
            />
          </View>
          <View style={styles.dataView}>
            <Icon
              style={styles.icon}
              size={16}
              name="star"
              color={color.text}
            />
            <Text style={styles.rating}>{item.vote_average.toFixed(1)}</Text>
            <Text style={styles.votes}>
              {String(item.vote_count).slice(0, 2) + `K votes`}
            </Text>
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Movie;

const styles = StyleSheet.create({
  buttonView: { marginHorizontal: 4, width: 140 },
  imageStyle: { width: 140, height: 200, borderRadius: 30 },
  dataView: {
    flexDirection: "row",
    backgroundColor: colors.dataBG,
    borderRadius: 6,
    width: 135,
  },
  icon: { marginTop: 1, marginLeft: 5 },
  rating: { color: colors.headings, marginHorizontal: 5 },
  votes: { color: colors.headings, marginLeft: 15 },
  title: {
    color: colors.headings,
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "600",
  },
});
