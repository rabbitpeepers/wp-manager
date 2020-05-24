import { Control, Controller } from 'react-hook-form'
import { FormField, TextInput } from 'grommet'

import { InstanceFormData } from 'src/components/CreateInstance/InstanceFormDataType'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  control: Control<InstanceFormData>
  disabled: boolean
  type?: string
  name: string
  label: string
  validatePattern?: RegExp
  renderError: (name: string, label?: string) => JSX.Element
}

export const CreateInstanceMetaInput: React.FC<Props> = ({
  control,
  disabled,
  type = 'text',
  name,
  label,
  renderError,
  validatePattern,
}) => {
  const { t } = useTranslation()

  return (
    <FormField label={t(`createInstance.${label}`)}>
      <Controller
        as={(
          <TextInput
            type={type}
            value=""
            disabled={disabled}
            placeholder={t(`createInstance.${label}Placeholder`)}
          />
        )}
        name={name}
        control={control}
        defaultValue=""
        rules={{
          required: true,
          pattern: validatePattern
        }}
      />
      {renderError(name, label)}
    </FormField>
  )
}
