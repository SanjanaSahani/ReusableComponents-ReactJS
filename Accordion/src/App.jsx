import './App.css';
import Accordion from './components/Accordion';
import ControlledAccordion from './components/ControlledAccordion';

function App() {
  const accordionData = [
    {
      title: 'Accordion 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Accordion 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    },
    {
      title: 'Accordion Actions',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
      actions: true,
    },
  ];

  return (
    <>
      <h1 className="text-4xl text-center font-medium m-4 underline">
        Reusable Accordion Components
      </h1>

      <h1 className='text-center underline'>Basic Accordion</h1>
      <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-4 cursor-pointer">
        <Accordion items={accordionData} />
      </div>

      <br />

      <h1 className='text-center underline'>Controlled Accordion</h1>
      <div className="min-h-[300px] bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 flex flex-wrap gap-6 items-center justify-center p-4 cursor-pointer">
        <ControlledAccordion items={accordionData} />
      </div>

    </>
  );
}

export default App;