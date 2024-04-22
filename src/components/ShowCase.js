import React from "react";
import Link from "next/link";

const showcaseData = [
  {
    id: 1,
    title: "Ceramic Printed Mugs",
    img: "https://i.ibb.co/7yZzQ1v/mug1.png",
    desc: "Our ceramic printed mugs are perfect for your morning coffee or tea. ",
    linkText: "View Range",
    link: "/products/ceramic-printed-mugs",
  },
  {
    id: 2,
    title: "Travel Mugs",
    img: "https://i.ibb.co/7yZzQ1v/mug1.png",
    desc: "Our travel mugs are perfect for those on the go. ",
    linkText: "View Range",
    link: "/products/travel-mugs",
  },
  {
    id: 3,
    title: "Bone China Mugs",
    img: "https://i.ibb.co/7yZzQ1v/mug1.png",
    desc: "Our bone china mugs are perfect for those who like a more delicate mug. ",
    linkText: "View Range",
    link: "/products/bone-china-mugs",
  },
  {
    id: 4,
    title: "Glass Mugs",
    img: "https://i.ibb.co/7yZzQ1v/mug1.png",
    desc: "Our glass mugs are perfect for those who like a more delicate mug. ",
    linkText: "View Range",
    link: "/products/glass-mugs",
  },
];

const ShowCase = ({ title, subTitle, list, bg }) => {
  return (
    <section className={`${bg ? "bg-secondary" : ""}`}>
      <div className="custom_container text-secondgraphy">
        <div className="max-w-4xl py-3 mx-auto text-center">
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-sm">{subTitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {showcaseData.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="flex flex-col transition-all duration-300 bg-white hover:shadow-primary hover:shadow-md"
            >
              <div className="w-full h-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-70"
                />
              </div>
              <div className="w-full p-3 text-center rounded-md">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-2">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
