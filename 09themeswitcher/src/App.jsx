import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  //? Here we have defined the functionality of the methods in context, the functionality is directly passed to the methods in context

  const darkTheme = () => {
    setThemeMode('dark')
  }

  const lightTheme = () => {
    setThemeMode('light')
  }

  // Actual change in the theme
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', "light")
    // removed all light and dark classes
    document.querySelector('html').classList.add(themeMode)
    // Because themeMode holds the state
  }, [themeMode])


  return (

  // give the access of the context
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>
              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App