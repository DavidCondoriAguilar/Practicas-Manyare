export default function RoundedParrafo({ number,text, img }) {
  return (
    <div className=" ">
      <div className="flex ">
        <img src={img} />
        <p className="text-[16px] text-[#1B1713] sm:text-[18px] font-lato py-[30px] px-[15px]">{text}</p>
      </div>
    </div>
  );
}
