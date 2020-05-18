import { Control, Controller } from 'react-hook-form'
import { FormField, TextInput } from 'grommet'

import { DomainFormData } from 'src/components/CreateDomain/DomainFormDataType'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  control: Control<DomainFormData>
  disabled: boolean
}

export const CreateDomainName: React.FC<Props> = ({ control, disabled }) => {
  const { t } = useTranslation()

  return (
    <FormField label={t('createDomain.selectName')}>
      <Controller
        as={<TextInput value="" disabled={disabled} placeholder={t('createDomain.selectNamePlaceholder')} />}
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
