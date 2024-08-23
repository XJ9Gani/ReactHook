import Counter from "./components/Counter";
import List from "./components/List";
import Timer from "./components/Timer";
const link = [
    {id: 1, name: 'user-1', surname: 'test-1'},
     {id: 2, name: 'user-2', surname: 'test-2'}, 
     undefined,
      {id: 3, name: 'user-3', sername: null}, 
      {id: 4, name: null, surname: 'test-4'}]

function App(){
    return(
        <>
        <h1>Counter</h1>
    <Counter/>
    <hr/>
    <h1>List</h1>
    <List item={link}/>
    <hr/>
     <h1>Timer</h1>
     <Timer/>
        </>
    )
}
export default App;