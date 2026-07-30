// ingresamos nuestro codigo principal de react, en este caso App.jsx, que es el que se renderiza en el index.html.


import Header from "./components/header/Header";
import Banner from './components/banner/Banner'; 

function App() {
  return (
    <>
      <Header /> 
      <Banner />
     
    </>
  );
}

export default App;













/*function App(){
    return(
        <>
            <h1>Mi primer app</h1>
            <Prueba />
        
        
        </>
    )

}
export default App*/