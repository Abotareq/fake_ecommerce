import axios from "axios";
import { baseURL } from "../utilities/utils";


export const axiosClient= axios.create({
    baseURL,
    headers:{},
    
})