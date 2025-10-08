/**
 * Example usage of Mix tool models from the TypeScript SDK
 *
 * This demonstrates how to use the type-safe tool models for interacting with Mix agent tools.
 */

import {
  MediaOutput,
  MediaType,
  MediaShowcaseParams,
  ReadMediaParams,
  MediaAnalysisType,
  TodoWriteParams,
  TodoStatus,
  TodoPriority,
  mediaOutputToJSON,
  readMediaParamsToJSON,
  todoWriteParamsToJSON,
} from '../src/toolmodels.js';

// ===== Example 1: Creating a media output =====

const videoOutput: MediaOutput = {
  path: "http://localhost:8088/files/video.mp4",
  type: MediaType.Video,
  title: "Analysis Results",
  description: "Portfolio performance analysis",
  startTime: 10,
  duration: 30,
};

console.log("Media Output:", videoOutput);
console.log("Media Output JSON:", mediaOutputToJSON(videoOutput));

// ===== Example 2: Creating a media showcase with multiple outputs =====

const showcaseParams: MediaShowcaseParams = {
  outputs: [
    {
      path: "http://localhost:8088/files/chart.png",
      type: MediaType.Image,
      title: "Revenue Chart",
      description: "Q4 2024 Revenue Analysis",
    },
    {
      path: "http://localhost:8088/files/report.pdf",
      type: MediaType.Pdf,
      title: "Annual Report",
    },
    {
      type: MediaType.GsapAnimation,
      title: "Interactive Animation",
      config: {
        timeline: [
          { target: ".box", duration: 1, x: 100 },
          { target: ".circle", duration: 0.5, rotation: 360 },
        ],
      },
    },
  ],
};

console.log("\nMedia Showcase Params:", showcaseParams);

// ===== Example 3: ReadMedia tool parameters =====

const imageAnalysisParams: ReadMediaParams = {
  filePath: "/path/to/image.jpg",
  mediaType: MediaAnalysisType.Image,
  prompt: "Describe what you see in this image and identify any objects",
};

const pdfAnalysisParams: ReadMediaParams = {
  filePath: "/path/to/document.pdf",
  mediaType: MediaAnalysisType.Pdf,
  prompt: "Summarize the key points from this document",
  pdfPages: "1-5,10",
};

const videoAnalysisParams: ReadMediaParams = {
  filePath: "/path/to/video.mp4",
  mediaType: MediaAnalysisType.Video,
  prompt: "Analyze the content of this video segment",
  videoInterval: "00:02:30-00:05:00",
};

console.log("\nImage Analysis Params:", imageAnalysisParams);
console.log("PDF Analysis Params JSON:", readMediaParamsToJSON(pdfAnalysisParams));

// ===== Example 4: TodoWrite tool parameters =====

const todoParams: TodoWriteParams = {
  todos: [
    {
      id: "1",
      content: "Implement user authentication",
      status: TodoStatus.InProgress,
      priority: TodoPriority.High,
    },
    {
      id: "2",
      content: "Write unit tests for auth module",
      status: TodoStatus.Pending,
      priority: TodoPriority.Medium,
    },
    {
      id: "3",
      content: "Update API documentation",
      status: TodoStatus.Completed,
      priority: TodoPriority.Low,
    },
  ],
};

console.log("\nTodo Write Params:", todoParams);
console.log("Todo Write Params JSON:", todoWriteParamsToJSON(todoParams));

// ===== Example 5: Type safety with enums =====

// This will provide autocomplete in TypeScript-aware editors
const mediaTypes = [
  MediaType.Image,
  MediaType.Video,
  MediaType.Audio,
  MediaType.Pdf,
  MediaType.Csv,
  MediaType.GsapAnimation,
];

const todoStatuses = [
  TodoStatus.Pending,
  TodoStatus.InProgress,
  TodoStatus.Completed,
];

console.log("\nAvailable Media Types:", mediaTypes);
console.log("Available Todo Statuses:", todoStatuses);
