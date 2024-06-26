import './App.css';
import bootcampLogo from './images/bootcamp-free-font-01.jpg';
import ListaDeTareas from './components/TaskList';

function App() {
  return (
    <div className='task-app'>
      <div className='logo-container'>
        <img 
          src={bootcampLogo} 
          className='logo' />
      </div>
      <div className='main-task-list'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
