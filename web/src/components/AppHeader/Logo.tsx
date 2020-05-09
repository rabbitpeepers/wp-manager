import React from 'react'
import { Box, Button, Text } from 'grommet'
import { Cli } from 'grommet-icons'
import { useTranslation } from 'react-i18next'

export const Logo: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Box direction="row">
      <Button icon={<Cli />} hoverIndicator />
      <Text alignSelf="center" weight="bold">
        {t('app.name')}
      </Text>
    </Box>
  )
}
