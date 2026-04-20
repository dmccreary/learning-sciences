# Avoiding Silly Approval Prompts

**Date added:** 2026-04-20
**File modified:** `.claude/settings.local.json` (gitignored, personal overrides)

## Context

During the chapter 6-15 generation run, per-call approval prompts for trivially-reversible actions added roughly 20 hours of wall-clock friction. The operations in question were all either read-only or writing to git-tracked files that can be reverted with a single `git checkout`. Given the repo is pushed to GitHub, none of them carried real risk.

## Rules added

Six rules appended to the `permissions.allow` array in `.claude/settings.local.json`:

| Rule | What it allows | Why it's safe |
|------|---------------|---------------|
| `Write(/Users/dan/Documents/ws/learning-sciences/**)` | Claude can write any file under the repo without prompting | Every write lands in a git-tracked directory; `git checkout -- <file>` reverts. Repo is pushed to GitHub. |
| `Edit(/Users/dan/Documents/ws/learning-sciences/**)` | Claude can edit any file under the repo without prompting | Same rationale as Write. |
| `Bash(wc:*)` | `wc -w`, `wc -l`, etc. | Read-only. Cannot modify anything. |
| `Bash(date:*)` | `date`, `date +%s`, etc. | Read-only. Cannot modify anything. |
| `Bash(ls:*)` | `ls`, `ls -la`, etc. | Read-only. Cannot modify anything. |
| `Bash(grep:*)` | `grep`, `grep -c`, etc. | Read-only. Note: the dedicated `Grep` tool is preferred but `bash grep` still appears in verification commands. |

## What is NOT allowed

These still require approval (intentionally):

- Write/Edit **outside** `/Users/dan/Documents/ws/learning-sciences/` — e.g., memory files under `~/.claude/`, other projects under `/Users/dan/Documents/ws/<other-repo>/`
- Any other Bash command (git, mkdocs, python, curl, rm, mv, cp, sed, awk, etc.)
- WebFetch to arbitrary URLs
- Subagent-internal tool calls that exceed their own permission scope

Git operations (commit, push, force-push, reset, checkout) deliberately remain un-auto-approved — these are the genuinely destructive or shared-state operations where a per-call prompt is warranted.

## How to revoke

If any of these rules turn out to be too broad:

1. Open `.claude/settings.local.json` and remove the offending line from the `allow` array, OR
2. Run `/permissions` in Claude Code and toggle the rule off.

The file is in `.gitignore` so these personal preferences don't leak into the team repo.

## Lesson for future projects

Per the Claude Code system prompt's own guidance: *"you can freely take local, reversible actions like editing files or running tests."* A git-tracked file edit is the textbook example of reversible. Front-load these rules in any new project to avoid the same friction.

## Rule added separately in this session

A seventh rule was appended by the harness itself after a permission check:

- `Bash(python3 -c "import json; json.load(open('/Users/dan/Documents/ws/learning-sciences/.claude/settings.local.json'))")` — validating the settings file's JSON syntax. Narrow one-off; harmless.
