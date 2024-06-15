import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import AnimateIn from '../components/AnimateIn'

const KontaktPage = ({location}) => {

  return (
    <Layout location={location}>
      <SEO title="Na Potok - Kontakt" />
       <section className="bg-primary flex justify-center items-end pt-72 pb-48 content-center">
        <AnimateIn >
          <div className="central-text-block text-center">  
            <div className="centered-block inline-block text-center max-w-7xl text-black px-4">
              <h4 className="potok uppercase">
                Co zahrnuje cena, jaké jsou ubytovací<br />
                podmínky, provozní řád a&nbsp;další formality...
                <br/>
              </h4>
            </div>
          </div>
        </AnimateIn>
      </section>

      <div className="px-4 w-full max-w-5xl mx-auto relative py-32" >
        <div className="relative w-full text-black">

          <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Cena ubytování <span className="underline">ZAHRNUJE</span>:
          </h3>
          <p className="leading-loose text-xl py-8">
            Využití lůžkovin, ručníků, sauny, venkovního grilu a ohniště, spotřebu dřeva pro užívání krbu a ohniště, spotřebu elektrické energie a vody i ubytovací poplatek obci.
          </p>
          <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Cena ubytování <span className="underline">NEZAHRNUJE</span>:
          </h3>
          <p className="leading-loose text-xl py-8">
            Vratnou kauci ve výši 5 000 Kč, která bude zaplacena dle domluvy při předání a vrácena při přebírání chalupy.<br />
            Poplatek za psa je 250 Kč/noc. Psy máme moc rádi, ale musíme upozornit, že pozemek chalupy Na Potok není oplocen a v těsné blízkosti zahrady se pasou krávy, koně i ovce. Doporučujeme proto promyslet, zda Vašeho čtyřnohého miláčka opravu chcete vzít a být zodpovědní za případné nepříjemnosti.
          </p>
          <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Jak to u nás chodí:
          </h3>
          <p className="leading-loose text-xl py-8">
            Maximální kapacita chalupy NA POTOK je 16 osob, včetně dětí. Kapacita nesmí být bez vědomí provozovatele překročena.<br />

Příjezd si naplánujte mezi 16-19h, odjezd do 10h<br />

Nemáme žádnou recepci, proto vše budeme řešit osobně a je důležité dodržet domluvený čas příjezdu a odjezdu.<br />
          </p>
          <h2 className="potok font-bold text-2xl pt-16 pb-8 uppercase">
            VŠEOBECNÉ PODMÍNKY
          </h2>
          <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Provozovatel
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                BRØDRE s.r.o. Sadová 182/13, 787 01 Šumperk, IČ 06713467, chalupa@napotok.cz, tel.: +420 777 441 876, Jiří Gonda (dále jen provozovatel)
              </li>
              <li>
                Zástupce provozovatele: Karel Hrušovský +420 737 273 951, Jan Skoumal +420 605 188 399
              </li>
            </ul>
          </p>
          <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Popis
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                chalupa NA POTOK v obci Vysoký Potok. Adresa Vysoký Potok 33, Malá Morava 788 33. Dále jen chalupa
              </li>
            </ul>
          </p>
          <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Smysl těchto všeobecných podmínek
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                Smyslem je naplnit literu zákona a informovat, jaká práva máte a jaká práva máme zase my tak, abyste si Váš pobyt u nás užili naplno.
              </li>
            </ul>
          </p>
          <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Vznik smluvního vztahu - rezervace
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                Na základě souhlasu se všeobecnými podmínkami chalupy při rezervaci ubytování provozovatel poskytne ubytovanému (hostovi) přechodně ubytování (právo užívat prostor vyhrazený mu k ubytování, jakož i další ubytovací prostory u chalupy) na sjednanou dobu a za předem stanovenou cenu.
              </li>
              <li>
                Objednávky na rezervaci chalupy se zasílají emailem nebo telefonicky. Potvrzení provede ubytovatel písemně na Váš email nebo telefonicky. Ihned po rezervaci na základě vystavené faktury ubytovatelem uhradí objednatel zálohu 50 % z ceny pobytu. Zbylou cenu pobytu uhradí objednatel 1 měsíc před nástupem na pobyt zase na základě faktury. Pokud objednatel provede storno objednávku, ubytovatel si ponechá z celkové ceny storno podmínky viz níže. Začíná-li Váš pobyt za 30 dní a méně, hradí se po potvrzení rezervace celá částka za ubytování naráz.
              </li>
            </ul>
          </p>
           <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Vratná kauce​
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                Ubytovaný host je povinen provozovateli zaplatit při příjezdu na chalupu NA POTOK částku ve výši 5 000 Kč v hotovosti, oproti předání klíčů a potřebných informací pro hosty o chalupě a jejím provozu.
              </li>
              <li>
                Bude-li pozemek, chalupa a její vybavení předáno provozovateli beze škod, kauce bude vrácena v plné výši. Ztráta klíčů je za poplatek 2 000 Kč.
              </li>
              <li>
                Ubytovaný host přebírá chalupu včetně příslušenství bez závad. Případné závady je povinen neprodleně nahlásit provozovateli. Při nástupu na pobyt předloží hosté doklady totožnosti.
              </li>
            </ul>
          </p>
           <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Psi
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                V chalupě je možné po předchozí domluvě ubytovat i pejsky. Poplatek je 250 Kč/den. Ostatní zvířátka nechejte prosím doma nebo po dohodě s provozovatelem.
              </li>
            </ul>
          </p>
           <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Poplatek z pobytu v obci
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                V ceně ubytování je zahrnut poplatek z ubytování obci. Výše poplatku je 10 Kč/osoba/noc.

              </li>
            </ul>
          </p>
           <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Storno podmínky
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                60 a více dní předem – 0% ceny pobytu
              </li>
               <li>
                30 a více dní předem – 40% ceny pobytu
              </li>
               <li>
                14 a více dní předem – 70% ceny pobytu
              </li>
               <li>
                Méně jak 13 dní předem – 100% ceny pobytu
              </li>

               <li className="mt-16">
                V případě výjimečných situací může provozovatel od storno poplatku či nároku na náhradu škody zcela či částečně ustoupit, rozhodnout o tomto přísluší výhradně provozovateli.
              </li>
              <li>
                Ze závažných důvodů může provozovatel souhlasit se změnou rezervovaného termínu bez nároku na zaplacení storno poplatku, o tomto rozhoduje provozovatel.
              </li>
              <li>
                V případě předčasného ukončení ubytování ze strany objednatele (hosta) bez zavinění provozovatele, není provozovatel povinen vrátit objednateli zaplacenou cenu ubytování ani z části. Objednatel bere na vědomí, že takto nevrácená část kupní ceny za předčasně zrušené ubytovací služby ze strany objednatele představuje nárok provozovatele na náhradu škody dle § 2330 odst. 2 občanského zákoníku.
              </li>
              <li>
                Provozovatel nevyžaduje žádný stornovací poplatek v případě výskytu objektivních závažných příčin, které vedou k odstoupení od smlouvy o ubytování jako jsou úmrtí v rodině, hospitalizace, živelné katastrofy, havárie apod. Tyto skutečnosti musí host doložit příslušnými doklady nejpozději do 7 kalendářních dnů od výskytu objektivních závažných příčin písemně na výše uvedenou adresu provozovatele.
              </li>
            </ul>

          </p>
             <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Co je potřeba dodržovat?
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                Hosté jsou povinni udržovat a zanechat chalupu, v čistém a původním stavu. Pro udržení domácího prostředí prosíme u vchodu do chalupy o přezouvání.

              </li>
              <li>
                Do toalety prosím nevhazujte hygienické potřeby.

              </li>
              <li>
                Je zakázáno odhazovat odpadky mimo určené místo (odpadkové koše) nebo jinak znečišťovat prostory chalupy. Kontejner na odpad je umístěn mimo objekt chalupy a je nutné odvést odpad osobním vozidlem ke kontejnerům dole v obci vedle sportovního hřiště.

              </li>
              <li>
                Není dovoleno přemisťovat nábytek, vybavení, provádět jakékoliv úpravy a zasahovat do elektrické sítě a jiných instalací. Nábytek z chalupy též není možné přesouvat do venkovních prostor.

              </li>
              <li>
                Zákaz létání s drony a bezpilotními letouny nad chalupou a přilehlými pozemky. Jelikož chalupa Na Potok není úplně na samotě a chceme mít dobré sousedské vztahy, nenarušovat harmonii přírody, nerušit koně, ptactvo a další zvířata, nepřejeme si, aby se zde létalo s drony či jinými bezpilotními letouny.

              </li>
            </ul>

          </p>

             <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Sauna
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                Chceme pro naše hosty zachovat vysokou kvalitu relaxace v sauně a je proto nutné dodržovat tyto zásady:
                  <ul className="pl-16 list-disc list-outside">
                    <li>Před použitím sauny se vždy osprchujte</li>
                    <li>uvnitř sauny nekonzumujte jídlo a nápoje</li>
                    <li>nevstupujte do sauny v podnapilém stavu nebo pod vlivem návykových látek</li>
                    <li>po použití vypněte saunu</li>
                  </ul>
              </li>
            </ul>

          </p>

          <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Předání chalupy
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                V předem dohodnutý čas host osobně předá provozovateli klíče a provozovatel provede zběžnou kontrolu.
              </li>
              <li>
                Před odjezdem je host povinen vypnout všechna zařízení chalupy, vyklidit lednici a umýt nádobí (vyklidit/zapnout myčku).
              </li>
              <li>
                Nadprůměrné znečištění není v ceně standardního úklidu např. bláto na podlaze, špinavá lednice, neumyté nádobí (nezapnutá/nevyklizená myčka), špinavé zdi, nepořádek a odpadky kolem chalupy apod.
              </li>
              <li>
                V případě neuvedení do pořádku, bude účtována smluvní pokuta ve výši 2 000 Kč a uhrazeno v hotovosti před odjezdem provozovateli.
              </li>
            </ul>

          </p>

           <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Předání chalupy
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                Účtujeme pouze pořizovací ceny. V případě poškození pokojů nebo jiných prostor chalupy je provozovatel oprávněn po hostovi požadovat odpovídající finanční náhradu.
              </li>
            </ul>

          </p>


          <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Bezpečnost
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                Provozovatel seznámí hosty s ovládáním elektroniky, venkovního grilu, ohniště, vnitřního krbu, sauny, úschovnou sportovního vybavení.
              </li>
              <li>
                Při odchodu z chalupy je host odpovědný za zkontrolování elektrických spotřebičů (vypnutí elektrické trouby, varné desky), vypnutí světel, zavření všech oken, uzamčení úschovny na sportovní vybavení. Ubytovaný zabezpečí, aby byl objekt v případě odchodu, vždy uzamčen ze všech vchodů do objektu.
              </li>
              <li>
               Host dbá zvýšené opatrnosti při zacházení s ohněm a dbá všech bezpečnostních pokynů a obecných nařízení. Otevřený oheň je možný pouze ve venkovním ohništi, který je k tomuto určen. Při odchodu ohniště vždy uhaste. Host dbá, aby byly dvířka od krbové vložky (vnitřní krb) vždy uzavřeny.
              </li>
              <li>
                Při používání venkovního grilu postupujte vždy dle přiloženého návodu, který najdete uvnitř chalupy. Dbejte zvýšené opatrnosti.
              </li>
              <li>
                Trámy v horních pokojích slouží jako podpěra střechy, nejsou tedy určeny k lezení, houpání a k podobným aktivitám.
              </li>
              <li>
                Na interiérovém schodišti je třeba dávat pozor, schodnice mohou klouzat, hrozí nebezpečí poranění, stejně tak dbejte zvýšené opatrnosti na terase a zahradě, kde je umístěno velké množství kamenů a inventářů.
              </li>
              <li>
                Povinností hosta je oznámit neprodleně změny či nedostatky, které nastanou v průběhu pobytu.
              </li>
              <li>
                Uvnitř chalupy je pod hrozbou okamžitého ukončení pobytu zakázáno kouřit. V celém objektu je také zakázáno užívat drogy či jiné nelegální omamné a psychotropní látky.
              </li>
              <li>
                Každý přítomný je povinen neprodleně ohlásit nebezpečí vzniku požáru, situace vyžadující zásah policie nebo lékařské ošetření a v rámci svých možností učinit vše, aby zabránil šíření požáru či odvrátil hrozící nebezpečí.
              </li>
              <li>
                Provozovatel nenese odpovědnost za úrazy či škody na majetku způsobené nedostatečným odklizením sněhu okolo objektu nebo pádem sněhu ze střechy.
              </li>
              <li>
                V ceně pobytu není obsaženo pojištění. Za úrazy a poškození nebo odcizení majetku a odpovědnost za škody způsobené na zdraví a majetku třetí osobě provozovatel neodpovídá.
              </li>
              <li>
               Noční klid je v době od 22 hod. do 6 hod. Vyvarujte se činností, které by nadměrně obtěžovaly okolí a odporovaly dobrým mravům či rušily sousedy.
              </li>
              <li>
                Host musí mít k dispozici v době pobytu nabitý telefon pro případ potřeby.
              </li>
              <li>
                Nenechávejte děti bez dozoru v objektu ani v jeho bezprostředním okolí. Za jejich bezpečnost a jimi způsobené škody odpovídají vždy zákonní zástupci nebo osoba, která dítě doprovází. Zejména v blízkosti bazénu a jezírka.
              </li>
            </ul>

          </p>
          
           <h3 className="potok font-bold text-2xl pt-6 pb-0 uppercase">
            Na závěr
          </h3>
          <p className="leading-loose text-xl py-8 pl-8">
            <ul className="list-disc list-outside">
              <li>
                Všeobecné Podmínky jsou a budou nedílnou součástí objednávky či rezervace ubytování chalupy NA POTOK. Těšíme se na vás.
              </li>
            </ul>

          </p>

          <p className="leading-loose text-xl py-8 pl-8 text-right">
            Ubytovací řád vydal ve Vysokém Potoce, Malá Morava, dne 1. dubna 2021<br />
            Provozovatel:<br />
            BRØDRE s.r.o. Sadová 182/13,<br />
            Šumperk, 787 01<br />
            IČ: 06713467<br />
            Tel: 777 441 876<br />
            chalupa@napotok.cz<br />
            www.napotok.cz
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default KontaktPage
