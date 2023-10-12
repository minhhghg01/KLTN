import React, { useEffect } from 'react';
import { useAppContext } from '../../contexts/AppContext';
import Default from '../../layouts/Default';
import AddStudent from '../student/AddStudent';

const QLHSAdd = (props) => {
  'use strict';
  const { role } = props;
  const { checkMiddleware } = useAppContext();

  useEffect(() => {
    checkMiddleware(role, () => {});
  }, []);

  return (
    <div>
      <Default>
        <AddStudent />
      </Default>
    </div>
  );
};

export default QLHSAdd;