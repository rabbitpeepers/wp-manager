import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
} from 'grommet'
import { Secure } from 'grommet-icons'

export const LoginForm: React.FC = () => {
  const { t } = useTranslation()
  const onSubmit = React.useCallback(() => {
    console.log('Submit')
  }, [])

  return (
    <Box background="light-2" elevation="small">
      <Box align="center" background="light-3" pad="small">
        <Secure size="large" />
      </Box>
      <Box pad="medium" align="stretch">
        <Form onSubmit={onSubmit}>
          <FormField label={t('login.username')} margin={{ vertical: 'medium' }}>
            <TextInput name="username" />
          </FormField>
          <FormField label={t('login.password')} margin={{ vertical: 'medium' }}>
            <TextInput name="password" type="password" />
          </FormField>
          <Box align="center">
            <Button primary label={t('login.submit')} />
          </Box>
        </Form>
      </Box>
    </Box>
  )
}
