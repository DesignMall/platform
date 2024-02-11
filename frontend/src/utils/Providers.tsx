import { Provider } from "react-redux";
import { Store } from "../states/store";
import { Nodes } from "./types";

export default function Providers({children}: Nodes) {
    return <>
        <Provider store={Store}>
            {children}
        </Provider>

    </>
}