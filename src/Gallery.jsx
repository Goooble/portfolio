import { useState } from 'react';

function Gallery() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Formal gallery data
  const formalItems = [
    { id: 1, year: '2023', title: 'Image 1', description: 'Description of image 1' },
    { id: 2, year: '2022', title: 'Image 2', description: 'Description of image 2' },
    { id: 3, year: '2021', title: 'Image 3', description: 'Description of image 3' }
  ];

  // Classical gallery data
  const classicalItems = [
    { id: 1, year: '2024', title: 'Image 1', description: 'Description of image 1' },
    { id: 2, year: '2023', title: 'Image 2', description: 'Description of image 2' },
    { id: 3, year: '2022', title: 'Image 3', description: 'Description of image 3' }
  ];

  // High Crowd gallery data
  const highCrowdItems = [
    { id: 1, year: '2030', title: 'Image 1', description: 'Description of image 1' },
    { id: 2, year: '2026', title: 'Image 2', description: 'Description of image 2' },
    { id: 3, year: '2023', title: 'Image 3', description: 'Description of image 3' }
  ];

  const handleVideoClick = (id) => {
    setActiveVideo(id);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % formalItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + formalItems.length) % formalItems.length);
  };

  const PlaceholderImage = ({ title, description }) => (
    <div className="aspect-video bg-orange-600 flex flex-col items-center justify-center text-white p-4 rounded-lg">
      <svg className="w-24 h-24 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      <p className="text-xl font-bold">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );

  return (
    <div id="gallery">
      {/* Formal Section - Orange Background */}
      <section className="min-h-screen bg-orange-500 text-black py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div></div>
            <h2 className="text-6xl font-bold animate-fade-in">FORMAL</h2>
          </div>
          
          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {formalItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-video bg-gray-700 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                          <div className="relative z-10 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p className="text-gray-300 text-sm">Image {item.id}</p>
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-black font-bold text-lg">{item.year}</p>
                          <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                          <p className="text-black mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-video bg-gray-700 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                          <div className="relative z-10 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p className="text-gray-300 text-sm">Image {item.id}b</p>
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-black font-bold text-lg">{item.year}</p>
                          <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                          <p className="text-black mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-video bg-gray-700 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                          <div className="relative z-10 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p className="text-gray-300 text-sm">Image {item.id}c</p>
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-black font-bold text-lg">{item.year}</p>
                          <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                          <p className="text-black mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {formalItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-black' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classical Section - Dark Background */}
      <section className="min-h-screen bg-gray-900 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div></div>
            <h2 className="text-6xl font-bold text-orange-500 animate-fade-in">CLASSICAL</h2>
          </div>
          
          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {classicalItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-video bg-gray-700 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                          <div className="relative z-10 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p className="text-gray-300 text-sm">Classical {item.id}</p>
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-orange-500 font-semibold">{item.year}</p>
                          <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                          <p className="text-white mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-video bg-gray-700 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                          <div className="relative z-10 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p className="text-gray-300 text-sm">Classical {item.id}b</p>
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-orange-500 font-semibold">{item.year}</p>
                          <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                          <p className="text-white mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-video bg-gray-700 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                          <div className="relative z-10 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p className="text-gray-300 text-sm">Classical {item.id}c</p>
                          </div>
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300">
                              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-orange-500 font-semibold">{item.year}</p>
                          <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                          <p className="text-white mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {classicalItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-orange-500' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* High Crowd Section - Orange Background */}
      <section className="min-h-screen bg-orange-500 text-black py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div></div>
            <h2 className="text-6xl font-bold animate-fade-in">HIGH CROWD</h2>
          </div>
          
          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {highCrowdItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                          <div className="aspect-video bg-gray-300 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400"></div>
                          <div className="relative z-10 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p className="text-gray-600 text-sm">High Crowd {item.id}</p>
                          </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-black font-bold text-lg">{item.year}</p>
                          <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                          <p className="text-black mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                          <div className="aspect-video bg-gray-300 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400"></div>
                          <div className="relative z-10 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p className="text-gray-600 text-sm">High Crowd {item.id}b</p>
                          </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-black font-bold text-lg">{item.year}</p>
                          <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                          <p className="text-black mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105">
                      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500">
                        <div className="relative overflow-hidden rounded-lg mb-4">
                          <div className="aspect-video bg-gray-300 flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400"></div>
                          <div className="relative z-10 text-center">
                            <svg className="w-16 h-16 mx-auto mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <p className="text-gray-600 text-sm">High Crowd {item.id}c</p>
                          </div>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-lg">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="text-black font-bold text-lg">{item.year}</p>
                          <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                          <p className="text-black mt-2 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            
            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {highCrowdItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-black' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Gallery;
