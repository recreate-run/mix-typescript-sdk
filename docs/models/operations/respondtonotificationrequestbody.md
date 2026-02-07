# RespondToNotificationRequestBody

## Example Usage

```typescript
import { RespondToNotificationRequestBody } from "mix-typescript-sdk/models/operations";

let value: RespondToNotificationRequestBody = {
  type: "text",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `type`                                                               | [operations.Type](../../models/operations/type.md)                   | :heavy_check_mark:                                                   | Response type                                                        |
| `value`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | User's text input or selected choice (optional for acknowledge type) |