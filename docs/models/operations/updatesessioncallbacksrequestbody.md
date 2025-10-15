# UpdateSessionCallbacksRequestBody

## Example Usage

```typescript
import { UpdateSessionCallbacksRequestBody } from "mix-typescript-sdk/models/operations";

let value: UpdateSessionCallbacksRequestBody = {
  callbacks: [],
};
```

## Fields

| Field                                                                                                                                                                        | Type                                                                                                                                                                         | Required                                                                                                                                                                     | Description                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callbacks`                                                                                                                                                                  | [operations.UpdateSessionCallbacksCallback](../../models/operations/updatesessioncallbackscallback.md)[]                                                                     | :heavy_check_mark:                                                                                                                                                           | Session-level callbacks that execute after tool completion. Environment variables available: CALLBACK_TOOL_RESULT, CALLBACK_TOOL_NAME, CALLBACK_TOOL_ID, CALLBACK_SESSION_ID |