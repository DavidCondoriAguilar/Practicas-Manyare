export default function RoundedImg({ image, name }) {
  return (
    <div>
      <img className="w-[100px] sm:w-[145.33px]" src={image} />
      <h2 className="text-[#fff] text-[18px] text-center sm:text-[25px]
                     font-poppins font-semibold">
        {name}
      </h2>
    </div>
  );
}
