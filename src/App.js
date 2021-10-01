import React, { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const API_KEY = '23654287-8332e3d62319f1fa1254cd850'; //PIXABAY
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        console.log(data.hits)
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [term])

  return (
    <div className="container mx-auto">
      <ImageSearch serachText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mx-auto">No Image Found...</h1>}

      {isLoading ? <h1 className="text-6xl text-center mx-auto">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;
