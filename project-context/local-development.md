# Local Development

From the repository root:

```powershell
npm.cmd install
npm.cmd run docs:dev
```

Open the local URL printed by VitePress, normally:

```text
http://localhost:5173/protforlio-site/
```

Stop the server with `Ctrl+C`.

## Production check

```powershell
npm.cmd run docs:build
npm.cmd run docs:preview
```

The build output is `.vitepress/dist`. Use the preview URL printed in the terminal to inspect the production build locally.

## Original reference template

The standalone HTML reference is not a VitePress page. Preview it with:

```powershell
npm.cmd run template:dev
```

Then open the URL printed in the terminal. This correctly serves `test-project/index.html` and its neighboring `1.jpg` and `2.jpg` assets.

## Notes

- Run commands from the repository root, not from `projects/`.
- If dependencies are already installed, `npm.cmd run docs:dev` is enough for everyday work.
- This machine's PowerShell execution policy blocks the `npm.ps1` shim, so use `npm.cmd`. In Command Prompt, plain `npm` also works.
- VitePress hot-reloads most Markdown, CSS, and theme edits while the dev server is running.
