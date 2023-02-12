import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import "./Main.css"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="dark">
                <Container>
                    <NavLink to="/" className="text-decoration-none text-dark mx-4 logo"
                     style={{height:"60px"}}><h3 style={{textTransform:"uppercase",color:"#94ca4b"}}>Saylani Welfare</h3><br/><span className='logobelow'style={{textTransform:"capitalize"}}>Online
                        Discount Store</span></NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-2">
                        <svg
             xmlns="http://www.w3.org/2000/svg"
                width={16}
            height={16}
             fill="currentColor"
             className="bi bi-cart-plus-fill"
            viewBox="0 0 16 16"
>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
</svg>

                        </NavLink>
                        <NavLink to="/" className="text-decoration-none text-light">Features</NavLink>
                    </Nav>
                
                </Container>
            </Navbar>
        </>
    )
}

export default Header