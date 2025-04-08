import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox'; // Default import
import './Gallery.css'; // Import the CSS file

const Gallery = () => {
  const images = [
    `${process.env.PUBLIC_URL}/images/ES.jpeg`,
    `${process.env.PUBLIC_URL}/images/PC.jpeg`,
    `${process.env.PUBLIC_URL}/images/problemSetter.jpeg`,
    `${process.env.PUBLIC_URL}/images/ICPC2023.jpeg`,
    `${process.env.PUBLIC_URL}/images/ICPC2021.jpeg`,
    `${process.env.PUBLIC_URL}/images/icpc 2021allmember.jpeg`,
    `${process.env.PUBLIC_URL}/images/Certificate_Distribution.jpeg`,
    // Add more images as needed
  ];

  const captions = [
    "Embedded System project showcase",
    "DIIT Programming Club - DPC",
    "IT fest 6.0 Problem Setter",
    "The 2023 ICPC Asia Dhaka Regional Site Online Preliminary Contest",
    "The 2021 ICPC Asia Dhaka Regional Site Online Preliminary Contest",
    "The 2021 ICPC Asia Dhaka Regional Site Online Preliminary Contest",
    "Certificate Distribution Ceremony for Completing Non-Credit Courses in Web Development, Computer Networking & Embedded Systems",
    // Add more captions here
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered image

  return (
    <div className="container">
      {/* Added inline style for extra top margin */}
      <h2
        className="text-center text-white mb-4"
        style={{ marginTop: "100px", color: '#fff' }} // Custom top margin
      >
        My <strong className="purple">Gallery</strong>
      </h2>
      <p className="text-center text-light mb-5">
        Below are some of the images I have collected.
      </p>

      <div className="row">
        {images.map((image, index) => (
          <div
            className="col-md-4 col-sm-6 col-12 mb-4 position-relative gallery-item"
            key={index}
            onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
            onMouseLeave={() => setHoveredIndex(null)}  // Reset on mouse leave
          >
            <img
              src={image}
              alt={`Gallery Item ${index + 1}`}
              className={`img-fluid ${hoveredIndex !== null && hoveredIndex !== index ? 'grayscale' : ''}`}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
              style={{ cursor: 'pointer', height: '300px', objectFit: 'cover' }}
            />
            {hoveredIndex === index && ( // Show overlay only for the hovered image
              <div className="overlay">               
                <p className="text-center purple">{captions[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          imageCaption={captions[photoIndex]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default Gallery;
