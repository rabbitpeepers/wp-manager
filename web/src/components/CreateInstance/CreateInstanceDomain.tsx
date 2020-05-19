import { Alert, AlertSeverity } from 'src/components/Alert/Alert'
import { Control, Controller } from 'react-hook-form'
import { FormField, Select, Text } from 'grommet'

import { InstanceFormData } from 'src/components/CreateInstance/InstanceFormDataType'
import React from 'react'
import { useAuthorizationErrorEffect } from 'src/lib/useAuthorizationErrorEffect'
import { useDomainList } from 'src/components/Domains/useDomainList'
import { useTranslation } from 'react-i18next'

type Props = {
  control: Control<InstanceFormData>
  disabled: boolean
}

export const CreateInstanceDomain: React.FC<Props> = ({ control, disabled }) => {
  const { t } = useTranslation()
  const { result, loading, error } = useDomainList(true)

  // Handle 401
  useAuthorizationErrorEffect(error)

  if (error) {
    return (
      <Alert severity={AlertSeverity.ERROR}>
        {(error && error.message) || t('app.unknownError')}
      </Alert>
    )
  }

  if (loading) {
    return (
      <Text color="status-unknown">
        {t('app.loading')}
      </Text>
    )
  }

  if (!result?.length) {
    return (
      <Alert severity={AlertSeverity.WARNING}>
        {t('createInstance.noDomains')}
      </Alert>
    )
  }

  return (
    <FormField label={t('createInstance.selectDomain')}>
      <Controller
        as={(
          <Select
            options={result}
            placeholder={t('createInstance.selectDomainPlaceholder')}
            value=""
            labelKey="name"
            valueKey="id"
            disabled={disabled}
          />
        )}
        onChange={([e]) => e.value}
        name="domain"
        defaultValue=""
        control={control}
        rules={{
          required: true,
        }}
      />
    </FormField>
  )
}
