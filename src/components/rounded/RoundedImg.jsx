export default function RoundedImg({image}) {
  return (
    <div>
      <img className="relative top-[50px] right[150px]" src={image}/>
      <img className="relative top-[50px] right[150px]" src={image}/>
      <img className="relative top-[50px] right[150px]" src={image}/>
      
    </div>
  );
}