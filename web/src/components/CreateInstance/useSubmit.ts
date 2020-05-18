import { createInstanceRequest } from 'src/lib/api/createInstanceRequest'
import { useAsyncCallback } from 'react-async-hook'

export const useSubmit = () => {
  return useAsyncCallback(createInstanceRequest)
}
