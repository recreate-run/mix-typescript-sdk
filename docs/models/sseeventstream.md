# SSEEventStream

Server-Sent Event stream with discriminated event types


## Supported Types

### `models.SSEConnectedEvent`

```typescript
const value: models.SSEConnectedEvent = {
  event: "session_deleted",
  id: "1234567890",
  retry: 30000,
  data: {
    sessionId: "<id>",
  },
};
```

### `models.SSEHeartbeatEvent`

```typescript
const value: models.SSEHeartbeatEvent = {
  event: "user_message_created",
  id: "1234567890",
  retry: 30000,
  data: {
    type: "ping",
  },
};
```

### `models.SSEErrorEvent`

```typescript
const value: models.SSEErrorEvent = {
  event: "tool_execution_complete",
  id: "1234567890",
  retry: 30000,
  data: {
    error: "<value>",
  },
};
```

### `models.SSECompleteEvent`

```typescript
const value: models.SSECompleteEvent = {
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    done: false,
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

### `models.SSEContentEvent`

```typescript
const value: models.SSEContentEvent = {
  event: "session_created",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEToolUseStartEvent`

```typescript
const value: models.SSEToolUseStartEvent = {
  event: "tool_use_parameter_delta",
  id: "1234567890",
  retry: 30000,
  data: {
    id: "<id>",
    name: "brave_search",
    type: "<value>",
  },
};
```

### `models.SSEToolUseParameterStreamingCompleteEvent`

```typescript
const value: models.SSEToolUseParameterStreamingCompleteEvent = {
  event: "content",
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

### `models.SSEToolUseParameterDeltaEvent`

```typescript
const value: models.SSEToolUseParameterDeltaEvent = {
  event: "tool_use_parameter_streaming_complete",
  id: "1234567890",
  retry: 30000,
  data: {
    input: "<value>",
    toolCallId: "<id>",
    type: "<value>",
  },
};
```

### `models.SSEToolExecutionStartEvent`

```typescript
const value: models.SSEToolExecutionStartEvent = {
  event: "user_message_created",
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

### `models.SSEToolExecutionCompleteEvent`

```typescript
const value: models.SSEToolExecutionCompleteEvent = {
  event: "content",
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

### `models.SSEPermissionEvent`

```typescript
const value: models.SSEPermissionEvent = {
  event: "session_deleted",
  id: "1234567890",
  retry: 30000,
  data: {
    action: "<value>",
    description: "deed or reflate huzzah",
    id: "<id>",
    sessionId: "<id>",
    toolName: "brave_search",
    type: "<value>",
  },
};
```

### `models.SSENotificationEvent`

```typescript
const value: models.SSENotificationEvent = {
  event: "user_message_created",
  id: "1234567890",
  retry: 30000,
  data: {
    createdAt: 481102,
    id: "<id>",
    message: "<value>",
    notificationType: "question",
    responseType: "choice",
    sessionId: "<id>",
    timeout: 715610,
    title: "<value>",
    type: "<value>",
  },
};
```

### `models.SSEUserMessageCreatedEvent`

```typescript
const value: models.SSEUserMessageCreatedEvent = {
  event: "thinking",
  id: "1234567890",
  retry: 30000,
  data: {
    content: "<value>",
    messageId: "<id>",
    type: "user_message_created",
  },
};
```

### `models.SSESessionCreatedEvent`

```typescript
const value: models.SSESessionCreatedEvent = {
  event: "heartbeat",
  id: "1234567890",
  retry: 30000,
  data: {
    createdAt: 419339,
    sessionId: "<id>",
    title: "<value>",
    type: "session_created",
  },
};
```

### `models.SSESessionDeletedEvent`

```typescript
const value: models.SSESessionDeletedEvent = {
  event: "session_created",
  id: "1234567890",
  retry: 30000,
  data: {
    sessionId: "<id>",
    type: "session_deleted",
  },
};
```

