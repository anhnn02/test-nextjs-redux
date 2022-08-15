import instance from "./instance"

export const getAll = () => {
    return instance.get("products") 
}
export const get = (id: number) => {
    return instance.get("products/" + id) 
}
export const add = (item: any) => {
    return instance.post("products", item) 
}
export const edit = (item: any) => {
    return instance.put("products/"+ item.id, item) 
}
export const remove = (id: number) => {
    return instance.delete("products/" + id) 
}