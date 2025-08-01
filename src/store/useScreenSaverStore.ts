import { create } from "zustand";

type ScreenSaverState = {
  isActive: boolean;
  activate: () => void;
  deactivate: () => void;
};

export const useScreenSaverStore = create<ScreenSaverState>((set) => ({
  isActive: false,
  activate: () => set({ isActive: true }),
  deactivate: () => set({ isActive: false }),
}));
