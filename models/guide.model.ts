import mongoose, { Schema, Document } from 'mongoose';

interface Media {
  fileId: string;
  filename: string;
  fileUrl: string;
}

interface Step {
  stepNumber: number;
  title: string;
  content: string;
  media: Media[];
  notes?: string;
}

interface Author {
  authorId: string;
  name: string;
}

export interface Guide extends Document {
  topic: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  author: Author;
  steps: Step[];
  tags: string[];
}

const MediaSchema: Schema = new Schema({
  fileId: { type: String, required: true },
  filename: { type: String, required: true },
  fileUrl: { type: String, required: true },
});

const StepSchema: Schema = new Schema({
  stepNumber: { type: Number, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  media: { type: [MediaSchema], required: true },
  notes: { type: String },
});

const AuthorSchema: Schema = new Schema({
  authorId: { type: String, required: true },
  name: { type: String, required: true },
});

const GuideSchema: Schema = new Schema({
  topic: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  author: { type: AuthorSchema, required: true },
  steps: { type: [StepSchema], required: true },
  tags: { type: [String], required: true },
});

export default mongoose.model<Guide>('Guide', GuideSchema);

