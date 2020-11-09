import './App.css';
import Auth from "./Auth";
import {Auth0Provider} from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
    return (
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.href} className="App">
            <Auth/>
        </Auth0Provider>
    );
}

export default App;
