import {FC} from "react";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import {RegisterPage} from "./pages/RegisterPage.tsx";
import {LoginPage} from "./pages/LoginPage.tsx";

export const AppRoutes: FC = () => {
    return (
        <Switch>

            <Route exact path={'/'} render={() => <HomePage/>}/>
            <Route exact path={'/register'} render={() => <RegisterPage/>}/>
            <Route exact path={'/login'} render={() => <LoginPage/>}/>
            <Route exact path={'*'} render={() => <h1>404 :(</h1>}/>


        </Switch>
    )
}