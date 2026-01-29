import { Schema, model, models, Document, Types } from 'mongoose'
import Event from './event.model'

export interface IBooking extends Document {
  eventId: Types.ObjectId
  email: string
  createdAt: Date
  updateAt: Date
}
