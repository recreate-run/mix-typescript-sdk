# SSEContentEventData

## Example Usage

```typescript
import { SSEContentEventData } from "mix-typescript-sdk/models";

let value: SSEContentEventData = {
  content: "<value>",
  type: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `content`               | *string*                | :heavy_check_mark:      | Streaming content delta |
| `type`                  | *string*                | :heavy_check_mark:      | Content event type      |