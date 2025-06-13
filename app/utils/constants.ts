export const emptyMeeting = {
  title: "",
  summary: "",
  attendees: [],
  date: "",
  meetingNotes: [],
  actionItems: [],
  jiraSuggestions: [],
};

export const emptyJiraform = {
  title: "",
  description: "",
  acceptanceCriteria: [],
};
export const singleMeetingSample = {
  summary:
    "Each team is on track for the upcoming product launch, with marketing, engineering, and customer support preparations progressing as planned. Minor risk from payment API identified and monitored. Next go/no-go meeting set for Monday.",
  title: "Product Launch Weekly Sync - Status Update",
  attendees: [
    "Sarah (Project Manager)",
    "David (Marketing Lead)",
    "Priya (Engineering Lead)",
    "Alex (Customer Success Manager)",
  ],
  meetingNotes: [
    {
      topic: "Marketing Update",
      summary:
        "Marketing content is finalized and social/email campaigns are prepared for launch. Everything is on track.",
    },
    {
      topic: "Engineering Update",
      summary:
        "Release candidate passed QA and performance testing is underway, with no foreseen blockers.",
    },
    {
      topic: "Customer Success/Support",
      summary:
        "Support materials have been created; onboarding video recorded; team training is scheduled for Friday.",
    },
    {
      topic: "Risk Review",
      summary:
        "Only minor risk identified: possible payment API downtime. Fallback is ready; monitoring is ongoing.",
    },
    {
      topic: "Go/No-Go Meeting Reminder",
      summary:
        "Go/no-go meeting is scheduled for Monday at 10 a.m. Agenda to be sent out by Sarah this afternoon.",
    },
  ],
  actionItems: [
    {
      title: "Monitor payment API status and prepare fallback procedures",
      description:
        "Continue monitoring the third-party payment API status, and ensure fallback procedures are ready in case of downtime.",
      assignee: "Priya",
    },
    {
      title: "Prepare user communication for payment API issues",
      description:
        "Draft and prepare a communication template to update users quickly in case of third-party API payment issues during launch.",
      assignee: "David",
    },
    {
      title: "Distribute go/no-go meeting agenda",
      description:
        "Send out the agenda for Monday's go/no-go meeting this afternoon.",
      assignee: "Sarah",
    },
  ],
  jiras: [
    {
      title: null,
      description:
        "Finalize all marketing content and ensure scheduling of social/email campaigns for launch.",
      assignee: "David",
      acceptanceCriteria:
        "All content scheduled; campaigns queued for send 48 hours before launch.",
      url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10006",
    },
    {
      title: null,
      description:
        "Complete performance testing of release candidate and confirm fallback procedures for payment API.",
      assignee: "Priya",
      acceptanceCriteria:
        "Release candidate passes all QA and performance tests with fallback procedure confirmed for payment API.",
      url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10007",
    },
    {
      title: null,
      description:
        "Publish customer support FAQ, distribute onboarding video and deliver internal training session.",
      assignee: "Alex",
      acceptanceCriteria:
        "FAQ doc available, onboarding video accessible, and training delivered before launch.",
      url: "https://onelookmeeting.atlassian.net/rest/api/3/issue/10008",
    },
  ],
  transcript:
    "[00:00:03] Sarah (Project Manager):\nGood morning, everyone. Thanks for joining today’s product launch sync. Let’s get started with a quick status update from each team.\n\n[00:00:12] David (Marketing Lead):\nMorning! So far, all our launch content is on track. We finalized the social media calendar and we're prepping email campaigns to go out 48 hours before launch day.\n\n[00:00:26] Priya (Engineering Lead):\nEngineering-wise, the release candidate passed QA yesterday. We’re doing a final performance test today, but I don’t foresee any blockers.\n\n[00:00:38] Sarah:\nGreat. What about customer support materials?\n\n[00:00:41] Alex (Customer Success Manager):\nWe’ve created a new FAQ doc and recorded a short onboarding video. Training sessions for the support team are scheduled for Friday.\n\n[00:00:52] Sarah:\nPerfect. Any risk items we should call out?\n\n[00:00:55] Priya:\nOnly minor: If the third-party API we use for payments has downtime during launch, we’ll need to activate the fallback. We’re monitoring their status page.\n\n[00:01:07] David:\nNoted. I’ll prep a communication just in case we need to update users quickly.\n\n[00:01:13] Sarah:\nAwesome. Final reminder: The go/no-go meeting is on Monday at 10 a.m. I’ll send the agenda this afternoon. Anything else?\n\n[00:01:22] Team:\n(All): Nope, we’re good. Thanks!\n\n[00:01:24] Sarah:\nOkay, thanks, everyone. Let’s stay sharp—just one week to go!",
};
