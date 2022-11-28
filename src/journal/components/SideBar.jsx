import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent" //tempory
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Santiago Cifuentes
          </Typography>
        </Toolbar>
        <Divider />

        <List>
            {
                ['enero','Febrero','Marzo','Abril'].map( text =>(
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot/>
                            </ListItemIcon>
                            <Grid>
                                <ListItemText primary={text}/>
                                <ListItemText secondary={'Quis do quis aliquip sint culpa eiusmod nulla aliquip.'}/>
                            </Grid>
                        </ListItemButton>
                    </ListItem>
                ) )
            }
        </List>
      </Drawer>
    </Box>
  );
};
