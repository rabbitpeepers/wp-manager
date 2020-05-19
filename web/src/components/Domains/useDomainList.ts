import { domainListRequest } from 'src/lib/api/domainListRequest'
import { useAsync } from 'react-async-hook'

export const useDomainList = () => {
  return useAsync(domainListRequest, [])
}
