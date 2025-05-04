import { createFileRoute } from "@tanstack/react-router";
import { TabItem, TabsContainer } from "../shared/ui/Tabs";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <TabsContainer activeTab="1">
        <TabItem id="1" label="Tab 1">
          Hello
        </TabItem>
        <TabItem id="2" label="Tab 2">
          Hello world
        </TabItem>
        Hello
        <h1>First Component</h1>
        <p>This is the first component.</p>
      </TabsContainer>
    </div>
  );
}
