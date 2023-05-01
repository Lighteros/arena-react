/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Uint128, InstantiateMsg, MemberBalance, Balance, Cw20Coin, Cw721Collection, Coin, ExecuteMsg, Binary, MemberShare, Cw20ReceiveMsg, Cw721ReceiveMsg, CompetitionEscrowDistributeMsg, QueryMsg, MigrateMsg, AdminResponse, Addr, BalanceVerified, Cw20CoinVerified, Cw721CollectionVerified, NullableArrayOfMemberShareVerified, MemberShareVerified, DumpStateResponse, Boolean } from "./ArenaEscrow.types";
import { ArenaEscrowQueryClient, ArenaEscrowClient } from "./ArenaEscrow.client";
export const arenaEscrowQueryKeys = {
  contract: ([{
    contract: "arenaEscrow"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...arenaEscrowQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  admin: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaEscrowQueryKeys.address(contractAddress)[0],
    method: "admin",
    args
  }] as const),
  balance: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaEscrowQueryKeys.address(contractAddress)[0],
    method: "balance",
    args
  }] as const),
  due: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaEscrowQueryKeys.address(contractAddress)[0],
    method: "due",
    args
  }] as const),
  isFunded: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaEscrowQueryKeys.address(contractAddress)[0],
    method: "is_funded",
    args
  }] as const),
  isFullyFunded: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaEscrowQueryKeys.address(contractAddress)[0],
    method: "is_fully_funded",
    args
  }] as const),
  totalBalance: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaEscrowQueryKeys.address(contractAddress)[0],
    method: "total_balance",
    args
  }] as const),
  isLocked: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaEscrowQueryKeys.address(contractAddress)[0],
    method: "is_locked",
    args
  }] as const),
  dumpState: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaEscrowQueryKeys.address(contractAddress)[0],
    method: "dump_state",
    args
  }] as const),
  distribution: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaEscrowQueryKeys.address(contractAddress)[0],
    method: "distribution",
    args
  }] as const)
};
export const arenaEscrowQueries = {
  admin: <TData = AdminResponse,>({
    client,
    options
  }: ArenaEscrowAdminQuery<TData>): UseQueryOptions<AdminResponse, Error, TData> => ({
    queryKey: arenaEscrowQueryKeys.admin(client?.contractAddress),
    queryFn: () => client ? client.admin() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  balance: <TData = BalanceVerified,>({
    client,
    args,
    options
  }: ArenaEscrowBalanceQuery<TData>): UseQueryOptions<BalanceVerified, Error, TData> => ({
    queryKey: arenaEscrowQueryKeys.balance(client?.contractAddress, args),
    queryFn: () => client ? client.balance({
      addr: args.addr
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  due: <TData = BalanceVerified,>({
    client,
    args,
    options
  }: ArenaEscrowDueQuery<TData>): UseQueryOptions<BalanceVerified, Error, TData> => ({
    queryKey: arenaEscrowQueryKeys.due(client?.contractAddress, args),
    queryFn: () => client ? client.due({
      addr: args.addr
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  isFunded: <TData = Boolean,>({
    client,
    args,
    options
  }: ArenaEscrowIsFundedQuery<TData>): UseQueryOptions<Boolean, Error, TData> => ({
    queryKey: arenaEscrowQueryKeys.isFunded(client?.contractAddress, args),
    queryFn: () => client ? client.isFunded({
      addr: args.addr
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  isFullyFunded: <TData = Boolean,>({
    client,
    options
  }: ArenaEscrowIsFullyFundedQuery<TData>): UseQueryOptions<Boolean, Error, TData> => ({
    queryKey: arenaEscrowQueryKeys.isFullyFunded(client?.contractAddress),
    queryFn: () => client ? client.isFullyFunded() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  totalBalance: <TData = BalanceVerified,>({
    client,
    options
  }: ArenaEscrowTotalBalanceQuery<TData>): UseQueryOptions<BalanceVerified, Error, TData> => ({
    queryKey: arenaEscrowQueryKeys.totalBalance(client?.contractAddress),
    queryFn: () => client ? client.totalBalance() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  isLocked: <TData = Boolean,>({
    client,
    options
  }: ArenaEscrowIsLockedQuery<TData>): UseQueryOptions<Boolean, Error, TData> => ({
    queryKey: arenaEscrowQueryKeys.isLocked(client?.contractAddress),
    queryFn: () => client ? client.isLocked() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  dumpState: <TData = DumpStateResponse,>({
    client,
    options
  }: ArenaEscrowDumpStateQuery<TData>): UseQueryOptions<DumpStateResponse, Error, TData> => ({
    queryKey: arenaEscrowQueryKeys.dumpState(client?.contractAddress),
    queryFn: () => client ? client.dumpState() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  distribution: <TData = NullableArrayOfMemberShareVerified,>({
    client,
    args,
    options
  }: ArenaEscrowDistributionQuery<TData>): UseQueryOptions<NullableArrayOfMemberShareVerified, Error, TData> => ({
    queryKey: arenaEscrowQueryKeys.distribution(client?.contractAddress, args),
    queryFn: () => client ? client.distribution({
      addr: args.addr
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface ArenaEscrowReactQuery<TResponse, TData = TResponse> {
  client: ArenaEscrowQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface ArenaEscrowDistributionQuery<TData> extends ArenaEscrowReactQuery<NullableArrayOfMemberShareVerified, TData> {
  args: {
    addr: string;
  };
}
export function useArenaEscrowDistributionQuery<TData = NullableArrayOfMemberShareVerified>({
  client,
  args,
  options
}: ArenaEscrowDistributionQuery<TData>) {
  return useQuery<NullableArrayOfMemberShareVerified, Error, TData>(arenaEscrowQueryKeys.distribution(client?.contractAddress, args), () => client ? client.distribution({
    addr: args.addr
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaEscrowDumpStateQuery<TData> extends ArenaEscrowReactQuery<DumpStateResponse, TData> {}
export function useArenaEscrowDumpStateQuery<TData = DumpStateResponse>({
  client,
  options
}: ArenaEscrowDumpStateQuery<TData>) {
  return useQuery<DumpStateResponse, Error, TData>(arenaEscrowQueryKeys.dumpState(client?.contractAddress), () => client ? client.dumpState() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaEscrowIsLockedQuery<TData> extends ArenaEscrowReactQuery<Boolean, TData> {}
export function useArenaEscrowIsLockedQuery<TData = Boolean>({
  client,
  options
}: ArenaEscrowIsLockedQuery<TData>) {
  return useQuery<Boolean, Error, TData>(arenaEscrowQueryKeys.isLocked(client?.contractAddress), () => client ? client.isLocked() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaEscrowTotalBalanceQuery<TData> extends ArenaEscrowReactQuery<BalanceVerified, TData> {}
export function useArenaEscrowTotalBalanceQuery<TData = BalanceVerified>({
  client,
  options
}: ArenaEscrowTotalBalanceQuery<TData>) {
  return useQuery<BalanceVerified, Error, TData>(arenaEscrowQueryKeys.totalBalance(client?.contractAddress), () => client ? client.totalBalance() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaEscrowIsFullyFundedQuery<TData> extends ArenaEscrowReactQuery<Boolean, TData> {}
export function useArenaEscrowIsFullyFundedQuery<TData = Boolean>({
  client,
  options
}: ArenaEscrowIsFullyFundedQuery<TData>) {
  return useQuery<Boolean, Error, TData>(arenaEscrowQueryKeys.isFullyFunded(client?.contractAddress), () => client ? client.isFullyFunded() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaEscrowIsFundedQuery<TData> extends ArenaEscrowReactQuery<Boolean, TData> {
  args: {
    addr: string;
  };
}
export function useArenaEscrowIsFundedQuery<TData = Boolean>({
  client,
  args,
  options
}: ArenaEscrowIsFundedQuery<TData>) {
  return useQuery<Boolean, Error, TData>(arenaEscrowQueryKeys.isFunded(client?.contractAddress, args), () => client ? client.isFunded({
    addr: args.addr
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaEscrowDueQuery<TData> extends ArenaEscrowReactQuery<BalanceVerified, TData> {
  args: {
    addr: string;
  };
}
export function useArenaEscrowDueQuery<TData = BalanceVerified>({
  client,
  args,
  options
}: ArenaEscrowDueQuery<TData>) {
  return useQuery<BalanceVerified, Error, TData>(arenaEscrowQueryKeys.due(client?.contractAddress, args), () => client ? client.due({
    addr: args.addr
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaEscrowBalanceQuery<TData> extends ArenaEscrowReactQuery<BalanceVerified, TData> {
  args: {
    addr: string;
  };
}
export function useArenaEscrowBalanceQuery<TData = BalanceVerified>({
  client,
  args,
  options
}: ArenaEscrowBalanceQuery<TData>) {
  return useQuery<BalanceVerified, Error, TData>(arenaEscrowQueryKeys.balance(client?.contractAddress, args), () => client ? client.balance({
    addr: args.addr
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaEscrowAdminQuery<TData> extends ArenaEscrowReactQuery<AdminResponse, TData> {}
export function useArenaEscrowAdminQuery<TData = AdminResponse>({
  client,
  options
}: ArenaEscrowAdminQuery<TData>) {
  return useQuery<AdminResponse, Error, TData>(arenaEscrowQueryKeys.admin(client?.contractAddress), () => client ? client.admin() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaEscrowLockMutation {
  client: ArenaEscrowClient;
  msg: {
    value: boolean;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaEscrowLockMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaEscrowLockMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaEscrowLockMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.lock(msg, fee, memo, funds), options);
}
export interface ArenaEscrowDistributeMutation {
  client: ArenaEscrowClient;
  msg: {
    distribution?: MemberShare[];
    remainderAddr: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaEscrowDistributeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaEscrowDistributeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaEscrowDistributeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.distribute(msg, fee, memo, funds), options);
}
export interface ArenaEscrowReceiveNftMutation {
  client: ArenaEscrowClient;
  msg: {
    msg: Binary;
    sender: string;
    tokenId: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaEscrowReceiveNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaEscrowReceiveNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaEscrowReceiveNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.receiveNft(msg, fee, memo, funds), options);
}
export interface ArenaEscrowReceiveMutation {
  client: ArenaEscrowClient;
  msg: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaEscrowReceiveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaEscrowReceiveMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaEscrowReceiveMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.receive(msg, fee, memo, funds), options);
}
export interface ArenaEscrowReceiveNativeMutation {
  client: ArenaEscrowClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaEscrowReceiveNativeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaEscrowReceiveNativeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaEscrowReceiveNativeMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.receiveNative(fee, memo, funds), options);
}
export interface ArenaEscrowSetDistributionMutation {
  client: ArenaEscrowClient;
  msg: {
    distribution: MemberShare[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaEscrowSetDistributionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaEscrowSetDistributionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaEscrowSetDistributionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.setDistribution(msg, fee, memo, funds), options);
}
export interface ArenaEscrowWithdrawMutation {
  client: ArenaEscrowClient;
  msg: {
    cw20Msg?: Binary;
    cw721Msg?: Binary;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaEscrowWithdrawMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaEscrowWithdrawMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaEscrowWithdrawMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.withdraw(msg, fee, memo, funds), options);
}