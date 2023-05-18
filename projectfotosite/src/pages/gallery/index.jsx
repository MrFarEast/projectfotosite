
//     return (
//         <div>GalleryPage</div>
//     )
// }

import { Link, useParams } from "react-router-dom"
import './style.css'
import { useEffect, useState } from "react"

export const GalleryPage = () => {
    const [gallery, setGallery] = useState([])

    useEffect(() => {
        fetch('/gallery.json')
            .then(res => res.json())
            .then(data => {
                setGallery(data)
            })
    }, [])

    return (
        <div className="gallery-page">
            {
                gallery.map((gallery) => (
                    <div 
                        key={gallery.id}
                    >
                        <img src={gallery.url} alt="" />
                        <Link to={`/gallery/${gallery.id}`}>{gallery.name}</Link>
                    </div>
                ))
            }
            <div></div>
        </div>
    )
}