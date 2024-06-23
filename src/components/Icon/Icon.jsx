import React from 'react';
import Facbook from './Facebook';
import Instagram from './Instagram';
import Twitter from './Twitter';

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case 'facebook':
      return <Facbook {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    default:
      return <Div />;
  }
};

export default Icon;
