/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.34.2.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { Uint128, Logo, EmbeddedLogo, Binary, InstantiateMsg, Cw20Coin, InstantiateMarketingInfo, MinterResponse, ExecuteMsg, Expiration, Timestamp, Uint64, QueryMsg, AllAccountsResponse, AllAllowancesResponse, AllowanceInfo, AllSpenderAllowancesResponse, SpenderAllowanceInfo, AllowanceResponse, BalanceResponse, DownloadLogoResponse, LogoInfo, Addr, MarketingInfoResponse, TokenInfoResponse } from "./Cw20Base.types";
import { Cw20BaseQueryClient, Cw20BaseClient } from "./Cw20Base.client";
export const cw20BaseQueryKeys = {
  contract: ([{
    contract: "cw20Base"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...cw20BaseQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  balance: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20BaseQueryKeys.address(contractAddress)[0],
    method: "balance",
    args
  }] as const),
  tokenInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20BaseQueryKeys.address(contractAddress)[0],
    method: "token_info",
    args
  }] as const),
  minter: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20BaseQueryKeys.address(contractAddress)[0],
    method: "minter",
    args
  }] as const),
  allowance: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20BaseQueryKeys.address(contractAddress)[0],
    method: "allowance",
    args
  }] as const),
  allAllowances: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20BaseQueryKeys.address(contractAddress)[0],
    method: "all_allowances",
    args
  }] as const),
  allSpenderAllowances: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20BaseQueryKeys.address(contractAddress)[0],
    method: "all_spender_allowances",
    args
  }] as const),
  allAccounts: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20BaseQueryKeys.address(contractAddress)[0],
    method: "all_accounts",
    args
  }] as const),
  marketingInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20BaseQueryKeys.address(contractAddress)[0],
    method: "marketing_info",
    args
  }] as const),
  downloadLogo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...cw20BaseQueryKeys.address(contractAddress)[0],
    method: "download_logo",
    args
  }] as const)
};
export const cw20BaseQueries = {
  balance: <TData = BalanceResponse,>({
    client,
    args,
    options
  }: Cw20BaseBalanceQuery<TData>): UseQueryOptions<BalanceResponse, Error, TData> => ({
    queryKey: cw20BaseQueryKeys.balance(client?.contractAddress, args),
    queryFn: () => client ? client.balance({
      address: args.address
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  tokenInfo: <TData = TokenInfoResponse,>({
    client,
    options
  }: Cw20BaseTokenInfoQuery<TData>): UseQueryOptions<TokenInfoResponse, Error, TData> => ({
    queryKey: cw20BaseQueryKeys.tokenInfo(client?.contractAddress),
    queryFn: () => client ? client.tokenInfo() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  minter: <TData = MinterResponse,>({
    client,
    options
  }: Cw20BaseMinterQuery<TData>): UseQueryOptions<MinterResponse, Error, TData> => ({
    queryKey: cw20BaseQueryKeys.minter(client?.contractAddress),
    queryFn: () => client ? client.minter() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  allowance: <TData = AllowanceResponse,>({
    client,
    args,
    options
  }: Cw20BaseAllowanceQuery<TData>): UseQueryOptions<AllowanceResponse, Error, TData> => ({
    queryKey: cw20BaseQueryKeys.allowance(client?.contractAddress, args),
    queryFn: () => client ? client.allowance({
      owner: args.owner,
      spender: args.spender
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  allAllowances: <TData = AllAllowancesResponse,>({
    client,
    args,
    options
  }: Cw20BaseAllAllowancesQuery<TData>): UseQueryOptions<AllAllowancesResponse, Error, TData> => ({
    queryKey: cw20BaseQueryKeys.allAllowances(client?.contractAddress, args),
    queryFn: () => client ? client.allAllowances({
      limit: args.limit,
      owner: args.owner,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  allSpenderAllowances: <TData = AllSpenderAllowancesResponse,>({
    client,
    args,
    options
  }: Cw20BaseAllSpenderAllowancesQuery<TData>): UseQueryOptions<AllSpenderAllowancesResponse, Error, TData> => ({
    queryKey: cw20BaseQueryKeys.allSpenderAllowances(client?.contractAddress, args),
    queryFn: () => client ? client.allSpenderAllowances({
      limit: args.limit,
      spender: args.spender,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  allAccounts: <TData = AllAccountsResponse,>({
    client,
    args,
    options
  }: Cw20BaseAllAccountsQuery<TData>): UseQueryOptions<AllAccountsResponse, Error, TData> => ({
    queryKey: cw20BaseQueryKeys.allAccounts(client?.contractAddress, args),
    queryFn: () => client ? client.allAccounts({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  marketingInfo: <TData = MarketingInfoResponse,>({
    client,
    options
  }: Cw20BaseMarketingInfoQuery<TData>): UseQueryOptions<MarketingInfoResponse, Error, TData> => ({
    queryKey: cw20BaseQueryKeys.marketingInfo(client?.contractAddress),
    queryFn: () => client ? client.marketingInfo() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  downloadLogo: <TData = DownloadLogoResponse,>({
    client,
    options
  }: Cw20BaseDownloadLogoQuery<TData>): UseQueryOptions<DownloadLogoResponse, Error, TData> => ({
    queryKey: cw20BaseQueryKeys.downloadLogo(client?.contractAddress),
    queryFn: () => client ? client.downloadLogo() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface Cw20BaseReactQuery<TResponse, TData = TResponse> {
  client: Cw20BaseQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface Cw20BaseDownloadLogoQuery<TData> extends Cw20BaseReactQuery<DownloadLogoResponse, TData> {}
export function useCw20BaseDownloadLogoQuery<TData = DownloadLogoResponse>({
  client,
  options
}: Cw20BaseDownloadLogoQuery<TData>) {
  return useQuery<DownloadLogoResponse, Error, TData>(cw20BaseQueryKeys.downloadLogo(client?.contractAddress), () => client ? client.downloadLogo() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20BaseMarketingInfoQuery<TData> extends Cw20BaseReactQuery<MarketingInfoResponse, TData> {}
export function useCw20BaseMarketingInfoQuery<TData = MarketingInfoResponse>({
  client,
  options
}: Cw20BaseMarketingInfoQuery<TData>) {
  return useQuery<MarketingInfoResponse, Error, TData>(cw20BaseQueryKeys.marketingInfo(client?.contractAddress), () => client ? client.marketingInfo() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20BaseAllAccountsQuery<TData> extends Cw20BaseReactQuery<AllAccountsResponse, TData> {
  args: {
    limit?: number;
    startAfter?: string;
  };
}
export function useCw20BaseAllAccountsQuery<TData = AllAccountsResponse>({
  client,
  args,
  options
}: Cw20BaseAllAccountsQuery<TData>) {
  return useQuery<AllAccountsResponse, Error, TData>(cw20BaseQueryKeys.allAccounts(client?.contractAddress, args), () => client ? client.allAccounts({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20BaseAllSpenderAllowancesQuery<TData> extends Cw20BaseReactQuery<AllSpenderAllowancesResponse, TData> {
  args: {
    limit?: number;
    spender: string;
    startAfter?: string;
  };
}
export function useCw20BaseAllSpenderAllowancesQuery<TData = AllSpenderAllowancesResponse>({
  client,
  args,
  options
}: Cw20BaseAllSpenderAllowancesQuery<TData>) {
  return useQuery<AllSpenderAllowancesResponse, Error, TData>(cw20BaseQueryKeys.allSpenderAllowances(client?.contractAddress, args), () => client ? client.allSpenderAllowances({
    limit: args.limit,
    spender: args.spender,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20BaseAllAllowancesQuery<TData> extends Cw20BaseReactQuery<AllAllowancesResponse, TData> {
  args: {
    limit?: number;
    owner: string;
    startAfter?: string;
  };
}
export function useCw20BaseAllAllowancesQuery<TData = AllAllowancesResponse>({
  client,
  args,
  options
}: Cw20BaseAllAllowancesQuery<TData>) {
  return useQuery<AllAllowancesResponse, Error, TData>(cw20BaseQueryKeys.allAllowances(client?.contractAddress, args), () => client ? client.allAllowances({
    limit: args.limit,
    owner: args.owner,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20BaseAllowanceQuery<TData> extends Cw20BaseReactQuery<AllowanceResponse, TData> {
  args: {
    owner: string;
    spender: string;
  };
}
export function useCw20BaseAllowanceQuery<TData = AllowanceResponse>({
  client,
  args,
  options
}: Cw20BaseAllowanceQuery<TData>) {
  return useQuery<AllowanceResponse, Error, TData>(cw20BaseQueryKeys.allowance(client?.contractAddress, args), () => client ? client.allowance({
    owner: args.owner,
    spender: args.spender
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20BaseMinterQuery<TData> extends Cw20BaseReactQuery<MinterResponse, TData> {}
export function useCw20BaseMinterQuery<TData = MinterResponse>({
  client,
  options
}: Cw20BaseMinterQuery<TData>) {
  return useQuery<MinterResponse, Error, TData>(cw20BaseQueryKeys.minter(client?.contractAddress), () => client ? client.minter() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20BaseTokenInfoQuery<TData> extends Cw20BaseReactQuery<TokenInfoResponse, TData> {}
export function useCw20BaseTokenInfoQuery<TData = TokenInfoResponse>({
  client,
  options
}: Cw20BaseTokenInfoQuery<TData>) {
  return useQuery<TokenInfoResponse, Error, TData>(cw20BaseQueryKeys.tokenInfo(client?.contractAddress), () => client ? client.tokenInfo() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20BaseBalanceQuery<TData> extends Cw20BaseReactQuery<BalanceResponse, TData> {
  args: {
    address: string;
  };
}
export function useCw20BaseBalanceQuery<TData = BalanceResponse>({
  client,
  args,
  options
}: Cw20BaseBalanceQuery<TData>) {
  return useQuery<BalanceResponse, Error, TData>(cw20BaseQueryKeys.balance(client?.contractAddress, args), () => client ? client.balance({
    address: args.address
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface Cw20BaseUploadLogoMutation {
  client: Cw20BaseClient;
  msg: Logo;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseUploadLogoMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseUploadLogoMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseUploadLogoMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.uploadLogo(msg, fee, memo, funds), options);
}
export interface Cw20BaseUpdateMarketingMutation {
  client: Cw20BaseClient;
  msg: {
    description?: string;
    marketing?: string;
    project?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseUpdateMarketingMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseUpdateMarketingMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseUpdateMarketingMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateMarketing(msg, fee, memo, funds), options);
}
export interface Cw20BaseUpdateMinterMutation {
  client: Cw20BaseClient;
  msg: {
    newMinter?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseUpdateMinterMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseUpdateMinterMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseUpdateMinterMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateMinter(msg, fee, memo, funds), options);
}
export interface Cw20BaseMintMutation {
  client: Cw20BaseClient;
  msg: {
    amount: Uint128;
    recipient: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseMintMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseMintMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseMintMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.mint(msg, fee, memo, funds), options);
}
export interface Cw20BaseBurnFromMutation {
  client: Cw20BaseClient;
  msg: {
    amount: Uint128;
    owner: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseBurnFromMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseBurnFromMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseBurnFromMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.burnFrom(msg, fee, memo, funds), options);
}
export interface Cw20BaseSendFromMutation {
  client: Cw20BaseClient;
  msg: {
    amount: Uint128;
    contract: string;
    msg: Binary;
    owner: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseSendFromMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseSendFromMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseSendFromMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.sendFrom(msg, fee, memo, funds), options);
}
export interface Cw20BaseTransferFromMutation {
  client: Cw20BaseClient;
  msg: {
    amount: Uint128;
    owner: string;
    recipient: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseTransferFromMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseTransferFromMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseTransferFromMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.transferFrom(msg, fee, memo, funds), options);
}
export interface Cw20BaseDecreaseAllowanceMutation {
  client: Cw20BaseClient;
  msg: {
    amount: Uint128;
    expires?: Expiration;
    spender: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseDecreaseAllowanceMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseDecreaseAllowanceMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseDecreaseAllowanceMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.decreaseAllowance(msg, fee, memo, funds), options);
}
export interface Cw20BaseIncreaseAllowanceMutation {
  client: Cw20BaseClient;
  msg: {
    amount: Uint128;
    expires?: Expiration;
    spender: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseIncreaseAllowanceMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseIncreaseAllowanceMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseIncreaseAllowanceMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.increaseAllowance(msg, fee, memo, funds), options);
}
export interface Cw20BaseSendMutation {
  client: Cw20BaseClient;
  msg: {
    amount: Uint128;
    contract: string;
    msg: Binary;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseSendMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseSendMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseSendMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.send(msg, fee, memo, funds), options);
}
export interface Cw20BaseBurnMutation {
  client: Cw20BaseClient;
  msg: {
    amount: Uint128;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseBurnMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseBurnMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseBurnMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.burn(msg, fee, memo, funds), options);
}
export interface Cw20BaseTransferMutation {
  client: Cw20BaseClient;
  msg: {
    amount: Uint128;
    recipient: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useCw20BaseTransferMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, Cw20BaseTransferMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, Cw20BaseTransferMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.transfer(msg, fee, memo, funds), options);
}