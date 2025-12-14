import axios from "axios";

export const fetchUsersAPI = () =>
  axios.get("https://jsonplaceholder.typicode.com/users");
