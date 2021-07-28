import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {incNumber, decNumber} from './actions/index'

function App() {

  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Welcome to Redux</h1>
      <h2>Increament Decreament Counter</h2>

      <button onClick={()=> dispatch(decNumber())}> - </button>
      <span> </span> {myState} <span> </span>
      <button onClick={ () => dispatch(incNumber()) }> + </button>
      
    </div>
  );
}

export default App;
