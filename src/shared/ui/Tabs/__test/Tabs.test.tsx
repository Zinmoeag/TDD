import { fireEvent, render, screen } from "@testing-library/react";
import TabContainer from "../UI/TabsContainer";
import TabItem from "../UI/TabItem";

it("tabs component renders correctly", () => {
  const Tab1Componnt = () => <>Tab 1 Content</>;
  const Tab2Component = () => <>Tab 2 Content</>;

  render(
    <TabContainer activeTab="1">
      <TabItem id="1" label="Tab 1">
        <Tab1Componnt />
      </TabItem>
      <TabItem id="2" label="Tab 2">
        <Tab2Component />
      </TabItem>
      <h3>This is not tab item</h3>
    </TabContainer>
  );

  // display all tabs labels
  const Tablabel1 = screen.getByText("Tab 1");
  const TabLabel2 = screen.getByText("Tab 2");
  expect(Tablabel1).toBeInTheDocument();
  expect(TabLabel2).toBeInTheDocument();
  // non tag element inside tab container
  const notTabElement = screen.queryByText("This is not tab item");

  expect(notTabElement).not.toBeInTheDocument();

  // check inital Tab active tab content
  expect(screen.queryByText("Tab 1 Content")).toBeInTheDocument();
  expect(screen.queryByText("Tab 2 Content")).not.toBeInTheDocument();

  // check if active tab is changed
  fireEvent.click(TabLabel2);
  expect(screen.queryByText("Tab 1 Content")).not.toBeInTheDocument();
  expect(screen.queryByText("Tab 2 Content")).toBeInTheDocument();
});
