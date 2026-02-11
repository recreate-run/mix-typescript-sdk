# SSENotificationEventData

## Example Usage

```typescript
import { SSENotificationEventData } from "mix-typescript-sdk/models";

let value: SSENotificationEventData = {
  createdAt: 717729,
  id: "<id>",
  message: "<value>",
  notificationType: "error",
  responseType: "text",
  sessionId: "<id>",
  timeout: 572147,
  title: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `choices`                                                                 | *string*[]                                                                | :heavy_minus_sign:                                                        | Available choices (required when responseType is 'choice')                |
| `createdAt`                                                               | *number*                                                                  | :heavy_check_mark:                                                        | Unix timestamp when notification was created                              |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | Notification identifier                                                   |
| `message`                                                                 | *string*                                                                  | :heavy_check_mark:                                                        | Notification message content                                              |
| `notificationType`                                                        | [models.NotificationType](../models/notificationtype.md)                  | :heavy_check_mark:                                                        | Type of notification                                                      |
| `parentToolCallId`                                                        | *string*                                                                  | :heavy_minus_sign:                                                        | ID of the parent tool call that spawned this subagent (for nested events) |
| `responseType`                                                            | [models.ResponseType](../models/responsetype.md)                          | :heavy_check_mark:                                                        | Expected response type from user                                          |
| `sessionId`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | Session identifier for the notification                                   |
| `timeout`                                                                 | *number*                                                                  | :heavy_check_mark:                                                        | Timeout in seconds for user response                                      |
| `title`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | Notification title                                                        |
| `type`                                                                    | *string*                                                                  | :heavy_check_mark:                                                        | Notification event type                                                   |