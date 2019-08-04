import React from 'react';
import styled from 'styled-components';

import Element from './Element.js';

const ElementDiv = styled.div`
    width: 100%;
    padding: 50px;
    background-color: #328CC1;
`;

const ElementSection = () => {

    return (
        <ElementDiv>
            <Element />
        </ElementDiv>
    );
};

export default ElementSection;