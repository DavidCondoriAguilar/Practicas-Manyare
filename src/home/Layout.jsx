import { useMediaQuery } from "react-responsive";
import bgImage from "../../public/images/bgMangiare.png";
import ButtonMangiare from "../components/buttons/ButtonMangiare";
import CardWhyM from "../components/cards/CardWhyM";
import RoundedImg from "../components/rounded/RoundedImg";
import ButtonNav from "../components/buttons/ButtonNav";
import ButtonRegister from "../components/buttons/ButtonRegister";

export default function Layout() {

  const desktopMobile = useMediaQuery({
    query: '(min-width:1280px)'
  })

  const desktopNavbar = useMediaQuery({
    query: '(min-width:950px)'
  })


  return (
    <>
      <header className="flex items-center justify-center w-full h-[77px] sm:h-[80px]">
        <nav className="flex items-center justify-between w-full px-[3%] max-w-[1200px] mx-auto">
          <div className="flex gap-[15px] w-[134px] sm:w-[259.2px]">
            <img
              className="w-[62px] sm:w-[96px]"
              src="public/images/logo.png"
            />
            <img src="public/images/mangiare.png" />
          </div>

          <div>
            {desktopNavbar ? (
              <div className="flex items-center gap-[25px]">
                <p className="text-[16px] text-[#000] font-bold font-poppins">
                  Menú comida
                </p>
                <p className="text-[16px] text-[#000] font-bold font-poppins">
                  Blogs
                </p>
                <ButtonNav />
                <ButtonRegister />
              </div>
            ) : (
              //burger
              <div className="text-[50px]">☣️</div>
            )}
          </div>
        </nav>
      </header>

      <main>
        <section>
          <div className="">
            <img className="h-[350px] sm:h-screen w-full " src={bgImage} />
          </div>
          <div
            className="containerMain absolute bottom-[30%] sm:top-[50%] translate-y-[-50%]
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
              {desktopMobile ? (
                <img
                  className="mx-auto sm:w-[auto]"
                  src="images/platoPrincipal.png"
                />
              ) : (
                <img
                  className="mx-auto relative w-auto  bottom-[177px]"
                  src="images/platito.png"
                />
              )}

              <div 
                className="absolute top-[68%] left-[23%]
                   xl:top-[50%] xl:left-[9%] ">
                <RoundedImg
                  name="Cilantro"
                  image="images/kit-comida/cilantro.png"
                />
              </div>
              <div 
                className="absolute top-[18%] left-[16%]
                   xl:top-[80%] xl:left-[3%] ">
                <RoundedImg
                  name="Limones"
                  image="images/kit-comida/limones.png"
                />
              </div>
              <div 
                className="absolute bottom-[33%] left-[1%]
                xl:bottom-[53%] xl:left-[22%]">
                <RoundedImg
                  name="Albahaca"
                  image="images/kit-comida/albaca.png"
                />
              </div>
              <div 
                className="absolute bottom-[63%] right-[10%]
                xl:bottom-[63%] xl:right-[40%]">
                <RoundedImg
                  name="Papines"
                  image="images/kit-comida/papines.png"
                />
              </div>
              <div 
                className="absolute  right-[1%] bottom-[33%] 
                xl:bottom-[50%] xl:right-[25%]
                ">
                <RoundedImg
                  name="Piñobes"
                  image="images/kit-comida/piñones.png"
                />
              </div>
              <div 
                className="absolute  left-[54%] bottom-[12%]
                xl:left-[85%] xl:bottom-[25%] ">
                <RoundedImg name="Queso" image="images/kit-comida/queso.png" />
              </div>
              <div 
                className="absolute bottom-[5%] right-[140%] xl:right-[3%]">
                <RoundedImg name="Ajos" image="images/kit-comida/ajos.png" />
              </div>
            </div>
          </div>
        </section>

        {/* <section className=" mx-auto  ">
          <div className="flex justify-center  text-center mt-4">
            <h2
              className="font-poppins font-bold 
                          text-[24px] smn:text-[40px]  text-[#161616]"
            >
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
          <div className="flex justify-center  align-bottom mt-[16%] py-[3%]">
            <ButtonMenuSemana />
          </div>
        </section> */}
      </main>
    </>
  );
}
