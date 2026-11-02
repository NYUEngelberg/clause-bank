import { CLAUSES, README_SECTIONS, THEME_ORDER } from "./data";
import { COPY } from "./copy";
import type { Clause } from "./data";

/** The companion document (the book) lives on Library Futures' publishing site. */
export const BOOK_URL = "https://pubs.libraryfutures.net/clausebank";
export const SPREADSHEET_FILE = "/Digital_Content_Licensing_Clause_Bank_20260714.xlsx";

export const clauseById = new Map(CLAUSES.map((c) => [c.id, c]));

export const themeSlug = (theme: string) =>
  theme.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const clausesByTheme: { theme: string; slug: string; clauses: Clause[] }[] = THEME_ORDER.map((theme) => ({
  theme,
  slug: themeSlug(theme),
  clauses: CLAUSES.filter((c) => c.theme === theme),
}));

/** Clause IDs as they appear in running text, e.g. GS-LG, TE-AC2. */
export const CLAUSE_ID_RE = /\b(?:GS|AC|FT|DP|RA|TE|DR|GC)-[A-Z0-9]+\b/g;

/** The spreadsheet's Read Me First sections as the site shows them (see COPY.readMe). */
export const READ_ME = README_SECTIONS.map((s) =>
  s.heading === "Notes on Organization: Rows and Columns"
    ? {
        heading: COPY.readMe.notesHeading,
        body: s.body.map((line, i) => (i === 0 && line.startsWith("Each row covers") ? COPY.readMe.notesIntro : line)),
      }
    : s
);
