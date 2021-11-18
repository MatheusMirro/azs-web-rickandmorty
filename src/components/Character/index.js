import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

import { Wrapper, GoBackButton, Image, StyledTitle, StyledLink, Card, Text, EpisodesWrapper, Episode } from './styles';

const Character = ({ character }) => {
  const { id, name, type, image, status, gender, origin, species, episode, location } = character;

  const renderType = () => {
    if (type) {
      return (
        <Text>
          <b>Type:</b> {type}
        </Text>
      );
    }

    return null;
  };

  const goBack = () => {
    window.history.back();
  };

  const renderEpisodes = () => {
    return episode.map((ep, key) => (
      <Link href={`/episode/${ep.id}`} key={key}>
        <Episode>{ep.name}</Episode>
      </Link>
    ));
  };

  return (
    <Wrapper>
      <Card>
        <GoBackButton>
          <IoMdArrowBack onClick={goBack} />
        </GoBackButton>
        <StyledTitle>{name}</StyledTitle>
        <Image src={image} alt="character" />
        <Text>
          <b>Number:</b> {id}
        </Text>
        {renderType()}
        <Text>
          <b>Status:</b> {status}
        </Text>
        <Text>
          <b>Gender:</b> {gender}
        </Text>
        <Link href={`/location/${origin.id}`}>
          <Text>
            <b>Origin:</b> <StyledLink>{origin.name}</StyledLink>
          </Text>
        </Link>
        <Text>
          <b>Species:</b> {species}
        </Text>
        <Link href={`/location/${location.id}`}>
          <Text>
            <b>Last known location:</b> <StyledLink>{location.name}</StyledLink>
          </Text>
        </Link>
        <Text>
          <b>Episodes</b>
        </Text>
        <EpisodesWrapper>{renderEpisodes()}</EpisodesWrapper>
      </Card>
    </Wrapper>
  );
};

Character.propTypes = {
  character: PropTypes.object,
};

export default Character;
