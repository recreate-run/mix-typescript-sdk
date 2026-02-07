# ExportSessionResponse

## Example Usage

```typescript
import { ExportSessionResponse } from "mix-typescript-sdk/models/operations";

let value: ExportSessionResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    id: "<id>",
    messages: [
      {
        content: "<value>",
        createdAt: new Date("2024-05-07T11:28:36.432Z"),
        id: "<id>",
        role: "<value>",
        updatedAt: new Date("2024-08-17T22:35:02.040Z"),
      },
    ],
    title: "<value>",
  },
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `headers`                                             | Record<string, *string*[]>                            | :heavy_check_mark:                                    | N/A                                                   |
| `result`                                              | [models.ExportSession](../../models/exportsession.md) | :heavy_check_mark:                                    | N/A                                                   |