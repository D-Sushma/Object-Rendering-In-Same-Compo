//OBJECT-RENDERING====== --> In Same Compo (in Card.js)======================================>>>>>
// don't need again and again rendering component, means 
// obj me jitne bhi bar jb bhi arr k undr obj change hoga hmara compo utni hi bar automatic render hoga
// 1st create card compo and import in app.js jisme ham object render krayenge
// 2nd we create Object.js component and make object. than import in card.js


import './App.css';
import Header from './components/Header'
import Card from './components/Card'

function App() {

  let task = "i am best";
  let name ="sushma";

  return (
    <div className="App">
     <Header  data={{task, name}} />

     <Card />
    
    </div>
  );
}

export default App;
