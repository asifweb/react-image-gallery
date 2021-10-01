import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');
    return (
        //https://source.unsplash.com/random
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8 group  hover:bg-purple-500 hover:text-white transition ease-in-out duration-400 transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
            <img src={image.webformatURL} alt={image.user} />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl font-mono group-hover:text-purple-900 transition ease-in-out duration-400">
                    Photo by {image.user}
                </div>
                <ul>
                    <li className="font-mono"><strong>Views:</strong> {image.views}</li>
                    <li className="font-mono"><strong>Downloads:</strong> {image.downloads}</li>
                    <li className="font-mono"><strong>Likes:</strong> {image.likes}</li>
                </ul>
            </div>
            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-500 rounded-full px-3 py-1 mb-2 text-sm font-semibold text-white mr-2">
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ImageCard
