# CallbackResultData

Callback execution result information

## Example Usage

```typescript
import { CallbackResultData } from "mix-typescript-sdk/models";

let value: CallbackResultData = {
  callbackType: "bash_script",
  nonBlocking: true,
  success: false,
  toolCallId: "<id>",
  toolName: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `callbackName`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | Human-readable name of the callback (optional)                                       |
| `callbackType`                                                                       | [models.CallbackResultDataCallbackType](../models/callbackresultdatacallbacktype.md) | :heavy_check_mark:                                                                   | Type of callback executed                                                            |
| `error`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | Error message if callback failed (optional)                                          |
| `exitCode`                                                                           | *number*                                                                             | :heavy_minus_sign:                                                                   | Exit code from bash callback (optional)                                              |
| `nonBlocking`                                                                        | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether callback ran asynchronously                                                  |
| `stderr`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Standard error from bash callback (optional)                                         |
| `stdout`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Standard output from bash callback (optional)                                        |
| `subagentId`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | ID of spawned sub-agent session (optional)                                           |
| `subagentResult`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | Result from sub-agent execution (optional)                                           |
| `success`                                                                            | *boolean*                                                                            | :heavy_check_mark:                                                                   | Whether callback executed successfully                                               |
| `toolCallId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | ID of the tool call that triggered this callback                                     |
| `toolName`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | Name of the tool that triggered callback                                             |