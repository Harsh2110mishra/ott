import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Movie from "../../components/movie";

import colors from "../../constants/colors";
import { sampleImage } from "../../constants/image";

export default function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <TextInput
            testID="searchBtn"
            style={styles.searchInput}
            placeholder="Search for movie..."
            value={props.searchText}
            onChangeText={props.handleSearch}
          />
          <Icon style={styles.icon} size={24} name="search" />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollViewContainer}
      >
        {props.searchText !== "" ? (
          <FlatList
            testID="searchFlatList"
            horizontal
            data={props.allMovies}
            renderItem={({ item }) => (
              <Movie item={item} navigation={props.navigation} />
            )}
          />
        ) : (
          <>
            <Text style={styles.heading}>Now Playing</Text>

            <FlatList
              testID="nowPlayingFlatList"
              horizontal
              data={props.nowPlaying}
              renderItem={({ item }) => (
                <Movie item={item} navigation={props.navigation} />
              )}
            />

            <Text style={styles.heading}>Popular</Text>
            <FlatList
              horizontal
              testID="popularFlatList"
              data={props.popular}
              renderItem={({ item }) => (
                <Movie item={item} navigation={props.navigation} />
              )}
            />
            <Text style={styles.heading}>Top Rated</Text>
            <FlatList
              horizontal
              testID="topRatedFlatList"
              data={props.topRated}
              renderItem={({ item }) => (
                <Movie item={item} navigation={props.navigation} />
              )}
            />
            <Text style={styles.heading}>Upcoming</Text>
            <FlatList
              testID="upcomingFlatList"
              horizontal
              data={props.upcoming}
              renderItem={({ item }) => (
                <Movie item={item} navigation={props.navigation} />
              )}
            />
            {props.favMovie.length ? (
              <>
                <Text style={styles.heading}>Favourite</Text>
                <FlatList
                  testID="favFlatList"
                  horizontal
                  data={props.favMovie}
                  renderItem={({ item }) => (
                    <Movie item={item} navigation={props.navigation} />
                  )}
                />
              </>
            ) : null}
          </>
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.background,
    alignContent: "center",
  },
  scrollViewContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  searchContainer: {
    marginHorizontal: 10,
    borderRadius: 12,
    backgroundColor: colors.headings,
    padding: 8,
    marginTop: 0,
  },
  assets: {
    marginVertical: 40,
    marginTop: -20,
    marginHorizontal: 80,
    resizeMode: "cover",
  },
  heading: {
    fontSize: 18,
    fontWeight: "800",
    marginHorizontal: 20,
    marginBottom: 15,
    color: colors.headings,
  },
  search: {
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    right: -180,
  },
});
