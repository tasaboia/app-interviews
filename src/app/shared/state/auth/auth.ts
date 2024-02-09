import { getCookie } from "cookies-next";
import { atom } from "recoil";
import { AtomEffect } from "recoil";

const store = typeof window !== "undefined" ? window.localStorage : null;

export const authState = atom({
  key: "auth",
  default: store ? getCookie("PSI@T") : null,
});
