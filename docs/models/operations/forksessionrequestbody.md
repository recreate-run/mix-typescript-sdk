# ForkSessionRequestBody

## Example Usage

```typescript
import { ForkSessionRequestBody } from "mix-typescript-sdk/models/operations";

let value: ForkSessionRequestBody = {
  messageIndex: 111090,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `messageIndex`                                                       | *number*                                                             | :heavy_check_mark:                                                   | Index of the last message to include in the fork (1-based)           |
| `title`                                                              | *string*                                                             | :heavy_minus_sign:                                                   | Optional title for the forked session (defaults to 'Forked Session') |