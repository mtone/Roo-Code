import { ToolArgs } from "./types"

export function getNewTaskDescription(_args: ToolArgs): string {
	return `## new_task
Description: Create a new subtask instance in the chosen mode using your provided message.

<new_task>
<mode>The slug of the mode like "code", "debug", "architect" (required)</mode>
<message>Instructions with sufficient instructions and context to independently perform and return results of a task.</message>
</new_task>
`
}
