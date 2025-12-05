# Developer Study Repository

This repository contains the setup for a developer study on design system usage.

## Getting Started

1.  **Install Dependencies:**
    \`\`\`bash
    pnpm install
    \`\`\`

2.  **Run the App:**
    \`\`\`bash
    pnpm dev
    \`\`\`

3.  **Log Your Time:**
    Use the provided scripts to log the start and end time of each task.
    \`\`\`bash
    pnpm log:start task-1
    # ... work on task ...
    pnpm log:end task-1
    \`\`\`

## Design System Setup

The project supports Material UI, Carbon Design System, and Fluent UI.
**You must manually enable your assigned design system.**

1.  Open \`src/main.tsx\`.
2.  Uncomment the provider configuration for your assigned system.
3.  Save and check the app.

## Tasks

Tasks are located in \`src/tasks/\`. See [src/tasks/tasks.md](src/tasks/tasks.md) for an overview.
