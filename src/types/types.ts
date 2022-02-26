import { ReactFragment, ReactPortal } from "react";
import { ReactChild } from "react";

export interface TypeDebt {
  id: string;
  name: string;
  sum: number;
  friends: TypeFriend[];
  debtInfo: TypeDebtInfo[];
}

export interface TypeFriend {
  id: string;
  name: string;
}

export interface TypeDebtInfo {
  id: string;
  debtorName: string;
  debtMe: string;
  debtMy: string;
}