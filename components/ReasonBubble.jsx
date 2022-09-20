import styled from 'styled-components';

const ReasonBubble = ({reasonTitle, reasonText}) => (
    <Wrapper>
        <Title>{reasonTitle}</Title>
        <div>{reasonText}</div>
    </Wrapper>
)

export default ReasonBubble;

const Wrapper = styled.div`
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

const Title = styled.div`
    margin-bottom: 20px;
    font-family: 'Oooh Baby';
    font-size: 26px;
`