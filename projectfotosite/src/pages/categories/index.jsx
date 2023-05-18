import { Link, useParams } from "react-router-dom"
import './style.css'
import { useEffect, useState } from "react"

export const CategoriesPage = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])

    return (
        <div className="category-page">
            {
                categories.map((category) => (
                    <div key={category.id} 
                    style={{backgroundImage: `url(${category.img})`}}
                    className="category-page__item">
                        <Link to={`/categories/${category.id}`} className="categories">{category.name}</Link>
                    </div>
                    ))
            }
            
        </div>
    
    )
}