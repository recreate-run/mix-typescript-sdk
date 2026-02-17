# SSEEventStream

Server-Sent Event stream with discriminated event types


## Supported Types

### `models.SSECompleteEvent`

```typescript
const value: models.SSECompleteEvent = {
  event: "complete",
  id: "1234567890",
  retry: 30000,
  data: {
    done: true,
    type: "<value>",
  },
};
```

### `models.SSEConnectedEvent`

```typescript
const value: models.SSEConnectedEvent = {
  event: "connected",
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
  event: "content",
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
  event: "error",
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
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    type: "ping",
  },
};
```

### `models.SSENotificationEvent`

```typescript
const value: models.SSENotificationEvent = {
  event: "notification",
  id: "1234567890",
  retry: 30000,
  data: {
    createdAt: 808803,
    id: "<id>",
    message: "<value>",
    notificationType: "warning",
    responseType: "choice",
    sessionId: "<id>",
    timeout: 705877,
    title: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEPermissionEvent`

```typescript
const value: models.SSEPermissionEvent = {
  event: "permission",
  id: "1234567890",
  retry: 30000,
  data: {
    action: "<value>",
    description:
      "gee lashes sate far puff huzzah although considering railway incidentally",
    id: "<id>",
    sessionId: "<id>",
    toolName: "brave_search",
    type: "<value>",
  },
};
```

### `models.SSESessionCreatedEvent`

```typescript
const value: models.SSESessionCreatedEvent = {
  event: "session_created",
  id: "1234567890",
  retry: 30000,
  data: {
    createdAt: 86291,
    sessionId: "<id>",
    title: "<value>",
    type: "session_created",
  },
};
```

### `models.SSESessionDeletedEvent`

```typescript
const value: models.SSESessionDeletedEvent = {
  event: "session_deleted",
  id: "1234567890",
  retry: 30000,
  data: {
    sessionId: "<id>",
    type: "session_deleted",
  },
};
```

### `models.SSEThinkingEvent`

```typescript
const value: models.SSEThinkingEvent = {
  event: "thinking",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEToolExecutionCompleteEvent`

```typescript
const value: models.SSEToolExecutionCompleteEvent = {
  event: "tool_execution_complete",
  id: "1234567890",
  retry: 30000,
  data: {
    progress: "<value>",
    success: true,
    toolCallId: "<id>",
    toolName: "brave_search",
    type: "<value>",
  },
};
```

### `models.SSEToolExecutionStartEvent`

```typescript
const value: models.SSEToolExecutionStartEvent = {
  event: "tool_execution_start",
  id: "1234567890",
  retry: 30000,
  data: {
    progress: "<value>",
    toolCallId: "<id>",
    toolName: "brave_search",
    type: "<value>",
  },
};
```

### `models.SSEToolUseParameterDeltaEvent`

```typescript
const value: models.SSEToolUseParameterDeltaEvent = {
  event: "tool_use_parameter_delta",
  id: "1234567890",
  retry: 30000,
  data: {
    input: "<value>",
    toolCallId: "<id>",
    type: "<value>",
  },
};
```

### `models.SSEToolUseParameterStreamingCompleteEvent`

```typescript
const value: models.SSEToolUseParameterStreamingCompleteEvent = {
  event: "tool_use_parameter_streaming_complete",
  id: "1234567890",
  retry: 30000,
  data: {
    id: "<id>",
    input: "<value>",
    name: "brave_search",
    type: "<value>",
  },
};
```

### `models.SSEToolUseStartEvent`

```typescript
const value: models.SSEToolUseStartEvent = {
  event: "tool_use_start",
  id: "1234567890",
  retry: 30000,
  data: {
    id: "<id>",
    name: "brave_search",
    type: "<value>",
  },
};
```

### `models.SSEUserMessageCreatedEvent`

```typescript
const value: models.SSEUserMessageCreatedEvent = {
  event: "user_message_created",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    messageId: "<id>",
    type: "user_message_created",
  },
};
```

