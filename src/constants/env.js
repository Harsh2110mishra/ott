const baseUrl = "https://api.themoviedb.org/3/movie";

const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTQzMDFlNWJmOGZiOGY0NDJhYWQzYzlkYjJiYThiNiIsInN1YiI6IjY1ZDExYzgxNDFlZWUxMDE3YzA4NTY3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K1cZsP49GiOIYMK7QMTrj1HlEjBeLBUjnmzTSRea1Mc";

const apiHeaders = {
  "User-Agent":
    "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0",
  Accept: "application/json, text/plain, */*",
  Authorization: token,
};

export { baseUrl, apiHeaders };
