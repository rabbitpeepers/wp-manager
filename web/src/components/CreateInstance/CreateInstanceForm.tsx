import { Box, Button, Form } from 'grommet'

import { CreateInstanceDomain } from 'src/components/CreateInstance/CreateInstanceDomain'
import { CreateInstanceName } from 'src/components/CreateInstance/CreateInstanceName'
import React from 'react'
import { path } from 'src/router/path'
import { useHandleHref } from 'src/components/common/useHandleHref'

export const CreateInstanceForm: React.FC = () => {
  const cancelProps = useHandleHref(path.instances)

  return (
    <Box width="large" background="light-1" pad="large">
      <Form>
        <CreateInstanceName />
        <CreateInstanceDomain />
        <Box margin={{ top: 'medium' }} flex direction="row">
          <Button
            label="Cancel"
            alignSelf="end"
            margin={{ right: 'medium' }}
            onClick={cancelProps.onClick}
            href={cancelProps.href}
          />
          <Button primary label="Create instance" alignSelf="start" />
        </Box>
      </Form>
    </Box>
  )
}
