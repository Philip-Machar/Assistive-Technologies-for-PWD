import React from "react";
import Img1 from "../../assets/women/leg.jpg";
import Img2 from "../../assets/women/arm.jpg";
import Img3 from "../../assets/women/ear.jpg";
import Img4 from "../../assets/women/eye.jpg";
import Img5 from "../../assets/women/walkingStick.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Pylon Prosthetic",
    rating: 5.0,
    color: "brown",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "DEKA Arm System",
    rating: 4.5,
    color: "Gray",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Phonak Audéo Paradise",
    rating: 4.7,
    color: "Gray",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "OrCam",
    rating: 4.4,
    color: "Black",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Ambutech UltraLite Graphite",
    rating: 4.5,
    color: "Red",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Proothetics for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Explore a range of assistive devices designed to support your daily needs and enhance accessibility
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 shadow-xl p-4 rounded-md"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[190px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-8 rounded-md">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
