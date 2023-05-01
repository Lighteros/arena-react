/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Uint128, InstantiateMsg, ExecuteMsg, Action, Expiration, Timestamp, Uint64, QueryMsg, MigrateMsg, Addr, InfoResponse, Config, OwnershipForAddr } from "./Cw20StakeRewardDistributor.types";
import { Cw20StakeRewardDistributorQueryClient, Cw20StakeRewardDistributorClient } from "./Cw20StakeRewardDistributor.client";
export const cw20StakeRewardDistributorQueryKeys = {
  contract: ([{
    contract: "cw20StakeRewardDistributor"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...cw20StakeRewardDistributorQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  info: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20StakeRewardDistributorQueryKeys.address(contractAddress)[0],
    method: "info",
    args
  }] as const),
  ownership: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20StakeRewardDistributorQueryKeys.address(contractAddress)[0],
    method: "ownership",
    args
  }] as const)
};
export const cw20StakeRewardDistributorQueries = {
  info: <TData = InfoResponse,>({
    client,
    options
  }: Cw20StakeRewardDistributorInfoQuery<TData>): UseQueryOptions<InfoResponse, Error, TData> => ({
    queryKey: cw20StakeRewardDistributorQueryKeys.info(client?.contractAddress),
    queryFn: () => client ? client.info() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  ownership: <TData = OwnershipForAddr,>({
    client,
    options
  }: Cw20StakeRewardDistributorOwnershipQuery<TData>): UseQueryOptions<OwnershipForAddr, Error, TData> => ({
    queryKey: cw20StakeRewardDistributorQueryKeys.ownership(client?.contractAddress),
    queryFn: () => client ? client.ownership() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface Cw20StakeRewardDistributorReactQuery<TResponse, TData = TResponse> {
  client: Cw20StakeRewardDistributorQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface Cw20StakeRewardDistributorOwnershipQuery<TData> extends Cw20StakeRewardDistributorReactQuery<OwnershipForAddr, TData> {}
export function useCw20StakeRewardDistributorOwnershipQuery<TData = OwnershipForAddr>({
  client,
  options
}: Cw20StakeRewardDistributorOwnershipQuery<TData>) {
  return useQuery<OwnershipForAddr, Error, TData>(cw20StakeRewardDistributorQueryKeys.ownership(client?.contractAddress), () => client ? client.ownership() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20StakeRewardDistributorInfoQuery<TData> extends Cw20StakeRewardDistributorReactQuery<InfoResponse, TData> {}
export function useCw20StakeRewardDistributorInfoQuery<TData = InfoResponse>({
  client,
  options
}: Cw20StakeRewardDistributorInfoQuery<TData>) {
  return useQuery<InfoResponse, Error, TData>(cw20StakeRewardDistributorQueryKeys.info(client?.contractAddress), () => client ? client.info() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20StakeRewardDistributorUpdateOwnershipMutation {
  client: Cw20StakeRewardDistributorClient;
  msg: Action;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20StakeRewardDistributorUpdateOwnershipMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20StakeRewardDistributorUpdateOwnershipMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20StakeRewardDistributorUpdateOwnershipMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateOwnership(msg, fee, memo, funds), options);
}
export interface Cw20StakeRewardDistributorWithdrawMutation {
  client: Cw20StakeRewardDistributorClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20StakeRewardDistributorWithdrawMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20StakeRewardDistributorWithdrawMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20StakeRewardDistributorWithdrawMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.withdraw(fee, memo, funds), options);
}
export interface Cw20StakeRewardDistributorDistributeMutation {
  client: Cw20StakeRewardDistributorClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20StakeRewardDistributorDistributeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20StakeRewardDistributorDistributeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20StakeRewardDistributorDistributeMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.distribute(fee, memo, funds), options);
}
export interface Cw20StakeRewardDistributorUpdateConfigMutation {
  client: Cw20StakeRewardDistributorClient;
  msg: {
    rewardRate: Uint128;
    rewardToken: string;
    stakingAddr: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20StakeRewardDistributorUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20StakeRewardDistributorUpdateConfigMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20StakeRewardDistributorUpdateConfigMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateConfig(msg, fee, memo, funds), options);
}