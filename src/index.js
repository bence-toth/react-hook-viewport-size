import {useState, useEffect} from 'react'

const useViewportSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  const handleViewportSizeChange = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener(
      'resize',
      handleViewportSizeChange
    )
    return () => {
      window.removeEventListener(
        'resize',
        handleViewportSizeChange
      )
    }
  }, [])

  return [size.width, size.height]
}

export default useViewportSize
