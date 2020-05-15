import { FormField, TextInput } from 'grommet'

import React from 'react'

export const CreateInstanceName: React.FC = () => {
  return (
    <FormField label="Sub domain name">
      <TextInput placeholder="subdomain" />
    </FormField>
  )
}
