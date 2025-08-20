import { ToolArgs } from "./types"

export function getInsertContentDescription(args: ToolArgs): string {
	return `## insert_content
Description: Adds new lines of content into a file without modifying existing content. Simpler alternative to diff edits when adding imports, code blocks, log entries, etc.

Parameters:
- path (REQUIRED): relative path to file.
- line (REQUIRED): Positive number to insert before that line (1-based), or 0 to append at end of file.
- content (REQUIRED): text to insert.

Syntax:

<insert_content>
<path>src/module/index.tsx</path>
<line>number</line>
<content>Text to insert here</content>
</insert_content>`
}
