/**
 * All wording on the site that does NOT come from the spreadsheet.
 * Edit text here; everything from the spreadsheet lives in src/data.ts.
 */
export const COPY = {
  site: {
    name: "Digital Content Licensing Clause Bank",
    headerLine1: "Digital Content",
    headerLine2: "Licensing Clause Bank",
  },

  nav: {
    find: "Find a clause",
    table: "Table",
    howTo: "How to Use",
    book: "Companion document",
    downloadButton: ".xlsx",
    download: "Download the spreadsheet (.xlsx)",
    menu: "Menu",
    skip: "Skip to content",
  },

  finder: {
    kicker: "Clause Bank",
    title: "Find a clause",
    searchPlaceholder: "Search by topic, ID, or word",
    allThemes: "All themes",
    anyArea: "Any area",
    highAndMedium: "High and Medium priority",
    highOnly: "High priority only",
    explainHighAndMedium: (p: string) =>
      `Clauses marked H (high priority) or M (medium priority) for ${p}.`,
    explainHighOnly: (p: string) => `Clauses marked H (high priority) for ${p}.`,
    countAll: (total: number) => `${total} clauses by theme`,
    countFiltered: (n: number, total: number) => `${n} of ${total} clauses`,
    clear: "Clear",
    noResults: "No clause contains all of those words. Try fewer words, or a clause ID like GS-AU.",
    panelHint: "Pick a clause to read it here",
    moreHowTo: "More on how to use the Clause Bank",
    back: "Back to results",
    notFound: (id: string) => `No clause with ID “${id}”.`,
    backToList: "Back to the list",
  },

  clause: {
    area: "Areas",
    high: "High priority",
    medium: "Medium priority",
    copy: "Copy",
    copied: "Copied",
    copyLink: "Copy link",
    linkCopied: "Link copied",
    inCompanion: "in the companion document",
  },

  table: {
    kicker: "Clause Bank",
    title: "Table",
    intro: (total: number) =>
      `All ${total} clauses in one table, with five priority columns. Filter by an area to get the shortlist for one need, or click a row to see the entire clause.`,
    priorityLink: "How the priority columns work",
    searchPlaceholder: "Search all text",
    allThemes: "All themes",
    area: "Area",
    highOnly: "High (H) priority only",
    showing: (n: number, total: number) => `Showing ${n} of ${total}`,
    clearFilters: "Clear filters",
    everyColumn: "Show every column (full clause text)",
    legendHigh: "high priority",
    legendMedium: "medium priority",
    hintSort: "Click an area heading to sort by it.",
    hintRow: "Click a row to read the full clause.",
    hintId: "Click a clause ID to open it.",
    openClause: "Open this clause",
    noMatches: "No clauses match these filters.",
  },

  // Changes to the spreadsheet's Read Me First and Theme Index text, as shown on
  // the site. The spreadsheet talks about rows, columns, tabs and colors that the
  // site doesn't have. Each "from" must match the spreadsheet text exactly once.
  // [[companion document]] becomes a link to the book.
  readMe: {
    edits: [
      { from: "Notes on Organization: Rows and Columns", to: "Notes on Organization" },
      {
        from: "Each row covers one topic likely to appear in a contract. Three columns show the same clause in three versions, arranged left to right in the order you will use them during a negotiation.",
        to: "Click on any clause in the list to see the same clause in three versions, arranged top to bottom in the order you will use them during a negotiation.",
      },
      {
        from: "It favors the vendor in ways the rest of the row will help you see.",
        to: "It favors the vendor in ways the other versions will help you see.",
      },
      { from: "The five rightmost columns flag which clauses", to: "The five areas flag which clauses" },
      {
        from: "For each clause, find the matching row in the Clause Bank tab.",
        to: "For each clause, find the matching clause in the Clause Bank.",
      },
      {
        from: "Compare the vendor's language to the Common Pro-Vendor Language column.",
        to: "Compare the vendor's language to the Common Pro-Vendor Language.",
      },
      {
        from: "If it goes farther than what is in this column, the language is more aggressive",
        to: "If it goes farther than the Common Pro-Vendor Language, the language is more aggressive",
      },
      {
        from: "map naturally to the considerations behind the priority columns",
        to: "map naturally to the considerations behind the five areas",
      },
      {
        from: "identify which clauses matter most for your library using the priority columns",
        to: "identify which clauses matter most for your library using the priority markers",
      },
      {
        from: "The colors in this sheet are for delineation only",
        to: "The colors in the downloadable spreadsheet are for delineation only",
      },
      {
        from: "This workbook is a general reference, not legal advice.",
        to: "This Clause Bank is a general reference, not legal advice.",
      },
      { from: "This workbook is designed to help you decide", to: "This Clause Bank is designed to help you decide" },
      {
        from: "the priority columns and the companion document help you weigh them",
        to: "the priority markers and the companion document help you weigh them",
      },
      {
        from: 'The "Watch For" column and the companion document flag',
        to: 'The "Watch For" section and the companion document flag',
      },
      {
        from: "The companion document (provided separately) explains the reasoning behind the suggested language",
        to: "The [[companion document]] explains the reasoning behind the suggested language",
      },
      {
        from: "The companion document explains the reasoning behind each clause",
        to: "The [[companion document]] explains the reasoning behind each clause",
      },
      {
        from: " The Getting Started Guide (provided separately) covers terminology, the negotiation method, and reading paths organized around library priorities.",
        to: "",
      },
      {
        from: "reference the separate Risk Assessment Scorecard",
        to: "reference the separate Risk Exposure Scorecard",
      },
      {
        from: "Use the Clause ID to find each clause in the Clause Bank tab.",
        to: "Click a clause to open it.",
      },
    ],
  },

  howTo: {
    // On How to Use there's no clause list beside the Notes, so point to where the clauses are.
    notesIntroFrom: "Click on any clause in the list",
    notesIntroTo: "Click on any clause in Find a clause or the Theme Index below",
    kicker: "From the Clause Bank spreadsheet",
    title: "How to Use",
    onThisPage: "On this page",
    importantLink: "Important",
  },

  footer: {
    published: "Published by",
    and: "and",
    explore: "Explore",
    book: "Companion document",
    notLegalAdvice: "Not legal advice",
  },
};
