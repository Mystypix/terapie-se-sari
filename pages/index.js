import { staticRequest } from "tinacms";
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
import Image from 'next/image';
import SectionTitle from "../components/SectionTitle";
import ReasonBubble from "../components/ReasonBubble";
import { BackgroundWrapper, ContentWrapper, GalleryWrapper, ImageWrapper, IntroSection, MethodContent, MethodWrapper, ProcessPipe, ProcessStep, ProcessWrapper, ReasonsWrapper, ResolutionsWrapper, ResolutionTexts, ResolutionTitles, VideosWrapper } from "../styles/styles";
import Section from "../components/Section";
import { useState } from "react";
import ResolutionTitle from "../components/ResolutionTitle";
import ResolutionText from "../components/ResolutionText";

const query = `{
  czech(relativePath: "page.mdx"){
    reasonsTitle,
    reasons {
      reasonTitle,
      reasonText,
    },
    methodTitle,
    methodText,
    resolutionTitle,
    resolutions {
      resolutionTitle,
      resolutionText
    },
    processTitle,
    processSteps {
      processStepText
    },
    aboutTitle,
    aboutText,
    reviewsTitle,
    reviews {
      reviewName,
      reviewText
    }
  },
  english(relativePath: "page.mdx"){
    reasonsTitle,
    reasons {
      reasonTitle,
      reasonText,
    },
    methodTitle,
    methodText,
    resolutionTitle,
    resolutions {
      resolutionTitle,
      resolutionText
    },
    processTitle,
    processSteps {
      processStepText
    },
    aboutTitle,
    aboutText,
    reviewsTitle,
    reviews {
      reviewName,
      reviewText
    }
  }
}`;

export default function Page(props) {
  const [activeResolutionIndex, setActiveResolutionIndex] = useState(0);
  const [language, setLanguage] = useState('czech');
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });
  
  const {
    reasonsTitle, 
    reasons,
    methodTitle,
    methodText,
    resolutionTitle,
    resolutions,
    processTitle,
    processSteps,
    aboutTitle,
    aboutText,
    reviewsTitle,
    reviews
  } = data[language];

  return (
    <Layout activeLanguage={language} onLanguageChange={setLanguage}>
      <IntroSection></IntroSection>
      <Section>
        <SectionTitle title={reasonsTitle} />
        <ReasonsWrapper>
          {reasons.map((reason) => <ReasonBubble key={reason.title} {...reason} />)}
        </ReasonsWrapper>
      </Section>
      <MethodWrapper>
        <MethodContent>
          <SectionTitle title={methodTitle} />
          <TinaMarkdown content={methodText} />
        </MethodContent>
      </MethodWrapper>
      <Section>
        <SectionTitle title={resolutionTitle} />
        <ResolutionsWrapper>
          <ResolutionTitles>
            {resolutions.map(({resolutionTitle}, i) => <ResolutionTitle key={resolutionTitle} onClick={() => setActiveResolutionIndex(i)} title={resolutionTitle} active={activeResolutionIndex === i} />)}
          </ResolutionTitles>
          <ResolutionTexts>
            {resolutions.map(({resolutionText}, i) => <ResolutionText key={`resolutionText-${i}`} text={resolutionText} active={activeResolutionIndex === i} />)}
          </ResolutionTexts>
        </ResolutionsWrapper>
      </Section>
      <Section>
        <SectionTitle title={processTitle} />
        <ProcessWrapper>
          {processSteps.map(({processStepText}, i) => (
            <>
              <ProcessStep>{processStepText}</ProcessStep>
              {processSteps.length !== i + 1 && <ProcessPipe />}
            </>
          ))}
        </ProcessWrapper>
      </Section>
      <Section>
        <SectionTitle title={aboutTitle} />
        <div style={{margin: '0 auto', width: '600px', height: '400px', background: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Video</div>
        <div style={{textAlign: 'center', padding: '0 10px', lineHeight: '30px', margin: '20px 0', background: '#eee', display: 'inline-block'}}>Vice</div>
      </Section>
      <Section>
        <SectionTitle title='Jak to u mě vypadá' />
        <GalleryWrapper>
          <ImageWrapper>
            <Image src='/look-01.jpg' layout='fill' objectFit='cover' />
          </ImageWrapper>
          <ImageWrapper>
            <Image src='/look-02.jpg' layout='fill' objectFit='cover' />
          </ImageWrapper>
          <ImageWrapper>
            <Image src='/look-03.jpg' layout='fill' objectFit='cover' />
          </ImageWrapper>
        </GalleryWrapper>
      </Section>
      <Section>
        <SectionTitle title={reviewsTitle} />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{width: '600px', height: '300px', background: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Recenzeeeeeeeeee</div>
        </div>
      </Section>
      <Section>
        <SectionTitle title='Nejčastější dotazy' />
        <div>
          <div style={{margin: '0 auto', maxWidth: '800px', lineHeight: '60px', padding: '0 30px', border: '1px solid #bbb'}}>sdjflksjdflkjsdflkjsd</div>
          <div style={{margin: '-1px auto 0', maxWidth: '800px', lineHeight: '60px', padding: '0 30px', border: '1px solid #bbb'}}>sdjflksjdflkjsdflkjsd</div>
          <div style={{margin: '-1px auto 0', maxWidth: '800px', lineHeight: '60px', padding: '0 30px', border: '1px solid #bbb'}}>sdjflksjdflkjsdflkjsd</div>
          <div style={{margin: '-1px auto 0', maxWidth: '800px', lineHeight: '60px', padding: '0 30px', border: '1px solid #bbb'}}>sdjflksjdflkjsdflkjsd</div>
          <div style={{margin: '-1px auto 0', maxWidth: '800px', lineHeight: '60px', padding: '0 30px', border: '1px solid #bbb'}}>sdjflksjdflkjsdflkjsd</div>
        </div>
      </Section>
      <Section>
        <SectionTitle title='Videa od zakladatele metody' />
        <GalleryWrapper>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JcZ11fyirGU" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/b6MSGcJWn-Y" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/I0sYeI6FnoQ" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </GalleryWrapper>
      </Section>
      <Section>
        <BackgroundWrapper>
          <Image src='/contact-and-price-bg.jpg' layout='fill' objectFit='cover' />
        </BackgroundWrapper>
        <ContentWrapper>
          <SectionTitle title='Kontakt a cena' />
          <div style={{textAlign: 'center'}}>
            <div>sarka.hulinkova@gmail.com</div>
            <div>123 456 789</div>
            <div>Cena za jedno sezení</div>
            <div>4000 ,-</div>
          </div>
        </ContentWrapper>
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
