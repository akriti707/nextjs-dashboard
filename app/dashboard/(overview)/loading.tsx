// adding loading skeletons - A loading skeleton is a simplified version of the UI. Many websites use them as a placeholder (or fallback) to indicate to users that the content is loading. Any UI you add in loading.tsx will be embedded as part of the static file, and sent first. Then, the rest of the dynamic content will be streamed from the server to the client.
import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
  return <DashboardSkeleton />;
}
