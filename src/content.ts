import { CLAUSES, README_SECTIONS, THEME_INDEX_INTRO, THEME_ORDER } from "./data";
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

/** Apply COPY.readMe.edits to a piece of spreadsheet text. */
export const siteText = (text: string) =>
  COPY.readMe.edits.reduce((t, e) => (t.includes(e.from) ? t.replace(e.from, e.to) : t), text);

/** The spreadsheet's Read Me First sections as the site shows them. */
export const READ_ME = README_SECTIONS.map((s) => ({
  heading: siteText(s.heading),
  original: s.heading,
  body: s.body.map(siteText),
}));

/** "Notes on Organization", which explains how a clause is laid out. */
export const NOTES_SECTION = READ_ME.find((s) => s.original === "Notes on Organization: Rows and Columns");

export const THEME_INDEX_INTRO_SITE = siteText(THEME_INDEX_INTRO);
