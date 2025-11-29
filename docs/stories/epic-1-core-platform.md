# Epic 1: Core Platform & Infrastructure

**Description**: Foundation work for Abraxas: Rebranding, Docker isolation, and LiteLLM integration.

## Story 1.1: Rebranding & Isolation
**Description**: Transition the identity from Archon to Abraxas and ensure it can run alongside Archon without conflicts.

### Task 1.1.1: Rename Docker Containers
- **Description**: Update `docker-compose.yml` to prefix all service names and container names with `abraxas-`.
- **Acceptance Criteria**:
  - All containers start with `abraxas-` prefix (e.g., `abraxas-server`, `abraxas-db`).
  - `docker ps` shows distinct containers from Archon.

### Task 1.1.2: Port Configuration
- **Description**: Update `docker-compose.yml` and `config.py` to use the new port range (9000-9100).
- **Acceptance Criteria**:
  - Server listens on port 9000 (was 8000).
  - MCP server listens on port 9051 (was 8051).
  - Agents listen on port 9052 (was 8052).
  - No port conflicts when running `docker compose up` while Archon is also running.

### Task 1.1.3: Global Search/Replace
- **Description**: Replace "Archon" with "Abraxas" in user-facing strings, documentation, and relevant code namespaces.
- **Acceptance Criteria**:
  - UI Header shows "Abraxas".
  - Environment variables use `ABRAXAS_` prefix where appropriate.
  - *Note*: Be careful with shared libraries if any.

## Story 1.2: LiteLLM Integration
**Description**: Integrate LiteLLM as a centralized proxy for all LLM interactions to support multiple models and unify the API.

### Task 1.2.1: Add LiteLLM Service
- **Description**: Add a `litellm` service to `docker-compose.yml`.
- **Acceptance Criteria**:
  - LiteLLM container starts successfully.
  - Accessible at `http://localhost:9000` (or internal docker network alias).

### Task 1.2.2: Update Server Config
- **Description**: Modify `python/src/server/config.py` and LLM clients to point to the LiteLLM proxy.
- **Acceptance Criteria**:
  - Backend uses `OPENAI_API_BASE` pointing to LiteLLM.
  - API keys are managed via LiteLLM config or env vars.

### Task 1.2.3: Verify Model Support
- **Description**: Test the integration with GPT-4 and Claude 3.5 Sonnet.
- **Acceptance Criteria**:
  - Can successfully send a request to GPT-4 via Abraxas.
  - Can successfully send a request to Claude 3.5 Sonnet via Abraxas.
