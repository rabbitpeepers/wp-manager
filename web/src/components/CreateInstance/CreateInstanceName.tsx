import { Control, Controller } from 'react-hook-form'
import { FormField, TextInput } from 'grommet'

import { InstanceFormData } from 'src/components/CreateInstance/InstanceFormDataType'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  control: Control<InstanceFormData>
  disabled: boolean
}

export const CreateInstanceName: React.FC<Props> = ({ control, disabled }) => {
  const { t } = useTranslation()

  return (
    <FormField label={t('createInstance.selectName')}>
      <Controller
        as={<TextInput value="" disabled={disabled} placeholder={t('createInstance.selectNamePlaceholder')} />}
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: true,
        }}
      />
    </FormField>
  )
}
