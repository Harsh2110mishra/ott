import React, { useEffect, useState, useContext } from "react";
import axios, { all } from "axios";

import MainContext from "../../context/store";

import { baseUrl, apiHeaders } from "../../constants/env";

import Index from "./index";

export default function Home({ navigation }) {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { movies } = useContext(MainContext);

  const [movieData] = movies;

  useEffect(() => {
    const nowPlayingApiCall = async () => {
      try {
        await axios
          .get(`${baseUrl}/now_playing`, {
            headers: apiHeaders,
          })
          .then((res) => {
            const data = res?.data?.results;
            setNowPlaying(data);
          })
          .catch((err) => {
            console.log("home", "API", err);
          });
      } catch (err) {
        console.log("home", "useEffect", err);
      }
    };
    const popularApiCall = async () => {
      try {
        await axios
          .get(`${baseUrl}/popular`, {
            headers: apiHeaders,
          })
          .then((res) => {
            const data = res?.data?.results;
            setPopular(data);
          })
          .catch((err) => {
            console.log("home", "API", err);
          });
      } catch (err) {
        console.log("home", "useEffect", err);
      }
    };
    const topRatedApiCall = async () => {
      try {
        await axios
          .get(`${baseUrl}/top_rated`, {
            headers: apiHeaders,
          })
          .then((res) => {
            const data = res?.data?.results;
            setTopRated(data);
          })
          .catch((err) => {
            console.log("home", "API", err);
          });
      } catch (err) {
        console.log("home", "useEffect", err);
      }
    };
    const upcomingApiCall = async () => {
      try {
        await axios
          .get(`${baseUrl}/upcoming`, {
            headers: apiHeaders,
          })
          .then((res) => {
            const data = res?.data?.results;
            setUpcoming(data);
          })
          .catch((err) => {
            console.log("home", "API", err);
          });
      } catch (err) {
        console.log("home", "useEffect", err);
      }
    };
    nowPlayingApiCall();
    popularApiCall();
    topRatedApiCall();
    upcomingApiCall();
    setAllMovies(popular);
  }, []);

  const handleSearch = (text) => {
    if (!text || text === " ") {
      setSearchText(text);
      setAllMovies(setAllMovies);
    } else {
      const filtered = allMovies.filter((movie) => {
        movie.title.toLowerCase().includes(text.toLowerCase());
      });
      console.log("filtered", filtered);
      setAllMovies(filtered);
      setSearchText(text);
    }
  };
  return (
    <Index
      searchText={searchText}
      favMovie={movieData}
      handleSearch={handleSearch}
      allMovies={allMovies}
      setSearchText={setSearchText}
      nowPlaying={nowPlaying}
      popular={popular}
      topRated={topRated}
      upcoming={upcoming}
      navigation={navigation}
    />
  );
}
