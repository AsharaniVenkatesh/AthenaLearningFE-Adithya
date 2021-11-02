import axios from "axios";


export default axios.create({
    baseURL: "http://athenabe1-env.eba-sqdwnu7u.us-east-2.elasticbeanstalk.com/api"
});