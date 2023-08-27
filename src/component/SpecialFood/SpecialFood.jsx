import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./specialFood.scss";

const SpecialFood = () => {
    const [ProductData, setProductData] = useState()
    const [activeCategory, setactiveCategory] = useState(6)

    const menuName = [
        { "id": 1, "name": "Fast Food", "Status": true },
        { "id": 2, "name": "Chicken", "Status": true },
        { "id": 3, "name": "Dessert", "Status": true },
        { "id": 4, "name": "Salad", "Status": true },
        { "id": 5, "name": "Pizza", "Status": true },
        { "id": 6, "name": "All Items", "Status": true },

    ]

    const AllProductData = [
        { id: 1, pname: "Crispy Fried Chicken", image: "assets/images/friyed-chicken.svg", category: "Chicken", status: true, rating: 2, price: 150 },
        { id: 2, pname: "Burger", image: "assets/images/burger.svg", category: "Fast Food", status: true, rating: 5, price: 120 },
        { id: 3, pname: "Spicy Noodles", image: "assets/images/packDish.svg", category: "Fast Food", status: true, rating: 4, price: 560 },
        { id: 4, pname: "Crispy Kurkure", image: "assets/images/kfc.svg", category: "Fast Food", status: true, rating: 3, price: 250 },
        { id: 5, pname: "Special Chicken", image: "assets/images/fChicken2.svg", category: "Chicken", status: true, rating: 5, price: 350 },
        { id: 6, pname: "Chicken Leg", image: "assets/images/chickenLeg.svg", category: "Chicken", status: true, rating: 3, price: 550 },
        { id: 7, pname: "Special Salad", image: "assets/images/salad.svg", category: "Salad", status: true, rating: 5, price: 150 },
        { id: 8, pname: "Salad", image: "assets/images/salad 2.svg", category: "Salad", status: true, rating: 3, price: 100 },
        { id: 9, pname: "Dessert", image: "assets/images/desert.svg", category: "Dessert", status: true, rating: 5, price: 2400 },
    ]

    function FilterProduct(id, category) {
        setactiveCategory(id) // update filter menu (active )
        if (category == "All Items") {
            setProductData(AllProductData)
        } else {
            const sortedData = AllProductData.filter((Element) => {
                return Element.category === category
            })
            // console.log(sortedData)
            setProductData(sortedData)
        }
    }
    useEffect(() => {
        setProductData(AllProductData)
    }, [])
    return (
        <>

            <section className=" SpecialFood">
                <div className="container " style={{ background: "res" }}>
                    <h2>Try Our Special Recipes</h2>
                    <div className="menu">
                        {
                            menuName.map((item) => {
                                return (
                                    <button key={item.id} onClick={() => FilterProduct(item.id, item.name)} className={item.id == activeCategory ? "active" : ""}> {item.name}</button>
                                )
                            })
                        }
                    </div>
                    <Product AllProductData={ProductData} />
                </div>

            </section>
        </>
    )
}

export default SpecialFood