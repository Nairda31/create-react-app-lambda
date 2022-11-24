import poza1 from './images/poza1.jpg'
import poza2 from "./images/poza2.png";


function App() {
  return (
    <>
      <div className="flex flex-col items-center  h-[100%] w-screen font-bold bg-[#CD5C5C]">
        <h1 className="text-[60px] mb-[10rem] animate-pulse">❤️Patri❤️</h1>
        <div className="flex flex-col items-center mb-[7rem]">
          <h1 className=" items-center mb-[3rem] ">
            ❤️5 Motive pentru care te iubesc❤️
          </h1>
          <ol className="space-y-4 ml-[15px]">
            <li>
              ❤️Fiindca din prima zi mi-ai aratat ca esti o fata speciala.
            </li>
            <li>❤️Fiindca esti langa mine mereu. </li>
            <li>❤️Fiindca cu tine nu ma plictisesc niciodata.</li>
            <li>❤️Fiindca nu mi-as vedea viata cu altcineva.</li>
            <li>❤️Fiindca crezi in mine.</li>
          </ol>
        </div>
        <div className="flex flex-col items-center mb-[5rem] ">
          <h1 className="mb-[10px]">❤️O poza de imi place cu noi❤️</h1>
          <img src={poza1} alt="Nu stiu" className="h-[20rem] w-[30rem]" />
        </div>
        <div className="flex flex-col items-center mb-[4rem]">
          <h1 className="mb-[2rem]">
            ❤️Un mic rezumat la cum ne-am cunoscut❤️
          </h1>

          <p>
            In prima zi cand te-am cunoscut nici nu ma gandeam ca o sa ajungem
            sa avem o relatie asa buna si doar o sa mai vorbim cam 1 luna si
            atat.Dar apoi am reusit sa vorbim sa ne vedem mai mult si TOT eu a
            trebuie sa fac prima miscare.😅Apoi o alta parte importanta in
            povestea noasta a mai fost cand te-am intrebat daca vrei sa fi
            iubita mea, care din punctul meu de vedere a fost cel mai frumos
            moment din viata mea.😇 Nu vreau sa ma lungesc prea mult fiindca mai
            ai de citit multe chesti pe aici si vreau doar sa termin prin faptul
            ca au fost 2 ani plini de amintiri si aventuri si , doamne ajuta, ca
            si urmatori sa fie tot asa. 🥰🥰🥰
          </p>
        </div>
        <div className="flex flex-col items-center mb-[4rem]">
          <h1 className="mb-[3rem]">❤️Asa te plimbi tu in capul meu❤️</h1>
          <img src={poza2} alt="Nu stiu" className="h-[15rem] animate-spin" />
        </div>

        <div className="flex flex-col items-center mb-[4rem]">
          <h1 className="mb-[3rem]">❤️Aproape de final❤️</h1>
          <p>
            ❤️Aproape am ajuns de final si vreau sa-ti spun ca esti unul dintre
            cele mai frumoase lucruri de mi s-au intamplat.Uite un pupic ❤️:
          </p>
          <p className="text-[5rem]">😙</p>
        </div>
        <div className="flex flex-col items-center mb-[4rem]">
          <h1 className="mb-[3rem]">❤️Semnificatie floare❤️</h1>
          <p className="mb-[2rem]">
            Ti-am tot luat trandafiri🌹🌹 si toti ori s-au ofilit, ori s-au
            dezintegrat , ori cine stie ce s-a mai intamplat cu ei asa ca m-am
            gandit sa iti iau ceva care sa tina mult mai mult.🌹🌹
          </p>
          <p>❤️"Te voi iubi pana cand trandafirul se va ofili"❤️</p>
        </div>
        <div className="flex flex-col items-center mb-[4rem]">
          <h1 className="mb-[2rem]">❤️❤️❤️Finalul❤️❤️❤️</h1>
          <p>
            Chiar daca nu mereu ne intelegem, vreau sa sti ca mereu te poti baza
            pe mine si ca te iubesc foarte mult!❤️❤️ Si orice s-ar intampla o sa
            fiu mereu langa tine.❤️❤️
          </p>
        </div>
        <h1 className="text-[2rem] animate-pulse">❤️TE IUBESC❤️</h1>
      </div>
    </>
  );
}

export default App;
