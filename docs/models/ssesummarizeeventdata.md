# SSESummarizeEventData

## Example Usage

```typescript
import { SSESummarizeEventData } from "mix-typescript-sdk/models";

let value: SSESummarizeEventData = {
  done: true,
  progress: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `done`                                 | *boolean*                              | :heavy_check_mark:                     | Indicates if summarization is complete |
| `progress`                             | *string*                               | :heavy_check_mark:                     | Summarization progress description     |
| `type`                                 | *string*                               | :heavy_check_mark:                     | Summarization event type               |