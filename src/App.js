// CSS File
import './App.css';
import { useState,useContext,createContext} from "react";

// From React Bootstrap
import  Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Badge from 'react-bootstrap/Badge'

// From Material UI
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GradeIcon from '@mui/icons-material/Grade';
import ButtonGroup from '@mui/material/ButtonGroup';

// Main Component
export default function App() {
  return (
    <div className="App">
      <article><Homepage/></article>
    </div>
  );
}


let context=createContext(0); // Context Hook creation

function Homepage() // Homepage Contents
{
  
  let [count,setCount]=useState(0)  // UseState Hook 
  return <context.Provider value={[count,setCount]}>
  <div>
              <section><Header/></section>
              <section><Heading/></section>
              <section><Content/></section>
              <section><Footer/></section>
  </div>
        </context.Provider>
}

// Header Navigation Bar
function Header()
{
let[count]=useContext(context)
 return (<div className="Header">
           <Navbar className="nav" bg="light" expand="lg">
        <Container fluid style={{width:"90%"}}>
        <Navbar.Brand >Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav className="me-auto my-2 my-lg-0"  navbarScroll>
        <Nav.Link style={{fontWeight:"500"}}>Home</Nav.Link>
        <Nav.Link style={{fontWeight:"400"}}>About</Nav.Link>
        <NavDropdown title="Shop" id="navbarScrollingDropdown">
        <NavDropdown.Item >All Products</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >Popular Items</NavDropdown.Item>
        <NavDropdown.Item >New Arrivals</NavDropdown.Item>
        </NavDropdown>
        </Nav>
         <Button variant="outline-dark"><ShoppingCartIcon></ShoppingCartIcon> Cart  <Badge  pill bg="dark">{count}</Badge></Button>
        </Navbar.Collapse>                                                                 
        </Container>
        </Navbar>
    </div>
  );
}

// Heading
function Heading()
{
  return  <div className="heading">
    <h1 className="heading-line-1">Shop in style</h1>
    <p className="heading-line-2">With this shop homepage template</p>
  </div>
}

// Contents
function Content()
{
  let items=[
    {id:100,name:"Fancy Product",star:"",  price:"$40.00-$80.00", button:"View options"},
    {id:101,name:"Special Item", star:"",  price:"$18.00",        button:"Add to cart"},
    {id:102,name:"Sale Item",    star:"",  price:"$25.00",        button:"Add to cart"},
    {id:103,name:"Popular Item", star:"",  price:"$40.00",        button:"Add to cart"},
    {id:104,name:"Sale Item",    star:"",  price:"$25.00",        button:"Add to cart"},
    {id:105,name:"Fancy Product",star:"",  price:"$120.00-$280",  button:"View options"},
    {id:106,name:"Special Item", star:"", price:"$18.00",         button:"Add to cart"},
    {id:107,name:"Popular Item", star:"", price:"$40.00",         button:"Add to cart"},
  
  ];
  return <div className="content-box">
    {items.map((items,i)=>{  return <Productdetails key={i} items={items}/>})}
  </div>
}

// Individual Product Details
function Productdetails({items})
 {
   
  
  let[count,setCount]=useContext(context)  //  Using Context Hook
  
  let[num,setNum]=useState(0)  // Usestate Hook to track the cart value of individual product

  // Object Destructuring
   let{id,name,star,price,button}=items

  //  Conditional Rendering
   
   if(name==="Sale Item")
    {
      price=<p><s>$50.00</s> $25.00</p>
      
    }
    if(id===101||id===106)
    {
     price=<p><s>$20.00</s>$18.00</p>
      
    }
    if(id===101||id===106||id===103||id===107)
    {
      star=<Star/>;  
    }

    // Condional button styling : Add to cart & View options

    let buttonstyles;
    if(name==="Fancy Product"||name==="Sale Item")
     {
    buttonstyles={marginTop:"2rem"}
     }
    
    
// When the product is added to cart 
  let disable;
  if(name!=="Fancy Product")
  {
    disable=(num>0)?"disabled":""
  }
  
    let counter=()=>
    {
    if(num>0)
    {
  return count>0?setNum(num-1):null   // Count which tracks the  cart value  of individual Product
    }
    }     
  
   let scroll=()=>{ window.scrollTo(0,-1500);}    // Onclick event to scroll to the top of the page

   let Cart=()=>{setCount(count+1);setNum(num+1);}  // Add to Cart button onClick event
     
return <div key={id}className="content">

        {/* Image & Sale Badge */}
        <div className="dimension">
        <img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Img"></img>
        <Badge bg="secondary" style={{visibility:(id===101||id===102||id===104||id===106)?"visible":"hidden"}}>sale</Badge>
        </div>

        {/* Product Name & Price */}
        <div className="details">
        <h5 className="productname"><b>{name}</b></h5>
        {star}
        <div className="price">{price}</div>
        </div>

        {/* Add to Cart/View options button & +,- button  */}
        <div className="button-container">

        <Button variant="outline-dark" style={buttonstyles} className="button" disabled={disable} onClick={()=>{(name==="Fancy Product")?scroll():Cart()}}>{button}</Button>
        
        <ButtonGroup  variant="light" style={{display:(id===100||id===105)?"none":"block"}}  className="add"orientation="horizontal">
        
        <Button variant="outline-dark" style={{marginTop:(id===102||id===104)?"2rem":"-0rem"}} onClick={()=>{setNum(num+1);setCount(count+1)}}>+</Button>
        
        <Button style={{marginLeft:"0.5rem",marginTop:(id===102||id===104)?"2rem":"-0rem"}}  onClick={()=>{counter(); return (count>0&&num>0)?setCount(count-1):null}} variant="outline-dark">-</Button>
        </ButtonGroup>
        </div>
</div>
}


// Footer
function Footer() 
{
return(<div className="footer">
  <p>Copyright © Your Website 2021</p>
</div>)
  
}

// Star Component
function Star()
{
  return (<div><GradeIcon style={{color:"gold",fontSize:"18px"}}></GradeIcon>
              <GradeIcon style={{color:"gold",fontSize:"18px"}}></GradeIcon>
              <GradeIcon style={{color:"gold",fontSize:"18px"}}></GradeIcon>
              <GradeIcon style={{color:"gold",fontSize:"18px"}}></GradeIcon>
              <GradeIcon style={{color:"gold",fontSize:"18px"}}></GradeIcon>
          </div>)
}




