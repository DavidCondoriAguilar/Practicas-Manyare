export default function CardReceta({ subTittle, image, text, textTwo, icon, iconTwo }) {
  return (
    <div>
      <img src={image} />
      <h3 className="font-poppins font-semibold text-[21px]">{subTittle}</h3>

      <div className="flex">
        <img src={icon} />
        <span>{text}</span>
        <span>{textTwo}</span>
        <img src={iconTwo} />

      </div>
    </div>
  );
}
