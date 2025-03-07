Create a Mermaid sequence diagram for video processing with these 4 components:

- Content Management (frontend)
- API Service (backend)
- Cloud Storage
- Video Processing Service

Flow:

1. User uploads video to Content Management via form input
2. Content Management requests temporary upload URL from API Service
3. API Service generates signed URL using Cloud Storage SDK
4. API Service returns signed URL to Content Management
5. Content Management uploads video directly to Cloud Storage using signed URL
6. Content Management notifies API Service when upload completes
7. API Service initiates processing by calling Video Processing Service
8. API Service returns processing job ID to Content Management
9. Content Management polls API Service for job status, which checks Video
   Processing Service
10. When Video Processing Service reports success, Content Management requests
    API Service to clean up temporary files and mark process complete

Highlight the polling loop, since that is the part that might need a better
architecture. Label it "Polling loop - needs review".
