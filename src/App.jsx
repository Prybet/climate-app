import AppClimate from "./components/AppClimate"
import { ClimateProvider } from "./context/ClimateProvider"


function App() {
  return (
    <ClimateProvider>
      <header>
        <h1>Buscador de clima</h1>
      </header>
      <AppClimate />
    </ClimateProvider>

  )
}

export default App
