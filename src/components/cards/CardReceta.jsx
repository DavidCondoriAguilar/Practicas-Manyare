/* eslint-disable react/prop-types */
export default function CardReceta({
  number,
  subTittle,
  image,
  text,
  textTwo,
  icon,
  iconTwo,
}) {
  return (
    <div className=" ">
      <div className="h-[140px] sm:h-[225px] w-[172px] ">
        <p
          className=" text-[#F3B12A] text-[73px] sm:text-[120px]
         font-poppins font-bold "
        >
          {number}
        </p>
        <img
          className="relative left-[15px] sm:left-[40px] sm:bottom-[140px] bottom-[80px]  w-[110px] sm:w-[180px] "
          src={image}
        />
      </div>

      <h3 className="sm:w-[232px] w-[167px] font-poppins font-semibold text-[16px] sm:text-[21px] height-[150px] sm:h-auto">
        {subTittle}
      </h3>

      <div className="flex space-x-4 ">
        <div className="flex gap-[4px]">
          <img src={icon} />
          <p className="text-[14px] sm:text-[16px]">
            {text}
          </p>
        </div>
        <div className="flex gap-[4px]">
          <p className="text-[14px] sm:text-[16px] font-lato">
            {textTwo}
          </p>
          <img src={iconTwo}/>
        </div>
      </div>
    </div>
  );
}
