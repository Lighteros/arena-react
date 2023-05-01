/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Decimal, InstantiateMsg, Empty, ExecuteMsg, Uint128, Admin, Binary, Expiration, Timestamp, Uint64, ModuleInstantiateInfo, MemberShare, QueryMsg, Null, AdminResponse, Addr, CompetitionStatus, CompetitionForEmpty, Config } from "./ArenaWagerModule.types";
import { ArenaWagerModuleQueryClient, ArenaWagerModuleClient } from "./ArenaWagerModule.client";
export const arenaWagerModuleQueryKeys = {
  contract: ([{
    contract: "arenaWagerModule"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...arenaWagerModuleQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  dAO: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaWagerModuleQueryKeys.address(contractAddress)[0],
    method: "d_a_o",
    args
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaWagerModuleQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  competition: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaWagerModuleQueryKeys.address(contractAddress)[0],
    method: "competition",
    args
  }] as const),
  queryExtension: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaWagerModuleQueryKeys.address(contractAddress)[0],
    method: "query_extension",
    args
  }] as const),
  admin: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...arenaWagerModuleQueryKeys.address(contractAddress)[0],
    method: "admin",
    args
  }] as const)
};
export const arenaWagerModuleQueries = {
  dAO: <TData = Addr,>({
    client,
    options
  }: ArenaWagerModuleDAOQuery<TData>): UseQueryOptions<Addr, Error, TData> => ({
    queryKey: arenaWagerModuleQueryKeys.dAO(client?.contractAddress),
    queryFn: () => client ? client.dAO() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  config: <TData = Config,>({
    client,
    options
  }: ArenaWagerModuleConfigQuery<TData>): UseQueryOptions<Config, Error, TData> => ({
    queryKey: arenaWagerModuleQueryKeys.config(client?.contractAddress),
    queryFn: () => client ? client.config() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  competition: <TData = CompetitionForEmpty,>({
    client,
    args,
    options
  }: ArenaWagerModuleCompetitionQuery<TData>): UseQueryOptions<CompetitionForEmpty, Error, TData> => ({
    queryKey: arenaWagerModuleQueryKeys.competition(client?.contractAddress, args),
    queryFn: () => client ? client.competition({
      id: args.id
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  queryExtension: <TData = Binary,>({
    client,
    args,
    options
  }: ArenaWagerModuleQueryExtensionQuery<TData>): UseQueryOptions<Binary, Error, TData> => ({
    queryKey: arenaWagerModuleQueryKeys.queryExtension(client?.contractAddress, args),
    queryFn: () => client ? client.queryExtension({
      msg: args.msg
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  admin: <TData = AdminResponse,>({
    client,
    options
  }: ArenaWagerModuleAdminQuery<TData>): UseQueryOptions<AdminResponse, Error, TData> => ({
    queryKey: arenaWagerModuleQueryKeys.admin(client?.contractAddress),
    queryFn: () => client ? client.admin() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface ArenaWagerModuleReactQuery<TResponse, TData = TResponse> {
  client: ArenaWagerModuleQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface ArenaWagerModuleAdminQuery<TData> extends ArenaWagerModuleReactQuery<AdminResponse, TData> {}
export function useArenaWagerModuleAdminQuery<TData = AdminResponse>({
  client,
  options
}: ArenaWagerModuleAdminQuery<TData>) {
  return useQuery<AdminResponse, Error, TData>(arenaWagerModuleQueryKeys.admin(client?.contractAddress), () => client ? client.admin() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaWagerModuleQueryExtensionQuery<TData> extends ArenaWagerModuleReactQuery<Binary, TData> {
  args: {
    msg: Empty;
  };
}
export function useArenaWagerModuleQueryExtensionQuery<TData = Binary>({
  client,
  args,
  options
}: ArenaWagerModuleQueryExtensionQuery<TData>) {
  return useQuery<Binary, Error, TData>(arenaWagerModuleQueryKeys.queryExtension(client?.contractAddress, args), () => client ? client.queryExtension({
    msg: args.msg
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaWagerModuleCompetitionQuery<TData> extends ArenaWagerModuleReactQuery<CompetitionForEmpty, TData> {
  args: {
    id: Uint128;
  };
}
export function useArenaWagerModuleCompetitionQuery<TData = CompetitionForEmpty>({
  client,
  args,
  options
}: ArenaWagerModuleCompetitionQuery<TData>) {
  return useQuery<CompetitionForEmpty, Error, TData>(arenaWagerModuleQueryKeys.competition(client?.contractAddress, args), () => client ? client.competition({
    id: args.id
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaWagerModuleConfigQuery<TData> extends ArenaWagerModuleReactQuery<Config, TData> {}
export function useArenaWagerModuleConfigQuery<TData = Config>({
  client,
  options
}: ArenaWagerModuleConfigQuery<TData>) {
  return useQuery<Config, Error, TData>(arenaWagerModuleQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaWagerModuleDAOQuery<TData> extends ArenaWagerModuleReactQuery<Addr, TData> {}
export function useArenaWagerModuleDAOQuery<TData = Addr>({
  client,
  options
}: ArenaWagerModuleDAOQuery<TData>) {
  return useQuery<Addr, Error, TData>(arenaWagerModuleQueryKeys.dAO(client?.contractAddress), () => client ? client.dAO() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface ArenaWagerModuleExtensionMutation {
  client: ArenaWagerModuleClient;
  msg: {
    msg: Empty;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaWagerModuleExtensionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaWagerModuleExtensionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaWagerModuleExtensionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.extension(msg, fee, memo, funds), options);
}
export interface ArenaWagerModuleProcessCompetitionMutation {
  client: ArenaWagerModuleClient;
  msg: {
    distribution?: MemberShare[];
    id: Uint128;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaWagerModuleProcessCompetitionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaWagerModuleProcessCompetitionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaWagerModuleProcessCompetitionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.processCompetition(msg, fee, memo, funds), options);
}
export interface ArenaWagerModuleCreateCompetitionMutation {
  client: ArenaWagerModuleClient;
  msg: {
    competitionDao: ModuleInstantiateInfo;
    description: string;
    escrow: ModuleInstantiateInfo;
    expiration: Expiration;
    extension: Empty;
    name: string;
    rules: string[];
    ruleset?: Uint128;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaWagerModuleCreateCompetitionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaWagerModuleCreateCompetitionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaWagerModuleCreateCompetitionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.createCompetition(msg, fee, memo, funds), options);
}
export interface ArenaWagerModuleJailCompetitionMutation {
  client: ArenaWagerModuleClient;
  msg: {
    id: Uint128;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useArenaWagerModuleJailCompetitionMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, ArenaWagerModuleJailCompetitionMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, ArenaWagerModuleJailCompetitionMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.jailCompetition(msg, fee, memo, funds), options);
}