


export const setRolrIdInLocalStorage = (role, id) => {
    localStorage.setItem("id", id);
    localStorage.setItem("role", role);
}

export const getRole = () =>{
    return localStorage.getItem("role")
}

export const getId = () =>{
    return localStorage.getItem("id")
}

export const clearLocalStorage = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("id");
}