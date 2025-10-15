# UpdateSessionCallbacksRequest

## Example Usage

```typescript
import { UpdateSessionCallbacksRequest } from "mix-typescript-sdk/models/operations";

let value: UpdateSessionCallbacksRequest = {
  id: "<id>",
  requestBody: {
    callbacks: [
      {
        bashCommand:
          "echo \"Media created: $CALLBACK_TOOL_RESULT\" >> /tmp/media.log",
        subAgentPrompt: "Analyze the tool output and suggest improvements",
        toolName: "show_media",
        type: "bash_script",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Session ID to update                                                                                         |
| `requestBody`                                                                                                | [operations.UpdateSessionCallbacksRequestBody](../../models/operations/updatesessioncallbacksrequestbody.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |