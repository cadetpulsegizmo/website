// Vanity booking URL → MS Bookings URL mapping.
//
// To add a new subproject:
//   1. Add one line below in the shape `"code": "MS Bookings URL",`
//   2. Commit + push.
// The vanity URL becomes: https://ppresearch.co.uk/book/<code>
//
// Rules:
//   - Codes are lowercase. Users can type them in any case; the router
//     lowercases before lookup.
//   - Codes contain no PII (project codes only, never participant IDs).
//   - Query strings on the vanity URL (e.g. ?participantId=674) are
//     preserved and forwarded to the MS Bookings URL automatically.

window.BOOKING_LINKS = {

  // ─── Replace the URL below with the real MS Bookings URL for sc03.90 ───
  // Grab it from MS Bookings → Services → your service → "Copy link".
  "sc03.90": "https://outlook.office.com/book/ResearchInterviewTeamsCall@ppresearch.co.uk/?ismsaljsauthenabled",

  // Add more subprojects here, one per line, e.g.:
  // "sn01.60": "https://outlook.office.com/book/CanterburyResearch@ppresearch.co.uk/services/xxx",

};
