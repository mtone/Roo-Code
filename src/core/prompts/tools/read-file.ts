import { ToolArgs } from "./types"

export function getReadFileDescription(args: ToolArgs): string {
	const maxConcurrentReads = args.settings?.maxConcurrentFileReads ?? 5
	const isMultipleReadsEnabled = maxConcurrentReads > 1

	return `## read_file
Description: Request to read the contents of ${isMultipleReadsEnabled ? "one or more files" : "a file"}.

Parameters:
- path (REQUIRED): relative path to file.

1) Single file syntax:
<read_file>
	<path>src/module/index.tsx</path>
</read_file>

2) Multiple files syntax (preferred - up to ${maxConcurrentReads} files):
<read_file>
<args>
<file><path>src/App.tsx</path></file>
<file><path>src/helpers/index.ts</path></file>
</args>
</read_file>

Remarks:
- The tool outputs line-numbered content (e.g. "1 | const x = 1") for easy reference when creating diffs or discussing code.
`
}

//${args.partialReadsEnabled ? `<line_range>(optional) One or more line range elements in format "start-end" (1-based, inclusive)</line_range>` : ""}
