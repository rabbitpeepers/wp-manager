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
import { LoginFormStatusMessage } from 'src/components/LoginPage/LoginFormStatusMessage'

type FormData = {
  username: string
  password: string
}

export const LoginForm: React.FC = () => {
  const { t } = useTranslation()
  const [value, setValue] = React.useState<FormData>({
    password: '',
    username: '',
  })

  const handleSubmit = React.useCallback(() => {
    console.log('Submit')
  }, [])
  const handleChange = React.useCallback((nextValue) => setValue(nextValue), [setValue])

  return (
    <Box background="light-2" elevation="small">
      <Box align="center" background="light-3" pad="small">
        <Secure size="large" />
      </Box>
      <Box pad="medium" align="stretch">
        <LoginFormStatusMessage />
        <Form onSubmit={handleSubmit} onChange={handleChange} value={value}>
          <FormField label={t('login.username')} margin={{ vertical: 'medium' }}>
            <TextInput required name="username" />
          </FormField>
          <FormField
            label={t('login.password')}
            margin={{ vertical: 'medium' }}
            required
          >
            <TextInput name="password" type="password" />
          </FormField>
          <Box align="center">
            <Button type="submit" primary label={t('login.submit')} />
          </Box>
        </Form>
      </Box>
    </Box>
  )
}
