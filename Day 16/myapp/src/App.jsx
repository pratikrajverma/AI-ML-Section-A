import Fun1 from "./components/Fun1";
import Fun2 from "./components/Fun2";
import Fun3 from "./components/Fun3";
import Fun4 from "./components/Fun4";

function App(){

  let x = 10;
  let name = 'pratik'

return(
  <div>
    {/* <h1>Hello React</h1> */}

    {/* <p>{x}</p> 
    <h1>{name}</h1>  */}


    {/* <Fun1/>

    <Fun2/>
    <Fun2/>
    <Fun2/>
    <Fun2/>

    <Fun3/>
    <Fun4/> */}



    <Fun1 data={x} data2 = {name} />

  </div>
)


}

export default App

