import axios from "axios";

const instance = axios.create({
    // baseURL: "https://developers.themoviedb.org/3",
    baseURL: "https://api.themoviedb.org/3/movie/top_rated?api_key=38c8bbd3f93621ef2ba421b03fe285ed",
});

export default instance;
