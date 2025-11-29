# Epic 5: Agent Work Orders (Pilot)

**Description**: Implementation of SSE and Zustand patterns for Agent Work Orders.

## Story 5.1: SSE Implementation
**Description**: Enable real-time updates via Server-Sent Events.

### Task 5.1.1: Backend SSE
- **Description**: Verify and harden `GET /api/agent-work-orders/{id}/logs/stream`.
- **Acceptance Criteria**:
  - Stream sends `workflow_started`, `step_started`, `step_completed` events.
  - Handles client disconnects gracefully.

### Task 5.1.2: SSE Slice
- **Description**: Implement `createSSESlice` in Zustand.
- **Reference**: `PRPs/ai_docs/AGENT_WORK_ORDERS_SSE_AND_ZUSTAND.md`.
- **Acceptance Criteria**:
  - Manages EventSource connections.
  - Auto-reconnect logic works.
  - Updates `liveLogs` and `liveProgress` state.

## Story 5.2: Zustand Migration
**Description**: Migrate state management to Zustand v4 following strict standards.

### Task 5.2.1: Store Setup
- **Description**: Create `agentWorkOrdersStore.ts` combining `uiPreferences`, `modals`, `filters`, and `sse` slices.
- **Acceptance Criteria**:
  - Store is created with `create<AgentWorkOrdersStore>()(...)`.
  - Persist middleware configured for UI prefs only.

### Task 5.2.2: Migrate Components
- **Description**: Refactor components to use the new store.
- **Components**: `AgentWorkOrdersView`, `RealTimeStats`, `WorkOrderRow`.
- **Acceptance Criteria**:
  - No local `useState` for global preferences.
  - No prop drilling for modals.
  - Components subscribe only to needed slices.
