import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

import { Wrapper, GoBackButton, StyledTitle, Card, Text, CharactersWrapper, Character } from './styles';

const Episode = ({ episode }) => {
  const { id, name, air_date, episode: episodeCode, characters } = episode;

  const goBack = () => {
    window.history.back();
  };

  const renderCharacters = () => {
    return characters.map((character, key) => (
      <Link href={`/character/${character.id}`} key={key}>
        <Character>{character.name}</Character>
      </Link>
    ));
  };

  return (
    <Wrapper>
      <Card>
        <GoBackButton>
          <IoMdArrowBack onClick={goBack} />
        </GoBackButton>
        <StyledTitle>
          {episodeCode} - {name}
        </StyledTitle>
        <Text>
          <b>Number:</b> {id}
        </Text>
        <Text>
          <b>Release date of:</b> {air_date}
        </Text>
        <Text>
          <b>Characters</b>
        </Text>
        <CharactersWrapper>{renderCharacters()}</CharactersWrapper>
      </Card>
    </Wrapper>
  );
};

Episode.propTypes = {
  episode: PropTypes.object,
};

export default Episode;
