export interface NavItem {
    icon: React.ReactNode;
    text: string;
    path: string;
    highlight?: boolean;
  }
  
  export interface NavMenuProps {
    menuItems: NavItem[];
    isOpen: boolean;
    closeMenu: () => void;
    handleNavigate: (path: string) => () => void;
    currentPath: string;
    isNavigating: boolean;
    variant: 'mobile' | 'desktop';
  }