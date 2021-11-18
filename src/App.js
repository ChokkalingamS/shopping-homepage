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
  let[num,setNum]=useState(0)

  // Object Destructuring
   let{id,name,star,price,button}=items

  // Onclick Buttonevent
   let buttoncontent=()=>
   {
     if(name!=="Fancy Product")
     {
     return  button=(num===1)?"Remove from Cart":"Add to Cart";
     }
     return  button="View options";
    }
   let cart=()=>
   {
   if(name!=="Fancy Product")
   {
   button==="Add to Cart"?setCount(count+1):setCount(count-1);
   setNum((num)=>num===1?0:1);
   }
   }

  //  Conditional Rendering
   let styles;
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
      styles={marginBottom:"-1.5rem"}
    }


   let scroll=()=>window.scrollTo(0,-1500);
return <div key={id}className="content">
        <div className="dimension"><img src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Img"></img>
       <Badge bg="secondary" style={{visibility:(id===101||id===102||id===104||id===106)?"visible":"hidden"}}>sale</Badge></div>
        <div className="details">
        <h5 className="productname"><b>{name}</b></h5>
        <p>{star}</p>
        <p className="price">{price}</p>
        </div>
        <div className="button-container">
        <Button variant="outline-dark" style={styles} className="button" onClick={()=>{cart();scroll()}}>{buttoncontent()}</Button>
        
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




