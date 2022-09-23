export const query = `{
    images(relativePath: "page.mdx"){
      introImages {
        introImage
      }
    },
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
      placeLookTitle,
      reviewsTitle,
      reviews {
        reviewName,
        reviewText
      },
      faqTitle,
      faq {
        faqTitle,
        faqText
      },
      videosTitle,
      contactTitle,
      email,
      phone,
      price
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
      },
      faqTitle,
      faq {
        faqTitle,
        faqText
      }
      videosTitle,
      contactTitle,
      email,
      phone,
      price
    }
}`;

export const navigationItemsConfig = [
    {
        czech: 'Metoda RUŠ',
        english: 'RUŠ Method',
        id: '#method',
    },
    {
        czech: 'Průběh terapie',
        english: 'Process of Therapy',
        id: '#process',
    },
    {
        czech: 'O mně',
        english: 'About Me',
        id: '#about',
    },
    {
        czech: 'Recenze',
        english: 'Reviews',
        id: '#reviews',
    },
    {
        czech: 'Nejčastější dotazy',
        english: 'FAQ',
        id: '#faq',
    },
    {
        czech: 'Kontakt a cena',
        english: 'Contact and Price',
        id: '#contact',
    }
]