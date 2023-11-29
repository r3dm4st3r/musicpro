"use client";
import { useContext } from "react";
import { PlayerContext } from "@/providers/PlayerProvider";
import { IPlayer } from "@/types/saavn.type";

export const usePlayer = (): IPlayer => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer hook must be used within a PlayerProvider");
  }
  return context;
};
