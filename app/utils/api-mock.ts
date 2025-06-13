export const mockMeetingDetails = [
  {
    summary:
      "The team discussed a hackathon project proposal by Kartikeya Mishra: building an AI-powered tool to automate meeting summaries, to-do lists, and Jira ticket creation directly from Zoom meeting transcripts. Tasks were delegated among team members to handle backend integration (Jira), automated transcript retrieval, AI-powered processing, and frontend development.",
    title: "Hackathon Kickoff: AI-Powered Meeting Automation Planning",
    attendees: [
      "Kartikeya Mishra",
      "Salazar, Arturo",
      "Campbell, Spencer",
      "Eric",
    ],
    meetingNotes: [
      {
        topic: "Meeting Pain Point and Hackathon Idea",
        summary:
          "Kartikeya shared his pain point about note-taking during meetings, leading to missing important information. He proposed using AI to automate note-taking and Jira ticket creation.",
      },
      {
        topic: "Project Structure and Team Assignments",
        summary:
          "Major split of responsibilities for the hackathon project decided: Backend for Jira integration to Arturo, Zoom transcript automation to Spencer, Zoom-OpenAI integration to Kartikeya, and frontend to Eric. App concept covers end-to-end meeting documentation and action extraction.",
      },
    ],
    actionItems: [
      {
        title: "Implement Jira Ticket Creation Backend",
        description:
          "Explore and implement the use of Jira APIs to enable creating Jira tickets from the backend service. Kartikeya will send more information if needed.",
        assignee: "Salazar, Arturo",
      },
      {
        title: "Integrate Automatic Zoom Transcript Retrieval",
        description:
          "Investigate how to enable automatic retrieval of Zoom meeting transcripts without manual intervention.",
        assignee: "Campbell, Spencer",
      },
      {
        title: "Integrate Zoom Transcript Processing and OpenAI",
        description:
          "Work on integrating Zoom transcripts with OpenAI API to generate meeting summaries, to-do lists, and call backend APIs for Jira ticket creation.",
        assignee: "Kartikeya Mishra",
      },
      {
        title: "Develop Front End for Meeting Archive",
        description:
          "Start looking into the front end implementation where users can view past meetings, summaries, and Jira tickets, and search through them.",
        assignee: "Eric",
      },
    ],
    jiras: [
      {
        title: "Automate Jira Ticket Creation via API",
        description:
          "Enable automated creation of Jira tickets based on meeting action items through the Jira API in the backend.",
        assignee: "Salazar, Arturo",
        acceptanceCriteria:
          "Given meeting details in the app, when users choose to generate Jira tickets, then a Jira ticket should be created through the Jira API and its status should be viewable in the app.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10045",
      },
      {
        title: "Zoom Transcript Auto-Retrieval",
        description:
          "Implement automatic collection of Zoom meeting transcripts to be used in downstream processing.",
        assignee: "Campbell, Spencer",
        acceptanceCriteria:
          "Given a Zoom meeting has ended, when the transcript is available, the system should automatically retrieve and store it without manual intervention.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10046",
      },
      {
        title: "AI Meeting Summary and Action Automation",
        description:
          "Integrate the processing of Zoom transcripts with OpenAI to generate useful meeting documentation and trigger Jira ticket automation.",
        assignee: "Kartikeya Mishra",
        acceptanceCriteria:
          "Given a Zoom transcript, when it is processed by OpenAI, generate a meeting summary, a list of action items, and make API calls to create Jira tickets as appropriate.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10047",
      },
      {
        title: "Frontend for Meeting History and Search",
        description:
          "Develop frontend features for viewing, browsing, and searching meeting history, summaries, and associated Jira tickets.",
        assignee: "Eric",
        acceptanceCriteria:
          "Given past meetings and their associated data, when users access the UI, they should be able to browse and search past meeting summaries, notes, and Jira tickets.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10048",
      },
    ],
    transcript:
      "{\"transcript\": \"WEBVTT\\n1\\nKartikeya Mishra: Hey? Guys, good morning.\\n2\\nSalazar, Arturo: Good morning!\\n3\\nKartikeya Mishra: Yeah. So I just wanted to have this quick meeting before the hackathon. So I have this idea that we can use for the hackathon. So in the past, like few months especially, I feel like I've been spending a lot of times in meetings, and a lot of times I find myself in the situation where I get busy taking notes, and then I miss what someone said.\\n4\\nKartikeya Mishra: So I hate having to keep track of 2 things at the same time. So I thought, why not like use the power of AI to like have an app that'll do some something similar for us.\\n5\\nKartikeya Mishra: So the way I have figured it right now, there's like 3.\\n6\\nKartikeya Mishra: There's 3 major parts to the back end.\\n7\\nKartikeya Mishra: So basically, Arturo, I want you to look into being able to create Jira tickets, if like, from from an Api. So I will send you all the information that you need.\\n8\\nKartikeya Mishra: and you need to be able to find a way to use a jira apis to create tickets.\\n9\\nKartikeya Mishra: Spencer, can you look into how we can integrate and get Zoom transcripts automatically without having to manually go somewhere, and then I can look into the integration of the Zoom Transcript\\n10\\nKartikeya Mishra: and integrating it with openai, which will basically\\n11\\nKartikeya Mishra: summarize the meeting for us, create all the to do lists, and also call Arturo's Backend Apis to create Jira tickets for us.\\n12\\nKartikeya Mishra: After that, once we have all of this information. We will store it in a database, and our Ui will be able to basically show the user all all the past meetings up to a certain time.\\n13\\nKartikeya Mishra: and then user will be able to search and look up all the all the meeting summary notes the jira's that were created whenever they want.\\n14\\nKartikeya Mishra: So I can have Eric look into the front end side of things.\\n15\\nKartikeya Mishra: And yeah, I think I think that's a good start.\\n16\\nCampbell, Spencer: And we can go from there. Sounds good, good.\\n17\\nKartikeya Mishra: Alright. Thank you. Guys.\\n18\\nSalazar, Arturo: Thank you.\\n19\\nCampbell, Spencer: Cheers.\"}",
    meetingTime: "2025-06-13T14:36:39.595442429",
  },
  {
    summary:
      "This sprint planning meeting covered engineering bandwidth, prioritized backlog items (notably, improving the bulk import tool and fixing webhook retries), planned QA support for a marketing event, and coordination on A/B test analysis. Key technical stories and hand-offs were clarified, along with next actions. Sprint retro is set for next Thursday at 2pm.",
    title:
      "Sprint Planning Meeting - Bulk Import Tool, Demo QA, and Prioritization",
    attendees: [
      "Sarah (Project Manager)",
      "Priya (Engineering Lead)",
      "David (Marketing Lead)",
      "Alex (Customer Success Manager)",
    ],
    meetingNotes: [
      {
        topic: "Engineering Bandwidth",
        summary:
          "Engineering is at 80% capacity. Priya and Jon will be out Thursday; focus is on features over bug fixes this sprint.",
      },
      {
        topic: "Demo Environment Support",
        summary:
          "Development will provide half a day for QA of the demo environment to support Marketing's upcoming webinar.",
      },
      {
        topic: "Bulk Import Tool Validation",
        summary:
          "Bulk import tool has a recurring issue due to malformed CSV uploads. Enhancements to validation and error feedback are prioritized as critical.",
      },
      {
        topic: "A/B Test Analysis",
        summary:
          "Engineering will coordinate with Data Science to analyze recent homepage A/B test data.",
      },
      {
        topic: "Sprint Backlog Prioritization",
        summary:
          "Eighth story can be supported, but ninth would require dropping another item. Webhook retries fix is prioritized to unblock a key partner integration.",
      },
      {
        topic: "Sprint Planning & Scheduling",
        summary:
          "Story point estimations will be shared by noon. Sprint retro is scheduled for next Thursday at 2pm.",
      },
    ],
    actionItems: [
      {
        title: "QA the demo environment",
        description:
          "Allocate a half-day for QA on the demo environment to support the upcoming webinar.",
        assignee: "Priya",
      },
      {
        title: "Improve bulk import tool validation",
        description:
          "Prioritize improved validation and in-line error feedback in the bulk import tool.",
        assignee: "Priya",
      },
      {
        title: "Coordinate A/B test analysis with Data Science",
        description:
          "Sync with Data Science team to analyze homepage A/B test clickthroughs, and book meeting mid-sprint.",
        assignee: "Priya",
      },
      {
        title: "Send story point estimates",
        description:
          "Send story point estimations for current sprint to team by noon.",
        assignee: "Priya",
      },
    ],
    jiras: [
      {
        title: "Improve Bulk Import Tool Validation",
        description:
          "Enhance the bulk import tool to better validate input CSVs and provide user-friendly in-line error feedback.",
        assignee: "Priya",
        acceptanceCriteria:
          "Bulk import tool provides clear validation errors and inline feedback when uploading malformed CSVs.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10037",
      },
      {
        title: "Fix Webhook Retries for Partner Integration",
        description:
          "Ensure webhook retries function accurately, resolving errors that block key partner integrations.",
        assignee: "Priya",
        acceptanceCriteria:
          "Webhook retries work reliably to support partner integrations; pass acceptance tests by QA.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10038",
      },
      {
        title: "QA Demo Environment",
        description:
          "QA the demo environment for stability and functionality in support of the mid-sprint webinar.",
        assignee: "Priya",
        acceptanceCriteria:
          "Demo environment is QA’d and ready before the scheduled webinar event.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10039",
      },
      {
        title: "Analyze Homepage A/B Test Results",
        description:
          "Coordinate with Data Science to analyze and present homepage A/B test data to Marketing team.",
        assignee: "Priya",
        acceptanceCriteria:
          "A/B test clickthrough data is shared and discussed with Marketing and Data Science.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10040",
      },
    ],
    transcript:
      "[00:00:00] Sarah (Project Manager):\n\nLet’s go through the sprint backlog. Priya, how’s Engineering bandwidth?\n\n[00:00:06] Priya (Engineering Lead):\n\nWe’re at 80% capacity. Priya and Jon are out Thursday, so we’re prioritizing features over bug fixes this sprint.\n\n[00:00:16] David (Marketing Lead):\n\nCan we lock in dev support for the demo environment? We’re prepping for a webinar mid-sprint.\n\n[00:00:23] Priya:\n\nWe can allocate a half-day to QA that environment.\n\n[00:00:27] Alex (Customer Success Manager):\n\nSupport flagged a recurring issue with the bulk import tool—users keep uploading malformed CSVs.\n\n[00:00:35] Priya:\n\nWe can prioritize better validation and in-line error feedback.\n\n[00:00:41] Sarah:\n\nOkay. Let’s tag that as “critical” for this sprint. What’s next?\n\n[00:00:47] David:\n\nAlso, the homepage A/B test went live last week—would love Eng support analyzing clickthroughs.\n\n[00:00:53] Priya:\n\nLet’s sync with Data Science mid-sprint. I’ll book time.\n\n[00:00:59] Sarah:\n\nWe’ve got eight stories scoped so far. Priya, can your team handle a ninth?\n\n[00:01:05] Priya:\n\nOnly if we de-prioritize the webhook retries fix. Your call.\n\n[00:01:10] Alex:\n\nActually, that webhook fix would unblock a key partner integration.\n\n[00:01:15] Sarah:\n\nThen we’ll keep it. David, we’ll table the ninth story for next sprint.\n\n[00:01:22] David:\n\nNo problem. Let’s get it on the roadmap for next month.\n\n[00:01:26] Sarah:\n\nEveryone good with story point estimations?\n\n[00:01:30] Priya:\n\nYep, I’ll send ours by noon.\n\n[00:01:33] Sarah:\n\nGreat. Sprint retro next Thursday at 2—don’t forget!",
    meetingTime: "2025-06-13T02:25:39.271726594",
  },
  {
    summary:
      "A go/no-go launch checklist meeting where all teams confirmed readiness: marketing assets and emails are prepared, engineering tests are complete and fallback is tested, customer support materials are live, and analytics tagging is verified. Action items include preparing a UX dry-run demo, onboarding walkthrough, running a pre-launch internal bug bash, and ensuring critical changes are promptly communicated. The final checklist will be distributed by the PM this afternoon.",
    title: "Go/No-Go Launch Checklist Review",
    attendees: [
      "Sarah (Project Manager)",
      "David (Marketing Lead)",
      "Priya (Engineering Lead)",
      "Alex (Customer Success Manager)",
    ],
    meetingNotes: [
      {
        topic: "Marketing Readiness",
        summary:
          "All scheduled marketing assets loaded and approved for release. Launch emails queued up 48 and 24 hours pre-launch.",
      },
      {
        topic: "Engineering Readiness & Fallback Prep",
        summary:
          "Performance and reliability tests passed. SREs are on call for 24 hours after launch. Fallback path is now a one-click toggle and has been tested. Monitoring third-party API status actively.",
      },
      {
        topic: "Customer Success Prep",
        summary:
          "Customer support materials and onboarding video are finalized and live. Zendesk macros prepared for top questions.",
      },
      {
        topic: "Go/No-Go Meeting Preparation",
        summary:
          "Dry-run demo and onboarding walkthrough to be included on go/no-go agenda, with staging data used for demonstration.",
      },
      {
        topic: "Analytics Readiness",
        summary:
          "Analytics tagging (GTM, Mixpanel) QA completed and working as intended for all marketing channels.",
      },
      {
        topic: "Bug Bash",
        summary:
          "Internal bug bash scheduled for Friday at noon; open to all team members.",
      },
      {
        topic: "Issue Escalation Process",
        summary:
          "If any issues arise before Monday, escalate to Sarah and post in the launch Slack channel.",
      },
    ],
    actionItems: [
      {
        title: "Distribute Final Checklist",
        description:
          "Send out the final go/no-go checklist to the team this afternoon.",
        assignee: "Sarah",
      },
      {
        title: "Prepare UX Dry-run Demo",
        description:
          "Set up a dry-run demo walkthrough of the user experience in staging for the upcoming go/no-go meeting.",
        assignee: "Priya",
      },
      {
        title: "Prepare Onboarding Journey Demo",
        description:
          "Set up a demo of the onboarding journey using staging data for the go/no-go meeting.",
        assignee: "Priya",
      },
      {
        title: "Confirm Analytics Tagging",
        description:
          "Ensure all marketing channels are tracked and analytics tagging is functioning post-launch.",
        assignee: "David",
      },
      {
        title: "Conduct Internal Bug Bash",
        description:
          "Host an internal bug bash session on Friday at noon; invite all team members to participate.",
        assignee: "Priya",
      },
      {
        title: "Escalate Critical Changes",
        description:
          "If anything critical changes before launch on Monday, notify Sarah directly and log the issue in the launch Slack channel.",
        assignee: "All",
      },
    ],
    jiras: [
      {
        title: "Go/No-Go Final Checklist",
        description:
          "Draft and circulate the final go/no-go checklist for stakeholders' review and alignment.",
        assignee: "Sarah",
        acceptanceCriteria:
          "A detailed checklist is created and distributed to all stakeholders before launch.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10030",
      },
      {
        title: "Launch Experience and Onboarding Demo",
        description:
          "Prepare a staging-based dry-run demo of the user experience and onboarding for the go/no-go meeting.",
        assignee: "Priya",
        acceptanceCriteria:
          "Demo runs successfully in staging and demonstrates end-to-end user journey for launch-day scenarios.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10031",
      },
      {
        title: "Analytics Tagging Verification",
        description:
          "QA and confirm all analytics tracking tags are implemented and firing across marketing and product touchpoints.",
        assignee: "David",
        acceptanceCriteria:
          "All desired analytics tags (GTM, Mixpanel) are present and capturing data from all relevant marketing and in-app channels post-launch.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10032",
      },
      {
        title: "Pre-launch Bug Bash",
        description:
          "Plan and conduct an internal bug bash with cross-functional team participation.",
        assignee: "Priya",
        acceptanceCriteria:
          "An internal bug bash occurs before launch; all critical bugs are identified and tracked for resolution.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10033",
      },
    ],
    transcript:
      "[00:00:00] Sarah (Project Manager):\n\nMorning, team. Today’s focus is the go/no-go checklist. Let’s make sure we’ve tied up every loose end before Monday.\n\n[00:00:08] David (Marketing Lead):\n\nMarketing-wise, all scheduled assets are loaded into our CMS. Emails are queued for release at T-minus 48 and 24 hours. Final copy was approved last night.\n\n[00:00:20] Priya (Engineering Lead):\n\nEngineering is on track. Final performance and reliability tests passed. I’ve briefed our SREs—they’ll be online for the full 24-hour post-launch window.\n\n[00:00:32] Alex (Customer Success Manager):\n\nCustomer support materials are finalized. The updated onboarding video is live, and we’ve updated macros in Zendesk for the top 5 expected questions.\n\n[00:00:45] Sarah:\n\nThat’s great to hear. How’s our fallback readiness if the third-party API has downtime?\n\n[00:00:51] Priya:\n\nWe’ve tested the fallback in staging. It's a one-click toggle now. We’ll continue monitoring their status page and Slack channel for alerts.\n\n[00:01:02] David:\n\nIf we need to pivot, we’ve drafted emergency comms—email, in-app banner, and a tweet. It’s all templated and ready.\n\n[00:01:14] Sarah:\n\nPerfect. Let’s also make sure the go/no-go meeting agenda includes time for a dry-run demo of the user experience.\n\n[00:01:23] Alex:\n\nGood idea. We could also do a walk-through of the onboarding journey. First impressions are huge.\n\n[00:01:32] Priya:\n\nI can set that up with staging data. Shouldn’t take more than five minutes during the call.\n\n[00:01:38] David:\n\nCan we add a line item to confirm analytics tagging? I want to be sure all marketing channels are tracked post-launch.\n\n[00:01:46] Priya:\n\nAlready QA’d it this morning—Google Tag Manager and Mixpanel are firing correctly.\n\n[00:01:54] Sarah:\n\nThanks, Priya. One last thing: If anything changes between now and Monday, ping me directly and log it in our launch Slack channel.\n\n[00:02:03] Alex:\n\nShould we do one last internal bug bash before Friday?\n\n[00:02:07] Priya:\n\nWe’re doing that tomorrow at noon. Everyone's welcome to join and break stuff.\n\n[00:02:13] David:\n\nI’ll block my calendar.\n\n[00:02:16] Sarah:\n\nAwesome. I’ll send the final checklist out this afternoon. Let’s stay sharp—this is the home stretch!\n\n[00:02:24] Team:\n\n(All): Got it, thanks!\n\n",
    meetingTime: "2025-06-13T02:22:35.003031983",
  },
  {
    summary:
      "The meeting consisted of a conversation regarding the social skills and EQ of students at business schools (Kellogg and Booth). An action item was assigned to Tessa to interview Booth students and assess their EQ and social skills.",
    title: "Discussion on Social Skills and EQ at Business Schools",
    attendees: ["Kartikeya Mishra", "Tessa"],
    meetingNotes: [
      {
        topic: "Social skills and EQ research in business schools",
        summary:
          "Discussion about the perceived lack of social skills among Kellogg and Booth students. Suggestion that Tessa should conduct interviews with Booth students to assess their EQ and social skills.",
      },
    ],
    actionItems: [
      {
        title: "Interview Booth students about EQ and social skills",
        description:
          "Interview various Booth students to assess their EQ and social skills.",
        assignee: "Tessa",
      },
    ],
    jiras: [
      {
        title: "Research EQ and social skills among Booth students",
        description:
          "Understand the EQ and social skill levels among Booth students through direct interviews.",
        assignee: "Tessa",
        acceptanceCriteria:
          "Tessa will conduct interviews with multiple Booth students and summarize their EQ and social skills.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10041",
      },
    ],
    transcript:
      "{\"transcript\": \"WEBVTT\\n1\\nKartikeya Mishra: Yeah, like they have.\\n2\\nKartikeya Mishra: I'm testing my application, go keep going. They have 0 social skills.\\n3\\nKartikeya Mishra: Oh, so basically, people at Kellogg have no social skills.\\n4\\nKartikeya Mishra: Oh, yeah, I mean, yeah, at boot. Yeah, okay, that's what I meant\\n5\\nKartikeya Mishra: you should. Your task should be to go. Tessa's task should be to go and interview a lot of like different Booth people and see what there's\\n6\\nKartikeya Mishra: Eq. And social skills are.\\n7\\nKartikeya Mishra: Oh, fair enough.\"}",
    meetingTime: "2025-06-13T02:26:50.107265041",
  },
  {
    summary:
      "The team discussed implementing a 'Saved Search' feature to allow users to save and reuse search filters. Backend, frontend, UX, and QA considerations were defined, deliverable deadlines set, and action items assigned. Security, testing, and telemetry were also addressed for a robust rollout next sprint.",
    title: "Saved Search Feature Kickoff Meeting",
    attendees: [
      "Emma (PM)",
      "Raj (Tech Lead)",
      "Jessica (Designer)",
      "Daniel (Backend Engineer)",
      "Lisa (QA)",
    ],
    meetingNotes: [
      {
        topic: "Saved Search Feature Overview",
        summary:
          "Introduction of feature and the need for users to reuse search filters. Discussion on requirements and impact.",
      },
      {
        topic: "Architecture & Responsibilities",
        summary:
          "Backend will store user-defined filters; frontend will have new UI elements. Designers and engineers agree on responsibilities and deliverables.",
      },
      {
        topic: "QA & Security Considerations",
        summary:
          "QA will cover normal and edge cases, and security (unauthorized access, malformed filters).",
      },
      {
        topic: "Timeline & Deliverables",
        summary:
          "Design and backend schema deadlines set. Timeline for backend prototype and frontend QA build determined. UAT and beta staging scheduled.",
      },
      {
        topic: "Telemetry & Task Recap",
        summary:
          "Telemetry added for monitoring usage. Action items and Jira tickets summarized for accountability.",
      },
    ],
    actionItems: [
      {
        title: "Prepare UI mockups",
        description:
          "Create mockups for UI changes: Save Search button and Saved Searches dropdown.",
        assignee: "Jessica",
      },
      {
        title: "Propose backend schema",
        description:
          "Draft and share the saved_searches database schema proposal.",
        assignee: "Daniel",
      },
      {
        title: "Backend prototype",
        description:
          "Implement backend services and endpoints to support saving and retrieving user search filters.",
        assignee: "Daniel",
      },
      {
        title: "Frontend implementation",
        description:
          "Ensure frontend updates accommodate new features and deliver a working version for QA.",
        assignee: "Raj",
      },
      {
        title: "QA test cases",
        description:
          "Write QA test cases for creation, retrieval, malformed filters, unauthorized access, and permission handling for saved searches.",
        assignee: "Lisa",
      },
      {
        title: "Setup staging environment for QA",
        description:
          "Coordinate with DevOps to set up a staging environment with test data by Thursday next week for QA.",
        assignee: "Raj",
      },
      {
        title: "Create UAT walkthrough video",
        description:
          "Prepare a quick walkthrough video of the feature for internal UAT.",
        assignee: "Jessica",
      },
      {
        title: "Implement telemetry for Saved Search events",
        description:
          "Add telemetry for search save, delete, and usage events to monitor feature adoption.",
        assignee: "Raj",
      },
    ],
    jiras: [
      {
        title: "[UI] Design Saved Searches Feature",
        description:
          "Design UI for saving and selecting saved searches, including mockups for the save button and dropdown.",
        assignee: "Jessica",
        acceptanceCriteria:
          "Users can click a 'Save Search' button to save current filters. Saved searches are listed in a dropdown accessible from the search interface.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10025",
      },
      {
        title: "[Backend] Saved Search Storage & APIs",
        description:
          "Implement backend APIs and data model for storing and managing user saved searches.",
        assignee: "Daniel",
        acceptanceCriteria:
          "Saved searches are persisted for each user; filters stored as JSON. Endpoints to create, retrieve, update, and delete saved searches. Proper user isolation enforced.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10026",
      },
      {
        title: "[Frontend] Integrate Saved Searches",
        description:
          "Update front end to support Saved Search features and integrate with backend.",
        assignee: "Raj",
        acceptanceCriteria:
          "Front end integrates with new APIs, allows saving current filters, and shows saved searches. QA receives working build by next Friday.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10027",
      },
      {
        title: "[QA] Saved Search Test Cases",
        description:
          "Comprehensive QA testing of Saved Search CRUD operations and possible error scenarios.",
        assignee: "Lisa",
        acceptanceCriteria:
          "Test all edge cases: creation, retrieval, malformed filters, unauthorized access, permission handling.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10028",
      },
      {
        title: "[Telemetry] Saved Search Usage Analytics",
        description:
          "Instrument front end and/or backend to log usage analytics for Saved Search actions.",
        assignee: "Raj",
        acceptanceCriteria:
          "Event logs generated for saving, deleting, and using Saved Searches; basic dashboard counts feature usage.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10029",
      },
    ],
    transcript:
      "[00:00:02] Emma (PM): Good morning, everyone. Let's get started. Today's meeting is to discuss the \"Saved Search\" feature. This came in as a top request from our enterprise users. The goal is to let users save frequently used search filters for reuse.\n\n[00:00:25] Raj (Tech Lead): Makes sense. First thoughts — we'll need backend support to store user-defined filters, probably tied to their user profile. Frontend will need UI changes on the search results page.\n\n[00:00:42] Jessica (Designer): From a design perspective, I suggest a \"Save Search\" button next to the search bar and maybe a dropdown for \"Saved Searches\". I’ll prepare mockups by tomorrow EOD.\n\n[00:01:10] Daniel (Backend Engineer): I’ll explore how to structure the data. We could have a `saved_searches` table linked by user ID, storing filters as JSON blobs. I’ll draft a schema and share it by end of day.\n\n[00:01:34] Lisa (QA): Don’t forget we’ll need test cases for both creation and retrieval of saved searches — and definitely some edge cases: malformed filters, unauthorized access, etc.\n\n[00:01:52] Emma: Great. Let’s timebox this. Design by end of tomorrow, backend schema proposal by EOD today. Can we have a working backend prototype by next Wednesday?\n\n[00:02:05] Daniel: Yep, backend services and endpoints should be ready by then.\n\n[00:02:10] Raj: Frontend will take a bit longer since we’re also updating the search interface. Maybe a working version for QA by next Friday?\n\n[00:02:21] Jessica: That timeline works for UI.\n\n[00:02:26] Emma: Awesome. Any security concerns?\n\n[00:02:30] Daniel: Slightly. Saved filters may include sensitive filters (like internal labels or user-specific tags). We’ll make sure they’re user-isolated and access-controlled.\n\n[00:02:42] Lisa: Good point. I’ll also add test cases for permission handling.\n\n[00:02:50] Raj: We should write unit and integration tests early. Maybe even auto-generate contracts for the saved-search API.\n\n[00:02:59] Emma: Once we're code complete, we’ll do a round of UAT internally. Then stage it for select users on beta.\n\n[00:03:10] Jessica: Should I prepare a quick walkthrough video for UAT?\n\n[00:03:13] Emma: That would be helpful, yes.\n\n[00:03:20] Lisa: And I’ll need a staging environment with test data by Thursday next week.\n\n[00:03:30] Raj: Noted. I'll coordinate with DevOps to get that set up.\n\n[00:03:37] Emma: Perfect. Let's aim for deployment in the next sprint, assuming all goes well.\n\n[00:03:44] Daniel: Do we want telemetry on usage?\n\n[00:03:48] Raj: Definitely. We can add basic event logging for search saves, deletes, and usage counts.\n\n[00:03:55] Emma: Add that as a task. Alright, let’s recap action items and Jira tickets.\n",
    meetingTime: "2025-06-13T01:45:47.187625723",
  },
  {
    summary:
      "The team discussed successes and challenges from the recent product launch. Wins included improved email campaign performance, effective pre-launch testing, reduced support tickets from onboarding videos, and successful handling of increased traffic. Challenges involved deployment delays from database migrations, a lag in welcome emails due to the email provider, and misaligned press release timing. The team outlined action items: optimize deployment, reassess email providers, sync PR timing, and survey recent users for feedback.",
    title: "Product Launch Retrospective Meeting",
    attendees: [
      "Sarah (Project Manager)",
      "David (Marketing Lead)",
      "Priya (Engineering Lead)",
      "Alex (Customer Success Manager)",
    ],
    meetingNotes: [
      {
        topic: "What went well",
        summary:
          "Staggered email send led to higher open rates vs. last launch. Pre-launch testing suite and new CI check caught a config issue, preventing release blockers. Onboarding video and chatbot flow reduced support volume.",
      },
      {
        topic: "Challenges/Blockers",
        summary:
          "Deployment lagged due to non-optimized database migration. Some customers didn’t receive welcome emails promptly due to provider delay. Press release timing was off compared to product launch. Handle via improved coordination and provider review.",
      },
      {
        topic: "Additional wins and next steps",
        summary:
          "2x traffic spike managed successfully (load balancing improvements recognized). Plan to survey new users for onboarding insights.",
      },
    ],
    actionItems: [
      {
        title: "Draft user onboarding survey",
        description:
          "Draft a Typeform survey for users who onboarded in the last week and share it by end of day tomorrow.",
        assignee: "Alex",
      },
      {
        title: "Add survey link to newsletter",
        description: "Include the survey link in the next customer newsletter.",
        assignee: "David",
      },
      {
        title: "Provide onboarding user segment",
        description:
          "Pull a user segment of those who onboarded in the last week for the survey target list.",
        assignee: "Priya",
      },
      {
        title: "Circulate meeting summary and actions",
        description:
          "Post a summary of the discussion and action items from the retrospective meeting.",
        assignee: "Sarah",
      },
    ],
    jiras: [
      {
        title: "Optimize database migration for faster deployment",
        description:
          "Optimize database migration scripts to prevent deployment delays. Capture fixes in new documentation.",
        assignee: "Priya",
        acceptanceCriteria:
          "Database migration times are reduced to meet deployment SLA; update documented in engineering runbook.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10034",
      },
      {
        title: "Evaluate transactional email provider",
        description:
          "Review issue with delayed welcome emails and assess provider reliability. Suggest options if current provider underperforms.",
        assignee: "Alex",
        acceptanceCriteria:
          "Transactional email provider is evaluated and alternative solutions are proposed if needed.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10035",
      },
      {
        title: "Sync PR and press release timing",
        description:
          "Coordinate closely with PR to ensure press release timing matches product launch.",
        assignee: "David",
        acceptanceCriteria:
          "Future press releases are synchronized to go live at launch time.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10036",
      },
    ],
    transcript:
      "[00:00:00] Sarah (Project Manager):\n\nWelcome to our product launch retrospective. Let’s take 30 seconds to jot down what worked well and what didn’t before we dive in.\n\n[00:00:12] David (Marketing Lead):\n\nI’ll start: We saw a 25% higher open rate on our email campaign than last launch. That staggered send time really helped.\n\n[00:00:21] Priya (Engineering Lead):\n\nFrom Engineering: the pre-launch testing suite caught a breaking config issue. That new check we added to CI was a lifesaver.\n\n[00:00:32] Alex (Customer Success Manager):\n\nSupport-wise, the onboarding video reduced ticket volume significantly. Most common questions were resolved by our new chatbot flow.\n\n[00:00:44] Sarah:\n\nThat’s great feedback. Let’s shift to challenges. Any blockers that stood out?\n\n[00:00:50] Priya:\n\nDeployment took 8 minutes longer than expected due to a database migration that hadn’t been optimized. We’ve documented a fix.\n\n[00:01:00] Alex:\n\nSome customers missed the welcome email. Turns out there was a delay from our transactional email provider—might be worth reevaluating them.\n\n[00:01:12] David:\n\nAgreed. Also, press coverage timing was a bit off—we launched at 9 a.m., but the press release didn’t go live until noon.\n\n[00:01:23] Sarah:\n\nAlright. For next time, let’s pad the release window and sync tighter with PR.\n\n[00:01:30] Priya:\n\nOne small win—we were able to handle a 2x traffic spike without any downtime. That’s a testament to the load balancing improvements.\n\n[00:01:40] David:\n\nWe should capture that for the internal newsletter. It’s a good story.\n\n[00:01:44] Alex:\n\nCan we also survey users who onboarded in the last week? I’d love to gather insights while it’s fresh.\n\n[00:01:51] Sarah:\n\nYes—Alex, draft a Typeform and share it by EOD tomorrow.\n\n[00:01:58] David:\n\nAnd I’ll include a link in our next customer newsletter.\n\n[00:02:03] Priya:\n\nI’ll pull a user segment to target.\n\n[00:02:07] Sarah:\n\nExcellent teamwork. I’ll post a summary of today’s discussion along with action items. Great job, everyone.\n\n[00:02:15] Team:\n\n(All): Thanks, Sarah!",
    meetingTime: "2025-06-13T02:25:04.083352302",
  },
  {
    summary:
      "The team met to review readiness for the upcoming product launch. Marketing is preparing final promotional materials. Engineering has a release candidate through QA and is focused on final performance testing, with a minor risk around payment API reliability. Customer success is training support teams with newly developed materials. Key action items include drafting contingency communication for users and distributing the agenda for the go/no-go meeting scheduled for Monday.",
    title: "Product Launch Prep Sync – One Week Before Launch",
    attendees: ["Sarah", "David", "Priya", "Alex"],
    meetingNotes: [
      {
        topic: "Marketing status update",
        summary:
          "Marketing content schedule is on track. Social calendar finalized, and email campaigns are being prepped for 48 hours pre-launch.",
      },
      {
        topic: "Engineering status update",
        summary:
          "Release candidate cleared QA, final performance test ongoing. Only minor risk: third-party payment API stability.",
      },
      {
        topic: "Customer success update",
        summary:
          "Support materials ready: new FAQ and onboarding video created; support team training scheduled for Friday.",
      },
      {
        topic: "Risk management",
        summary:
          "If payment API fails, fallback will be activated and users will be notified.",
      },
      {
        topic: "Upcoming meetings",
        summary:
          "Go/no-go launch decision meeting set for Monday at 10 a.m.; agenda to be sent later.",
      },
    ],
    actionItems: [
      {
        title: "Draft contingency user communication for payment API downtime",
        description:
          "Prepare a user communication draft in case the third-party API for payments goes down during launch.",
        assignee: "David",
      },
      {
        title: "Send go/no-go meeting agenda",
        description:
          "Send out the agenda for the go/no-go meeting scheduled for Monday at 10 a.m.",
        assignee: "Sarah",
      },
    ],
    jiras: [
      {
        title: "Deliver customer support training and materials before launch",
        description:
          "Ensure support staff are fully trained with new materials for product launch, including FAQ and onboarding video.",
        assignee: "Alex",
        acceptanceCriteria:
          "All support team members complete training. FAQ and onboarding video are accessible in support knowledge base.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10023",
      },
      {
        title: "Finalize engineering release and contingency plans",
        description:
          "Complete final performance test and prepare fallback for payment API issues.",
        assignee: "Priya",
        acceptanceCriteria:
          "Performance testing is completed with no critical issues; fallback is ready for payment API downtime.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10024",
      },
    ],
    transcript:
      "[00:00:03] Sarah (Project Manager):\nGood morning, everyone. Thanks for joining today’s product launch sync. Let’s get started with a quick status update from each team.\n\n[00:00:12] David (Marketing Lead):\nMorning! So far, all our launch content is on track. We finalized the social media calendar and we're prepping email campaigns to go out 48 hours before launch day.\n\n[00:00:26] Priya (Engineering Lead):\nEngineering-wise, the release candidate passed QA yesterday. We’re doing a final performance test today, but I don’t foresee any blockers.\n\n[00:00:38] Sarah:\nGreat. What about customer support materials?\n\n[00:00:41] Alex (Customer Success Manager):\nWe’ve created a new FAQ doc and recorded a short onboarding video. Training sessions for the support team are scheduled for Friday.\n\n[00:00:52] Sarah:\nPerfect. Any risk items we should call out?\n\n[00:00:55] Priya:\nOnly minor: If the third-party API we use for payments has downtime during launch, we’ll need to activate the fallback. We’re monitoring their status page.\n\n[00:01:07] David:\nNoted. I’ll prep a communication just in case we need to update users quickly.\n\n[00:01:13] Sarah:\nAwesome. Final reminder: The go/no-go meeting is on Monday at 10 a.m. I’ll send the agenda this afternoon. Anything else?\n\n[00:01:22] Team:\n(All): Nope, we’re good. Thanks!\n\n[00:01:24] Sarah:\nOkay, thanks, everyone. Let’s stay sharp—just one week to go!",
    meetingTime: "2025-06-13T01:36:33.960827615",
  },
  {
    summary:
      "The meeting centered around comparing the social skills and EQ between Kellogg and Booth students, with a task assigned to Tessa to conduct interviews for deeper understanding.",
    title: "Discussion on Social Skills and EQ at Business Schools",
    attendees: ["Kartikeya Mishra", "Tessa"],
    meetingNotes: [
      {
        topic: "EQ and Social Skills Comparison",
        summary:
          "Discussion about social skills and EQ among Kellogg and Booth students. Suggestion for Tessa to interview Booth people to get insights.",
      },
    ],
    actionItems: [
      {
        title: "Interview Booth Students on EQ and Social Skills",
        description:
          "Interview several Booth people to understand their EQ and social skills.",
        assignee: "Tessa",
      },
    ],
    jiras: [
      {
        title: "Research Booth Students' EQ and Social Skills",
        description:
          "Interview Booth students about their emotional intelligence (EQ) and social skills.",
        assignee: "Tessa",
        acceptanceCriteria:
          "Tessa interviews at least 5 Booth students and documents their perspectives on EQ and social skills.",
        url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10042",
      },
    ],
    transcript:
      "{\"transcript\": \"WEBVTT\\n1\\nKartikeya Mishra: Yeah, like they have.\\n2\\nKartikeya Mishra: I'm testing my application, go keep going. They have 0 social skills.\\n3\\nKartikeya Mishra: Oh, so basically, people at Kellogg have no social skills.\\n4\\nKartikeya Mishra: Oh, yeah, I mean, yeah, at boot. Yeah, okay, that's what I meant\\n5\\nKartikeya Mishra: you should. Your task should be to go. Tessa's task should be to go and interview a lot of like different Booth people and see what there's\\n6\\nKartikeya Mishra: Eq. And social skills are.\\n7\\nKartikeya Mishra: Oh, fair enough.\"}",
    meetingTime: "2025-06-13T02:52:00.105467185",
  },
];
