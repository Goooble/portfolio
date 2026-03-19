import { useState } from 'react';

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('classical');
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const categories = {
    classical: {
      title: 'Classical',
      description: 'Timeless keynote moments and powerful stage presence',
      images: [
        { id: 1, title: 'Image 1', color: 'from-amber-600 to-orange-700' },
        { id: 2, title: 'Image 2', color: 'from-amber-700 to-yellow-600' },
        { id: 3, title: 'Image 3', color: 'from-orange-600 to-red-700' },
        { id: 4, title: 'Image 4', color: 'from-yellow-600 to-amber-700' },
        { id: 5, title: 'Image 5', color: 'from-red-600 to-orange-700' }
      ]
    },
    crowded: {
      title: 'High Crowded',
      description: 'Inspiring large audiences with transformative messages',
      images: [
        { id: 1, title: 'Image 1', color: 'from-purple-600 to-pink-700' },
        { id: 2, title: 'Image 2', color: 'from-pink-600 to-purple-700' },
        { id: 3, title: 'Image 3', color: 'from-indigo-600 to-purple-700' },
        { id: 4, title: 'Image 4', color: 'from-purple-600 to-indigo-700' },
        { id: 5, title: 'Image 5', color: 'from-pink-600 to-indigo-700' }
      ]
    },
    formal: {
      title: 'Formal',
      description: 'Executive coaching and professional speaking engagements',
      images: [
        { id: 1, title: 'Image 1', color: 'from-gray-600 to-slate-700' },
        { id: 2, title: 'Image 2', color: 'from-slate-600 to-gray-700' },
        { id: 3, title: 'Image 3', color: 'from-zinc-600 to-slate-700' },
        { id: 4, title: 'Image 4', color: 'from-gray-600 to-zinc-700' },
        { id: 5, title: 'Image 5', color: 'from-slate-600 to-zinc-700' }
      ]
    }
  };

  const currentCategory = categories[activeCategory];
  const currentImages = currentCategory.images;
  const currentIndex = currentImageIndex[activeCategory] || 0;
  const currentImage = currentImages[currentIndex];

  const nextImage = () => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [activeCategory]: (currentIndex + 1) % currentImages.length
    }));
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [activeCategory]: currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1
    }));
  };

  return (
    <section className="min-h-screen bg-black text-primary-text relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-text bg-clip-text text-transparent">
            Speaking Gallery
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Capturing powerful moments of inspiration, transformation, and impact through motivational speaking
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`
                px-8 py-3 rounded-full font-medium transition-all duration-300 transform
                ${activeCategory === key
                  ? 'bg-gradient-to-r from-primary to-purple-600 text-white scale-105 shadow-lg shadow-primary/20'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-primary-text hover:scale-105'
                }
              `}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-primary-text">{currentCategory.title}</h3>
          <p className="text-lg text-gray-400">{currentCategory.description}</p>
        </div>

        {/* Image Viewer */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Main Image Display */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${currentImage.color} opacity-80`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4 animate-pulse">📸</div>
                  <h4 className="text-2xl font-bold mb-2">{currentImage.title}</h4>
                  <p className="text-lg opacity-80">Placeholder Image {currentImage.id}</p>
                </div>
              </div>
              
              {/* Overlay Animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {currentImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(prev => ({ ...prev, [activeCategory]: index }))}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300 transform
                  ${index === currentIndex
                    ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                    : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
                  }
                `}
              />
            ))}
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 mt-8 overflow-x-auto pb-4">
            {currentImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentImageIndex(prev => ({ ...prev, [activeCategory]: index }))}
                className={`
                  flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all duration-300 transform
                  ${index === currentIndex
                    ? 'ring-2 ring-primary scale-105 shadow-lg shadow-primary/20'
                    : 'hover:scale-105 hover:ring-2 hover:ring-gray-600'
                  }
                `}
              >
                <div className={`w-full h-full bg-gradient-to-br ${image.color} opacity-80`}></div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
