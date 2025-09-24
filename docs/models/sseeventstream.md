# SSEEventStream

Server-Sent Event stream with discriminated event types


## Supported Types

### `models.SSECompleteEvent`

```typescript
const value: models.SSECompleteEvent = {
  event: "connected",
  id: "1234567890",
  retry: 30000,
  data: {
    done: false,
    type: "<value>",
  },
};
```

### `models.SSEConnectedEvent`

```typescript
const value: models.SSEConnectedEvent = {
  event: "summarize",
  id: "1234567890",
  retry: 30000,
  data: {
    sessionId: "<id>",
  },
};
```

### `models.SSEContentEvent`

```typescript
const value: models.SSEContentEvent = {
  event: "permission",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEErrorEvent`

```typescript
const value: models.SSEErrorEvent = {
  event: "tool_execution_start",
  id: "1234567890",
  retry: 30000,
  data: {
    error: "<value>",
  },
};
```

### `models.SSEHeartbeatEvent`

```typescript
const value: models.SSEHeartbeatEvent = {
  event: "tool_execution_complete",
  id: "1234567890",
  retry: 30000,
  data: {
    type: "ping",
  },
};
```

### `models.SSEPermissionEvent`

```typescript
const value: models.SSEPermissionEvent = {
  event: "summarize",
  id: "1234567890",
  retry: 30000,
  data: {
    action: "<value>",
    description: "deed or reflate huzzah",
    id: "<id>",
    sessionId: "<id>",
    toolName: "<value>",
    type: "<value>",
  },
};
```

### `models.SSESummarizeEvent`

```typescript
const value: models.SSESummarizeEvent = {
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    done: true,
    progress: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEThinkingEvent`

```typescript
const value: models.SSEThinkingEvent = {
  event: "connected",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEToolEvent`

```typescript
const value: models.SSEToolEvent = {
  event: "tool_execution_start",
  id: "1234567890",
  retry: 30000,
  data: {
    id: "<id>",
    input: "<value>",
    name: "<value>",
    status: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEToolExecutionCompleteEvent`

```typescript
const value: models.SSEToolExecutionCompleteEvent = {
  event: "complete",
  id: "1234567890",
  retry: 30000,
  data: {
    progress: "<value>",
    success: true,
    toolCallId: "<id>",
    toolName: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEToolExecutionStartEvent`

```typescript
const value: models.SSEToolExecutionStartEvent = {
  event: "permission",
  id: "1234567890",
  retry: 30000,
  data: {
    progress: "<value>",
    toolCallId: "<id>",
    toolName: "<value>",
    type: "<value>",
  },
};
```

