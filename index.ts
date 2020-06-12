import got from "got";

(async () => {
    const headersToSend = {
        authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZ2FyY2lsYSIsInotcHJvY2VzcyI6IjEyMzQ1Njc4OTAiLCJ6LWlkdXN1YXJpbyI6ImEiLCJ6LWFwcCI6ImZpY2hhZGVjbGllbnRlIiwiaXNzIjoiYXBpZ2VlLWVkZ2UiLCJ6LWJyYW5kIjoib3JhbmdlIiwiei1jYWxsZXItaXAiOiIxMC4xMTMuODQuMTQiLCJ6LWNhbGxlci1wb3J0IjoiODAiLCJhdWQiOiJmcmFtZXdvcmtUZXN0Iiwiei1yb2wiOiJhSU5GQU5DSUEiLCJ6LXRpZCI6IjliYzkwMzM2NjM3NTQyMjg3OGRhYThmNDdlOGEyNTU4M2QwZTM3YWMiLCJleHAiOjE1OTE5ODQyMzAsImlhdCI6MTU5MTk4NDE3MCwianRpIjoiOWJjOTAzMzY2Mzc1NDIyODc4ZGFhOGY0N2U4YTI1NTgzZDBlMzdhYyIsInotbG9naW4iOiJhZ2FyY2lsYSIsInotc2ZpZCI6IjAwMDAwMjgwIiwidGhpcmRfcGFydGllcyI6ZmFsc2V9.kHppxknEkjTcFs6RbjwK74r_HBYTv4op-i1aCsqRyLlxU_aJcOAFw8fMTP1QG3e7C6eAhyFLxwNxcqjFielaLr2AA9nwJ1MRsZW2PIZmphywyDya0MVDZbpz-MJtAtXTKN3c8z9a3QwPfkYHRA64J3EaUmV-McJ0c2ErKvS-n_AmHcQ6jhbClHIiQPBs3PV2qo_Bce_wXqAk2EwKEh-BTvII9vxTxmykfaB4aSbs_e-7sffGcENtXED7c9KUbqHiJaAB6jywqzGBGfRRSOxPPnG-gGEOyYjw5P2GaYI8GhW39KAO8F4SFG_gn31gizib7d7HhuQl0inD6f8-hRw_kA"
    }
    
    console.log("Before got")
    const response = await got("https://postman-echo.com/get?foo1=bar1&foo2=bar2", { headers: headersToSend, timeout: 1000 });
    console.log("After got")
    console.log(response.body);
})()
