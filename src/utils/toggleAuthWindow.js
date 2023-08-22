export function toggleAuthWindow() {
    console.log("openAuthWindow");
    const authWindow = document.getElementById("authWindow");
    if (authWindow.style.display === "flex") {
        authWindow.style.display = "none";
    } else {
        authWindow.style.display = "flex";
    }
}
