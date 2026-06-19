import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/download")({
  server: {
    handlers: {
      GET: async () => {
        const fileId = "1jYbBBU1vjyPNwLykdZlLPkwEMYfQqsv-";
        const driveUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&authuser=0&confirm=t`;

        try {
          const response = await fetch(driveUrl, {
            headers: {
              "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
          });

          if (!response.ok) {
            return new Response("Dosya indirilemedi", { status: 502 });
          }

          const headers = new Headers();
          headers.set("Content-Type", "application/vnd.android.package-archive");
          headers.set("Content-Disposition", "attachment; filename=\"Gezen.apk\"");

          const contentLength = response.headers.get("content-length");
          if (contentLength) {
            headers.set("Content-Length", contentLength);
          }

          return new Response(response.body, {
            status: 200,
            headers,
          });
        } catch (error) {
          console.error("Drive proxy error:", error);
          return new Response("Sunucu hatası", { status: 500 });
        }
      },
    },
  },
});
