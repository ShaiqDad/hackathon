import React from 'react'
import Images from "./images/mainpic.jpeg"
import Grocery from "./images/grocery.jpeg"
import Vegetable from "./images/vegetable.jpeg"
import Fruits from "./images/fruits.jpeg"
import Masala from "./images/masala.jpeg"
import chicken from "./images/chicken.jpeg"
import Mutton from "./images/mutton.jpeg";


import "./Main.css"

function Main() {
  return (
<>
<div>
        <img src={Images} alt="" />
        {/* //search bar start here */}
        <div className="container">
        <div class="input-group">
            <div class="form-outline">
            <input type="search" id="form1" class="form-control mt-3" placeholder='Search By Product Name' style={{borderRadius:"20px",width:"800px", textAlign:"center",backgroundColor:"#D3D3D3"}}/>
            </div>
        </div>
        </div>
        {/* Search bar end here */}

        <div className="container">
            <div className="row mt-4">
                <h3>Shop by Category</h3>
                <div className="col-md-3">
                        <div className="card">
                             <img src={Grocery} className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title text-center">Grocery</h5>     
                            </div>
                        </div>
                </div>
                <div className="col-md-3">
                        <div className="card">
                             <img src={Vegetable} className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title text-center">Vegetable</h5>     
                            </div>
                        </div>
                </div>
                <div className="col-md-3">
                        <div className="card">
                             <img src={Fruits} className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title text-center">Fruits</h5>     
                            </div>
                        </div>
                </div>
                     <div className="col-md-3">
                        <div className="card">
                             <img src={Masala} className="card-img-top" alt="..." />
                            <div className="card-body">
                              <h5 className="card-title text-center">Masala</h5>     
                            </div>
                        </div>
                    </div>
                </div>

                </div>
                </div>
                {/* // Category end here

                // cart start here */}
                <div className="container">
                    <div className="row">
                        <h3 className='mt-3'>Products</h3>
                        <div className="card mb-3" style={{ maxWidth: 1200 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={chicken} className="img-fluid rounded-start" alt="..." style={{borderRadius:"25px"}}/>
                                </div>
                <div className="col-md-8">
                 <div className="card-body mx-4">   
                   <h5 className="card-title">Chicken</h5>
                   <p className="card-text" style={{width:"550px"}}>
                   A chicken is a bird. One of the features that differentiate it from most other birds is that it has a comb and two wattles. The comb is the red appendage on the top of the head, 
                   and the wattles are the two appendages under the chin. These are secondary  characteristics and are more prominent in the male.
                    </p>
                    <button className="cartButton"><p>+</p></button>
                    </div>
                    </div>
                    </div>
                    </div>
                        <div className="card mb-3" style={{ maxWidth: 1200 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={Mutton} className="img-fluid rounded-start" alt="..." />
                                </div>
                <div className="col-md-8">
                 <div className="card-body mx-4">   
                   <h5 className="card-title">Mutton</h5>
                   <p className="card-text" style={{width:"550px"}}>
                   Mutton is the meat of a mature adult sheep, typically between two and three years old. Producers can harvest mutton from a ewe (female) or wether (castrated male).
                    Since the animal is older, it contains more fat and muscle, resulting in a stronger flavor and denser, tougher texture.
                    </p>
                    <button className="cartButton"><p>+</p></button>
                    </div>
                    </div>
                    </div>
                    </div>
                        <div className="card mb-3" style={{ maxWidth: 1200 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={Fruits} className="img-fluid rounded-start" alt="..." />
                                </div>
                <div className="col-md-8">
                 <div className="card-body mx-4">   
                   <h5 className="card-title">Fresh Fruits</h5>
                   <p className="card-text" style={{width:"550px"}}>
                   Fruits are important sources of vitamins and carbohydrates like fiber and sugar. They are low in calories and naturally sweet. Fruits and 
                   their juices are good sources of water, too. Different fruits contain different vitamins, so it is important to eat a variety of fruits.
                    </p>
                    <button className="cartButton"><p>+</p></button>
                    </div>
                    </div>
                    </div>
                    </div>

                    <div className="card mb-3" style={{ maxWidth: 1200 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                <img src={Grocery} className="img-fluid rounded-start" alt="..." />
                                </div>
                <div className="col-md-8">
                 <div className="card-body mx-4">   
                   <h5 className="card-title">Grocery</h5>
                   <p className="card-text"style={{width:"550px"}}>
                   This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in
                      to additional content. This content is a little bit longer.
                    </p>
                    <button className="cartButton"><p>+</p></button>

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                
</>
  )
}

export default Main