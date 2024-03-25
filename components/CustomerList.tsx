import Image from "next/image";

export const CustomerList = () => {
  return (
    <div>
      <div className="flexCenter max-container gap-10 relative w-full mt-10 flex-wrap">
        <div className="font-bold text-center hidden lg:inline-block">
          <Image
            src="/c-awor.PNG"
            alt="Awor Coffee"
            width={200}
            height={200}  
            style={{ height: "200px" }}
            className="object-cover object-center rounded-xl"
          />
          <p style={{ fontSize: "12px" }}>IG : @AWOR.COFFEE</p>
        </div>
        <div className="font-bold text-center hidden lg:inline-block">
          <Image
            src="/c-awcoffee.jpg"
            alt="Aw Coffee"
            width={200}
            height={200}
            style={{ height: "200px" }}
            className="object-cover object-center rounded-xl"
          />
          <p style={{ fontSize: "12px" }}>IG : @AW.COFFEE</p>
        </div>
        <div className="font-bold text-center hidden lg:inline-block">
          <Image
            src="/c-eaterybykomma.PNG"
            alt="Eatery By Komma"
            width={200}
            height={200}
            style={{ height: "200px" }}
            className="object-cover object-center rounded-xl"
          />
          <p style={{ fontSize: "12px" }}>IG : @EATERYBYKOMMA</p>
        </div>
        <div className="font-bold text-center hidden lg:inline-block">
          <Image
            src="/c-safti.PNG"
            alt="Safti Coffee and Space"
            width={200}
            height={200}
            style={{ height: "200px" }}
            className="object-cover object-center rounded-xl"
          />
          <p style={{ fontSize: "12px" }}>IG : @SAFTI.COFFEE.SPACE</p>
        </div>
      </div>

      <div className="flexCenter max-container gap-10 relative w-full mt-10 flex-wrap">
        <div className="font-bold text-center hidden lg:inline-block">
          <Image
            src="/c-semudakopi.PNG"
            alt="Semuda Kopi"
            width={200}
            height={200}
            style={{ height: "200px" }}
            className="object-cover object-center rounded-xl"
          />
          <p style={{ fontSize: "12px" }}>IG : @SEMUDAKOPI</p>
        </div>
        <div className="font-bold text-center">
          <Image
            src="/c-kedaiangkasa.PNG"
            alt="Kedai Angkasa"
            width={200}
            height={200}
            style={{ height: "200px" }}
            className="object-cover object-center rounded-xl"
          />
          <p style={{ fontSize: "12px" }}>IG : KEDAI_KOPIANGKASA</p>
        </div>
        <div className="font-bold text-center hidden lg:inline-block">
          <Image
            src="/c-simplicoffee.PNG"
            alt="Simpli Coffee"
            width={200}
            height={200}
            style={{ height: "200px" }}
            className="object-cover object-center rounded-xl"
          />
          <p style={{ fontSize: "12px" }}>IG : @SIMPLII.COFFEE</p>
        </div>
        <div className="font-bold text-center hidden lg:inline-block">
          <Image
            src="/c-semusim.PNG"
            alt="Semusim Coffee"
            width={200}
            height={200}
            style={{ height: "200px" }}
            className="object-cover object-center rounded-xl"
          />
          <p style={{ fontSize: "12px" }}>IG : @SEMUSIM_COFFEE</p>
        </div>
      </div>

      <p className="justify-between bold-40 text-center mt-10">
        And Many More
      </p>
    </div>
  );
};

export default CustomerList;
