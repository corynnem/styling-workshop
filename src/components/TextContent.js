import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 27vh;
    width: 80vw;
    margin: auto;
    margin-top: 3em;
`

export const Header = styled.h3`
    color: #A27581  
    &:hover { color: black;};
`

const Text = styled.p`
    color: #564962
`


const TextContent = () => {
  return (
    <div>
      <Wrapper>
        <Header>STELLAR QUALITY</Header>
        <Text>Kindling the energy hidden in matter stirred by starlight colonies light years intelligent beings a mote of dust suspended in a sunbeam. The carbon in our apple pies something incredible is waiting to be known brain is the seed of intelligence the sky calls to us made in the interiors of collapsing stars rich in mystery? Gathered by gravity dream of the mind's eye cosmic ocean how far away citizens of distant epochs star stuff harvesting star light.

        Permanence of the stars corpus callosum a billion trillion brain is the seed of intelligence trillion tesseract. A very small stage in a vast cosmic arena rings of Uranus as a patch of light not a sunrise but a galaxyrise invent the universe finite but unbounded. Star stuff harvesting star light are creatures of the cosmos from which we spring vastness is bearable only through love courage of our questions network of wormholes and billions upon billions upon billions upon billions upon billions upon billions upon billions.</Text>
      </Wrapper>
      <Wrapper>
        <Header>EXQUISITE CRAFTSMANSHIP</Header>
        <Text>Kindling the energy hidden in matter stirred by starlight colonies light years intelligent beings a mote of dust suspended in a sunbeam. The carbon in our apple pies something incredible is waiting to be known brain is the seed of intelligence the sky calls to us made in the interiors of collapsing stars rich in mystery? Gathered by gravity dream of the mind's eye cosmic ocean how far away citizens of distant epochs star stuff harvesting star light.

        Permanence of the stars corpus callosum a billion trillion brain is the seed of intelligence trillion tesseract. A very small stage in a vast cosmic arena rings of Uranus as a patch of light not a sunrise but a galaxyrise invent the universe finite but unbounded. Star stuff harvesting star light are creatures of the cosmos from which we spring vastness is bearable only through love courage of our questions network of wormholes and billions upon billions upon billions upon billions upon billions upon billions upon billions.</Text>
      </Wrapper>
    </div>
  )
}

export default TextContent;

