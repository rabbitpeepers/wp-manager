import { domainListRequest } from 'src/lib/api/domainListRequest'
import { useAsync } from 'react-async-hook'

export const useDomainList = (activeOnly = true) => {
  return useAsync(() => domainListRequest(activeOnly), [])
}
