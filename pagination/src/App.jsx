import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicPagination from './component/BasicPagination'
import OutlinedPagination from './component/OutlinedPagination'
import RoundedPagination from './component/RoundedPagination'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl text-center font-semibold m-4  underline'>Reusable Pagination Components</h1>

      <div className='m-8'>
        <h1 className='text-center text-2xl'>Basic Pagination </h1>

        <div className='m-8'>
          <BasicPagination />
        </div>

        <div className='m-8'>
          <OutlinedPagination />
        </div>

        <div className='m-8'>
          <RoundedPagination />
        </div>

      </div>

    </>
  )
}

export default App
