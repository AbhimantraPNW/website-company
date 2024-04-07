import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
    <Hero />
    {/* <CompanyProfile /> */}
    <Blog />
    <Products />
    <Testimonial />
    </>
  );
}
