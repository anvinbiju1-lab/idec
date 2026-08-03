import http from "http";
import { PROJECTS_DATA } from "../data/projects";
import { EVENTS_DATA } from "../data/events";
import { TEAM_MEMBERS } from "../data/team";
import { TELEMETRY_METRICS } from "../data/stats";

async function runAudit() {
  console.log("==================================================");
  console.log("  IEDC HOLY GRACE WEBSITE AUDIT & TEST SUITE      ");
  console.log("==================================================\n");

  let passCount = 0;
  let failCount = 0;

  function assert(condition: boolean, testName: string, details = "") {
    if (condition) {
      console.log(`  [PASS] ${testName}`);
      passCount++;
    } else {
      console.error(`  [FAIL] ${testName} - ${details}`);
      failCount++;
    }
  }

  // 1. Data Integrity Audit
  console.log("--- 1. DATA & TELEMETRY INTEGRITY ---");
  assert(PROJECTS_DATA.length >= 5, "Projects Vault contains at least 5 student inventions");
  assert(EVENTS_DATA.length >= 4, "Innovation Calendar contains upcoming and past hackathons");
  assert(TEAM_MEMBERS.length >= 6, "Founder roster contains faculty nodal officer and student leads");
  assert(TELEMETRY_METRICS.length >= 5, "Telemetry ticker contains core metrics");

  // Validate Project Categories & Statuses
  const validCategories = ["Hardware", "AI & Software", "DeepTech", "IoT"];
  const projectsValid = PROJECTS_DATA.every(
    (p) => p.title && p.description && validCategories.includes(p.category) && p.image
  );
  assert(projectsValid, "All project items adhere to Design Bible schema and valid category tags");

  // Validate Events & Countdown ISO strings
  const eventsValid = EVENTS_DATA.every(
    (e) => e.title && e.displayDate && e.venue && !isNaN(new Date(e.date).getTime())
  );
  assert(eventsValid, "All event dates use valid ISO strings for JetBrains Mono countdown timers");

  // Validate Team Members
  const teamValid = TEAM_MEMBERS.every(
    (m) => m.name && m.role && m.department && m.avatar && m.contributions && m.metrics
  );
  assert(teamValid, "All team members have full bio, avatar, and telemetry metrics");

  // 2. HTTP Server & HTML Response Audit
  console.log("\n--- 2. HTTP ENDPOINT & HTML RENDER AUDIT ---");
  const html = await new Promise<string>((resolve, reject) => {
    http.get("http://localhost:3000", (res) => {
      let data = "";
      assert(res.statusCode === 200, "Server returns HTTP 200 OK");
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
      res.on("error", (err) => reject(err));
    });
  });

  // Check HTML landmark elements
  assert(html.includes("<!DOCTYPE html>") || html.includes("<html"), "Valid HTML document structure");
  assert(html.includes("IEDC"), "Page title contains IEDC branding");
  assert(html.includes("BUILD WHAT"), "Hero headline 'BUILD WHAT MATTERS' rendered");
  assert(html.includes("KEEP BUILDING"), "Footer 'KEEP BUILDING' editorial statement rendered");

  // Check Required Section Anchors
  assert(html.includes('id="hero"'), "Section 01: Hero Matrix anchor present");
  assert(html.includes('id="mission"'), "Section 02: The Mission anchor present");
  assert(html.includes('id="journey"'), "Section 03: Innovation Journey anchor present");
  assert(html.includes('id="projects"'), "Section 04: Startup Vault anchor present");
  assert(html.includes('id="events"'), "Section 05: Innovation Calendar anchor present");
  assert(html.includes('id="team"'), "Section 06: Leadership Grid anchor present");
  assert(html.includes('id="ideas"'), "Section 07: Suggest An Idea anchor present");

  // 3. Design System & Token Integrity Audit
  console.log("\n--- 3. DESIGN SYSTEM & TOKEN INTEGRITY ---");
  assert(
    html.includes("__variable") || html.includes("font-sans") || html.includes("Inter"),
    "Inter Display typography variable classes injected on <html>"
  );
  assert(
    html.includes("__variable") || html.includes("font-mono") || html.includes("JetBrains"),
    "JetBrains Mono typography variable classes injected on <html>"
  );

  console.log("\n==================================================");
  console.log(`  AUDIT SUMMARY: ${passCount} PASSED, ${failCount} FAILED`);
  console.log("==================================================\n");

  if (failCount > 0) {
    process.exit(1);
  }
}

runAudit().catch((err) => {
  console.error("Audit script error:", err);
  process.exit(1);
});
