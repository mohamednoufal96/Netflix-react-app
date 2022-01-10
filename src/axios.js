import axios from "axios";

const instance = axios.create({
    // baseURL: "https://developers.themoviedb.org/3",
    baseURL: "https://api.themoviedb.org/3/discover/movie?api_key=38c8bbd3f93621ef2ba421b03fe285ed&with_genres=28",
});

export default instance;
