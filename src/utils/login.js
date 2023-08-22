import api from "../api";

export function login(data) {
    const user = api.users.users.find(
        (user) => user.login === data.login && user.password === data.password
    );
    if (user) {
        const response = { name: user.name, _id: user._id };
        localStorage.setItem("authUser", JSON.stringify(response));
        return response;
    }
}
