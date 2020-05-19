import { DomainTask } from 'models/DomainTask'
import mongoose from 'mongoose'

export const scheduleTask = async (instanceId: mongoose.Types.ObjectId): Promise<boolean> => {
  const task = new DomainTask({
    instanceId,
    status: 'scheduled'
  })

  await task.save()
  return true
}
