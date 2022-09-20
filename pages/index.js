import { staticRequest } from "tinacms";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
import Image from 'next/image';
import SectionTitle from "../components/SectionTitle";
import { IntroSection, MethodContent, MethodWrapper, ProcessPipe, ProcessStep, ProcessWrapper, ReasonBubble, ReasonBubbleTitle, ReasonsWrapper } from "../styles/styles";
import Section from "../components/Section";

const query = `{
  page(relativePath: "home.mdx"){
    body
  }
}`;

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });
  return (
    <Layout>
      <IntroSection></IntroSection>
      <Section>
        <SectionTitle title='5 důvodů proč ruška' />
        <ReasonsWrapper>
          <ReasonBubble>
            <ReasonBubbleTitle>Rychlost</ReasonBubbleTitle>
            <div>Pokud jste OPRAVDU rozhodnutí svůj problém vyřešit – výrazné zlepšení cítíte již během několika málo hodin. Pak jediná terapie stačí k viditelným a citelným výsledkům</div>
          </ReasonBubble>
          <ReasonBubble>
            <ReasonBubbleTitle>Odstraňuje přičiny</ReasonBubbleTitle>
            <div>Tedy „kořeny“ našich současných problémů. Po odstranění příčin – naše současné problémy (důsledky) se už neprojevují v našich životech</div>
          </ReasonBubble>
          <ReasonBubble>
            <ReasonBubbleTitle>Univerzálnost</ReasonBubbleTitle>
            <div>Tedy funguje téměř na každého a pomáhá vyřešit jakýkoliv problém</div>
          </ReasonBubble>
          <ReasonBubble>
            <ReasonBubbleTitle>Šetrnost</ReasonBubbleTitle>
            <div>Sami si určujete, jak hluboko půjdete a kolik příčin svých problémů odstraníte</div>
          </ReasonBubble>
          <ReasonBubble>
            <ReasonBubbleTitle>Klíčová zásada</ReasonBubbleTitle>
            <div>Musíte chtít a být rozhodnutí svůj problém vyřešit</div>
          </ReasonBubble>
        </ReasonsWrapper>
      </Section>
      <MethodWrapper>
        <MethodContent>
          <SectionTitle title='O metodě' />
          <p>RUŠ je zkratka pro Rychlá a Účinná změna Skutečnosti. Je metodou vědomé a logické práce s lidským podvědomím.
          Princip metody je velmi jednoduchý. Najdu problém, nazvu ho, přijmu, je pryč :-). Protože však lidé mají různé předpoklady a jsou různě vnímaví ke svým pocitům, vznikl postupně ucelený systém, aby metoda mohla pomoci všem typům lidí.
          Tento ucelený systém – soubor technik pomůže Vám najít skutečnou příčinu Vaších problémů a následně postupně odstranit vše, co Vám znepříjemňuje Váš život.
          Je určená pro každého, kdo se chce cítit lépe a rozhodne se své potíže vyřešit. Metoda RUŠ funguje již řadu let a pomohla již mnoho tisícům lidi zbavit se úplně a trvale jejich problémů. Její výjimečnost tkví v tom, že je velmi rychlá a účinná.
          </p>
        </MethodContent>
      </MethodWrapper>
      <Section>
        <SectionTitle title='Co se dá ruškou řešit' />
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', maxWidth: '800px', margin: '0 auto'}}>
          <div>
            <div style={{padding: '5px', cursor: 'pointer', background: '#eee'}}>Vztahy</div>
            <div style={{padding: '5px', cursor: 'pointer'}}>Práce</div>
            <div style={{padding: '5px', cursor: 'pointer'}}>Nedostatek</div>
            <div style={{padding: '5px', cursor: 'pointer'}}>Traumata</div>
            <div style={{padding: '5px', cursor: 'pointer'}}>Zdraví</div>
            <div style={{padding: '5px', cursor: 'pointer'}}>Vzdělání</div>
            <div style={{padding: '5px', cursor: 'pointer'}}>Ostatní starosti</div>
          </div>
          <div>
            <div style={{padding: '10px',}}>Problémy ve vztahu s životním partnerem, rozvod, špatný vztah s rodiči nebo taky s tchýní/tchánem, neláskyplné vztahy s dětmi, špatný vztah sám k sobě, samotu, problém najít si správného partnera, problém odejít od nesprávného partnera, vztahy s okolím nebo věcmi, přírodou, cestováním atd.</div>
          </div>
        </div>
      </Section>
      <div style={{background: 'url("/co-se-da-resit.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', margin: '0 -20px', padding: '0 20px'}}>
        <SectionTitle title='Průběh terapie' />
        <ProcessWrapper>
          <ProcessStep>Přicházíte ke mně, pohodlně se usadíte, nabídnu Vám čaj, vodu</ProcessStep>
          <ProcessPipe />
          <ProcessStep>Popovídáme se o tom, s čím ke mně přicházíte, definujeme problém, který chcete řešit. Určíme si cíl terapie, tedy – k čemu má vést a jak se chcete na konci terapie cítit</ProcessStep>
          <ProcessPipe />
          <ProcessStep>Povedu Vás, abyste našli skutečnou příčinu problému (v dětství). Následně ji zpracujeme (přijmeme). Zpracováním příčiny (v dětství) odstraňujeme problémy v současnosti</ProcessStep>
          <ProcessPipe />
          <ProcessStep>Postupně budeme nacházet další příčiny související s problémem a následně je zpracujeme. V průběhu budeme kontrolovat – Vy sami pocítíte, jak nepříjemné pocity rychle mizí</ProcessStep>
          <ProcessPipe />
          <ProcessStep>Na závěr vše ještě jednou zkontrolujeme, cítíte dobře, odlehčeně</ProcessStep>
          <ProcessPipe />
          <ProcessStep>Po pár dnech mi zavoláte – popovídáme si o tom, jak se cítíte. A pokud ještě něco drhne, můžeme to doladit telefonicky anebo při další terapii</ProcessStep>
        </ProcessWrapper>
      </div>
      <div style={{textAlign: 'center'}}>
        <SectionTitle title='O mně' />
        <div style={{margin: '0 auto', width: '600px', height: '400px', background: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Video</div>
        <div style={{textAlign: 'center', padding: '0 10px', lineHeight: '30px', margin: '20px 0', background: '#eee', display: 'inline-block'}}>Vice</div>
      </div>
      <div>
        <SectionTitle title='Jak to u mě vypadá' />
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '300px'}}>
          <Image src='/MISTO-LINA1.jpg' width='33.33%' height='300px' objectFit='cover' />
          <Image src='/MISTO-LINA2.jpg' width='33.33%' height='300px' objectFit='cover' />
          <Image src='/MISTO-LINA3.jpg' width='33.33%' height='300px' objectFit='cover' />
        </div>
      </div>
      <div>
        <SectionTitle title='Recenze' />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '600px', height: '300px', background: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Recenzeeeeeeeeee</div>
        </div>
      </div>
      <div>
        <SectionTitle title='Nejčastější dotazy' />
        <div>
          <div style={{margin: '0 auto', maxWidth: '800px', lineHeight: '60px', padding: '0 30px', border: '1px solid #bbb'}}>sdjflksjdflkjsdflkjsd</div>
          <div style={{margin: '-1px auto 0', maxWidth: '800px', lineHeight: '60px', padding: '0 30px', border: '1px solid #bbb'}}>sdjflksjdflkjsdflkjsd</div>
          <div style={{margin: '-1px auto 0', maxWidth: '800px', lineHeight: '60px', padding: '0 30px', border: '1px solid #bbb'}}>sdjflksjdflkjsdflkjsd</div>
          <div style={{margin: '-1px auto 0', maxWidth: '800px', lineHeight: '60px', padding: '0 30px', border: '1px solid #bbb'}}>sdjflksjdflkjsdflkjsd</div>
          <div style={{margin: '-1px auto 0', maxWidth: '800px', lineHeight: '60px', padding: '0 30px', border: '1px solid #bbb'}}>sdjflksjdflkjsdflkjsd</div>
        </div>
      </div>
      <div>
        <SectionTitle title='Videa od zakladatele metody' />
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '300px', gap: '20px'}}>
          <div style={{background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Video</div>
          <div style={{background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Video</div>
          <div style={{background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Video</div>
        </div>
      </div>
      <div style={{padding: '60px 0 100px'}}>
        <SectionTitle title='Kontakt a cena' />
        <div style={{textAlign: 'center'}}>
          <div>sarka.hulinkova@gmail.com</div>
          <div>123 456 789</div>
          <div>Cena za jedno sezení</div>
          <div>4000 ,-</div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const variables = {};
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {
    // swallow errors related to document creation
  }

  return {
    props: {
      data,
      //myOtherProp: 'some-other-data',
    },
  };
};
