/* eslint-disable jsx-a11y/iframe-has-title */
/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';

import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import config from '@plone/volto/registry';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => {
  const { settings } = config;
  const lang = useSelector((state) => state.intl.locale);

  return (
    <Segment role="contentinfo" vertical textAlign="center" id="footer" style={{ backgroundColor:'#2b2d3c' , marginTop: '-2px'}}>
      <Container>
        <Segment
          basic
          className="discreet"
          style={{ color: 'white' , fontSize: '14px'}}
        >
          <FormattedMessage
            id="Denver Mesh {copyright} {current_year} is licensed under CC BY-SA 4.0."
            defaultMessage="Colorado Mesh {copyright} 2024 is licensed under CC BY-SA 4.0. "
            values={{
              dot: <span>&middot;</span>,
              copyright: <span>&copy;</span>,
              current_year: new Date().getFullYear(),
            }}
          />{' '}
          <br />
        </Segment>
        <List horizontal inverted>
          {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
          <div role="listitem" className="item" style={{color: 'green', fontSize: '14px'}}>
            <UniversalLink
              className="item"
              href={settings.isMultilingual ? `/${lang}/license` : '/license'}
            >
              <FormattedMessage
                id="License Information"
                defaultMessage="License Information"
                style={{color: 'green'}}
              />
            </UniversalLink>
          </div>
        </List>
      </Container>
    </Segment>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
