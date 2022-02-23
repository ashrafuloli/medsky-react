import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./container/Home/Home";
import About from "./container/About/About";
import NotFound from "./container/NotFound/NotFound";
import Service from "./container/Service/Service";
import Shop from "./container/Shop/Shop";
import Contact from "./container/Contact/Contact";
import Post from "./container/Post/Post";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/service">
                        <Service/>
                    </Route>
                    <Route path="/shop">
                        <Shop/>
                    </Route>
                    <Route path="/blog">
                        <Post/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
