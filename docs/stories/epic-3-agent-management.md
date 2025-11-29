# Epic 3: Agent Management System

**Description**: Creation and management of AI Agents with Scoped MCPs.

## Story 3.1: Agent Definition
**Description**: Allow users to define custom AI agents with specific personas and roles.

### Task 3.1.1: Database Schema
- **Description**: Create `agents` table in Supabase.
- **Fields**: `id` (uuid), `name` (text), `role` (text), `system_prompt` (text), `icon` (text), `color` (text), `created_at`, `updated_at`.
- **Acceptance Criteria**:
  - Migration file created.
  - Migration applied successfully.

### Task 3.1.2: CRUD API
- **Description**: Implement REST endpoints for managing agents.
- **Endpoints**: `GET /api/agents`, `POST /api/agents`, `PUT /api/agents/{id}`, `DELETE /api/agents/{id}`.
- **Acceptance Criteria**:
  - Can create, read, update, and delete agents via API.

## Story 3.2: Scoped MCPs
**Description**: Limit the tools available to each agent to prevent context pollution.

### Task 3.2.1: Tool Scoping Schema
- **Description**: Update database to link agents to specific MCP tools.
- **Implementation**: `agent_tools` junction table or JSONB column `allowed_tools` in `agents`.
- **Acceptance Criteria**:
  - Can store list of allowed tools for an agent.

### Task 3.2.2: Dynamic MCP Router
- **Description**: Refactor `mcp_server` to expose agent-specific endpoints.
- **Implementation**: `/mcp/{agent_id}/list_tools` should only return allowed tools.
- **Acceptance Criteria**:
  - `BackendAgent` sees only backend tools.
  - `FrontendAgent` sees only frontend tools.

### Task 3.2.3: Agent Creator UI
- **Description**: Create a React interface for building agents.
- **Acceptance Criteria**:
  - Form to input name, role, prompt.
  - Multi-select interface for available MCP tools.
