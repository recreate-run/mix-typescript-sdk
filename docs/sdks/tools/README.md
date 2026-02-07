# Tools

## Overview

### Available Operations

* [listLLMTools](#listllmtools) - List LLM tools
* [getToolCredentialsStatus](#gettoolcredentialsstatus) - Get tool credentials status
* [getToolsStatus](#gettoolsstatus) - Get tools status

## listLLMTools

Returns the list of all LLM tools that Claude can invoke. The list is dynamically extracted from the actual tools registered in CoderAgentTools() (agent/tools.go), ensuring it always reflects the current tool availability. Typical tools include: Bash, Edit, Read, Write, Grep, Glob, WebFetch, WebSearch, ReadMedia, TodoWrite, ExitPlanMode, and Task. This endpoint is useful for creating tool callbacks or understanding available agent capabilities.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLLMTools" method="get" path="/api/tools" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await mix.tools.listLLMTools();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { toolsListLLMTools } from "mix-typescript-sdk/funcs/toolsListLLMTools.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await toolsListLLMTools(mix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("toolsListLLMTools failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListLLMToolsResponse](../../models/operations/listllmtoolsresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |

## getToolCredentialsStatus

Returns authentication/credential status for external tool integrations (Brave Search, Gemini Vision, etc.). This endpoint checks if API keys are configured for tools that require external service credentials.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getToolCredentialsStatus" method="get" path="/api/tools/credentials-status" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await mix.tools.getToolCredentialsStatus();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { toolsGetToolCredentialsStatus } from "mix-typescript-sdk/funcs/toolsGetToolCredentialsStatus.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await toolsGetToolCredentialsStatus(mix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("toolsGetToolCredentialsStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetToolCredentialsStatusResponse](../../models/operations/gettoolcredentialsstatusresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |

## getToolsStatus

Get status and authentication information for all available tools and categories

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getToolsStatus" method="get" path="/api/tools/status" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await mix.tools.getToolsStatus();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { toolsGetToolsStatus } from "mix-typescript-sdk/funcs/toolsGetToolsStatus.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await toolsGetToolsStatus(mix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("toolsGetToolsStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetToolsStatusResponse](../../models/operations/gettoolsstatusresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |