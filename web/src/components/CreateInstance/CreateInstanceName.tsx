import { FormField, TextInput } from 'grommet'

import React from 'react'
import { useTranslation } from 'react-i18next'

export const CreateInstanceName: React.FC = () => {
  const { t } = useTranslation()

  return (
    <FormField label={t('createInstance.selectName')}>
      <TextInput placeholder={t('createInstance.selectNamePlaceholder')} />
    </FormField>
  )
}
