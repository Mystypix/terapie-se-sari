import { staticRequest } from "tinacms";
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/edit-state";
import Image from 'next/image';
import SectionTitle from "../components/SectionTitle";
import ReasonBubble from "../components/ReasonBubble";
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import { 
  AboutButton,
  AboutVideoWrapper,
  BackgroundWrapper, 
  ContactLabel, 
  ContactTable, 
  ContentWrapper, 
  FaqContent, 
  FaqTitle, 
  FaqWrapper, 
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
  ReviewContent,
  ReviewName,
  ReviewsWrapper,
  ReviewWrapper,
} from "../styles/styles";
import Section from "../components/Section";
import { useState } from "react";
import ResolutionTitle from "../components/ResolutionTitle";
import ResolutionText from "../components/ResolutionText";
import { query } from '../content/const';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTransition from "../components/SectionTransition";

export default function Page(props) {
  const [activeResolutionIndex, setActiveResolutionIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(-1);
  const [language, setLanguage] = useState('czech');
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
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
            <Image src={introImage} layout='fill' objectFit='cover' priority />
          </IntroBackgroundWrapper>
        ))}
        <SectionTransition />
      </IntroSection>
      <Section id='method'>
        <SectionTitle title={reasonsTitle} />
        <ReasonsWrapper>
          {reasons.map((reason) => <ReasonBubble key={reason.title} {...reason} />)}
        </ReasonsWrapper>
      </Section>
      <MethodWrapper>
        <SectionTransition position='top' />
        <MethodContent>
          <SectionTitle title={methodTitle} />
          <TinaMarkdown content={methodText} />
        </MethodContent>
        <SectionTransition />
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
        <SectionTransition position='top' />
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
        <SectionTransition />
      </Section>
      <Section id='about'>
        <SectionTitle title={aboutTitle} />
        <AboutVideoWrapper>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aR-KAldshAE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </AboutVideoWrapper>
        <AboutButton onClick={() => setIsAboutModalOpen(true)}>Více</AboutButton>
        <Modal
          isOpen={isAboutModalOpen}
          onRequestClose={() => setIsAboutModalOpen(false)}
          preventScroll
          // style={customStyles}
        >
          <TinaMarkdown>{aboutText}</TinaMarkdown>
        </Modal>
      </Section>
      <Section background='#dfecff'>
        <SectionTransition position='top' />
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
        <SectionTransition />
      </Section>
      <Section id='reviews'>
        <SectionTitle title={reviewsTitle} />
        <ReviewsWrapper>
          <Carousel showThumbs={false} infiniteLoop showStatus={false} dynamicHeight>
            {reviews.map(({reviewName, reviewText}) => (
              <ReviewWrapper>
                <ReviewContent>
                  <TinaMarkdown content={reviewText} />
                  <ReviewName>{reviewName}</ReviewName>
                </ReviewContent>
              </ReviewWrapper>
            ))}
          </Carousel>
        </ReviewsWrapper>
      </Section>
      <Section id='faq' background='#dffff3'>
        <SectionTransition position='top' />
        <ContentWrapper>
          <SectionTitle title={faqTitle} />
          <FaqWrapper>
            {faq.map(({faqTitle, faqText}, i) => (
              <>
                <FaqTitle active={i === activeFaqIndex} onClick={() => setActiveFaqIndex(i)}>{faqTitle}</FaqTitle>
                <FaqContent active={i === activeFaqIndex}><TinaMarkdown content={faqText} /></FaqContent>
              </>
            ))}
          </FaqWrapper>
        </ContentWrapper>
        <SectionTransition />
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
        <SectionTransition position='top' />
        <BackgroundWrapper>
          <Image src='/contact-and-price-bg.jpg' layout='fill' objectFit='cover' />
        </BackgroundWrapper>
        <ContentWrapper>
          <SectionTitle title={contactTitle} />
          <ContactTable>
            <ContactLabel>Email: </ContactLabel>
            <a href={`mailto:${email}`}>{email}</a>
            <ContactLabel>Telefon: </ContactLabel>
            <a href={`tel:${phone}`}>{phone}</a>
            <ContactLabel>Cena za jedno sezení: </ContactLabel>
            <span>{price}</span>
          </ContactTable>
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
