/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Admin, Duration, InstantiateMsg, ExecuteMsg, Binary, Cw721ReceiveMsg, QueryMsg, Addr, Config, HooksResponse, InfoResponse, ContractVersion, Expiration, Timestamp, Uint64, NftClaimsResponse, NftClaim, ArrayOfString, Uint128, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse } from "./DaoVotingCw721Staked.types";
import { DaoVotingCw721StakedQueryClient, DaoVotingCw721StakedClient } from "./DaoVotingCw721Staked.client";
export const daoVotingCw721StakedQueryKeys = {
  contract: ([{
    contract: "daoVotingCw721Staked"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...daoVotingCw721StakedQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoVotingCw721StakedQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  nftClaims: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoVotingCw721StakedQueryKeys.address(contractAddress)[0],
    method: "nft_claims",
    args
  }] as const),
  hooks: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoVotingCw721StakedQueryKeys.address(contractAddress)[0],
    method: "hooks",
    args
  }] as const),
  stakedNfts: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoVotingCw721StakedQueryKeys.address(contractAddress)[0],
    method: "staked_nfts",
    args
  }] as const),
  votingPowerAtHeight: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoVotingCw721StakedQueryKeys.address(contractAddress)[0],
    method: "voting_power_at_height",
    args
  }] as const),
  totalPowerAtHeight: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoVotingCw721StakedQueryKeys.address(contractAddress)[0],
    method: "total_power_at_height",
    args
  }] as const),
  dao: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoVotingCw721StakedQueryKeys.address(contractAddress)[0],
    method: "dao",
    args
  }] as const),
  info: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoVotingCw721StakedQueryKeys.address(contractAddress)[0],
    method: "info",
    args
  }] as const)
};
export const daoVotingCw721StakedQueries = {
  config: <TData = Config,>({
    client,
    options
  }: DaoVotingCw721StakedConfigQuery<TData>): UseQueryOptions<Config, Error, TData> => ({
    queryKey: daoVotingCw721StakedQueryKeys.config(client?.contractAddress),
    queryFn: () => client ? client.config() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  nftClaims: <TData = NftClaimsResponse,>({
    client,
    args,
    options
  }: DaoVotingCw721StakedNftClaimsQuery<TData>): UseQueryOptions<NftClaimsResponse, Error, TData> => ({
    queryKey: daoVotingCw721StakedQueryKeys.nftClaims(client?.contractAddress, args),
    queryFn: () => client ? client.nftClaims({
      address: args.address
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  hooks: <TData = HooksResponse,>({
    client,
    options
  }: DaoVotingCw721StakedHooksQuery<TData>): UseQueryOptions<HooksResponse, Error, TData> => ({
    queryKey: daoVotingCw721StakedQueryKeys.hooks(client?.contractAddress),
    queryFn: () => client ? client.hooks() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  stakedNfts: <TData = ArrayOfString,>({
    client,
    args,
    options
  }: DaoVotingCw721StakedStakedNftsQuery<TData>): UseQueryOptions<ArrayOfString, Error, TData> => ({
    queryKey: daoVotingCw721StakedQueryKeys.stakedNfts(client?.contractAddress, args),
    queryFn: () => client ? client.stakedNfts({
      address: args.address,
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  votingPowerAtHeight: <TData = VotingPowerAtHeightResponse,>({
    client,
    args,
    options
  }: DaoVotingCw721StakedVotingPowerAtHeightQuery<TData>): UseQueryOptions<VotingPowerAtHeightResponse, Error, TData> => ({
    queryKey: daoVotingCw721StakedQueryKeys.votingPowerAtHeight(client?.contractAddress, args),
    queryFn: () => client ? client.votingPowerAtHeight({
      address: args.address,
      height: args.height
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  totalPowerAtHeight: <TData = TotalPowerAtHeightResponse,>({
    client,
    args,
    options
  }: DaoVotingCw721StakedTotalPowerAtHeightQuery<TData>): UseQueryOptions<TotalPowerAtHeightResponse, Error, TData> => ({
    queryKey: daoVotingCw721StakedQueryKeys.totalPowerAtHeight(client?.contractAddress, args),
    queryFn: () => client ? client.totalPowerAtHeight({
      height: args.height
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  dao: <TData = Addr,>({
    client,
    options
  }: DaoVotingCw721StakedDaoQuery<TData>): UseQueryOptions<Addr, Error, TData> => ({
    queryKey: daoVotingCw721StakedQueryKeys.dao(client?.contractAddress),
    queryFn: () => client ? client.dao() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  info: <TData = InfoResponse,>({
    client,
    options
  }: DaoVotingCw721StakedInfoQuery<TData>): UseQueryOptions<InfoResponse, Error, TData> => ({
    queryKey: daoVotingCw721StakedQueryKeys.info(client?.contractAddress),
    queryFn: () => client ? client.info() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface DaoVotingCw721StakedReactQuery<TResponse, TData = TResponse> {
  client: DaoVotingCw721StakedQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface DaoVotingCw721StakedInfoQuery<TData> extends DaoVotingCw721StakedReactQuery<InfoResponse, TData> {}
export function useDaoVotingCw721StakedInfoQuery<TData = InfoResponse>({
  client,
  options
}: DaoVotingCw721StakedInfoQuery<TData>) {
  return useQuery<InfoResponse, Error, TData>(daoVotingCw721StakedQueryKeys.info(client?.contractAddress), () => client ? client.info() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoVotingCw721StakedDaoQuery<TData> extends DaoVotingCw721StakedReactQuery<Addr, TData> {}
export function useDaoVotingCw721StakedDaoQuery<TData = Addr>({
  client,
  options
}: DaoVotingCw721StakedDaoQuery<TData>) {
  return useQuery<Addr, Error, TData>(daoVotingCw721StakedQueryKeys.dao(client?.contractAddress), () => client ? client.dao() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoVotingCw721StakedTotalPowerAtHeightQuery<TData> extends DaoVotingCw721StakedReactQuery<TotalPowerAtHeightResponse, TData> {
  args: {
    height?: number;
  };
}
export function useDaoVotingCw721StakedTotalPowerAtHeightQuery<TData = TotalPowerAtHeightResponse>({
  client,
  args,
  options
}: DaoVotingCw721StakedTotalPowerAtHeightQuery<TData>) {
  return useQuery<TotalPowerAtHeightResponse, Error, TData>(daoVotingCw721StakedQueryKeys.totalPowerAtHeight(client?.contractAddress, args), () => client ? client.totalPowerAtHeight({
    height: args.height
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoVotingCw721StakedVotingPowerAtHeightQuery<TData> extends DaoVotingCw721StakedReactQuery<VotingPowerAtHeightResponse, TData> {
  args: {
    address: string;
    height?: number;
  };
}
export function useDaoVotingCw721StakedVotingPowerAtHeightQuery<TData = VotingPowerAtHeightResponse>({
  client,
  args,
  options
}: DaoVotingCw721StakedVotingPowerAtHeightQuery<TData>) {
  return useQuery<VotingPowerAtHeightResponse, Error, TData>(daoVotingCw721StakedQueryKeys.votingPowerAtHeight(client?.contractAddress, args), () => client ? client.votingPowerAtHeight({
    address: args.address,
    height: args.height
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoVotingCw721StakedStakedNftsQuery<TData> extends DaoVotingCw721StakedReactQuery<ArrayOfString, TData> {
  args: {
    address: string;
    limit?: number;
    startAfter?: string;
  };
}
export function useDaoVotingCw721StakedStakedNftsQuery<TData = ArrayOfString>({
  client,
  args,
  options
}: DaoVotingCw721StakedStakedNftsQuery<TData>) {
  return useQuery<ArrayOfString, Error, TData>(daoVotingCw721StakedQueryKeys.stakedNfts(client?.contractAddress, args), () => client ? client.stakedNfts({
    address: args.address,
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoVotingCw721StakedHooksQuery<TData> extends DaoVotingCw721StakedReactQuery<HooksResponse, TData> {}
export function useDaoVotingCw721StakedHooksQuery<TData = HooksResponse>({
  client,
  options
}: DaoVotingCw721StakedHooksQuery<TData>) {
  return useQuery<HooksResponse, Error, TData>(daoVotingCw721StakedQueryKeys.hooks(client?.contractAddress), () => client ? client.hooks() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoVotingCw721StakedNftClaimsQuery<TData> extends DaoVotingCw721StakedReactQuery<NftClaimsResponse, TData> {
  args: {
    address: string;
  };
}
export function useDaoVotingCw721StakedNftClaimsQuery<TData = NftClaimsResponse>({
  client,
  args,
  options
}: DaoVotingCw721StakedNftClaimsQuery<TData>) {
  return useQuery<NftClaimsResponse, Error, TData>(daoVotingCw721StakedQueryKeys.nftClaims(client?.contractAddress, args), () => client ? client.nftClaims({
    address: args.address
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoVotingCw721StakedConfigQuery<TData> extends DaoVotingCw721StakedReactQuery<Config, TData> {}
export function useDaoVotingCw721StakedConfigQuery<TData = Config>({
  client,
  options
}: DaoVotingCw721StakedConfigQuery<TData>) {
  return useQuery<Config, Error, TData>(daoVotingCw721StakedQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoVotingCw721StakedRemoveHookMutation {
  client: DaoVotingCw721StakedClient;
  msg: {
    addr: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoVotingCw721StakedRemoveHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoVotingCw721StakedRemoveHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoVotingCw721StakedRemoveHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.removeHook(msg, fee, memo, funds), options);
}
export interface DaoVotingCw721StakedAddHookMutation {
  client: DaoVotingCw721StakedClient;
  msg: {
    addr: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoVotingCw721StakedAddHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoVotingCw721StakedAddHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoVotingCw721StakedAddHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.addHook(msg, fee, memo, funds), options);
}
export interface DaoVotingCw721StakedUpdateConfigMutation {
  client: DaoVotingCw721StakedClient;
  msg: {
    duration?: Duration;
    owner?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoVotingCw721StakedUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoVotingCw721StakedUpdateConfigMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoVotingCw721StakedUpdateConfigMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateConfig(msg, fee, memo, funds), options);
}
export interface DaoVotingCw721StakedClaimNftsMutation {
  client: DaoVotingCw721StakedClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoVotingCw721StakedClaimNftsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoVotingCw721StakedClaimNftsMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoVotingCw721StakedClaimNftsMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.claimNfts(fee, memo, funds), options);
}
export interface DaoVotingCw721StakedUnstakeMutation {
  client: DaoVotingCw721StakedClient;
  msg: {
    tokenIds: string[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoVotingCw721StakedUnstakeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoVotingCw721StakedUnstakeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoVotingCw721StakedUnstakeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.unstake(msg, fee, memo, funds), options);
}
export interface DaoVotingCw721StakedReceiveNftMutation {
  client: DaoVotingCw721StakedClient;
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
export function useDaoVotingCw721StakedReceiveNftMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoVotingCw721StakedReceiveNftMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoVotingCw721StakedReceiveNftMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.receiveNft(msg, fee, memo, funds), options);
}