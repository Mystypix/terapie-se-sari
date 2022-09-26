import styled from "styled-components";

const SectionTransition = ({position}) => (
    <Wrapper position={position} />
);

export default SectionTransition;

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    top: ${(props) => props.position === 'top' ? 'unset' : 'calc(100% - 15px)'};
    bottom: ${(props) => props.position === 'top' ? 'calc(100% - 15px)' : 'unset'};
    z-index: 1;
    width: 100%;
    height: 15px;
    background: ${(props) => props.position === 'top' ? 'linear-gradient(#fff, rgba(255,255,255,0))' : 'linear-gradient(rgba(255,255,255,0), #fff)'};
`