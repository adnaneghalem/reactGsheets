import logo from './logo.svg';
import './App.css';
import {GoogleDownload} from './components/GoogleDownload/index'

const data =  {'cool': ["Item", "Cost", "Stocked", "Ship Date"],
'lol':["Wheel", "$20.50", "4", "3/1/2016"],
'cuuool':["Door", "$15", "2", "3/15/2016"],
'codeol':["Engine", "$100", "1", "3/20/2016"],
'codfol':["Totals", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]}

function App() {
  return (
    <div className="App">
     <GoogleDownload data={data}/>
      <script async defer src="https://apis.google.com/js/api.js"></script>
    </div>
  );
}

export default App;
