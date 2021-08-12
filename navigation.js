import PropTypes from 'prop-types';
import React from 'react';

//generowanie linków navigacji do strony
const Navigation = props => {
  return (
    <div>
      <ul>
        {props &&
          props.map(link => {
            <li>
              <Link to={link.linkPath}>{link.linkName}</Link>
            </li>;
          })}
      </ul>
    </div>
  );
};

// Navigation.proptypes = {
//   links: PropTypes.exact({
//     linkPath: PropTypes.string,
//     linkName: PropTypes.string
//   })
// };

export default Navigation;
