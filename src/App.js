import { useState, useEffect } from 'react'
import { Navbar, Slogan, Content } from './components'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleSize)
    handleSize()
    return () => window.removeEventListener('resize', handleSize)
  }, [])

  useEffect(() => {
    if (windowSize.width < 768) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [windowSize])

  return (
    <>
      <div className='font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500 dark:text-white text-black md:px-20'>
        <Navbar isMobile={isMobile} />
        <Slogan />
        <Content />
      </div>
    </>
  )
}

export default App
