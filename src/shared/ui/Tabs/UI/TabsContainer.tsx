import { Box, Tabs, Tab, SxProps } from "@mui/material";
import { Children, isValidElement } from "react";
import styled from "styled-components";
import TabItem, { TabItemProps } from "./TabItem";
import TabProvider, { useTabContainerContext } from "../Provider/TabProvider";

type TabContrainerProps = {
  activeTab: string | number;
  children: React.ReactNode;
  style?: SxProps<any>;
};

type TabLabelListProps = {
  tabs: React.ReactElement<TabItemProps>[];
};

const StyledTab = styled(Tab)({
  //   padding: "0 20px",
  //   fontSize: "16px",
  color: "#000",
  borderRadius: "6px",
  border: "1px solid #eeeeee",
  backgroundColor: "#f54272",
  //   minHeight: "35px",
  //   "&.Mui-selected": {
  //     color: "#000000",
  //     backgroundColor: "#fff",
  //   },
});

const TabLabelList = (props: TabLabelListProps) => {
  const { tabs } = props;
  const { value, handleTabChange } = useTabContainerContext();

  return (
    <Tabs
      value={value}
      onChange={handleTabChange}
      aria-label="basic tabs example"
    >
      {tabs.map((tab) => (
        <StyledTab
          key={tab.props.id}
          label={tab.props.label}
          value={tab.props.id}
          disabled={tab.props?.disabled}
        />
      ))}
    </Tabs>
    // </Tabs>
  );
};

const TabContainer = (props: TabContrainerProps) => {
  const { children, activeTab } = props;
  const tabs = Children.toArray(children).filter(
    (child): child is React.ReactElement<TabItemProps> => {
      return isValidElement(child) && child.type === TabItem;
    }
  );

  return (
    <Box sx={{ width: "100%", typography: "body1", ...props?.style }}>
      <TabProvider activeTab={activeTab}>
        <TabLabelList tabs={tabs} />
        <Box>{tabs.map((TabElement) => TabElement)}</Box>
      </TabProvider>
    </Box>
  );
};

export default TabContainer;
