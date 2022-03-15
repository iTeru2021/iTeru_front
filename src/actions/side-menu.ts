// immutable actions
export const OPEN_SIDE_MENU = "OPEN_SIDE_MENU";
export const CLOSE_SIDE_MENU = "CLOSE_SIDE_MENU";

export const openMenu = () => ({
  type: OPEN_SIDE_MENU as typeof OPEN_SIDE_MENU
});

export const closeMenu = () => ({
  type: CLOSE_SIDE_MENU as typeof CLOSE_SIDE_MENU
});

export type SideMenuAction =
  | ReturnType<typeof openMenu>
  | ReturnType<typeof closeMenu>;
