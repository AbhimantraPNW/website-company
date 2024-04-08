import CustomerList from "./CustomerList";

const Products = () => {  
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full mt-[-15px] lg:mt-2 ">

        <div className="flex flex-wrap justify-between gap-2 lg:gap-10 sm:mb-4">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Our Customers</h2>
          <p className="regular-16 xl:max-w-[520px] lg:mt-5">
            +50 coffee shops who have ordered in our store. We will happy if our
            customers satisfying with our product. We will always more better to
            make our customers satisfied with our services. You can give advice
            through our contact to make our services more better
          </p>
        </div>

        <CustomerList />
      </div>
    </section>
  );
};

export default Products;
