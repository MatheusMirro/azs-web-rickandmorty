import React, { useState } from 'react';
import { Hamburguer } from './styles';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import NavBar from '../index';

function MobileNavigaton() {
  const [open, setOpen] = useState(false);

  const hamburguerIcon = <FaBars onClick={() => setOpen(!open)} />;
  const closeIcon = <AiOutlineClose onClick={() => setOpen(!open)} />;

  return (
    <div>
      <Hamburguer>{open ? closeIcon : hamburguerIcon}</Hamburguer>
      <NavBar />
    </div>
  );
}

export default MobileNavigaton;
