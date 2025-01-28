import './App.css';
import Card from './components/Card';

function App() {

  return (
    <>
    <h1 className='bg-green-400 text-balck p-4 rounded-2xl mb-4'> Hi I am Vishal Rao | A software developer</h1>
    <Card username = "WebDeveloper" btnText="click me"/>
    <Card username="Vishal Rao"/>
    </>
  )
}

export default App;
