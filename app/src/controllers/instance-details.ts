import { Instance } from 'models/Instance'
import { DomainTask } from 'models/DomainTask'
import { InstanceDetailsResponse } from 'types/API'

export const instanceDetails = async (id: string): Promise<InstanceDetailsResponse> => {
  const [instance, tasks] = await Promise.all([
    Instance.findById(id),
    DomainTask.find({
      instanceId: id
    }).sort({ createdAt: 'desc' })
  ])

  return {
    instance: {
      id: instance.id,
      subdomain: instance.subdomain,
      domain: instance.domain,
      domainId: instance.domainId,
      status: instance.status,
      createdAt: instance.createdAt,
      owner: instance.owner,
      meta: instance.meta,
    },
    tasks: tasks.map(i => ({
      id: i.id,
      status: i.status,
      createdAt: i.createdAt,
      startedAt: i.startedAt,
      logs: i.logs,
      instanceId: id,
    }))
  }
}
