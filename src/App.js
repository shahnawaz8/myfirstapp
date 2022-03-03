import logo from './logo.svg';
import './App.css';

function App() {
  var os = ["Android","Blackberry","iPhone","Windows Phone"];
  var mf = ["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
        <h1>Mobile Operating System</h1>
        <ul>
          {
          os.map((i)=>
            <li>{i}</li>
          )
          }
        </ul>
        <h1>Mobile Manufacturers</h1>
        <ul>
          {/* { mf.map((i)=>
            <li>{i}</li>
          )} */
          }
          <li className="clist1">Samsung</li>
          <li className="clist1">HTC</li>
          <li>Micromax</li>
          <li className="clist">Apple</li>

          
        </ul>
    </div>
  );
}

export default App;
