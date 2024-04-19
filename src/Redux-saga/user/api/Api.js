import axios from "axios"
import { DELETE_USER, GET_USER, POST_USER, UPDATE_USER, base_url } from "../../Constant"

let get_user = (action) => {
    // console.log(action, "api action");
    return axios.get(base_url + GET_USER).then((res) => {
        // console.log(res, "api");
        let data = res.data;
        let status = res.status;
        return { data, status }
    });
};

let post_user = (action) => {
    // console.log(action);
    return axios.post(base_url + POST_USER, action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let delete_user = (action) => {
    // console.log(action);
    return axios.delete(base_url + DELETE_USER + action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status };
    })
}

let update_user = (action) => {
    // console.log(action.payload.id,"action");
    return axios.put(base_url + UPDATE_USER + action.payload.id, action.payload).then((res) => {
        console.log(res, 'update user');
        let data = action.payload;
        let status = res.status;
        return { data, status };
    })
}
export { get_user, post_user, delete_user, update_user };