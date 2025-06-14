import axios from "axios"
import service from "../utils/request"
export const getData=()=>{
    return service.get("/user")
}
