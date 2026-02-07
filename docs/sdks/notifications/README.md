# Notifications

## Overview

### Available Operations

* [respondToNotification](#respondtonotification) - Respond to notification

## respondToNotification

Send user's response to a notification request

### Example Usage

<!-- UsageSnippet language="typescript" operationID="respondToNotification" method="post" path="/api/notifications/{id}/respond" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "https://api.example.com",
});

async function run() {
  await mix.notifications.respondToNotification({
    id: "<id>",
    requestBody: {
      type: "acknowledge",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { notificationsRespondToNotification } from "mix-typescript-sdk/funcs/notificationsRespondToNotification.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await notificationsRespondToNotification(mix, {
    id: "<id>",
    requestBody: {
      type: "acknowledge",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("notificationsRespondToNotification failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RespondToNotificationRequest](../../models/operations/respondtonotificationrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 401, 404               | application/json       |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |