import CounterRedux from "./components/CounterRedux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ImageResponse from "./Additional_work/ImageResponse";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar/>

                <Switch>
                    <Route exact path="/counter-redux" component={CounterRedux}/>
                    <Route exact path="/image-response" component={ImageResponse}/>

                </Switch>

            </BrowserRouter>

        </div>
    );
}

export default App;
