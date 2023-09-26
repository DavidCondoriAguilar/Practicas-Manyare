import bgImage from "../../public/images/bgMangiare.png";
import ButtonMangiare from "../components/buttons/ButtonMangiare";
import CardWhyM from "../components/cards/CardWhyM";
import RoundedImg from "../components/rounded/RoundedImg";

export default function Layout() {
  return (
    <>
      <main>
        <section>
          <div className="">
            <img src={bgImage} alt="" />
          </div>
          <div
            className="containerMain absolute bottom-[50%] sm:top-[50%] translate-y-[-50%]
                      grid items-center justify-items-center gap-[75px] lg:h-[320px]"
          >
            <h1>
              ¡A mangiare con <br /> nuestras recetas!
            </h1>
            <ButtonMangiare />
          </div>
        </section>

        <h2 className="font-poppins text-[48px] font-bold text-center mt-5 ">
          ¿Por qué Mangiare?
        </h2>

        <section className="containerWhyM mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5 py-[172px]">
          <article>
            <CardWhyM
              img="images/porqueMangiare1.svg"
              subTittle="Productos
                frescos"
              text="Productos 100% frescos"
            />
          </article>
          <CardWhyM
            img="images/porqueMangiare2.svg"
            subTittle="Preparación
            fácil"
            text="Recetas fáciles de preparar"
          />
          <article>
            <CardWhyM
              img="images/porqueMangiare3.svg"
              subTittle="Nuevas recetas"
              text="Recetas nuevas cada semana"
            />
          </article>

          <article>
            <CardWhyM
              img="images/porqueMangiare4.svg"
              subTittle="Ahorra tiempo"
              text="Reduce el tiempo de cocinar "
            />
          </article>
        </section>
        
        <section className=" text-[#fff] bg-[#7BB037] h-[1018px] relative" >

          <h3 className="font-poppins font-bold text-[48px] text-center">¿Qué contiene tu kit de comida?</h3>
          <p className="text-center font-poppins text-[25px] pb-[377px]">Lorem impsum aqui ira una descripción no tan larga ideas aqui</p>
          <RoundedImg image="images/kitComida7.png"/>

          <img className="absolute bottom-0 left-[220px]" src="images/platoPrincipal.png" />

        </section>
        
      </main>
    </>
  );
}
