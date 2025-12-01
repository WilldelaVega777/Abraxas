# Operational Guide & Protocols

This document serves as a "Source of Truth" for operational protocols, workarounds, and specific agent behaviors required to ensure smooth development within the Abraxas project.

## 1. Archon Connection Protocol (MCP Override)

**Status:** ACTIVE
**Date:** 2025-11-28
**Context:** The internal MCP client for Archon (port 8051) exhibits handshake instability (`connection closed: standalone SSE stream`) when communicating with the IDE.

### Protocol
**ALL** agents must bypass the `mcp0_*` tools for Archon interactions and instead use the direct REST API via `curl`.

**Endpoint:** `http://localhost:8181/api`

### Tool Replacements

| MCP Tool | Replacement Command (curl) |
|----------|----------------------------|
| `mcp0_health_check` | `curl -s http://localhost:8181/health` |
| `mcp0_find_projects` | `curl -s "http://localhost:8181/api/projects?query=..."` |
| `mcp0_find_tasks` | `curl -s "http://localhost:8181/api/tasks?project_id=..."` |
| `mcp0_manage_task` | `curl -X POST/PUT/DELETE http://localhost:8181/api/tasks/...` |
| `mcp0_manage_document` | `curl -X POST/PUT/DELETE http://localhost:8181/api/projects/{id}/docs/...` |
| `mcp0_rag_search_*` | `curl -s "http://localhost:8181/api/knowledge/search?query=..."` |

### Resolution Plan
This is a temporary workaround. The permanent fix involves refactoring the Python MCP server implementation (`python/src/mcp_server`) to handle SSE connections asynchronously and robustly.
