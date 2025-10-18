# MediaOutputData

Media output information from show_media tool calls

## Example Usage

```typescript
import { MediaOutputData } from "mix-typescript-sdk/models";

let value: MediaOutputData = {
  path: "/opt/lib",
  title: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `config`                                                   | [models.Config](../models/config.md)                       | :heavy_minus_sign:                                         | Media configuration (optional)                             |
| `description`                                              | *string*                                                   | :heavy_minus_sign:                                         | Media description (optional)                               |
| `duration`                                                 | *number*                                                   | :heavy_minus_sign:                                         | Duration in milliseconds for video/audio (optional)        |
| `path`                                                     | *string*                                                   | :heavy_check_mark:                                         | Path to the media file                                     |
| `startTime`                                                | *number*                                                   | :heavy_minus_sign:                                         | Start time in milliseconds for video/audio (optional)      |
| `title`                                                    | *string*                                                   | :heavy_check_mark:                                         | Media title                                                |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | Media type (image, video, audio, gsap_animation, pdf, csv) |