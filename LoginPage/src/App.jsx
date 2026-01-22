import './App.css'
import BasicLoginPage from './components/BasicLoginPage'

function App() {
  return (
    <>
     <h1 className='text-4xl text-center font-semibold m-4  underline'>Login Page</h1>

      <div className='m-8 '>
        <h1 className='text-center text-2xl'>Basic Login Page</h1>
        <div className='p-4 flex items-center justify-center bg-linear-to-r from-blue-50 via-purple-50 to-pink-50 cursor-pointer'>
        <BasicLoginPage title="Employee Login" subtitle="Access your dashboard"
         onSubmit={(data) => console.log(data)}/>
        </div>
      </div>
    </>
  )
}

export default App
