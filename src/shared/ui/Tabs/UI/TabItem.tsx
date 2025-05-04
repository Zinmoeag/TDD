import { Box, SxProps } from "@mui/material";
import { useTabContainerContext } from "../Provider/TabProvider";

export type TabItemProps = {
  id: string | number;
  label: string;
  children: React.ReactNode;
  disabled?: boolean;
  hide?: boolean;
  style?: SxProps<any>;
  className?: string;
};

const TabItem = (props: TabItemProps) => {
  const { children, id } = props;
  const { value } = useTabContainerContext();
  console.log("TabItem", value, id, props?.style);

  if (value === id) {
    return (
      <Box
        role="tabpanel"
        sx={{ padding: 0, ...props?.style }}
        className={props?.className}
      >
        {children}
      </Box>
    );
  }
  return <></>;
};

export default TabItem;
