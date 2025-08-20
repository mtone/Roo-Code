import { ToolArgs } from "./types"

export function getWriteToFileDescription(args: ToolArgs): string {
	return `## write_to_file
Description: Creates a new file or completely rewrite of an existing file. Automatically creates any directories needed to write the file.

Parameters:
- path (REQUIRED): relative path to file.
- content (REQUIRED): Text to write, without any truncation or omissions.
- line_count (REQUIRED): total number of lines in the file before writing including empty lines.

Syntax:
<write_to_file>
<path>src/module.index.tsx</path>
<content>Text to write here</content>
<line_count>Original number of lines</line_count>
</write_to_file>`
}
