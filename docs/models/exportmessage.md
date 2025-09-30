# ExportMessage

Complete message information for export

## Example Usage

```typescript
import { ExportMessage } from "mix-typescript-sdk/models";

let value: ExportMessage = {
  content: "<value>",
  createdAt: new Date("2025-02-13T18:20:20.455Z"),
  id: "<id>",
  role: "<value>",
  updatedAt: new Date("2024-10-12T09:08:55.973Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `content`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | Message content                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Message creation timestamp                                                                    |
| `finishReason`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | Completion finish reason (optional)                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Message identifier                                                                            |
| `model`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Model used for this message (optional)                                                        |
| `reasoning`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Reasoning content (optional)                                                                  |
| `reasoningDuration`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | Reasoning duration in milliseconds (optional)                                                 |
| `role`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Message role (user, assistant, tool)                                                          |
| `toolCalls`                                                                                   | [models.ExportToolCall](../models/exporttoolcall.md)[]                                        | :heavy_minus_sign:                                                                            | Tool calls with complete information                                                          |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Message update timestamp                                                                      |