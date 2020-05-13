import * as Icons from 'grommet-icons'

import {
  makeRoute,
  path,
} from 'src/router/path'

import { AppNavigation } from 'src/components/AppSidebar/AppNavigation'
import React from 'react'
import { Sidebar } from 'grommet'
import { SidebarButton } from 'src/components/AppSidebar/SidebarButton'
import { UserAvatar } from 'src/components/AppSidebar/UserAvatar'
import { useMe } from 'src/context/hook/useMe'
import { useTranslation } from 'react-i18next'

export const AppSidebar: React.FC = () => {
  const me = useMe()
  const { t } = useTranslation()

  if (!me?.role) {
    return null
  }

  return (
    <Sidebar
      background="neutral-3"
      width="small"
      flex="shrink"
      header={<UserAvatar />}
      footer={(
        <SidebarButton
          icon={<Icons.Help />}
          href={makeRoute(path.about)}
          label={t('menu.about')}
          hoverIndicator
        />
      )}
      border={{ side: 'right', size: 'small', color: 'rgba(0, 0, 0, .35)' }}
    >
      <AppNavigation />
    </Sidebar>
  )
}
