# Mix TypeScript SDK

Developer-friendly & type-safe TypeScript SDK for the Mix REST API - providing session management, messaging, and system operations.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript"><img src="https://www.speakeasy.com/assets/badges/built-by-speakeasy.svg" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<br /><br />

<!-- Start Summary [summary] -->
## Summary

Mix REST API: REST API for the Mix application - session management, messaging, and system operations
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Mix TypeScript SDK](#mix-typescript-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Server-sent event streaming](#server-sent-event-streaming)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add mix-typescript-sdk
```

### PNPM

```bash
pnpm add mix-typescript-sdk
```

### Bun

```bash
bun add mix-typescript-sdk
```

### Yarn

```bash
yarn add mix-typescript-sdk
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.authentication.storeApiKey({
    apiKey: "<value>",
    provider: "openrouter",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [authentication](docs/sdks/authentication/README.md)

* [storeApiKey](docs/sdks/authentication/README.md#storeapikey) - Store API key
* [handleOAuthCallback](docs/sdks/authentication/README.md#handleoauthcallback) - Handle OAuth callback
* [startOAuthFlow](docs/sdks/authentication/README.md#startoauthflow) - Start OAuth authentication
* [getAuthStatus](docs/sdks/authentication/README.md#getauthstatus) - Get authentication status
* [validatePreferredProvider](docs/sdks/authentication/README.md#validatepreferredprovider) - Validate preferred provider
* [deleteCredentials](docs/sdks/authentication/README.md#deletecredentials) - Delete provider credentials

### [files](docs/sdks/files/README.md)

* [list](docs/sdks/files/README.md#list) - List session files
* [upload](docs/sdks/files/README.md#upload) - Upload file to session
* [delete](docs/sdks/files/README.md#delete) - Delete session file
* [get](docs/sdks/files/README.md#get) - Get session file

### [messages](docs/sdks/messages/README.md)

* [getHistory](docs/sdks/messages/README.md#gethistory) - Get global message history
* [cancelProcessing](docs/sdks/messages/README.md#cancelprocessing) - Cancel agent processing
* [getSession](docs/sdks/messages/README.md#getsession) - List session messages
* [send](docs/sdks/messages/README.md#send) - Send a message to session


### [permissions](docs/sdks/permissions/README.md)

* [deny](docs/sdks/permissions/README.md#deny) - Deny permission
* [grant](docs/sdks/permissions/README.md#grant) - Grant permission

### [preferences](docs/sdks/preferences/README.md)

* [get](docs/sdks/preferences/README.md#get) - Get user preferences
* [update](docs/sdks/preferences/README.md#update) - Update user preferences
* [getProviders](docs/sdks/preferences/README.md#getproviders) - Get available providers
* [reset](docs/sdks/preferences/README.md#reset) - Reset preferences

### [sessions](docs/sdks/sessions/README.md)

* [list](docs/sdks/sessions/README.md#list) - List all sessions
* [create](docs/sdks/sessions/README.md#create) - Create a new session
* [delete](docs/sdks/sessions/README.md#delete) - Delete a session
* [get](docs/sdks/sessions/README.md#get) - Get a specific session
* [fork](docs/sdks/sessions/README.md#fork) - Fork a session
* [rewindSession](docs/sdks/sessions/README.md#rewindsession) - Rewind a session

### [streaming](docs/sdks/streaming/README.md)

* [streamEvents](docs/sdks/streaming/README.md#streamevents) - Server-Sent Events stream for real-time updates
* [sendStreamingMessage](docs/sdks/streaming/README.md#sendstreamingmessage) - Send message via streaming pipeline

### [system](docs/sdks/system/README.md)

* [listCommands](docs/sdks/system/README.md#listcommands) - List available commands
* [getCommand](docs/sdks/system/README.md#getcommand) - Get specific command
* [listMcpServers](docs/sdks/system/README.md#listmcpservers) - List MCP servers
* [healthCheck](docs/sdks/system/README.md#healthcheck) - Health check

### [tools](docs/sdks/tools/README.md)

* [getToolsStatus](docs/sdks/tools/README.md#gettoolsstatus) - Get tools status

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authenticationDeleteCredentials`](docs/sdks/authentication/README.md#deletecredentials) - Delete provider credentials
- [`authenticationGetAuthStatus`](docs/sdks/authentication/README.md#getauthstatus) - Get authentication status
- [`authenticationHandleOAuthCallback`](docs/sdks/authentication/README.md#handleoauthcallback) - Handle OAuth callback
- [`authenticationStartOAuthFlow`](docs/sdks/authentication/README.md#startoauthflow) - Start OAuth authentication
- [`authenticationStoreApiKey`](docs/sdks/authentication/README.md#storeapikey) - Store API key
- [`authenticationValidatePreferredProvider`](docs/sdks/authentication/README.md#validatepreferredprovider) - Validate preferred provider
- [`filesDelete`](docs/sdks/files/README.md#delete) - Delete session file
- [`filesGet`](docs/sdks/files/README.md#get) - Get session file
- [`filesList`](docs/sdks/files/README.md#list) - List session files
- [`filesUpload`](docs/sdks/files/README.md#upload) - Upload file to session
- [`messagesCancelProcessing`](docs/sdks/messages/README.md#cancelprocessing) - Cancel agent processing
- [`messagesGetHistory`](docs/sdks/messages/README.md#gethistory) - Get global message history
- [`messagesGetSession`](docs/sdks/messages/README.md#getsession) - List session messages
- [`messagesSend`](docs/sdks/messages/README.md#send) - Send a message to session
- [`permissionsDeny`](docs/sdks/permissions/README.md#deny) - Deny permission
- [`permissionsGrant`](docs/sdks/permissions/README.md#grant) - Grant permission
- [`preferencesGet`](docs/sdks/preferences/README.md#get) - Get user preferences
- [`preferencesGetProviders`](docs/sdks/preferences/README.md#getproviders) - Get available providers
- [`preferencesReset`](docs/sdks/preferences/README.md#reset) - Reset preferences
- [`preferencesUpdate`](docs/sdks/preferences/README.md#update) - Update user preferences
- [`sessionsCreate`](docs/sdks/sessions/README.md#create) - Create a new session
- [`sessionsDelete`](docs/sdks/sessions/README.md#delete) - Delete a session
- [`sessionsFork`](docs/sdks/sessions/README.md#fork) - Fork a session
- [`sessionsGet`](docs/sdks/sessions/README.md#get) - Get a specific session
- [`sessionsList`](docs/sdks/sessions/README.md#list) - List all sessions
- [`sessionsRewindSession`](docs/sdks/sessions/README.md#rewindsession) - Rewind a session
- [`streamingSendStreamingMessage`](docs/sdks/streaming/README.md#sendstreamingmessage) - Send message via streaming pipeline
- [`streamingStreamEvents`](docs/sdks/streaming/README.md#streamevents) - Server-Sent Events stream for real-time updates
- [`systemGetCommand`](docs/sdks/system/README.md#getcommand) - Get specific command
- [`systemHealthCheck`](docs/sdks/system/README.md#healthcheck) - Health check
- [`systemListCommands`](docs/sdks/system/README.md#listcommands) - List available commands
- [`systemListMcpServers`](docs/sdks/system/README.md#listmcpservers) - List MCP servers
- [`toolsGetToolsStatus`](docs/sdks/tools/README.md#gettoolsstatus) - Get tools status

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.streaming.streamEvents({
    sessionId: "<id>",
  });

  for await (const event of result) {
    console.log(event);
  }
}

run();

```

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Mix } from "mix-typescript-sdk";
import { openAsBlob } from "node:fs";

const mix = new Mix();

async function run() {
  const result = await mix.files.upload({
    id: "<id>",
    requestBody: {
      file: await openAsBlob("example.file"),
    },
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix();

async function run() {
  const result = await mix.authentication.storeApiKey({
    apiKey: "<value>",
    provider: "openrouter",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
});

async function run() {
  const result = await mix.authentication.storeApiKey({
    apiKey: "<value>",
    provider: "openrouter",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`MixError`](./src/models/errors/mixerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Mix } from "mix-typescript-sdk";
import * as errors from "mix-typescript-sdk/models/errors";

const mix = new Mix();

async function run() {
  try {
    const result = await mix.authentication.storeApiKey({
      apiKey: "<value>",
      provider: "openrouter",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.MixError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorResponse) {
        console.log(error.data$.error); // models.RESTError
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`MixError`](./src/models/errors/mixerror.ts): The base class for HTTP error responses.
  * [`ErrorResponse`](./src/models/errors/errorresponse.ts): Generic error.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`MixError`](./src/models/errors/mixerror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Mix } from "mix-typescript-sdk";

const mix = new Mix({
  serverURL: "http://localhost:8088",
});

async function run() {
  const result = await mix.authentication.storeApiKey({
    apiKey: "<value>",
    provider: "openrouter",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Mix } from "mix-typescript-sdk";
import { HTTPClient } from "mix-typescript-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Mix({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Mix } from "mix-typescript-sdk";

const sdk = new Mix({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `MIX_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=openapi&utm_campaign=typescript)
