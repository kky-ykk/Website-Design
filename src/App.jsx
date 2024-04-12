
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import { HashRouter,BrowserRouter,Routes,Route } from 'react-router-dom'
import SignUp from "./component/SignUp"
import ProfileCreation from "./component/profileCreaction"
import LoginFinish from "./component/logingFinish"
import LastSection from "./component/bottomSection"

function App() {

  return (
      <div>
        <BrowserRouter  >
          <Routes>
              <Route  path="/" element={<SignUp/>}></Route>
              <Route  path="/profileCreation" element={<ProfileCreation/>}></Route>
              <Route  path="/loginfinish" element={<LoginFinish/>}></Route>
              <Route  path="/lastSection" element={<LastSection/>}></Route>
          </Routes>      
      </BrowserRouter>
      </div>
  )
}

export default App
