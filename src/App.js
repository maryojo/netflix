import Pages from "./pages";
import {AuthContextProvider } from './context/AuthContext'


function App() {
  return (
    <AuthContextProvider>
      <div className="App bg-black">
      <Pages/>
    </div>
    </AuthContextProvider>
  );
}

export default App;
