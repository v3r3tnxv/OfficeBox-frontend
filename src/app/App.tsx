import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Routing } from "./providers/router";

export const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routing />
            </Layout>
        </BrowserRouter>
    );
};
