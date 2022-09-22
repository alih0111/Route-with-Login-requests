import http from "./httpService";

export default function addContact(data){
    return http.post(`/contact`,data)
}