import "./product.scss"
import Chicken from "../../assets/images/friyed-chicken.svg"

import { PiShoppingCartSimpleDuotone } from "react-icons/pi"
import { useEffect, useState } from "react"

const Product = ({ AllProductData }) => {
  const [data, setData] = useState([]);
  // Create a Star component
  function StarRating({ rating }) {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>⭐</span>);
    }
    return <div>{stars}</div>;
  }
  const baseUrl = window.location.origin;



  useEffect(() => {
    setData(AllProductData)
  }, [AllProductData])
  return (
    <div className="ProductData">
      <div className="row gx-1 d-flex justify-content-center align-items-center">
        {data?.length >0 ? data.map((item) => {
          return (
            <div key={item.id} className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 justify-content-between align-items-center flex-row w-100">
              <div className="card">
                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                  <div className="card-image">
                    <img src={`${baseUrl}/src/${item?.image}`} alt="product Image" />
                  </div>
                  <div className="stars"> <StarRating rating={item.rating} /></div>
                  <div className="productName text-ellipsis">{item.pname}</div>
                  <div className=" actionBox d-flex justify-content-between align-items-center flex-row w-100">
                    <p> ₹ {item.price}</p>
                    <button className="d-flex justify-content-center align-items-center"><PiShoppingCartSimpleDuotone /></button>
                  </div>
                </div>
              </div>
            </div>
          )
        }): (
          <h2 className="notFound">Food Not Availabe </h2>
        )}





      </div>
    </div>
  )
}

export default Product