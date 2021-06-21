/** @format */

const url = "f92b07f20c31ab8aa45bfa5721b50439";

const Movies = {
  originals: `/discover/tv?api_key=${url}&with_networks=213`,
  trending: `/trending/all/week?api_key=${url}&language=en-US`,
  toprated: `/movie/top_rated?api_key=${url}&language=en-US`,
  action: `/discover/movie?api_key=${url}&with_genres=28`,
  comedy: `/discover/movie?api_key=${url}&with_genres=35`,
  horror: `/discover/movie?api_key=${url}&with_genres=27`,
  romance: `/discover/movie?api_key=${url}&with_genres=10749`,
  documentary: `/discover/movie?api_key=${url}&with_genres=99`,
};

export default { Movies };
