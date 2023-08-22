import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import AuthWindow from "./components/popUpWindow/authWindow";

function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <AuthWindow />
        </>
    );
}

export default App;
