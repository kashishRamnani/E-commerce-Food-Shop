import React from 'react';
import garlleryImage1 from '/src/assets/23_Lemon_images/images/gallery/g-1.jpg';
import garlleryImage2 from '/src/assets/23_Lemon_images/images/gallery/g-2.jpg';
import garlleryImage3 from '/src/assets/23_Lemon_images/images/gallery/g-3.jpg';
import garlleryImage4 from '/src/assets/23_Lemon_images/images/gallery/g-4.jpg';
import garlleryImage5 from '/src/assets/23_Lemon_images/images/gallery/g-5.jpg';
import garlleryImage6 from '/src/assets/23_Lemon_images/images/gallery/g-6.jpg';
import garlleryImage7 from '/src/assets/23_Lemon_images/images/gallery/g-7.jpg';
import garlleryImage8 from '/src/assets/23_Lemon_images/images/gallery/g-8.jpg';

const Explore = () => {
  const GalleryList = [
    { id: 1, image: garlleryImage1 },
    { id: 2, image: garlleryImage2 },
    { id: 3, image: garlleryImage3 },
    { id: 4, image: garlleryImage4 },
    { id: 5, image: garlleryImage5 },
    { id: 6, image: garlleryImage6 },
    { id: 7, image: garlleryImage7 },
    { id: 8, image: garlleryImage8 }
  ];

  return (
    <div className='Gallery'>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-lg-5 m-auto text-center'>
            <h1>Explore Our Store</h1>
            <h6 style={{ color: 'red' }}>Pick your product from our store</h6>
          </div>
        </div>
        <div className='row'>
          {GalleryList.map((Gallery) => (
            <div key={Gallery.id} className='col-lg-3 col-md-6 col-sm-12 text-center'>
              <div className='card border-0 bg-light mb-2'>
                <div className='card-body'>
                  <img src={Gallery.image} className='img-fluid' alt={`Gallery item ${Gallery.id}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Explore;
