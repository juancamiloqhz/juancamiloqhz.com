import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { GlobalProvider } from './GlobalProvider';

function ProviderComposer({ contexts, children }) {
  return contexts.reduceRight(
    (kids, parent) => cloneElement(parent, { children: kids }),
    children
  );
}

export function ContextProvider({ children }) {
  return (
    <ProviderComposer contexts={[<GlobalProvider key="globalProvider" />]}>
      {children}
    </ProviderComposer>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
