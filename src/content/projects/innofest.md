---
title: "Fall-protection safety checker for WorkSafeBC"
summary: "A team hackathon build that checks work-site photos and video for fall-protection violations and maps each one to the BC safety regulation it breaks. My part was the video pipeline."
badge: "Team project"
context: "InnoFest 2025, held at Microsoft"
period: "Nov 2025"
role: "The video ingestion and analysis path"
stack: ["Python", "Azure Functions", "Azure Video Indexer", "Azure Blob Storage"]
order: 4
size: "normal"
---

The system looks at media from a work site and flags fall-protection violations, then points each one to the section of the BC Occupational Health and Safety Regulation it falls under, so a prevention officer gets a compliance report instead of a pile of footage.

## My part: the video path

I built the video side as an Azure Functions service. It pulls site footage from Blob Storage, sends it to Azure Video Indexer, waits for the indexing job to finish, and merges the transcript, the objects it detected and any on-screen text into one payload for the safety model.

The trial Azure account wouldn't let Video Indexer fetch videos from a URL, so I had the function upload the raw video bytes straight to the API instead. Long videos can take a while to index, so the job polls for up to about 15 minutes, and the storage links it hands out last 24 hours so they can't expire mid-job.

The rest of the pipeline (images, audio and text) runs in the same Functions app. The regulation lookup and search index were built by teammates.
