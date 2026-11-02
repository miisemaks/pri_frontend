"use client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type UserState = {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  password: string | null; // TODO: Удалить когда будет связка с бэкендом
  data: User[];
  login: (value: { email: string; password: string }) => void;
  register: (value: User) => void;
  logout: () => void;
  deleteUser: (email: string) => void;
};

// TODO: логика авторизации и регистрации будет переработана когда будет сделан backend
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      data: [],
      login: (val) =>
        set((state) => {
          const emailExist = state.data.find((i) => i.email === val.email);
          if (!emailExist) {
            throw new Error("Пользователь с таким email не зарегистирован");
          }
          const isPassCorrect = emailExist.password === val.password;
          if (!isPassCorrect) {
            throw new Error("Пароль введен неправильно");
          }
          return emailExist
            ? {
                ...state,
                first_name: emailExist.first_name,
                last_name: emailExist.last_name,
                email: emailExist.email,
                password: emailExist.password,
              }
            : state;
        }),
      register: (val) =>
        set((state) => {
          const check_exist = state.data.find((i) => i.email === val.email)
            ? true
            : false;
          return check_exist
            ? state
            : {
                ...state,
                data: [...state.data, val],
                first_name: val.first_name,
                last_name: val.last_name,
                email: val.email,
                password: val.password,
              };
        }),
      logout: () =>
        set((state) => {
          return {
            ...state,
            first_name: null,
            last_name: null,
            email: null,
            password: null,
          };
        }),
      deleteUser: (email) =>
        set((state) => {
          const data = state.data.filter((i) => i.email !== email);
          const new_email = state.email === email ? null : state.email;
          const new_first_name =
            state.email === email ? null : state.first_name;
          const new_last_name = state.email === email ? null : state.last_name;
          const new_password = state.email === email ? null : state.password;

          return {
            ...state,
            data: data,
            first_name: new_first_name,
            last_name: new_last_name,
            email: new_email,
            password: new_password,
          };
        }),
    }),
    { name: "user-store", storage: createJSONStorage(() => localStorage) },
  ),
);
