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
    <div className=" p-4">
      <div className="h-[225px] w-[172px] ">
        <span className="text-[73px]  text-[#F3B12A] font-poppins font-bold ">
          {number}
        </span>
        <img className=" relative bottom-[73px] right-[2px]" src={image} />
      </div>

      <h3 className="font-poppins font-semibold text-[16px] sm:text-[21px]">
        {subTittle}
      </h3>

      <div className="flex space-x-4 ">
        <div className="flex ">
          <img src={icon} />
          <p>{text}</p>
        </div>
        <div className="flex">
          <p>{textTwo}</p>
          <img src={iconTwo} />
        </div>
      </div>
    </div>
  );
}
