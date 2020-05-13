import * as Icons from 'grommet-icons'

import {
  Button,
  Nav,
} from 'grommet'
import {
  makeRoute,
  path,
} from 'src/router/path'

import React from 'react'
import { SidebarButton } from 'src/components/AppSidebar/SidebarButton'
import { useMe } from 'src/context/hook/useMe'
import { useTranslation } from 'react-i18next'

export const AppNavigation: React.FC = () => {
  const me = useMe()
  const { t } = useTranslation()

  if (!me?.role) {
    return null
  }

  return (
    <Nav gap="small">
      <SidebarButton
        icon={<Icons.Dashboard />}
        label={t('menu.dashboard')}
        href={makeRoute(path.dashboard)}
        hoverIndicator
      />
      <SidebarButton
        icon={<Icons.Nodes />}
        label={t('menu.instances')}
        href={makeRoute(path.instances)}
        hoverIndicator
      />
      <SidebarButton
        icon={<Icons.Domain />}
        label={t('menu.domains')}
        href={makeRoute(path.domains)}
        hoverIndicator
      />
    </Nav>
  )
}
