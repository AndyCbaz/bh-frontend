//IMPORTACIONES DE FONTAWESOME
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TermsAndConditionProps = {
    openDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}
function TermsAndCondition({ openDrawer }: TermsAndConditionProps) {
  return (
    <>
    <div className="flex flex-col flex-grow h-screen">
    <header className="bg-[#3B4048] border-b-2 border-b-primary-yellow h-[9%] flex flex-col justify-center">
          <div className="flex pt-2 pl-2">
            <button onClick={() => openDrawer(false)} className="">
              <FontAwesomeIcon
                style={{
                  color: "#BBBBBB",
                  width: "25px",
                  height: "25px",
                }}
                icon={faArrowLeft}
              />
            </button>
          </div>
          <h1 className="text-white font-semibold text-center text-[3vh] pb-4 leading-3">
            Terms and Condition
          </h1>
        </header>
        <main className="flex flex-col flex-grow m-2 overflow-y-auto">
          <p className="text-white text-[1.5vh] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo earum
            sit error odio, placeat dolorum voluptates, nesciunt quaerat, dicta
            debitis animi molestiae libero. Nisi nam accusantium quasi laborum
            illo dolorem rem quam laudantium est quis? Adipisci fugiat esse
            incidunt sit molestiae dolorum, perferendis aliquid inventore, sunt
            possimus reiciendis laboriosam officiis nemo quod pariatur?
            Accusamus, tenetur! Tempore, rem quos! Soluta odit, aliquam earum
            cumque maxime voluptatum reiciendis a cum sunt expedita itaque,
            voluptatibus magni facilis corporis officiis at dolor labore
            suscipit laudantium. Repellat esse ut consectetur sed facere
            blanditiis odio quasi aliquid ullam, deleniti placeat fuga iure
            adipisci omnis quia incidunt autem nihil similique quis? Laboriosam
            aperiam odio repudiandae beatae alias molestiae autem fugiat
            perspiciatis amet sunt unde iste excepturi eveniet vitae sint
            voluptatem, nesciunt minima tempore. Necessitatibus at, provident
            rerum voluptatibus illum doloribus, consequuntur qui officiis,
            nesciunt est esse dolorum ducimus ea nulla? Quos ex velit, libero
            quo, aliquam labore minima sunt perspiciatis quasi alias dolorem
            suscipit at aperiam molestias cupiditate eos sed asperiores
            laboriosam dolores fuga enim deserunt recusandae. Nemo, omnis!
            Culpa, a minus. Sint, culpa nostrum! Sunt, et. Ducimus aut, illum ab
            blanditiis, rem dolorem aspernatur fugit exercitationem pariatur
            vitae, facilis voluptatum. Itaque eum ea cupiditate quos molestiae
            eos, architecto aspernatur facilis laboriosam porro omnis debitis
            suscipit. Ex tempore corporis, odio voluptatem aut, doloremque
            ducimus laboriosam illum veniam ab nulla pariatur sint voluptas
            omnis facere. Recusandae maxime deleniti odio ratione nesciunt nisi
            esse earum omnis obcaecati repellendus, vitae laudantium accusamus
            cumque minus dicta dolorem! Itaque dolorum expedita reiciendis
            dolore. Ipsum corrupti debitis nemo perspiciatis fugit deserunt
            aperiam quisquam fuga mollitia soluta eius nostrum adipisci est
            explicabo, autem fugiat ea! Quam possimus tenetur maiores id dolor,
            nam ea labore perferendis magni, quas doloremque nulla! Ipsam
            reiciendis officia dicta quia laudantium recusandae iure! Expedita
            vitae sint atque, sit architecto magni id magnam a velit, distinctio
            minus reprehenderit, voluptatum modi molestiae eius. Molestias,
            voluptatum doloremque. Quas aperiam error iusto ipsum debitis
            dolores placeat molestiae eius! Ad ratione officia quibusdam autem
            rerum vel, tempora saepe iure aut laudantium reiciendis inventore
            voluptates incidunt quaerat veritatis aspernatur eius eaque nihil
            iusto. Adipisci fuga unde maiores totam rem? Amet hic optio quis
            iusto ipsum dolorum recusandae libero. Quaerat voluptatibus,
            quibusdam dolorum amet voluptas, delectus, incidunt harum
            repellendus ea mollitia ipsa quisquam! Obcaecati quisquam,
            asperiores corrupti aliquam itaque laudantium sit praesentium modi
            nemo nam sed accusamus minus ducimus vitae. Eius, ducimus iure
            voluptates explicabo iste dolor delectus ipsa commodi vitae? Hic
            quasi quod earum odio error tempore impedit, fuga deleniti
            praesentium dignissimos fugit sit ut obcaecati voluptatibus
            doloribus ex voluptate. Mollitia placeat quidem hic, odio distinctio
            excepturi accusantium provident culpa debitis ex totam consequuntur
            praesentium tempore atque dicta, nam non reiciendis impedit dolorum
            beatae quisquam facilis iusto. Earum, consequuntur sit corrupti
            velit ullam dignissimos dolore iure natus cum exercitationem et,
            dolor ab deserunt voluptatibus explicabo. Qui natus at repellat,
            nemo ab molestiae quisquam officia debitis incidunt sunt ea veniam
            aspernatur id nobis voluptate in repudiandae vel quaerat et
            consectetur ratione iste. Pariatur dignissimos incidunt similique
            iste.
          </p>
        </main>

    </div>
    </>
  )
}
export default TermsAndCondition