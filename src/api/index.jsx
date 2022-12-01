import axios from "axios";

const url = "https://localhost:5001/posts";

export const fetchPosts = () => axios.get(url);