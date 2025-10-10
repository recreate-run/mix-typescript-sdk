/**
 * Tool input/output models for Mix agent tools.
 *
 * This module provides TypeScript types and Zod schemas for interacting with Mix agent tools.
 * These models provide type safety, validation, and IDE autocomplete support.
 *
 * Example:
 *    import { MediaOutput, MediaType } from 'mix-typescript-sdk/toolmodels';
 *
 *    const output: MediaOutput = {
 *        path: "http://localhost:8088/files/video.mp4",
 *        type: MediaType.Video,
 *        title: "Analysis Results",
 *        description: "Portfolio performance analysis"
 *    };
 */

import * as z from "zod";
import { safeParse } from "./lib/schemas.js";
import { Result as SafeParseResult } from "./types/fp.js";
import { ClosedEnum } from "./types/enums.js";
import { SDKValidationError } from "./models/errors/sdkvalidationerror.js";

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

// ===== Bash Tool =====

/**
 * Parameters for Bash tool
 */
export type BashParams = {
  /**
   * The bash command to execute
   */
  command: string;
  /**
   * Optional timeout in milliseconds (max 600000)
   */
  timeout?: number | undefined;
};

/** @internal */
export const BashParams$inboundSchema: z.ZodType<
  BashParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  command: z.string(),
  timeout: z.number().int().max(600000).optional(),
});

/** @internal */
export type BashParams$Outbound = {
  command: string;
  timeout?: number | undefined;
};

/** @internal */
export const BashParams$outboundSchema: z.ZodType<
  BashParams$Outbound,
  z.ZodTypeDef,
  BashParams
> = z.object({
  command: z.string(),
  timeout: z.number().int().max(600000).optional(),
});

export function bashParamsToJSON(params: BashParams): string {
  return JSON.stringify(BashParams$outboundSchema.parse(params));
}

export function bashParamsFromJSON(
  jsonString: string,
): SafeParseResult<BashParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BashParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BashParams' from JSON`,
  );
}

/**
 * Response metadata for Bash tool
 */
export type BashResponseMetadata = {
  /**
   * Unix timestamp in milliseconds
   */
  start_time: number;
  /**
   * Unix timestamp in milliseconds
   */
  end_time: number;
};

/** @internal */
export const BashResponseMetadata$inboundSchema: z.ZodType<
  BashResponseMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  start_time: z.number().int(),
  end_time: z.number().int(),
});

/** @internal */
export type BashResponseMetadata$Outbound = {
  start_time: number;
  end_time: number;
};

/** @internal */
export const BashResponseMetadata$outboundSchema: z.ZodType<
  BashResponseMetadata$Outbound,
  z.ZodTypeDef,
  BashResponseMetadata
> = z.object({
  start_time: z.number().int(),
  end_time: z.number().int(),
});

export function bashResponseMetadataToJSON(
  metadata: BashResponseMetadata,
): string {
  return JSON.stringify(BashResponseMetadata$outboundSchema.parse(metadata));
}

export function bashResponseMetadataFromJSON(
  jsonString: string,
): SafeParseResult<BashResponseMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BashResponseMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BashResponseMetadata' from JSON`,
  );
}

// ===== Edit Tool =====

/**
 * Parameters for Edit tool
 */
export type EditParams = {
  /**
   * The absolute path to the file to modify
   */
  file_path: string;
  /**
   * The text to replace
   */
  old_string: string;
  /**
   * The text to replace it with
   */
  new_string: string;
};

/** @internal */
export const EditParams$inboundSchema: z.ZodType<
  EditParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_path: z.string(),
  old_string: z.string(),
  new_string: z.string(),
});

/** @internal */
export type EditParams$Outbound = {
  file_path: string;
  old_string: string;
  new_string: string;
};

/** @internal */
export const EditParams$outboundSchema: z.ZodType<
  EditParams$Outbound,
  z.ZodTypeDef,
  EditParams
> = z.object({
  file_path: z.string(),
  old_string: z.string(),
  new_string: z.string(),
});

export function editParamsToJSON(params: EditParams): string {
  return JSON.stringify(EditParams$outboundSchema.parse(params));
}

export function editParamsFromJSON(
  jsonString: string,
): SafeParseResult<EditParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EditParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EditParams' from JSON`,
  );
}

/**
 * Response metadata for Edit tool
 */
export type EditResponseMetadata = {
  /**
   * The diff showing changes
   */
  diff: string;
  /**
   * Number of lines added
   */
  additions: number;
  /**
   * Number of lines removed
   */
  removals: number;
};

/** @internal */
export const EditResponseMetadata$inboundSchema: z.ZodType<
  EditResponseMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  diff: z.string(),
  additions: z.number().int(),
  removals: z.number().int(),
});

/** @internal */
export type EditResponseMetadata$Outbound = {
  diff: string;
  additions: number;
  removals: number;
};

/** @internal */
export const EditResponseMetadata$outboundSchema: z.ZodType<
  EditResponseMetadata$Outbound,
  z.ZodTypeDef,
  EditResponseMetadata
> = z.object({
  diff: z.string(),
  additions: z.number().int(),
  removals: z.number().int(),
});

export function editResponseMetadataToJSON(
  metadata: EditResponseMetadata,
): string {
  return JSON.stringify(EditResponseMetadata$outboundSchema.parse(metadata));
}

export function editResponseMetadataFromJSON(
  jsonString: string,
): SafeParseResult<EditResponseMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EditResponseMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EditResponseMetadata' from JSON`,
  );
}

// ===== ExitPlanMode Tool =====

/**
 * Parameters for ExitPlanMode tool
 */
export type ExitPlanModeParams = {
  /**
   * The plan you came up with, that you want to run by the user for approval
   */
  plan: string;
};

/** @internal */
export const ExitPlanModeParams$inboundSchema: z.ZodType<
  ExitPlanModeParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  plan: z.string(),
});

/** @internal */
export type ExitPlanModeParams$Outbound = {
  plan: string;
};

/** @internal */
export const ExitPlanModeParams$outboundSchema: z.ZodType<
  ExitPlanModeParams$Outbound,
  z.ZodTypeDef,
  ExitPlanModeParams
> = z.object({
  plan: z.string(),
});

export function exitPlanModeParamsToJSON(params: ExitPlanModeParams): string {
  return JSON.stringify(ExitPlanModeParams$outboundSchema.parse(params));
}

export function exitPlanModeParamsFromJSON(
  jsonString: string,
): SafeParseResult<ExitPlanModeParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ExitPlanModeParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ExitPlanModeParams' from JSON`,
  );
}

// ===== ReadText Tool =====

/**
 * Parameters for ReadText tool
 */
export type ReadTextParams = {
  /**
   * The absolute path to the file to read, or a URL (http/https)
   */
  file_path: string;
  /**
   * The line number to start reading from (0-based)
   */
  offset?: number | undefined;
  /**
   * The number of lines to read (defaults to 2000)
   */
  limit?: number | undefined;
};

/** @internal */
export const ReadTextParams$inboundSchema: z.ZodType<
  ReadTextParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_path: z.string(),
  offset: z.number().int().nonnegative().optional(),
  limit: z.number().int().positive().optional(),
});

/** @internal */
export type ReadTextParams$Outbound = {
  file_path: string;
  offset?: number | undefined;
  limit?: number | undefined;
};

/** @internal */
export const ReadTextParams$outboundSchema: z.ZodType<
  ReadTextParams$Outbound,
  z.ZodTypeDef,
  ReadTextParams
> = z.object({
  file_path: z.string(),
  offset: z.number().int().nonnegative().optional(),
  limit: z.number().int().positive().optional(),
});

export function readTextParamsToJSON(params: ReadTextParams): string {
  return JSON.stringify(ReadTextParams$outboundSchema.parse(params));
}

export function readTextParamsFromJSON(
  jsonString: string,
): SafeParseResult<ReadTextParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadTextParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadTextParams' from JSON`,
  );
}

/**
 * Response metadata for ReadText tool
 */
export type ReadTextResponseMetadata = {
  /**
   * The path/URL that was read
   */
  file_path: string;
  /**
   * The raw content without line numbers
   */
  content: string;
};

/** @internal */
export const ReadTextResponseMetadata$inboundSchema: z.ZodType<
  ReadTextResponseMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_path: z.string(),
  content: z.string(),
});

/** @internal */
export type ReadTextResponseMetadata$Outbound = {
  file_path: string;
  content: string;
};

/** @internal */
export const ReadTextResponseMetadata$outboundSchema: z.ZodType<
  ReadTextResponseMetadata$Outbound,
  z.ZodTypeDef,
  ReadTextResponseMetadata
> = z.object({
  file_path: z.string(),
  content: z.string(),
});

export function readTextResponseMetadataToJSON(
  metadata: ReadTextResponseMetadata,
): string {
  return JSON.stringify(
    ReadTextResponseMetadata$outboundSchema.parse(metadata),
  );
}

export function readTextResponseMetadataFromJSON(
  jsonString: string,
): SafeParseResult<ReadTextResponseMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ReadTextResponseMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ReadTextResponseMetadata' from JSON`,
  );
}

// ===== Glob Tool =====

/**
 * Parameters for Glob tool
 */
export type GlobParams = {
  /**
   * The glob pattern to match files against
   */
  pattern: string;
  /**
   * The directory to search in (defaults to current working directory)
   */
  path?: string | undefined;
};

/** @internal */
export const GlobParams$inboundSchema: z.ZodType<
  GlobParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  pattern: z.string(),
  path: z.string().optional(),
});

/** @internal */
export type GlobParams$Outbound = {
  pattern: string;
  path?: string | undefined;
};

/** @internal */
export const GlobParams$outboundSchema: z.ZodType<
  GlobParams$Outbound,
  z.ZodTypeDef,
  GlobParams
> = z.object({
  pattern: z.string(),
  path: z.string().optional(),
});

export function globParamsToJSON(params: GlobParams): string {
  return JSON.stringify(GlobParams$outboundSchema.parse(params));
}

export function globParamsFromJSON(
  jsonString: string,
): SafeParseResult<GlobParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GlobParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GlobParams' from JSON`,
  );
}

/**
 * Response metadata for Glob tool
 */
export type GlobResponseMetadata = {
  /**
   * Number of files found
   */
  number_of_files: number;
  /**
   * Whether the results were truncated
   */
  truncated: boolean;
};

/** @internal */
export const GlobResponseMetadata$inboundSchema: z.ZodType<
  GlobResponseMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  number_of_files: z.number().int(),
  truncated: z.boolean(),
});

/** @internal */
export type GlobResponseMetadata$Outbound = {
  number_of_files: number;
  truncated: boolean;
};

/** @internal */
export const GlobResponseMetadata$outboundSchema: z.ZodType<
  GlobResponseMetadata$Outbound,
  z.ZodTypeDef,
  GlobResponseMetadata
> = z.object({
  number_of_files: z.number().int(),
  truncated: z.boolean(),
});

export function globResponseMetadataToJSON(
  metadata: GlobResponseMetadata,
): string {
  return JSON.stringify(GlobResponseMetadata$outboundSchema.parse(metadata));
}

export function globResponseMetadataFromJSON(
  jsonString: string,
): SafeParseResult<GlobResponseMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GlobResponseMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GlobResponseMetadata' from JSON`,
  );
}

// ===== Grep Tool =====

/**
 * Parameters for Grep tool
 */
export type GrepParams = {
  /**
   * The regex pattern to search for in file contents
   */
  pattern: string;
  /**
   * The directory to search in (defaults to current working directory)
   */
  path?: string | undefined;
  /**
   * File pattern to include in the search (e.g. "*.js", "*.{ts,tsx}")
   */
  include?: string | undefined;
  /**
   * If true, pattern will be treated as literal text with special regex characters escaped
   */
  literal_text?: boolean | undefined;
};

/** @internal */
export const GrepParams$inboundSchema: z.ZodType<
  GrepParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  pattern: z.string(),
  path: z.string().optional(),
  include: z.string().optional(),
  literal_text: z.boolean().optional(),
});

/** @internal */
export type GrepParams$Outbound = {
  pattern: string;
  path?: string | undefined;
  include?: string | undefined;
  literal_text?: boolean | undefined;
};

/** @internal */
export const GrepParams$outboundSchema: z.ZodType<
  GrepParams$Outbound,
  z.ZodTypeDef,
  GrepParams
> = z.object({
  pattern: z.string(),
  path: z.string().optional(),
  include: z.string().optional(),
  literal_text: z.boolean().optional(),
});

export function grepParamsToJSON(params: GrepParams): string {
  return JSON.stringify(GrepParams$outboundSchema.parse(params));
}

export function grepParamsFromJSON(
  jsonString: string,
): SafeParseResult<GrepParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GrepParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GrepParams' from JSON`,
  );
}

/**
 * Response metadata for Grep tool
 */
export type GrepResponseMetadata = {
  /**
   * Total number of matches found
   */
  number_of_matches: number;
  /**
   * Whether the results were truncated
   */
  truncated: boolean;
};

/** @internal */
export const GrepResponseMetadata$inboundSchema: z.ZodType<
  GrepResponseMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  number_of_matches: z.number().int(),
  truncated: z.boolean(),
});

/** @internal */
export type GrepResponseMetadata$Outbound = {
  number_of_matches: number;
  truncated: boolean;
};

/** @internal */
export const GrepResponseMetadata$outboundSchema: z.ZodType<
  GrepResponseMetadata$Outbound,
  z.ZodTypeDef,
  GrepResponseMetadata
> = z.object({
  number_of_matches: z.number().int(),
  truncated: z.boolean(),
});

export function grepResponseMetadataToJSON(
  metadata: GrepResponseMetadata,
): string {
  return JSON.stringify(GrepResponseMetadata$outboundSchema.parse(metadata));
}

export function grepResponseMetadataFromJSON(
  jsonString: string,
): SafeParseResult<GrepResponseMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GrepResponseMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GrepResponseMetadata' from JSON`,
  );
}

// ===== PythonExecution Tool =====

/**
 * Parameters for PythonExecution tool
 */
export type PythonExecutionParams = {
  /**
   * The Python code to execute
   */
  code: string;
};

/** @internal */
export const PythonExecutionParams$inboundSchema: z.ZodType<
  PythonExecutionParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  code: z.string(),
});

/** @internal */
export type PythonExecutionParams$Outbound = {
  code: string;
};

/** @internal */
export const PythonExecutionParams$outboundSchema: z.ZodType<
  PythonExecutionParams$Outbound,
  z.ZodTypeDef,
  PythonExecutionParams
> = z.object({
  code: z.string(),
});

export function pythonExecutionParamsToJSON(
  params: PythonExecutionParams,
): string {
  return JSON.stringify(PythonExecutionParams$outboundSchema.parse(params));
}

export function pythonExecutionParamsFromJSON(
  jsonString: string,
): SafeParseResult<PythonExecutionParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PythonExecutionParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PythonExecutionParams' from JSON`,
  );
}

/**
 * Result from PythonExecution tool
 */
export type PythonExecutionResult = {
  /**
   * Always "code_execution_result"
   */
  type: string;
  /**
   * Standard output from the Python execution
   */
  stdout: string;
  /**
   * Standard error from the Python execution
   */
  stderr: string;
  /**
   * Exit code from the Python process
   */
  return_code: number;
};

/** @internal */
export const PythonExecutionResult$inboundSchema: z.ZodType<
  PythonExecutionResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string(),
  stdout: z.string(),
  stderr: z.string(),
  return_code: z.number().int(),
});

/** @internal */
export type PythonExecutionResult$Outbound = {
  type: string;
  stdout: string;
  stderr: string;
  return_code: number;
};

/** @internal */
export const PythonExecutionResult$outboundSchema: z.ZodType<
  PythonExecutionResult$Outbound,
  z.ZodTypeDef,
  PythonExecutionResult
> = z.object({
  type: z.string(),
  stdout: z.string(),
  stderr: z.string(),
  return_code: z.number().int(),
});

export function pythonExecutionResultToJSON(
  result: PythonExecutionResult,
): string {
  return JSON.stringify(PythonExecutionResult$outboundSchema.parse(result));
}

export function pythonExecutionResultFromJSON(
  jsonString: string,
): SafeParseResult<PythonExecutionResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PythonExecutionResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PythonExecutionResult' from JSON`,
  );
}

// ===== WebFetch Tool =====

/**
 * Parameters for WebFetch tool
 */
export type WebFetchParams = {
  /**
   * The URL to fetch content from
   */
  url: string;
  /**
   * The prompt to run on the fetched content
   */
  prompt: string;
};

/** @internal */
export const WebFetchParams$inboundSchema: z.ZodType<
  WebFetchParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string().url(),
  prompt: z.string(),
});

/** @internal */
export type WebFetchParams$Outbound = {
  url: string;
  prompt: string;
};

/** @internal */
export const WebFetchParams$outboundSchema: z.ZodType<
  WebFetchParams$Outbound,
  z.ZodTypeDef,
  WebFetchParams
> = z.object({
  url: z.string().url(),
  prompt: z.string(),
});

export function webFetchParamsToJSON(params: WebFetchParams): string {
  return JSON.stringify(WebFetchParams$outboundSchema.parse(params));
}

export function webFetchParamsFromJSON(
  jsonString: string,
): SafeParseResult<WebFetchParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebFetchParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebFetchParams' from JSON`,
  );
}

/**
 * Response metadata for WebFetch tool
 */
export type WebFetchResponseMetadata = {
  /**
   * Original requested URL
   */
  url: string;
  /**
   * Final URL after redirects (optional)
   */
  fetched_url?: string | undefined;
  /**
   * Content-Type header from response (optional)
   */
  content_type?: string | undefined;
  /**
   * Unix timestamp in milliseconds
   */
  start_time: number;
  /**
   * Unix timestamp in milliseconds
   */
  end_time: number;
};

/** @internal */
export const WebFetchResponseMetadata$inboundSchema: z.ZodType<
  WebFetchResponseMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  url: z.string(),
  fetched_url: z.string().optional(),
  content_type: z.string().optional(),
  start_time: z.number().int(),
  end_time: z.number().int(),
});

/** @internal */
export type WebFetchResponseMetadata$Outbound = {
  url: string;
  fetched_url?: string | undefined;
  content_type?: string | undefined;
  start_time: number;
  end_time: number;
};

/** @internal */
export const WebFetchResponseMetadata$outboundSchema: z.ZodType<
  WebFetchResponseMetadata$Outbound,
  z.ZodTypeDef,
  WebFetchResponseMetadata
> = z.object({
  url: z.string(),
  fetched_url: z.string().optional(),
  content_type: z.string().optional(),
  start_time: z.number().int(),
  end_time: z.number().int(),
});

export function webFetchResponseMetadataToJSON(
  metadata: WebFetchResponseMetadata,
): string {
  return JSON.stringify(
    WebFetchResponseMetadata$outboundSchema.parse(metadata),
  );
}

export function webFetchResponseMetadataFromJSON(
  jsonString: string,
): SafeParseResult<WebFetchResponseMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebFetchResponseMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebFetchResponseMetadata' from JSON`,
  );
}

// ===== WebSearch Tool =====

/**
 * Type of search to perform
 */
export const SearchType = {
  Web: "web",
  Images: "images",
  Videos: "videos",
} as const;

export type SearchType = ClosedEnum<typeof SearchType>;

/** @internal */
export const SearchType$inboundSchema: z.ZodNativeEnum<typeof SearchType> =
  z.nativeEnum(SearchType);

/** @internal */
export const SearchType$outboundSchema: z.ZodNativeEnum<typeof SearchType> =
  SearchType$inboundSchema;

/**
 * Safe search level for image/video search
 */
export const SafeSearch = {
  Strict: "strict",
  Moderate: "moderate",
  Off: "off",
} as const;

export type SafeSearch = ClosedEnum<typeof SafeSearch>;

/** @internal */
export const SafeSearch$inboundSchema: z.ZodNativeEnum<typeof SafeSearch> =
  z.nativeEnum(SafeSearch);

/** @internal */
export const SafeSearch$outboundSchema: z.ZodNativeEnum<typeof SafeSearch> =
  SafeSearch$inboundSchema;

/**
 * Parameters for WebSearch tool
 */
export type SearchParams = {
  /**
   * The search query to use (minimum 2 characters)
   */
  query: string;
  /**
   * Type of search to perform
   */
  search_type?: SearchType | undefined;
  /**
   * Only include search results from these domains
   */
  allowed_domains?: string[] | undefined;
  /**
   * Never include search results from these domains
   */
  blocked_domains?: string[] | undefined;
  /**
   * Safe search level for image/video search
   */
  safesearch?: SafeSearch | undefined;
  /**
   * Enable spell correction
   */
  spellcheck?: boolean | undefined;
};

/** @internal */
export const SearchParams$inboundSchema: z.ZodType<
  SearchParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  query: z.string().min(2),
  search_type: SearchType$inboundSchema.optional(),
  allowed_domains: z.array(z.string()).optional(),
  blocked_domains: z.array(z.string()).optional(),
  safesearch: SafeSearch$inboundSchema.optional(),
  spellcheck: z.boolean().optional(),
});

/** @internal */
export type SearchParams$Outbound = {
  query: string;
  search_type?: string | undefined;
  allowed_domains?: string[] | undefined;
  blocked_domains?: string[] | undefined;
  safesearch?: string | undefined;
  spellcheck?: boolean | undefined;
};

/** @internal */
export const SearchParams$outboundSchema: z.ZodType<
  SearchParams$Outbound,
  z.ZodTypeDef,
  SearchParams
> = z.object({
  query: z.string().min(2),
  search_type: SearchType$outboundSchema.optional(),
  allowed_domains: z.array(z.string()).optional(),
  blocked_domains: z.array(z.string()).optional(),
  safesearch: SafeSearch$outboundSchema.optional(),
  spellcheck: z.boolean().optional(),
});

export function searchParamsToJSON(params: SearchParams): string {
  return JSON.stringify(SearchParams$outboundSchema.parse(params));
}

export function searchParamsFromJSON(
  jsonString: string,
): SafeParseResult<SearchParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SearchParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SearchParams' from JSON`,
  );
}

// ===== Write Tool =====

/**
 * Parameters for Write tool
 */
export type WriteParams = {
  /**
   * The path to the file to write
   */
  file_path: string;
  /**
   * The content to write to the file
   */
  content: string;
};

/** @internal */
export const WriteParams$inboundSchema: z.ZodType<
  WriteParams,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_path: z.string(),
  content: z.string(),
});

/** @internal */
export type WriteParams$Outbound = {
  file_path: string;
  content: string;
};

/** @internal */
export const WriteParams$outboundSchema: z.ZodType<
  WriteParams$Outbound,
  z.ZodTypeDef,
  WriteParams
> = z.object({
  file_path: z.string(),
  content: z.string(),
});

export function writeParamsToJSON(params: WriteParams): string {
  return JSON.stringify(WriteParams$outboundSchema.parse(params));
}

export function writeParamsFromJSON(
  jsonString: string,
): SafeParseResult<WriteParams, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WriteParams$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WriteParams' from JSON`,
  );
}

/**
 * Response metadata for Write tool
 */
export type WriteResponseMetadata = {
  /**
   * The diff showing changes
   */
  diff: string;
  /**
   * Number of lines added
   */
  additions: number;
  /**
   * Number of lines removed
   */
  removals: number;
};

/** @internal */
export const WriteResponseMetadata$inboundSchema: z.ZodType<
  WriteResponseMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  diff: z.string(),
  additions: z.number().int(),
  removals: z.number().int(),
});

/** @internal */
export type WriteResponseMetadata$Outbound = {
  diff: string;
  additions: number;
  removals: number;
};

/** @internal */
export const WriteResponseMetadata$outboundSchema: z.ZodType<
  WriteResponseMetadata$Outbound,
  z.ZodTypeDef,
  WriteResponseMetadata
> = z.object({
  diff: z.string(),
  additions: z.number().int(),
  removals: z.number().int(),
});

export function writeResponseMetadataToJSON(
  metadata: WriteResponseMetadata,
): string {
  return JSON.stringify(WriteResponseMetadata$outboundSchema.parse(metadata));
}

export function writeResponseMetadataFromJSON(
  jsonString: string,
): SafeParseResult<WriteResponseMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WriteResponseMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WriteResponseMetadata' from JSON`,
  );
}
