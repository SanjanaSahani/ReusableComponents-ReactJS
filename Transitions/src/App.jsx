import './App.css'
import BasicTransition from './components/BasicTransition'
import GrowTransition from './components/GrowTransition'
import SlideTransition from './components/SlideTransition'

function App() {

  return (
    <>
      <h1 className='text-4xl text-center font-semibold m-4  underline'>Reusable Tansitions Components</h1>

      <div className='m-8'>
        <h1 className='text-center text-2xl p-4'>Basic Transition</h1>
        <BasicTransition />
      </div>

      <div className='m-8'>
        <h1 className='text-center text-2xl p-4'>Grow Transition</h1>
        <GrowTransition/>
      </div>

      <div className='m-8'>
        <h1 className='text-center text-2xl p-4'>Slide Transition</h1>
        <SlideTransition/>
      </div>

    </>
  )
}

export default App
