
import { Provider } from "react-redux"
import Body from "./components/Body"
import appStore from "./assets/appStore"



function App() {
  console.log(">>> This is the REAL App.jsx being used <<<");

  return <Provider store={appStore}>
    
        <Body />

        </Provider>
}

export default App
