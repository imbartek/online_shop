import React from 'react';
import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Container = styled.div`
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
`

const Ring = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #000;
    border-radius: 50%;
    animation: ${Spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000 transparent transparent transparent;

    &:nth-child(1) {
        animation-delay: -0.45s;
    }
    &:nth-child(2) {
        animation-delay: -0.3s;
    }
    &:nth-child(3) {
        animation-delay: -0.15s;
    }
`

const Loading = () => {
    return (
        <div>
            <Container>
                <Ring />
                <Ring />
                <Ring />
            </Container>
        </div>
    );
}

export default Loading;
