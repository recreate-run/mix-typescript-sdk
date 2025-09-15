# FileInfo

## Example Usage

```typescript
import { FileInfo } from "mix-typescript-sdk/models";

let value: FileInfo = {
  isDir: true,
  modified: 473671,
  name: "<value>",
  size: 525415,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `isDir`                             | *boolean*                           | :heavy_check_mark:                  | Whether this is a directory         |
| `modified`                          | *number*                            | :heavy_check_mark:                  | Last modified timestamp (Unix time) |
| `name`                              | *string*                            | :heavy_check_mark:                  | File name                           |
| `size`                              | *number*                            | :heavy_check_mark:                  | File size in bytes                  |