import { createDomainRequest } from 'src/lib/api/createDomainRequest'
import { useAsyncCallback } from 'react-async-hook'

export const useSubmit = () => {
  return useAsyncCallback(createDomainRequest)
}
