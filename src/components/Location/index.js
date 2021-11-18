import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

import { Wrapper, StyledTitle, GoBackButton, Card, Text, CharactersWrapper, Character } from './styles';

const Location = ({ location }) => {
  const { id, name, type, dimension, residents } = location;

  const renderResidents = () => {
    return residents.map((character, key) => (
      <Link href={`/character/${character.id}`} key={key}>
        <Character>{character.name}</Character>
      </Link>
    ));
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <Wrapper>
      <Card>
        <GoBackButton>
          <IoMdArrowBack onClick={goBack} />
        </GoBackButton>
        <StyledTitle>{name}</StyledTitle>
        <Text>
          <b>ID:</b> {id}
        </Text>
        <Text>
          <b>Type:</b> {type}
        </Text>
        <Text>
          <b>Dimension:</b> {dimension}
        </Text>
        <Text>
          <b>Residents:</b>
        </Text>
        <CharactersWrapper>{renderResidents()}</CharactersWrapper>
      </Card>
    </Wrapper>
  );
};

Location.propTypes = {
  location: PropTypes.object,
};

export default Location;
