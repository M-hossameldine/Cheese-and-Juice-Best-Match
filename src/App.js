import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
function App() {
  return (
    <div className='App-header'>
      <main className='border-orange-300'>
        <ParentComponent />
      </main>
    </div>
  );
}

export default App;
