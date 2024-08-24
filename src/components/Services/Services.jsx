// eslint-disable-next-line no-unused-vars
import React from "react";
import Img2 from "../../assets/biryani2.png";
import StarRatings from "react-star-ratings";

const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Biryani",
    description:
      "Indulge in our flavorful biryani, prepared with aromatic spices and tender meat. Each bite promises a delightful blend of taste and tradition.",
  },
  {
    id: 2,
    img: Img2,
    name: "Chicken Kari",
    description:
      "Savor our Chicken Kari, a rich and spicy curry featuring succulent chicken pieces simmered in a creamy sauce. Perfect with rice or naan.",
  },
  {
    id: 3,
    img: Img2,
    name: "Cold Coffee",
    description:
      "Cool down with our refreshing Cold Coffee, blended to perfection with ice and a hint of sweetness. Ideal for a quick pick-me-up or a relaxing treat.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </p>
            <h1 className="text-3xl font-bold">Services</h1>
            <p className="text-xs text-gray-400">
              Discover our range of mouthwatering dishes and beverages, crafted
              with care to bring you an unforgettable culinary experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full">
                    <StarRatings
                      rating={4}
                      starRatedColor="yellow"
                      isSelectable={false}
                      starHoverColor="yellow"
                      starDimension="20px"
                      changeRating={() => {}}
                      numberOfStars={5}
                      name="rating"
                    />
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;