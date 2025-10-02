import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicPagination from './component/BasicPagination'
import OutlinedPagination from './component/OutlinedPagination'
import RoundedPagination from './component/RoundedPagination'
import PaginationSize from './component/PaginationSize'
import ButtonPagination from './component/ButtonPagination'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-4xl text-center font-semibold m-4  underline'>Reusable Pagination Components</h1>

    
        <div className='m-8'>
          <h1 className='text-center text-2xl'>Basic Pagination </h1>
          <BasicPagination />
        </div>

        <div className='m-8'>
          <h1 className='text-center text-2xl'>Outlined Pagination </h1>
          <OutlinedPagination />
        </div>

        <div className='m-8'>
          <h1 className='text-center text-2xl'>Rounded Pagination </h1>
          <RoundedPagination />
        </div>

        <div className='m-8'>
          <h1 className='text-center text-2xl'>Pagination Size</h1>
          <PaginationSize/>
        </div>
      
        <div className='m-8'>
          <h1 className='text-center text-2xl'>Buttons Pagination</h1>
          <p className='text-center text-gray-400'>You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons.</p>
          <ButtonPagination/>
        </div>

      

    </>
  )
}

export default App
