import React, { useEffect, useState } from "react";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;
  const [prod,setProd]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8080/products")
    .then((res)=>res.json())
    .then((d)=>{
      console.log(d);
      setProd(d);
    })
  },[])

 
  return (

    <div>
          <h1>Products</h1>
      {prod.map((el)=>(
        <div style={{display:"flex"}}>
            <div style={{border:"1px solid red",width:"200px",height:"270px"}}>
            <img style={{height:"120px"}} id={el.id} src={el.imageSrc} alt="" />
          <div style={{marginLeft:"50px"}}>
            <div style={{display:"flex"}}>
              <p id={el.id}>{el.category}</p>
              <p style={{marginLeft:"50px"}} id={el.id}>{el.gender}</p>
              </div>
              <h6><p id={el.id}>{el.title}</p></h6>
              <div>
                <h5>{el.price}</h5>
              </div>
          </div>
          </div>
        </div>

       
      ))}
    </div>
    // <Flex>
    //   {/*  AddProduct */}
    //   <Grid>{/* List of Products */}
      
    //   </Grid>
    //   {/* Pagination */}
    // </Flex>
  );
};

export default Products;
