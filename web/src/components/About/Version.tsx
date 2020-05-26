import { Text, TextProps } from 'grommet'

import React from 'react'
import { settings } from 'src/settings/settings'
import { useTranslation } from 'react-i18next'

export const Version: React.FC<TextProps> = (props) => {
  const { t } = useTranslation()

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Text {...props}>
        {`${t('about.version')} `}
        <b>
          <code>
            {settings.version}
          </code>
        </b>
      </Text>
    </>
  )
}
