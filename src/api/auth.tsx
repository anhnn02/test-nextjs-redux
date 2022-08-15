import instance from "./instance"

export const login = (data) => {
    return instance.post("/login", data) 
}
export const register = (data) => {
    return instance.post("/signup", data) 
}
