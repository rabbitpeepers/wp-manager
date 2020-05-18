import { Alert, AlertSeverity } from 'src/components/Alert/Alert'
import {
  Box,
  Button,
  Form,
  Text,
} from 'grommet'
import { ErrorMessage, useForm } from 'react-hook-form'

import { CreateDomainName } from 'src/components/CreateDomain/CreateDomainName'
import { DomainFormData } from 'src/components/CreateDomain/DomainFormDataType'
import React from 'react'
import { path } from 'src/router/path'
import { useAuthorizationErrorEffect } from 'src/lib/useAuthorizationErrorEffect'
import { useHandleHref } from 'src/components/common/useHandleHref'
import { useSubmit } from 'src/components/CreateDomain/useSubmit'
import { useTranslation } from 'react-i18next'

export const CreateDomainForm: React.FC = () => {
  const cancelProps = useHandleHref(path.domains)
  const { control, handleSubmit, errors } = useForm<DomainFormData>()
  const { t } = useTranslation()
  const { execute, loading, error } = useSubmit()

  const onSubmit = React.useCallback((data: DomainFormData) => {
    execute(data)
  }, [execute])

  // Handle 401
  useAuthorizationErrorEffect(error)

  return (
    <Box width="large" background="light-1" pad="large">
      {error ? (
        <Alert severity={AlertSeverity.ERROR}>
          {error.message}
        </Alert>
      ) : null}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CreateDomainName disabled={loading} control={control} />
        <ErrorMessage errors={errors} name="name" message={t('createDomain.errors.name')} />
        <Box margin={{ top: 'medium' }} flex direction="row">
          <Button
            label={t('app.cancel')}
            alignSelf="end"
            margin={{ right: 'medium' }}
            onClick={cancelProps.onClick}
            disabled={loading}
            href={cancelProps.href}
          />
          <Button
            type="submit"
            label={t('createDomain.submit')}
            alignSelf="start"
            disabled={loading}
            primary
          />
          {loading ? (
            <Text alignSelf="center" margin={{ left: 'small' }} color="status-unknown">
              {t('app.loading')}
            </Text>
          ) : null}
        </Box>
      </Form>
    </Box>
  )
}
