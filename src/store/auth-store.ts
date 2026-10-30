"use client";
import { create } from "zustand";

export type AuthState = {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  setIsAuth: (val) => set((state) => ({ ...state, isAuth: val })),
}));
