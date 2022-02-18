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
      <div className='font-sora overflow-y-auto overflow-x-hidden h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700 text-white'>
        <Navbar isMobile={isMobile} />
        <Slogan />
        <Content />
      </div>
    </>
  )
}

export default App
