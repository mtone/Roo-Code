import { ToolArgs } from "./types"

/**
 * Prompt when todos are NOT required (default)
 */
const PROMPT_WITHOUT_TODOS = `## new_task
Description: Create a new subtask instance in the chosen mode using your provided message.

Parameters:
- mode: (required) The slug of the mode to start the new task in (e.g., "code", "debug", "architect").
- message: (required) The initial user message or instructions for this new task.

Usage:
<new_task>
<mode>The slug of the mode like "code", "debug", "architect" (required)</mode>
<message>Instructions with sufficient instructions and context to independently perform and return results of a task.</message>
</new_task>
`

/**
 * Prompt when todos ARE required
 */
const PROMPT_WITH_TODOS = `## new_task
Description: Create a new subtask instance in the chosen mode using your provided message and initial todo list.

Parameters:
- mode: (required) The slug of the mode to start the new task in (e.g., "code", "debug", "architect").
- message: (required) The initial user message or instructions for this new task.
- todos: (required) The initial todo list in markdown checklist format for the new task.

Usage:
<new_task>
<mode>your-mode-slug-here</mode>
<message>Your initial instructions here</message>
<todos>
[ ] First task to complete
[ ] Second task to complete
[ ] Third task to complete
</todos>
</new_task>
`

export function getNewTaskDescription(args: ToolArgs): string {
	const todosRequired = args.settings?.newTaskRequireTodos === true

	// Simply return the appropriate prompt based on the setting
	return todosRequired ? PROMPT_WITH_TODOS : PROMPT_WITHOUT_TODOS
}
