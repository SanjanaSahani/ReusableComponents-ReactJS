import './App.css'
import AppBarWithMenu from './components/AppBarWithMenu'
import AppBarWithPrimarySearch from './components/AppBarWithPrimarySearch'
import AppBarWithResponsiveMenu from './components/AppBarWithResponsiveMenu'
import AppBarWithSearch from './components/AppBarWithSearch'
import BasicAppbar from './components/BasicAppbar'
import BottomAppBar from './components/BottomAppBar'

function App() {

  return (
    <>
      <h1 className="text-4xl text-center font-medium m-4">AppBar Components</h1>

      <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'>Basic AppBar</h1>
        <BasicAppbar />
      </div>

      <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'>AppBar With Profile</h1>
        <AppBarWithMenu />
      </div>

      <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'>AppBar With Responsive Menu</h1>
        <AppBarWithResponsiveMenu />
      </div>

      <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'>AppBar With Search Menu</h1>
        <AppBarWithSearch />
      </div>

      <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'>AppBar With Primary Search Menu</h1>
        <AppBarWithPrimarySearch />
      </div>

       <div className='mt-8 bg-blue-50 rounded-xl shadow-md p-4'>
        <h1 className='text-center text-2xl p-4 underline'>Bottom App Bar </h1>
        <BottomAppBar/>
      </div>
    </>
  )
}

export default App
