/* eslint-disable import/export */
import React from 'react'
import PropTypes from 'prop-types'
import { render } from '@testing-library/react'
import LunaAppProvider from '@luna/react/dist/components/luna-app-provider'

function AppProviderWrapper ({ children }) {
  return (
    <LunaAppProvider appname='TestUtils'>
      {children}
    </LunaAppProvider>
  )
}

AppProviderWrapper.propTypes = {
  children: PropTypes.node
}

function customRender (ui, options) {
  return render(ui, { wrapper: AppProviderWrapper, ...options })
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
