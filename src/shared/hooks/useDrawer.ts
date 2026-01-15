import { useState, useCallback } from 'react';

interface UseDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
}


export function useDrawer(initialOpen = false): UseDrawerProps {
  const [open, setOpen] = useState(initialOpen);

  const openDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setOpen(prev => !prev);
  }, []);

  return {
    open,
    setOpen,
    openDrawer,
    closeDrawer,
    toggleDrawer,
  };
}

