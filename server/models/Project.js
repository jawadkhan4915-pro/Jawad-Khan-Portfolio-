import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Full Stack', 'Web', 'Mobile'],
      default: 'Full Stack',
    },
    liveUrl: {
      type: String,
      required: true,
    },
    githubUrl: {
      type: String,
      default: 'https://github.com/jawadkhan4915-pro',
    },
    techStack: [
      {
        type: String,
      },
    ],
    highlights: [
      {
        type: String,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Project = mongoose.model('Project', projectSchema);
