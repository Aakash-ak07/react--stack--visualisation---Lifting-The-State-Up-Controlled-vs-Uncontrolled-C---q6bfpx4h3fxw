import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Element from './components/element';

function App() {
  const[text, setText] = useState();
  const[arr, setArr] = useState([]);
  const[popEle, setPopELe] = useState('');
  const[topELe, setTopEle] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  }

  const handlePush = () => {
    setArr(text, [...arr])
  }

  const handlePop = () => {
    if (arr.length == 0) {
      window.alert('Stack is empty')
    }
    else{
      setPopEle(arr.shift())
    }
  }

  const handleTop = () => {
    if (arr.length == 0) {
      window.alert('Stack is empty')
    }
    else{
      setTopEle(arr.shift())
    }
  }
  
  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          <Element />
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
              PUSH
            </button>
            <input type="text" className="form-control" />
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
              POP
            </button>
            <input type="text" disabled className="form-control" />
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">
              TOP
            </button>
            <input type="text" disabled className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
