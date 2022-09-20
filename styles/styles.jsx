import styled from 'styled-components';

export const IntroSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    // animation: introBgChange 8s linear infinite;
    background: url('/1.jpg'); 
    background-size: cover;

    @keyframes introBgChange {
        0% { },
        25% { background: url('/2.jpg'); background-size: cover; },
        50% { background: url('/3.jpg'); background-size: cover; },
        100% { background: url('/4.jpg'); background-size: cover; },
    }
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
`

export const ReasonBubble = styled.div`
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
    border-radius: 50%;
    padding: 30px;
    height: 300px;
    text-align: center;
    background: #eee;
`

export const ReasonBubbleTitle = styled.div`
    margin-bottom: 20px;
    font-family: 'Oooh Baby';
    font-size: 26px;
`

export const MethodWrapper = styled.div`
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
`

export const ProcessWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProcessStep = styled.div`
    position: relative;
    margin-bottom: 10px;
    max-width: 400px;
    text-align: center;
`

export const ProcessPipe = styled.div`
    width: 2px;
    height: 30px;
    background: #aaa;
`