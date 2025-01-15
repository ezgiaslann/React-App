import { useState } from "react";
import { json } from "@remix-run/node";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";
import ProductCard from "~/components/product-cards";
import { Grid, IconButton, Typography } from "@mui/material";
import ProductCarosel from "~/components/product-carosel";
import { East, KeyboardBackspace } from '@mui/icons-material';

export const loader = async () => {
  let horizontalProducts: any = [];
  let products: any = [];
  let nextUrl = "https://mock.akakce.dev/page.json";

  try {
    const response = await axios.get(nextUrl);
    const data = response.data;

    horizontalProducts = [...horizontalProducts, ...data.horizontalProductList];
    products = [...products, ...data.productList];
    nextUrl = data.nextUrl;

  } catch (error: any) {
    console.error("API Call Error:", error.response ? error.response.data : error.message);
    throw new Error("Failed to fetch products from API.");
  }

  return json({ horizontalProducts, products });
};

export default function ProductsIndexRoute() {
  const { horizontalProducts, products } = useLoaderData();
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? horizontalProducts.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === horizontalProducts.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      {/* Carousel */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1015px",
          margin: "auto",
          overflow: "hidden",
          backgroundColor: "#f9f9f9",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Carousel Items */}
        <div
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${horizontalProducts.length * 25}%`,
            height: "100%", 
          }}
        >
          {horizontalProducts.map((product: any, index: number) => (
            <div
              key={product.code}
              style={{
                flex: "0 0 100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                height: "100%",
              }}
            >
              <ProductCarosel product={product} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "48%",
            left: "10px",
            zIndex: 1000,
            width: "2rem"
          }}
          aria-label="previous"
        >
          <KeyboardBackspace />
        </IconButton>
        <IconButton
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            zIndex: 1000,
            width: "2rem"
          }}
          aria-label="next"
        >
          <East />
        </IconButton>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2">
        {products.map((product: any) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </>
  );
}
