import { useMediaQuery } from "react-responsive";
import bgImage from "../../public/images/bgMangiare.png";
import ButtonMangiare from "../components/buttons/ButtonMangiare";
import CardReceta from "../components/cards/CardReceta";
import CardWhyM from "../components/cards/CardWhyM";
import RoundedImg from "../components/rounded/RoundedImg";
import RoundedParrafo from "../components/rounded/RoundedParrafo";

export default function Layout() {

  const desktopMobile = useMediaQuery({
    query: '(min-width:950px)'
  })
  return (
    <>
      <main>
        <section>
          <div className="">
            <img className="h-[350px] sm:h-screen w-full "  src={bgImage} alt="" />
          </div>
          <div
            className="containerMain absolute bottom-[50%] sm:top-[50%] translate-y-[-50%]
                      grid items-center justify-items-center gap-[2px] sm-gap-[75px] lg:h-[320px]"
          >
            <h1>
              ¡A mangiare con <br /> nuestras recetas!
            </h1>
            <ButtonMangiare />
          </div>
        </section>

        <h2 className="font-poppins text-[24px] sm:text-[48px] font-bold text-center mt-5 ">
          ¿Por qué Mangiare?
        </h2>

        <section className="containerWhyM mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2  py-[172px]">
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

        <section className="text-[#fff] bg-[#7BB037] ">
          <div className="containerKitPrincipal ">
            <h3 className="font-poppins font-bold text-[24px] sm:text-[48px] text-center ">
              ¿Qué contiene tu kit de comida?
            </h3>
            <p className="text-center font-poppins text-[14px] sm:text-[25] ">
              Lorem impsum aqui ira una descripción no tan larga ideas aqui
            </p>

            <div className="relative pt-[377px] sm-">

              {
                desktopMobile?
              <img className="mx-auto sm:w-[auto]" src="images/platoPrincipal.png" />
                :
              <img className="mx-auto relative w-auto  bottom-[177px]" src="images/platito.png" />
              }

              <div className="absolute top-[65%] left-[23%] sm:top-[50%] sm:left-[9%]  ">
                <RoundedImg
                  name="Cilantro"
                  image="images/kit-comida/cilantro.png"
                />
              </div>
              <div className="absolute top-[18%] sm:top-[80%] left-[20%] sm:left-[3%] ">
                <RoundedImg
                  name="Limones"
                  image="images/kit-comida/limones.png"
                />
              </div>
              <div className="absolute bottom-[33%] left-[-1%] sm:bottom-[53%] sm:left-[25%]">
                <RoundedImg
                  name="Albahaca"
                  image="images/kit-comida/albaca.png"
                />
              </div>
              <div className="absolute bottom-[63%] sm:bottom-[63%]  right-[10%] sm:right-[40%]">
                <RoundedImg
                  name="Papines"
                  image="images/kit-comida/papines.png"
                />
              </div>
              <div className="absolute bottom-[33%] sm:bottom-[50%] right-[25%] sm:right-[25%]">
                <RoundedImg
                  name="Piñobes"
                  image="images/kit-comida/piñones.png"
                />
              </div>
              <div className="absolute bottom-[13%] sm:bottom-[25%] left-[50%] sm:left-[85%]">
                <RoundedImg name="Queso" image="images/kit-comida/queso.png" />
              </div>
              <div className="absolute bottom-[5%] right-[140%] sm:right-[3%]">
                <RoundedImg name="Ajos" image="images/kit-comida/ajos.png" />
              </div>
            </div>
          </div>
        </section>

        <section className="sm:h-[735px] w-[414px] sm:w-auto bg-[#FBC63E] flex items-center justify-center">
          <div className=" sm:h-[504px] w-[382px] sm:w-[1157px]  container flex items-center justify-center bg-[#fff]">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <article className=" w-[436px] lg:grid-cols-[800px_2fr] flex items-center justify-center">
                <img src="images/food-box.png" alt="Cart" className="" />
              </article>

              <article className="">
                <h2
                  className="
                  font-bold font-poppins text-[#1B1713] text-center text-[24px]"
                >
                  ¿Cómo llegará tu pedido?
                </h2>
                <RoundedParrafo
                  img="images/number1.svg"
                  text="Los envíos se entregan los días domingos por parte de nuestro personal."
                />
                <RoundedParrafo
                  img="images/number2.svg"
                  text="Los ingredientes se entregarán pre-cortados según la cantidad de porciones escogidas a la hora de comprar."
                />
                <RoundedParrafo
                  img="images/number3.svg"
                  text="Todos los ingredientes enviados estarán 100% frescos."
                />
                <RoundedParrafo
                  img="images/number4.svg"
                  text="Los envíos se entregan los días domingos por parte de nuestro personal."
                />
              </article>
            </div>
          </div>
        </section>

        <section className=" mx-auto  ">
          <div className="flex justify-center  text-center mt-4">
            <h2 className="font-poppins font-bold 
                          text-[24px] smn:text-[40px]  text-[#161616]">
              Recetas de la semana
            </h2>
          </div>

          <div className="  grid grid-cols-2 sm:grid-cols-4 p-5">
            <CardReceta
              number="1"
              image="images/platos/plato1.png"
              subTittle="Ensalada de papines con pesto de cilantro"
              icon="images/reloj.svg"
              text="24 min"
              textTwo="8 ingredientes"
              iconTwo="images/bolsa.svg"
            />

            <div className="relative top-[0px] sm:top-[175px]">
              <CardReceta
                number="2"
                image="images/platos/plato2.png"
                subTittle="Pollo con reuccion de vino con tomates"
                text="24 min"
                textTwo="8 ingredientes"
                icon="images/reloj.svg"
                iconTwo="images/bolsa.svg"
              />
            </div>

            <CardReceta
              number="3"
              image="images/platos/plato3.png"
              subTittle="Ensalada de papines con pesto de cilantro"
              icon="images/reloj.svg"
              text="24 min"
              textTwo="8 ingredientes"
              iconTwo="images/bolsa.svg"
            />

            <div className="relative top-[0px] sm:top-[175px]">
              <CardReceta
                number="4"
                image="images/platos/plato4.png"
                subTittle="Ensalada de papines con pesto de cilantro"
                icon="images/reloj.svg"
                text="24 min"
                textTwo="8 ingredientes"
                iconTwo="images/bolsa.svg"
              />
            </div>
          </div>
          {/* <div className="flex justify-center relative bottom-[-200px] sm:top-[200px]">
            <ButtonMenuSemana />
          </div> */}
        </section>
      </main>
    </>
  );
}
