# SSEToolEventData

## Example Usage

```typescript
import { SSEToolEventData } from "mix-typescript-sdk/models";

let value: SSEToolEventData = {
  id: "<id>",
  input: "<value>",
  name: "<value>",
  status: "<value>",
  type: "<value>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `id`                      | *string*                  | :heavy_check_mark:        | Tool execution identifier |
| `input`                   | *string*                  | :heavy_check_mark:        | Tool input parameters     |
| `name`                    | *string*                  | :heavy_check_mark:        | Tool name being executed  |
| `status`                  | *string*                  | :heavy_check_mark:        | Tool execution status     |
| `type`                    | *string*                  | :heavy_check_mark:        | Tool event type           |