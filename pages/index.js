import { staticRequest } from "tinacms";
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
import Image from 'next/image';
import SectionTitle from "../components/SectionTitle";
import ReasonBubble from "../components/ReasonBubble";
import { 
  BackgroundWrapper, 
  ContentWrapper, 
  GalleryWrapper, 
  ImageWrapper, 
  IntroBackgroundWrapper, 
  IntroSection, 
  MethodContent, 
  MethodWrapper, 
  ProcessPipe, 
  ProcessStep, 
  ProcessWrapper, 
  ReasonsWrapper, 
  ResolutionsWrapper, 
  ResolutionTexts, 
  ResolutionTitles,
} from "../styles/styles";
import Section from "../components/Section";
import { useState } from "react";
import ResolutionTitle from "../components/ResolutionTitle";
import ResolutionText from "../components/ResolutionText";
import { query } from '../content/const';

export default function Page(props) {
  const [activeResolutionIndex, setActiveResolutionIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const [language, setLanguage] = useState('czech');
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query,
    variables: {},
    data: props.data,
  });

  const { introImages } = data.images
  
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
    placeLookTitle,
    reviewsTitle,
    reviews,
    faqTitle,
    faq,
    videosTitle,
    contactTitle,
    email,
    phone,
    price,
  } = data[language];

  return (
    <Layout activeLanguage={language} onLanguageChange={setLanguage}>
      <IntroSection>
        {introImages.map(({introImage}, i) => (
          <IntroBackgroundWrapper key={introImage} index={i} count={introImages.length}>
            <Image src={introImage} layout='fill' objectFit='cover' />
          </IntroBackgroundWrapper>
        ))}
      </IntroSection>
      <Section id='method'>
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
      <Section id='process'>
        <BackgroundWrapper>
          <Image src='/process-bg.jpg' layout='fill' objectFit='cover' />
        </BackgroundWrapper>
        <ContentWrapper>
          <SectionTitle title={processTitle} />
          <ProcessWrapper>
            {processSteps.map(({processStepText}, i) => (
              <>
                <ProcessStep>{processStepText}</ProcessStep>
                {processSteps.length !== i + 1 && <ProcessPipe />}
              </>
            ))}
          </ProcessWrapper>
        </ContentWrapper>
      </Section>
      <Section id='about'>
        <SectionTitle title={aboutTitle} />
        <div style={{margin: '0 auto', width: '600px', height: '400px', background: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Video</div>
        <div style={{textAlign: 'center', padding: '0 10px', lineHeight: '30px', margin: '20px 0', background: '#eee', display: 'inline-block'}}>Vice</div>
      </Section>
      <Section>
        <SectionTitle title={placeLookTitle} />
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
      <Section id='reviews'>
        <BackgroundWrapper>
          <Image src='/reviews-bg.jpg' layout='fill' objectFit='cover' />
        </BackgroundWrapper>
        <ContentWrapper>
          <SectionTitle title={reviewsTitle} />
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: '600px', height: '300px', background: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Recenzeeeeeeeeee</div>
          </div>
        </ContentWrapper>
      </Section>
      <Section id='faq'>
        <SectionTitle title={faqTitle} />
        <div>
          {faq.map(({faqTitle, faqText}, i) => (
            <div>
              <div>{faqTitle}</div>
              <TinaMarkdown content={faqText} />
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <SectionTitle title={videosTitle} />
        <GalleryWrapper>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/JcZ11fyirGU" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/b6MSGcJWn-Y" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/I0sYeI6FnoQ" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </GalleryWrapper>
      </Section>
      <Section id='contact' padding='200px 0'>
        <BackgroundWrapper>
          <Image src='/contact-and-price-bg.jpg' layout='fill' objectFit='cover' />
        </BackgroundWrapper>
        <ContentWrapper>
          <SectionTitle title={contactTitle} />
          <div style={{textAlign: 'center'}}>
            <div>{email}</div>
            <div>{phone}</div>
            <div>Cena za jedno sezení</div>
            <div>{price}</div>
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
