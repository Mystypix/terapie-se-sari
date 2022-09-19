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

export const IntroName = styled.div`
    font-size: 40px;
    font-family: 'Norican', cursive;
`

export const IntroHeadline = styled.h1`
    font-size: 60px;
    font-family: 'Norican', cursive;
`

export const ProfileImage = styled.div`
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
`

export const ProcessSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);
    padding: 30px;
    width: 50vw;
    background: url('/process-bg.svg');
    background-size: cover;
    background-color: yellow;
    text-align: center;
`

export const ProcessStepText = styled.div`
    position: relative;
    margin: 30px 0;
    padding: 10px 0;
    max-width: 400px;
    text-align: center;

    &:not(:first-child) {
        &:before,
        &:after {
            content: '';
            position: absolute;
            left: 50%;
            transfrom: translateX(-50%);
            width: 2px;
            height: 30px;
            background: #aaa;
            text-align: center;
        }

        &:before {
            bottom: 100%;
        }

        &:after {
            top: 100%;
        }
    }
`

export const ProcessStepImageWrapper = styled.div`
    position: relative;
`