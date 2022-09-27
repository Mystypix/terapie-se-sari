import styled from 'styled-components';

export const IntroBackgroundWrapper = styled.div`
    animation: introBgChange ${(props) => props.count * 4}s linear ${(props) => props.index * 4}s infinite;

    @keyframes introBgChange {
        0% { opacity: 1 },
        75% { opacity: 1 },
        100% { opacity: 0 },
    }
`

export const IntroSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const IntroText = styled.div`
    position: relative;
    z-index: 1;
    margin-bottom: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    text-shadow: 0 1px 3px rgba(255,255,255,.3);
`

export const ReasonsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    max-with: 1439px;
`

export const MethodWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: url('/method.jpg');
    background-attachment: fixed;
    background-size: cover;
`

export const MethodContent = styled.div`
    padding: 60px;
    max-width: 600px;
    text-align: center;
    background: #fff;
    box-shadow: 0 3px 10px 0 #fff;
`

export const ProcessWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProcessStep = styled.div`
    position: relative;
    max-width: 400px;
    text-align: center;
`

export const ProcessPipe = styled.div`
    position: relative;
    margin: 10px 0;
    border: 1px dashed #666;
    width: 0;
    height: 50px;
`

export const ResolutionsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    max-width: 800px;
`

export const ResolutionTitles = styled.div`
    position: relative;
    z-index: 1;
`

export const ResolutionTexts = styled.div`
    position: relative;
`

export const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 300px;
    gap: 20px;
    padding: 0 30px;
`

export const ImageWrapper = styled.div`
    position: relative;
`

export const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const ContentWrapper = styled.div`
    position: relative;
    z-index: 1;
`

export const AboutVideoWrapper = styled.div`
    margin: 0 auto 30px;
    width: 800px;
    height: 550px;
`

export const AboutButton = styled.button`
    display: block;
    margin: 0 auto;
    border: 0;
    padding: 0 20px;
    font-size: 20px;
    line-height: 40px;
    background: #9cd3d7;
    cursor: pointer;
`

export const ReviewWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 600px;
    padding: 20px;
    background: #eee;
`

export const ReviewContent = styled.div`
    display: inline-block;
`

export const ReviewName = styled.p`
    margin-top: 10px;
    font-size: 16px;
    text-align: right;
`

export const FaqWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 800px;
`

export const FaqTitle = styled.div`
    margin-top: -1px;
    border: 1px solid #eee;
    padding: 20px;
    background: ${(props) => props.active ? '#eee' : '#fff'};
    cursor: ${(props) => props.active ? 'default' : 'active'};
    transition: background .25s;

    &:hover {
        background: #eee;
    }
`

export const FaqContent = styled.div`
    border: 1px solid #eee;
    padding: 20px;
    opacity: ${(props) => props.active ? '1' : '0'};
    max-height: ${(props) => props.active ? '1000px' : '0'};
    pointer-events: ${(props) => props.active ? 'all' : 'none'};
`

export const ContactTable = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    * {
        font-size: 18px;
    }
`

export const ContactLabel = styled.div`
    text-align: right;
`