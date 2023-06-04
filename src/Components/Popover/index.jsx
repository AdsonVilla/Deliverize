import { Popover, Typography, List, ListItem, AlertTitle } from "@mui/material";

export function PopoverComponent({
  open,
  anchorEl,
  onClose,
  anchorReference,
  anchorPosition,
}) {
  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorReference="anchorPosition"
      anchorPosition={{ top: -1, left: 1050 }}
    >
      <Typography sx={{ p: 2, bgcolor: "#F09035", color: "#FFFF" }}>
        Adicionado com sucesso!
      </Typography>
      <List sx={{ p: 2 }}>
        <AlertTitle
          sx={{
            color: "#BC2E31",
            fontWeight: "700",
          }}
        >
          Oferta Cheddar Bacon
        </AlertTitle>
        <AlertTitle sx={{ color: "#4E4E4E" }}>
          Ingredientes:
          <List>
            <ListItem>1 Carne 250gr</ListItem>
            <ListItem>2 Queijo Cheddar</ListItem>
            <ListItem>1 Bacon</ListItem>
            <ListItem>Molho Especial</ListItem>
          </List>
        </AlertTitle>
      </List>
    </Popover>
  );
}
