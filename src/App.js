import { useState } from "react";
import Row from "./components/Row";
import requests from "./requests";

function App() {
    return (
        <div className="App">
            <h1>Netlix clone</h1>
            <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} />
            <Row title={"Top trending"} fetchUrl={requests.fetchTrending} />
        </div>
    );
}

export default App;
