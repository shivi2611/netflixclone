const key= "073c1305470356af671bf65b21b70d10";

const requests={
    netfliOriginals:`https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_networks=213`,
    trending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=073c1305470356af671bf65b21b70d10`,
    action: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=28`,
    comedy: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=35`,
    horror: `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=27`,
    romantic:`https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=10749`,
    documentaries:`https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=99`
};

export default requests;