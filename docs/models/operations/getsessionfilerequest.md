# GetSessionFileRequest

## Example Usage

```typescript
import { GetSessionFileRequest } from "mix-typescript-sdk/models/operations";

let value: GetSessionFileRequest = {
  id: "<id>",
  filename: "example.file",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | Session ID                                                            |
| `filename`                                                            | *string*                                                              | :heavy_check_mark:                                                    | Filename to retrieve                                                  |
| `thumb`                                                               | *string*                                                              | :heavy_minus_sign:                                                    | Thumbnail specification: '100' (box), 'w100' (width), 'h100' (height) |
| `time`                                                                | *number*                                                              | :heavy_minus_sign:                                                    | Time offset in seconds for video thumbnails (default: 1.0)            |