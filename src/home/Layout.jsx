import bgImage from "../../public/images/bgMangiare.png";
import ButtonMangiare from "../components/buttons/ButtonMangiare";
import ButtonMenuSemana from "../components/buttons/ButtonMenuSemana";
import CardReceta from "../components/cards/CardReceta";
import CardWhyM from "../components/cards/CardWhyM";
import RoundedParrafo from "../components/rounded/RoundedParrafo";

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

        {/* <section className=" text-[#fff] bg-[#7BB037] h-[1018px] relative">
          <h3 className="font-poppins font-bold text-[48px] text-center">
            ¿Qué contiene tu kit de comida?
          </h3>
          <p className="text-center font-poppins text-[25px] pb-[377px]">
            Lorem impsum aqui ira una descripción no tan larga ideas aqui
          </p>
          <RoundedImg image="images/kitComida7.png" />

          <img
            className="absolute bottom-0 left-[220px]"
            src="images/platoPrincipal.png"
          />
        </section> */}

        <section className="mx-auto h-[100%] sm:h-[735px] w-[414px] sm:w-auto bg-[#FBC63E] flex items-center justify-center">
          <div className="h-[665px] sm:h-[504px] w-[382px] sm:w-[1157px]  container flex items-center justify-center bg-[#fff]">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <article className=" w-[436px] lg:grid-cols-[800px_2fr] flex items-center justify-center">
                <img src="images/cart.png" alt="Cart" className="" />
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

        <section className="h-[720px] mx-auto container">
          <div className="flex justify-center  ">
            <h2 className="font-poppins font-bold text-[40px] text-[#161616]">
              Recetas de la semana
            </h2>
          </div>

          <div className="flex space-x-4 grid grid-cols-2 sm:grid-cols-4 mx-auto p-5">
            <CardReceta
              image="images/receta1.png"
              subTittle="Ensalada de papines con pesto de cilantro"
              icon="images/reloj.svg"
              text="24 min"
              textTwo="8 ingredientes"
              iconTwo="images/bolsa.svg"
            />

            <div className="relative top-[-275px] sm:top-[175px]">
              <CardReceta
                image="images/receta2.png"
                subTittle="Ensalada de papines con pesto de cilantro"
                icon="images/reloj.svg"
                text="24 min"
                textTwo="8 ingredientes"
                iconTwo="images/bolsa.svg"
              />
            </div>

            <CardReceta
              image="images/receta3.png"
              subTittle="Ensalada de papines con pesto de cilantro"
              icon="images/reloj.svg"
              text="24 min"
              textTwo="8 ingredientes"
              iconTwo="images/bolsa.svg"
            />

            <div className="relative top-[-175px] sm:top-[175px]">
              <CardReceta
                image="images/receta4.png"
                subTittle="Ensalada de papines con pesto de cilantro"
                icon="images/reloj.svg"
                text="24 min"
                textTwo="8 ingredientes"
                iconTwo="images/bolsa.svg"
              />
            </div>
          </div>
          <div className="flex justify-center relative bottom-[-200px] sm:top-[200px]">
            <ButtonMenuSemana />
          </div>
        </section>
      </main>
    </>
  );
}
