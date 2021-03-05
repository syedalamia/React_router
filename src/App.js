import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect, 
 
} from "react-router-dom";
import Details from "./Details";
import Navigation from "./Navigation";
import Product from "./Product";
import React,{useState} from 'react'



function App() {

  const [productList, setProduct] = useState([
    {
        name: 'Samsung',
        description: 'Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method.',
        price: '500',
        category: 'Mobile phone',
    },
    {
        name: 'Nokia',
        description: 'Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method.',
        price: '100',
        category: 'handset',
    },
    {
        name: 'Motorola',
        description: 'Note that returning a falsy expression will still cause the element after && to be skipped but will return the falsy expression. In the example below, <div>0</div> will be returned by the render method.',
        price: '300',
        category: 'folding',
    },
  
    ])
  return (
    <div className="App">
      <Router>
      
     <Navigation/>

      <Switch>
        <Route exact path={'/'}>
          <Product product={productList}/>
        </Route>

        <Route exact path={'/home'}>
        <p>root</p>
        </Route>
        

        <Route exact path={'/about/:id'}>
     
        <Details product={productList}/>
        </Route>


        <Route  path={'/404'}>
        <p>not found</p>
        </Route>

        <Route path={'*'} render={()=><Redirect to={'/404'}/>}/>

     

   


      </Switch>

      </Router>
    </div>
  );
}

export default App;

