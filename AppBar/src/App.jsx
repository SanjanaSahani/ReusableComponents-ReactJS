import './App.css'
import BasicAppbar from './components/BasicAppbar'

function App() {

  return (
    <>
       <h1 className="text-4xl text-center font-medium m-4">AppBar Components</h1>

       <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'>Basic Transition</h1>
        <BasicAppbar/>
      </div>
    </>
  )
}

export default App
