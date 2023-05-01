/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Uint128, InstantiateMsg, MemberBalance, Balance, Cw20Coin, Cw721Collection, Coin, ExecuteMsg, Binary, MemberShare, Cw20ReceiveMsg, Cw721ReceiveMsg, CompetitionEscrowDistributeMsg, QueryMsg, MigrateMsg, AdminResponse, Addr, BalanceVerified, Cw20CoinVerified, Cw721CollectionVerified, NullableArrayOfMemberShareVerified, MemberShareVerified, DumpStateResponse, Boolean } from "./ArenaEscrow.types";
export interface ArenaEscrowReadOnlyInterface {
  contractAddress: string;
  admin: () => Promise<AdminResponse>;
  balance: ({
    addr
  }: {
    addr: string;
  }) => Promise<BalanceVerified>;
  due: ({
    addr
  }: {
    addr: string;
  }) => Promise<BalanceVerified>;
  isFunded: ({
    addr
  }: {
    addr: string;
  }) => Promise<Boolean>;
  isFullyFunded: () => Promise<Boolean>;
  totalBalance: () => Promise<BalanceVerified>;
  isLocked: () => Promise<Boolean>;
  dumpState: () => Promise<DumpStateResponse>;
  distribution: ({
    addr
  }: {
    addr: string;
  }) => Promise<NullableArrayOfMemberShareVerified>;
}
export class ArenaEscrowQueryClient implements ArenaEscrowReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.admin = this.admin.bind(this);
    this.balance = this.balance.bind(this);
    this.due = this.due.bind(this);
    this.isFunded = this.isFunded.bind(this);
    this.isFullyFunded = this.isFullyFunded.bind(this);
    this.totalBalance = this.totalBalance.bind(this);
    this.isLocked = this.isLocked.bind(this);
    this.dumpState = this.dumpState.bind(this);
    this.distribution = this.distribution.bind(this);
  }

  admin = async (): Promise<AdminResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin: {}
    });
  };
  balance = async ({
    addr
  }: {
    addr: string;
  }): Promise<BalanceVerified> => {
    return this.client.queryContractSmart(this.contractAddress, {
      balance: {
        addr
      }
    });
  };
  due = async ({
    addr
  }: {
    addr: string;
  }): Promise<BalanceVerified> => {
    return this.client.queryContractSmart(this.contractAddress, {
      due: {
        addr
      }
    });
  };
  isFunded = async ({
    addr
  }: {
    addr: string;
  }): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_funded: {
        addr
      }
    });
  };
  isFullyFunded = async (): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_fully_funded: {}
    });
  };
  totalBalance = async (): Promise<BalanceVerified> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_balance: {}
    });
  };
  isLocked = async (): Promise<Boolean> => {
    return this.client.queryContractSmart(this.contractAddress, {
      is_locked: {}
    });
  };
  dumpState = async (): Promise<DumpStateResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      dump_state: {}
    });
  };
  distribution = async ({
    addr
  }: {
    addr: string;
  }): Promise<NullableArrayOfMemberShareVerified> => {
    return this.client.queryContractSmart(this.contractAddress, {
      distribution: {
        addr
      }
    });
  };
}
export interface ArenaEscrowInterface extends ArenaEscrowReadOnlyInterface {
  contractAddress: string;
  sender: string;
  withdraw: ({
    cw20Msg,
    cw721Msg
  }: {
    cw20Msg?: Binary;
    cw721Msg?: Binary;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  setDistribution: ({
    distribution
  }: {
    distribution: MemberShare[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  receiveNative: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  receiveNft: ({
    msg,
    sender,
    tokenId
  }: {
    msg: Binary;
    sender: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  distribute: ({
    distribution,
    remainderAddr
  }: {
    distribution?: MemberShare[];
    remainderAddr: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  lock: ({
    value
  }: {
    value: boolean;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class ArenaEscrowClient extends ArenaEscrowQueryClient implements ArenaEscrowInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.withdraw = this.withdraw.bind(this);
    this.setDistribution = this.setDistribution.bind(this);
    this.receiveNative = this.receiveNative.bind(this);
    this.receive = this.receive.bind(this);
    this.receiveNft = this.receiveNft.bind(this);
    this.distribute = this.distribute.bind(this);
    this.lock = this.lock.bind(this);
  }

  withdraw = async ({
    cw20Msg,
    cw721Msg
  }: {
    cw20Msg?: Binary;
    cw721Msg?: Binary;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw: {
        cw20_msg: cw20Msg,
        cw721_msg: cw721Msg
      }
    }, fee, memo, funds);
  };
  setDistribution = async ({
    distribution
  }: {
    distribution: MemberShare[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_distribution: {
        distribution
      }
    }, fee, memo, funds);
  };
  receiveNative = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive_native: {}
    }, fee, memo, funds);
  };
  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee, memo, funds);
  };
  receiveNft = async ({
    msg,
    sender,
    tokenId
  }: {
    msg: Binary;
    sender: string;
    tokenId: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive_nft: {
        msg,
        sender,
        token_id: tokenId
      }
    }, fee, memo, funds);
  };
  distribute = async ({
    distribution,
    remainderAddr
  }: {
    distribution?: MemberShare[];
    remainderAddr: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      distribute: {
        distribution,
        remainder_addr: remainderAddr
      }
    }, fee, memo, funds);
  };
  lock = async ({
    value
  }: {
    value: boolean;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      lock: {
        value
      }
    }, fee, memo, funds);
  };
}