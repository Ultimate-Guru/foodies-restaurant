// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Our experience was amazing! The service was top-notch, and the food exceeded our expectations.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "John Doe",
    text: "Fantastic! The atmosphere was perfect and the dishes were delicious. Highly recommend!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Smith",
    text: "An unforgettable dining experience. The staff was friendly and the food was absolutely fantastic.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div data-aos="fade-up" data-aos-duration="300" className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What our customers say
          </p>
          <h1 className="text-3xl font-bold">Testimonials</h1>
          <p className="text-xs text-gray-400">
            Hear from our satisfied customers about their amazing experiences.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          className="max-w-[600px] mx-auto"
        >
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <img
                    className="rounded-full block mx-auto"
                    src={data.img}
                    alt={data.name}
                  />
                  <p className="text-gray-500 text-sm">{data.text}</p>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;