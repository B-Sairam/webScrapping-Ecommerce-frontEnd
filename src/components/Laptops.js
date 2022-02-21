import React,{useContext, useState} from "react";
import { product_context } from "../App";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

 
function Laptops() {
  let context = useContext(product_context);
  let product = context.laptops_pro;
  const [pageNumber,setPageNumber]= useState(0)

  const productPerPage = 9;
  const pagesVisited = pageNumber*productPerPage;
 
  const displayProduct = product.slice(pagesVisited,pagesVisited+productPerPage)
  .filter((val)=>{
            if(context.searchItem===""){
              return val
            }else if(val.title.toLowerCase().includes(context.searchItem.toLowerCase())){
              return val
            }
          }).map((e,i)=>{
          return <div key={i}> <a href={e.link} className="link" >
            <div className="card md-col-3">
              <img src={e.image} className="card-img-top img-size" alt="..."/>
              <div className="card-body">
                <h5 className="title">{e.title}</h5>
                <p className="card-text">{e.stars?e.stars:`No stars`}</p>
                <b className="card-price">{e.price?e.price:`Price not Updated`}</b>
                <p className="card-text">Ship to India</p>
              </div>
            </div>
            </a>
          </div>
          })

          const pageCount = Math.ceil(product.length/productPerPage)
          const changePage = ({selected})=>{
            setPageNumber(selected)
            console.log(pageNumber);
          }
  return <>
    <h2 className="Pro-title">Laptops</h2>
    <div className="main-cards">
        <Link to="/"><button className="btn btn-dark back-btn btn-sm">Back</button></Link>
        
        {displayProduct}
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={'previousBttns'}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
    </>

}

export default Laptops;