import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './navbar.css'

const items = [
    {
      title: 'Item 1',
      description: 'Lorem ipsum dolor sit amet',
      image:
        'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      title: 'Item 2',
      description: 'Consectetur adipiscing elit',
      image:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      title: 'Item 3',
      description: 'Sed do eiusmod tempor incididunt',
      image:
        'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
      title: 'Item 4',
      description: 'Ut labore et dolore magna aliqua',
      image:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
    },
    {
      title: 'Item 5',
      description: 'Ut enim ad minim veniam',
      image:
        'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
  ];
function MultipleCardsCarousel() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{marginTop:"50px"}}> 
    <div className='cardsDiv'>
        <h2>FlashDeals</h2>
        <h4>View All</h4>
    </div>
    <Slider {...settings}>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={`card-${index}`} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </Slider>
    </div>
  );
}

export default MultipleCardsCarousel;
