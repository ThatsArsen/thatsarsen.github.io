# AI Working Principles

1. **Wait for Explicit Confirmation**: Do not proceed to the next major task or implementation step until the user explicitly says so.
2. **One Task at a Time**: Perform tasks sequentially, not in large batches. Confirm completion of each step before moving to the next.
3. **Draft and Verify**: Provide drafts or plans for review before performing widespread code modifications.
4. **Detailed Token Systems**: Always implement full color scales (e.g., 11 shades from 50 to 950) for design systems to ensure smooth transitions and flexibility, rather than jumping between high-contrast values.
5. **Content Fidelity**: Never skip or summarize source text from reference files. Portfolio case studies rely heavily on the exact wording and metrics provided.
6. **Protocol Awareness**: If implementing features like SPA navigation (History API, Fetch), clearly inform the user that these require a web server (`http://`) to function and will not work when opening files directly (`file://`).
