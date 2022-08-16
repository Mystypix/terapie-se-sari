import { staticRequest } from "tinacms";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
import Image from 'next/image';
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import SectionContent from "../components/SectionContent";
import { IntroSection } from "../styles/styles";

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
      <IntroSection>
        <Image src='/intro.jpg' layout='fill' objectFit='cover' objectPosition='center' />
        <h1>Terapie se Sari</h1>
      </IntroSection>
      <Section>
        <SectionTitle title='Co je RUŠ' />
        <div>
          <SectionContent>RUŠ je zkratka pro Rychlá a Účinná změna Skutečnosti. Je metodou vědomé a logické práce s lidským podvědomím.
            Princip metody je velmi jednoduchý. Najdu problém, nazvu ho, přijmu, je pryč :-). Protože však lidé mají různé předpoklady a jsou různě vnímaví ke svým pocitům, vznikl postupně ucelený systém, aby metoda mohla pomoci všem typům lidí.
            Tento ucelený systém – soubor technik pomůže Vám najít skutečnou příčinu Vaších problémů a následně postupně odstranit vše, co Vám znepříjemňuje Váš život.
            Je určená pro každého, kdo se chce cítit lépe a rozhodne se své potíže vyřešit. Metoda RUŠ funguje již řadu let a pomohla již mnoho tisícům lidi zbavit se úplně a trvale jejich problémů. Její výjimečnost tkví v tom, že je velmi rychlá a účinná.
          </SectionContent>
          <SectionContent>
            <div>
              
            </div>
          </SectionContent>
        </div>
      </Section>
      <Section>
        <SectionTitle title='Průběh terapie' />
        <SectionContent>
          <div>Přicházíte ke mně, pohodlně se usadíte, nabídnu Vám čaj, vodu</div>
          <div>Popovídáme se o tom, s čím ke mně přicházíte, definujeme problém, který chcete řešit. Určíme si cíl terapie, tedy – k čemu má vést a jak se chcete na konci terapie cítit</div>
          <div>Povedu Vás, abyste našli skutečnou příčinu problému (v dětství). Následně ji zpracujeme (přijmeme). Zpracováním příčiny (v dětství) odstraňujeme problémy v současnosti</div>
          <div>Postupně budeme nacházet další příčiny související s problémem a následně je zpracujeme. V průběhu budeme kontrolovat – Vy sami pocítíte, jak nepříjemné pocity rychle mizí</div>
          <div>Na závěr vše ještě jednou zkontrolujeme, cítíte dobře, odlehčeně</div>
          <div>Po pár dnech mi zavoláte – popovídáme si o tom, jak se cítíte. A pokud ještě něco drhne, můžeme to doladit telefonicky anebo při další terapii</div>
        </SectionContent>
      </Section>
      <Section>
        <SectionTitle title='O mně'>
          <Image src='/sarka.png' width='300' height='300' />
        </SectionTitle>
        <SectionContent>
          <div>Some text</div>
        </SectionContent>
      </Section>
      <Section>
        <Image />
        Kontakt
      </Section>
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
