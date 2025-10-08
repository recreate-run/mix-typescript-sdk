/**
 * Tool input/output models for Mix agent tools.
 *
 * This module provides TypeScript types and Zod schemas for interacting with Mix agent tools.
 * These models provide type safety, validation, and IDE autocomplete support.
 *
 * Example:
 *    import { MediaOutput, MediaType } from 'mix-typescript-sdk/models';
 *
 *    const output: MediaOutput = {
 *        path: "http://localhost:8088/files/video.mp4",
 *        type: MediaType.Video,
 *        title: "Analysis Results",
 *        description: "Portfolio performance analysis"
 *    };
 */

import * as z from "zod";
import { safeParse } from "../lib/schemas.js";
import { Result as SafeParseResult } from "../types/fp.js";
import { ClosedEnum } from "../types/enums.js";
import { SDKValidationError } from "./errors/sdkvalidationerror.js";

// ===== show_media Tool =====

/**
 * Supported media types for show_media tool
 */
export const MediaType = {
  Image: "image",
  Video: "video",
  Audio: "audio",
  GsapAnimation: "gsap_animation",
  Pdf: "pdf",
  Csv: "csv",
} as const;

export type MediaType = ClosedEnum<typeof MediaType>;

/** @internal */
export const MediaType$inboundSchema: z.ZodNativeEnum<typeof MediaType> =
  z.nativeEnum(MediaType);

/** @internal */
export const MediaType$outboundSchema: z.ZodNativeEnum<typeof MediaType> =
  MediaType$inboundSchema;

/**
 * Single media output for show_media tool
 */
export type MediaOutput = {
  /**
   * Absolute path or URL to the media file (optional for gsap_animation)
   */
  path?: string | undefined;
  /**
   * Type of media (image, video, audio, gsap_animation, pdf, csv)
   */
  type: MediaType;
  /**
   * Title or name for the media output
   */
  title: string;
  /**
   * Optional description or context
   */
  description?: string | undefined;
  /**
   * Configuration data for gsap_animation type (JSON object with animation settings)
   */
  config?: Record<string, any> | undefined;
  /**
   * Optional start time in seconds for video/audio segments
   */
  startTime?: number | undefined;
  /**
   * Optional duration in seconds for video/audio segments
   */
  duration?: number | undefined;
};

/** @internal */
export const MediaOutput$inboundSchema: z.ZodType<
  MediaOutput,
  z.ZodTypeDef,
  unknown
> = z.object({
  path: z.string().optional(),
  type: MediaType$inboundSchema,
  title: z.string(),
  description: z.string().optional(),
  config: z.record(z.any()).optional(),
  startTime: z.number().int().nonnegative().optional(),
  duration: z.number().int().positive().optional(),
});

/** @internal */
export type MediaOutput$Outbound = {
  path?: string | undefined;
  type: string;
  title: string;
  description?: string | undefined;
  config?: Record<string, any> | undefined;
  startTime?: number | undefined;
  duration?: number | undefined;
};

/** @internal */
export const MediaOutput$outboundSchema: z.ZodType<
  MediaOutput$Outbound,
  z.ZodTypeDef,
  MediaOutput
> = z.object({
  path: z.string().optional(),
  type: MediaType$outboundSchema,
  title: z.string(),
  description: z.string().optional(),
  config: z.record(z.any()).optional(),
  startTime: z.number().int().nonnegative().optional(),
  duration: z.number().int().positive().optional(),
});

export function mediaOutputToJSON(mediaOutput: MediaOutput): string {
  return JSON.stringify(MediaOutput$outboundSchema.parse(mediaOutput));
}

export function mediaOutputFromJSON(
  jsonString: string,
): SafeParseResult<MediaOutput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaOutput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaOutput' from JSON`,
  );
}

/**
 * Parameters for show_media tool
 */
export type MediaShowcaseParams = {
  /**
   * Array of media outputs to showcase
   */
  outputs: MediaOutput[];
};

/** @internal */
export const MediaShowcaseParams$inboundSchema: z.ZodType<
  MediaShowcaseParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  outputs: z.array(MediaOutput$inboundSchema),
});

/** @internal */
export type MediaShowcaseParams$Outbound = {
  outputs: MediaOutput$Outbound[];
};

/** @internal */
export const MediaShowcaseParams$outboundSchema: z.ZodType<
  MediaShowcaseParams$Outbound,
  z.ZodTypeDef,
  MediaShowcaseParams
> = z.object({
  outputs: z.array(MediaOutput$outboundSchema),
});

export function mediaShowcaseParamsToJSON(
  params: MediaShowcaseParams,
): string {
  return JSON.stringify(MediaShowcaseParams$outboundSchema.parse(params));
}

export function mediaShowcaseParamsFromJSON(
  jsonString: string,
): SafeParseResult<MediaShowcaseParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MediaShowcaseParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MediaShowcaseParams' from JSON`,
  );
}

// ===== ReadMedia Tool =====

/**
 * Supported media types for ReadMedia tool
 */
export const MediaAnalysisType = {
  Image: "image",
  Audio: "audio",
  Video: "video",
  Pdf: "pdf",
} as const;

export type MediaAnalysisType = ClosedEnum<typeof MediaAnalysisType>;

/** @internal */
export const MediaAnalysisType$inboundSchema: z.ZodNativeEnum<typeof MediaAnalysisType> =
  z.nativeEnum(MediaAnalysisType);

/** @internal */
export const MediaAnalysisType$outboundSchema: z.ZodNativeEnum<typeof MediaAnalysisType> =
  MediaAnalysisType$inboundSchema;

/**
 * Parameters for ReadMedia tool
 */
export type ReadMediaParams = {
  /**
   * Path to file or URL for analysis
   */
  filePath: string;
  /**
   * Type of media analysis to perform
   */
  mediaType: MediaAnalysisType;
  /**
   * Analysis prompt for the media content
   */
  prompt: string;
  /**
   * PDF page selection (e.g., '5' or '1-3,7,10-12') - PDF only
   */
  pdfPages?: string | undefined;
  /**
   * Video time interval (e.g., '00:20:50-00:26:10') - video only
   */
  videoInterval?: string | undefined;
};

/** @internal */
export const ReadMediaParams$inboundSchema: z.ZodType<
  ReadMediaParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  filePath: z.string(),
  mediaType: MediaAnalysisType$inboundSchema,
  prompt: z.string(),
  pdfPages: z.string().optional(),
  videoInterval: z.string().optional(),
});

/** @internal */
export type ReadMediaParams$Outbound = {
  filePath: string;
  mediaType: string;
  prompt: string;
  pdfPages?: string | undefined;
  videoInterval?: string | undefined;
};

/** @internal */
export const ReadMediaParams$outboundSchema: z.ZodType<
  ReadMediaParams$Outbound,
  z.ZodTypeDef,
  ReadMediaParams
> = z.object({
  filePath: z.string(),
  mediaType: MediaAnalysisType$outboundSchema,
  prompt: z.string(),
  pdfPages: z.string().optional(),
  videoInterval: z.string().optional(),
});

export function readMediaParamsToJSON(params: ReadMediaParams): string {
  return JSON.stringify(ReadMediaParams$outboundSchema.parse(params));
}

export function readMediaParamsFromJSON(
  jsonString: string,
): SafeParseResult<ReadMediaParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadMediaParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadMediaParams' from JSON`,
  );
}

/**
 * Single result from ReadMedia tool
 */
export type ReadMediaResult = {
  /**
   * Path to the analyzed file
   */
  filePath: string;
  /**
   * Type of media that was analyzed
   */
  mediaType: string;
  /**
   * Analysis results from the AI
   */
  analysis: string;
  /**
   * Error message if analysis failed
   */
  error?: string | undefined;
};

/** @internal */
export const ReadMediaResult$inboundSchema: z.ZodType<
  ReadMediaResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  filePath: z.string(),
  mediaType: z.string(),
  analysis: z.string(),
  error: z.string().optional(),
});

/** @internal */
export type ReadMediaResult$Outbound = {
  filePath: string;
  mediaType: string;
  analysis: string;
  error?: string | undefined;
};

/** @internal */
export const ReadMediaResult$outboundSchema: z.ZodType<
  ReadMediaResult$Outbound,
  z.ZodTypeDef,
  ReadMediaResult
> = z.object({
  filePath: z.string(),
  mediaType: z.string(),
  analysis: z.string(),
  error: z.string().optional(),
});

export function readMediaResultToJSON(result: ReadMediaResult): string {
  return JSON.stringify(ReadMediaResult$outboundSchema.parse(result));
}

export function readMediaResultFromJSON(
  jsonString: string,
): SafeParseResult<ReadMediaResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadMediaResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadMediaResult' from JSON`,
  );
}

/**
 * Response from ReadMedia tool
 */
export type ReadMediaResponse = {
  /**
   * List of analysis results
   */
  results: ReadMediaResult[];
  /**
   * Overall summary of the analysis
   */
  summary: string;
};

/** @internal */
export const ReadMediaResponse$inboundSchema: z.ZodType<
  ReadMediaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  results: z.array(ReadMediaResult$inboundSchema),
  summary: z.string(),
});

/** @internal */
export type ReadMediaResponse$Outbound = {
  results: ReadMediaResult$Outbound[];
  summary: string;
};

/** @internal */
export const ReadMediaResponse$outboundSchema: z.ZodType<
  ReadMediaResponse$Outbound,
  z.ZodTypeDef,
  ReadMediaResponse
> = z.object({
  results: z.array(ReadMediaResult$outboundSchema),
  summary: z.string(),
});

export function readMediaResponseToJSON(response: ReadMediaResponse): string {
  return JSON.stringify(ReadMediaResponse$outboundSchema.parse(response));
}

export function readMediaResponseFromJSON(
  jsonString: string,
): SafeParseResult<ReadMediaResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadMediaResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadMediaResponse' from JSON`,
  );
}

// ===== TodoWrite Tool =====

/**
 * Todo item status
 */
export const TodoStatus = {
  Pending: "pending",
  InProgress: "in_progress",
  Completed: "completed",
} as const;

export type TodoStatus = ClosedEnum<typeof TodoStatus>;

/** @internal */
export const TodoStatus$inboundSchema: z.ZodNativeEnum<typeof TodoStatus> =
  z.nativeEnum(TodoStatus);

/** @internal */
export const TodoStatus$outboundSchema: z.ZodNativeEnum<typeof TodoStatus> =
  TodoStatus$inboundSchema;

/**
 * Todo item priority
 */
export const TodoPriority = {
  Low: "low",
  Medium: "medium",
  High: "high",
} as const;

export type TodoPriority = ClosedEnum<typeof TodoPriority>;

/** @internal */
export const TodoPriority$inboundSchema: z.ZodNativeEnum<typeof TodoPriority> =
  z.nativeEnum(TodoPriority);

/** @internal */
export const TodoPriority$outboundSchema: z.ZodNativeEnum<typeof TodoPriority> =
  TodoPriority$inboundSchema;

/**
 * Single todo item
 */
export type Todo = {
  /**
   * Unique identifier for the todo item
   */
  id: string;
  /**
   * The todo task description
   */
  content: string;
  /**
   * Current status (pending, in_progress, completed)
   */
  status: TodoStatus;
  /**
   * Priority level (low, medium, high)
   */
  priority: TodoPriority;
};

/** @internal */
export const Todo$inboundSchema: z.ZodType<Todo, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string(),
    content: z.string(),
    status: TodoStatus$inboundSchema,
    priority: TodoPriority$inboundSchema,
  });

/** @internal */
export type Todo$Outbound = {
  id: string;
  content: string;
  status: string;
  priority: string;
};

/** @internal */
export const Todo$outboundSchema: z.ZodType<
  Todo$Outbound,
  z.ZodTypeDef,
  Todo
> = z.object({
  id: z.string(),
  content: z.string(),
  status: TodoStatus$outboundSchema,
  priority: TodoPriority$outboundSchema,
});

export function todoToJSON(todo: Todo): string {
  return JSON.stringify(Todo$outboundSchema.parse(todo));
}

export function todoFromJSON(
  jsonString: string,
): SafeParseResult<Todo, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Todo$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Todo' from JSON`,
  );
}

/**
 * Parameters for TodoWrite tool
 */
export type TodoWriteParams = {
  /**
   * Array of todo items to manage
   */
  todos: Todo[];
};

/** @internal */
export const TodoWriteParams$inboundSchema: z.ZodType<
  TodoWriteParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  todos: z.array(Todo$inboundSchema),
});

/** @internal */
export type TodoWriteParams$Outbound = {
  todos: Todo$Outbound[];
};

/** @internal */
export const TodoWriteParams$outboundSchema: z.ZodType<
  TodoWriteParams$Outbound,
  z.ZodTypeDef,
  TodoWriteParams
> = z.object({
  todos: z.array(Todo$outboundSchema),
});

export function todoWriteParamsToJSON(params: TodoWriteParams): string {
  return JSON.stringify(TodoWriteParams$outboundSchema.parse(params));
}

export function todoWriteParamsFromJSON(
  jsonString: string,
): SafeParseResult<TodoWriteParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TodoWriteParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TodoWriteParams' from JSON`,
  );
}
