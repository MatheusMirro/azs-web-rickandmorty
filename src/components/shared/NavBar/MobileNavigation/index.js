import React, { useState } from 'react';
import { Hamburguer } from './styles';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import NavLinks from '../NavLinks';

function MobileNavigaton() {
  const [open, setOpen] = useState(false);

  const hamburguerIcon = <FaBars onClick={() => setOpen(!open)} />;
  const closeIcon = <AiOutlineClose onClick={() => setOpen(!open)} />;

  return (
    <div>
      <Hamburguer>
        {open ? closeIcon : hamburguerIcon}
        {open && <NavLinks />}
      </Hamburguer>
    </div>
  );
}

export default MobileNavigaton;
