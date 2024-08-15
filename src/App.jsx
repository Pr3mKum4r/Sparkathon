import "./App.css";
import GenAi from "./components/GenAi";
import Landing from "./components/Landing";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/genai" exact element={<GenAi/>}/>
      </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
