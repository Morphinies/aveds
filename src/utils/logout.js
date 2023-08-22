export function logout() {
    localStorage.removeItem("authUser");
    window.location.href = "/";
}
