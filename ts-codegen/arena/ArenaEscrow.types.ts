/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Uint128 = string;
export interface InstantiateMsg {
  dues: MemberBalance[];
  lock_when_funded: boolean;
}
export interface MemberBalance {
  addr: string;
  balance: Balance;
}
export interface Balance {
  cw20: Cw20Coin[];
  cw721: Cw721Collection[];
  native: Coin[];
}
export interface Cw20Coin {
  address: string;
  amount: Uint128;
}
export interface Cw721Collection {
  addr: string;
  token_ids: string[];
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  withdraw: {
    cw20_msg?: Binary | null;
    cw721_msg?: Binary | null;
  };
} | {
  set_distribution: {
    distribution: MemberShare[];
  };
} | {
  receive_native: {};
} | {
  receive: Cw20ReceiveMsg;
} | {
  receive_nft: Cw721ReceiveMsg;
} | {
  distribute: CompetitionEscrowDistributeMsg;
} | {
  lock: {
    value: boolean;
  };
} | {
  update_ownership: Action;
};
export type Binary = string;
export type Action = {
  transfer_ownership: {
    expiry?: Expiration | null;
    new_owner: string;
  };
} | "accept_ownership" | "renounce_ownership";
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Timestamp = Uint64;
export type Uint64 = string;
export interface MemberShare {
  addr: string;
  shares: Uint128;
}
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
}
export interface Cw721ReceiveMsg {
  msg: Binary;
  sender: string;
  token_id: string;
}
export interface CompetitionEscrowDistributeMsg {
  distribution?: MemberShare[] | null;
  remainder_addr: string;
}
export type QueryMsg = {
  balances: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  balance: {
    addr: string;
  };
} | {
  due: {
    addr: string;
  };
} | {
  dues: {
    limit?: number | null;
    start_after?: string | null;
  };
} | {
  is_funded: {
    addr: string;
  };
} | {
  is_fully_funded: {};
} | {
  total_balance: {};
} | {
  is_locked: {};
} | {
  distribution: {
    addr: string;
  };
} | {
  ownership: {};
};
export type MigrateMsg = {
  from_v1: {};
};
export type Addr = string;
export interface BalanceVerified {
  cw20: Cw20CoinVerified[];
  cw721: Cw721CollectionVerified[];
  native: Coin[];
}
export interface Cw20CoinVerified {
  address: Addr;
  amount: Uint128;
}
export interface Cw721CollectionVerified {
  addr: Addr;
  token_ids: string[];
}
export type ArrayOfTupleOfAddrAndBalanceVerified = [Addr, BalanceVerified][];
export type NullableArrayOfMemberShareVerified = MemberShareVerified[] | null;
export interface MemberShareVerified {
  addr: Addr;
  shares: Uint128;
}
export type Boolean = boolean;
export interface OwnershipForString {
  owner?: string | null;
  pending_expiry?: Expiration | null;
  pending_owner?: string | null;
}