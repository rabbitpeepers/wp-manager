import { Control, Controller } from 'react-hook-form'
import { FormField, Select } from 'grommet'

import { InstanceFormData } from 'src/components/CreateInstance/InstanceFormDataType'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  control: Control<InstanceFormData>
  disabled: boolean
}

const suggestions = ['aa.xx', 'bb.cc', 'dd.yy']

export const CreateInstanceDomain: React.FC<Props> = ({ control, disabled }) => {
  const { t } = useTranslation()

  return (
    <FormField label={t('createInstance.selectDomain')}>
      <Controller
        as={(
          <Select
            options={suggestions}
            placeholder={t('createInstance.selectDomainPlaceholder')}
            value=""
            disabled={disabled}
          />
        )}
        onChange={([e]) => e.value}
        name="domainId"
        defaultValue=""
        control={control}
        rules={{
          required: true,
        }}
      />
    </FormField>
  )
}
