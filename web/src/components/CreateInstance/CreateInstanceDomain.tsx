import { FormField, Select } from 'grommet'

import React from 'react'

const suggestions = ['xxx.com', 'yyy.eu', 'site.name']

export const CreateInstanceDomain: React.FC = () => {
  return (
    <FormField label="Select domain">
      <Select placeholder="Select domain" options={suggestions} />
    </FormField>
  )
}
