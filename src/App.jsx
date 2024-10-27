import  { useState } from 'react';

const imagesData = {
    HOUSING: [
        { src: 'https://img.freepik.com/free-vector/alien-planet-landscape-space-view-frozen-canyon_107791-12958.jpg?t=st=1730046108~exp=1730049708~hmac=2bd98e813b7835d626b9a1f6ed8c8f7bf11e0819c76da6d6c7c48e6e1c963f8b&w=1380', title: 'ALL HOUSING' },
        { src: 'https://img.freepik.com/free-vector/mountains-cleft-view-from-bottom-night-scenery-landscape-with-high-rocks-full-moon-with-stars-glowing-peaks_107791-5585.jpg?t=st=1730046163~exp=1730049763~hmac=75d0f8410d3f9e0d5fd1ad286fba3b3432e5abd3ce46dcd719f3731e55711a7e&w=1380', title: 'AFFORDABLE HOUSING ' },
        { src: 'https://placehold.co/600x400', title: 'MARKET RATE HOUSING ' },
        { src: 'https://placehold.co/600x400', title: 'SENIOR & ASSISTED LIVING' },
        { src: 'https://placehold.co/600x400', title: 'STUDENT & WORKFORCE HOUSING ' },
    ],
    COMMUNITY: [
      { src: 'https://img.freepik.com/free-vector/alien-planet-landscape-space-view-frozen-canyon_107791-12958.jpg?t=st=1730046108~exp=1730049708~hmac=2bd98e813b7835d626b9a1f6ed8c8f7bf11e0819c76da6d6c7c48e6e1c963f8b&w=1380', title: 'ALL COMMUNITY' },
        { src: 'https://img.freepik.com/free-vector/mountains-cleft-view-from-bottom-night-scenery-landscape-with-high-rocks-full-moon-with-stars-glowing-peaks_107791-5585.jpg?t=st=1730046163~exp=1730049763~hmac=75d0f8410d3f9e0d5fd1ad286fba3b3432e5abd3ce46dcd719f3731e55711a7e&w=1380', title: 'COMMUNITY & RELIGIOUS FACILITIES' },
        { src: 'https://placehold.co/600x400', title: 'ATHLETIC FACILITIES' },
    ],
    EDUCATION: [
        { src: 'https://placehold.co/600x400', title: 'UNIVERSITY' },
        { src: 'https://placehold.co/600x400', title: 'SCHOOL' },
        { src: 'https://placehold.co/600x400', title: 'TRAINING CENTER' },
    ],
    HEALTHCARE: [
        { src: 'https://placehold.co/600x400', title: 'HOSPITAL' },
        { src: 'https://placehold.co/600x400', title: 'CLINIC' },
        { src: 'https://placehold.co/600x400', title: 'PHARMACY' },
    ],
    COMMERCIAL: [
        { src: 'https://placehold.co/600x400', title: 'MALL' },
        { src: 'https://placehold.co/600x400', title: 'OFFICE BUILDING' },
        { src: 'https://placehold.co/600x400', title: 'MARKET' },
    ],
    RENOVATIONS: [
        { src: 'https://placehold.co/600x400', title: 'RENOVATED BUILDING' },
        { src: 'https://placehold.co/600x400', title: 'RENOVATED OFFICE' },
        { src: 'https://placehold.co/600x400', title: 'RESTORATION' },
    ],
};

const App = () => {
    const [activeCategory, setActiveCategory] = useState('HOUSING');
    const categories = ['HOUSING', 'COMMUNITY', 'EDUCATION', 'HEALTHCARE', 'COMMERCIAL', 'RENOVATIONS'];

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <div className="container mx-auto py-8 px-4 lg:px-30 font-roboto">
            <nav className="flex flex-col md:flex-row justify-between w-full space-x-4 border-b-2 border-gray-200 pb-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`text-gray-500 hover:text-white rounded-lg p-1 md:px-3 py-2 hover:bg-orange-600 border-y-2  ${category === activeCategory ? 'text-orange-500  border-orange-500 pb-2' : ''}`}
                    >
                        {category}
                    </button>
                ))}
            </nav>
            <h1 className="text-3xl text-orange-500 font-bold mt-4">{activeCategory}</h1>
            <hr className="border-gray-200 my-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 gap-4">
                {imagesData[activeCategory]?.map((image, index) => (
                    <div key={index} className="relative image-container group">
                        <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center overlay transition duration-300 group-hover:bg-opacity-70">
                            <span className="text-white text-xl font-bold text-center">{image.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
