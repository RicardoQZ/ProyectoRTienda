import { ChakraProvider } from "@chakra-ui/react"
import AppRouter from "./router/AppRouter"

const App = () => {
  return (
    <ChakraProvider disableGlobalStyle>
      <AppRouter/>
    </ChakraProvider>
  )
}

export default App
