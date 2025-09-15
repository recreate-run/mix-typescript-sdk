# DeleteSessionFileRequest

## Example Usage

```typescript
import { DeleteSessionFileRequest } from "mix-typescript-sdk/models/operations";

let value: DeleteSessionFileRequest = {
  id: "<id>",
  filename: "example.file",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | Session ID         |
| `filename`         | *string*           | :heavy_check_mark: | Filename to delete |