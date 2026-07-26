import type { Player } from "@/types";

// GALZVIRT has just launched and hasn't signed players yet.
// Add real, represented players here as they join the agency —
// they'll appear on the Players page and homepage automatically.
export const players: Player[] = [];

export const getPlayerById = (id: string) => players.find((p) => p.id === id);
