import { FormField, Select } from 'grommet'

import React from 'react'
import { useTranslation } from 'react-i18next'

const suggestions = ['xxx.com', 'yyy.eu', 'site.name']

export const CreateInstanceDomain: React.FC = () => {
  const { t } = useTranslation()

  return (
    <FormField label={t('createInstance.selectDomain')}>
      <Select placeholder={t('createInstance.selectDomainPlaceholder')} options={suggestions} />
    </FormField>
  )
}
