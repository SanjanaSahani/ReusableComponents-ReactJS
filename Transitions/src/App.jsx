import './App.css'
import BasicTransition from './components/BasicTransition'

function App() {

  return (
    <>
     <h1 className='text-4xl text-center font-semibold m-4  underline'>Reusable Tansitions Components</h1>

      <div className='m-8'>
        <h1 className='text-center text-2xl'>Basic Transition</h1>
        <BasicTransition/>
      </div>
    </>
  )
}

export default App
