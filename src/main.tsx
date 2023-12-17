import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import {Styles} from "./styles/styles.tsx";
import {BrowserRouter} from "react-router-dom";
import {AppReduxProvider} from "./store";
import './firebase.ts'



ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <AppReduxProvider>
            <BrowserRouter>
                <Styles />
                <App />
            </BrowserRouter>
        </AppReduxProvider>
    </>
)
