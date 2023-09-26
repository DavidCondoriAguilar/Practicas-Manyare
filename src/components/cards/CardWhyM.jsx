export default function CardWhyM({ img, subTittle, text }) {
  return (
    <div
      className=" text-center h-[235px] w-[200px] grid items-center justify-items-center 
            rounded-[20px] border-[#FCFCF1] shadow-lg  mx-auto"
    >
      <img
        className="bg-[#DDFFB1] rounded-full p-2  relative bottom-[25px] right-[95px] "
        src={img}
      />

      <h2 className="font-poppins  text-[18px] sm:text-[25px]  text-[#1B1713]
        pb-[21px] w-[157px]">
        {subTittle}
      </h2>
      <p className="pb-[55px] font-lato w-[156px]">{text}</p>
    </div>
  );
}
