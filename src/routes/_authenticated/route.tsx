import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { Sidebar } from "@/components/sidebar";
import { getSession } from "@/lib/authServer";
import { AuthenticatedSidebar } from "./-lib/components/authenticated-sidebar";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async () => {
    const session = await getSession();

    if (!session) {
      throw redirect({ to: "/" });
    }

    return { user: session.user };
  },
  component: AuthenticatedLayout,
});

function AuthenticatedLayout() {
  return (
    <Sidebar.Root>
      <AuthenticatedSidebar />

      <main data-slot="authenticated-layout-content" className="min-w-0 flex-1">
        <Outlet />
      </main>
    </Sidebar.Root>
  );
}
