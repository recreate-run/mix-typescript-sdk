# System

## Overview

### Available Operations

* [listCommands](#listcommands) - List available commands
* [getCommand](#getcommand) - Get specific command
* [listMcpServers](#listmcpservers) - List MCP servers
* [getSystemInfo](#getsysteminfo) - Get system information
* [healthCheck](#healthcheck) - Health check

## listCommands

Retrieve list of all available commands

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommands" method="get" path="/api/commands" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await mix.system.listCommands();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { systemListCommands } from "mix-typescript-sdk/funcs/systemListCommands.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await systemListCommands(mix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("systemListCommands failed:", res.error);
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

**Promise\<[operations.ListCommandsResponse[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 401                    | application/json       |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |

## getCommand

Retrieve details about a specific command

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommand" method="get" path="/api/commands/{name}" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await mix.system.getCommand({
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { systemGetCommand } from "mix-typescript-sdk/funcs/systemGetCommand.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await systemGetCommand(mix, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("systemGetCommand failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommandRequest](../../models/operations/getcommandrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCommandResponse](../../models/operations/getcommandresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 404                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |

## listMcpServers

Retrieve list of available Model Context Protocol (MCP) servers

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listMcpServers" method="get" path="/api/mcp" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await mix.system.listMcpServers();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { systemListMcpServers } from "mix-typescript-sdk/funcs/systemListMcpServers.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await systemListMcpServers(mix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("systemListMcpServers failed:", res.error);
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

**Promise\<[operations.ListMcpServersResponse[]](../../models/.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 401                    | application/json       |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |

## getSystemInfo

Retrieve system information including storage configuration

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSystemInfo" method="get" path="/api/system/info" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await mix.system.getSystemInfo();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { systemGetSystemInfo } from "mix-typescript-sdk/funcs/systemGetSystemInfo.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await systemGetSystemInfo(mix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("systemGetSystemInfo failed:", res.error);
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

**Promise\<[operations.GetSystemInfoResponse](../../models/operations/getsysteminforesponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |

## healthCheck

Check server health and status

### Example Usage

<!-- UsageSnippet language="typescript" operationID="healthCheck" method="get" path="/health" -->
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await mix.system.healthCheck();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MixCore } from "mix-typescript-sdk/core.js";
import { systemHealthCheck } from "mix-typescript-sdk/funcs/systemHealthCheck.js";

// Use `MixCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const mix = new MixCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await systemHealthCheck(mix);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("systemHealthCheck failed:", res.error);
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

**Promise\<[operations.HealthCheckResponse](../../models/operations/healthcheckresponse.md)\>**

### Errors

| Error Type             | Status Code            | Content Type           |
| ---------------------- | ---------------------- | ---------------------- |
| errors.ErrorResponse   | 500                    | application/json       |
| errors.MixDefaultError | 4XX, 5XX               | \*/\*                  |