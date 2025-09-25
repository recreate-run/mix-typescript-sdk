# Messages
(*messages*)

## Overview

### Available Operations

* [getHistory](#gethistory) - Get global message history
* [cancelProcessing](#cancelprocessing) - Cancel agent processing
* [getSession](#getsession) - List session messages
* [send](#send) - Send a message to session

## getHistory

Retrieve message history across all sessions with optional pagination

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMessageHistory" method="get" path="/api/messages/history" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.messages.getHistory({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { messagesGetHistory } from "mix-typescript-sdk/funcs/messagesGetHistory.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore();

async function run() {
  const res = await messagesGetHistory(mix, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesGetHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMessageHistoryRequest](../../models/operations/getmessagehistoryrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MessageData[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 401                    | application/json       |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |

## cancelProcessing

Cancel any ongoing agent processing in the specified session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancelSessionProcessing" method="post" path="/api/sessions/{id}/cancel" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.messages.cancelProcessing({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { messagesCancelProcessing } from "mix-typescript-sdk/funcs/messagesCancelProcessing.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore();

async function run() {
  const res = await messagesCancelProcessing(mix, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesCancelProcessing failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelSessionProcessingRequest](../../models/operations/cancelsessionprocessingrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CancelSessionProcessingResponse](../../models/operations/cancelsessionprocessingresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 404                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |

## getSession

Retrieve all messages from a specific session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSessionMessages" method="get" path="/api/sessions/{id}/messages" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.messages.getSession({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { messagesGetSession } from "mix-typescript-sdk/funcs/messagesGetSession.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore();

async function run() {
  const res = await messagesGetSession(mix, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesGetSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSessionMessagesRequest](../../models/operations/getsessionmessagesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MessageData[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 404                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |

## send

Send a user message to a specific session for AI processing

### Example Usage

<!-- UsageSnippet language="typescript" operationID="sendMessage" method="post" path="/api/sessions/{id}/messages" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.messages.send({
    id: "<id>",
    requestBody: {
      apps: [
        "<value 1>",
      ],
      media: [
        "<value 1>",
        "<value 2>",
      ],
      planMode: false,
      text: "<value>",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { messagesSend } from "mix-typescript-sdk/funcs/messagesSend.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore();

async function run() {
  const res = await messagesSend(mix, {
    id: "<id>",
    requestBody: {
      apps: [
        "<value 1>",
      ],
      media: [
        "<value 1>",
        "<value 2>",
      ],
      planMode: false,
      text: "<value>",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("messagesSend failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SendMessageRequest](../../models/operations/sendmessagerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MessageData](../../models/messagedata.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 400, 404               | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |