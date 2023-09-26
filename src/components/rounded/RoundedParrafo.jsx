export default function RoundedParrafo({ text, img }) {
  return (
    <div className=" ">
      <div className="flex ">
        {/* <span className="text-[#F3B12A] rounded-[50%] p-1 w-[30px] h-[30px] border-2 border-[#F3B12A]">
          {number}
        </span> */}
        <img src={img} />
        <p className="text-[16px] text-[#1B1713] sm:text-[18px] font-lato py-[30px] px-[15px]">{text}</p>
      </div>
    </div>
  );
}
