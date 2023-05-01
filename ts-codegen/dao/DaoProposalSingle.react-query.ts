/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Duration, PreProposeInfo, Admin, Binary, Threshold, PercentageThreshold, Decimal, Uint128, InstantiateMsg, ModuleInstantiateInfo, ExecuteMsg, CosmosMsgForEmpty, BankMsg, StakingMsg, DistributionMsg, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Vote, SingleChoiceProposeMsg, Coin, Empty, IbcTimeout, IbcTimeoutBlock, QueryMsg, MigrateMsg, Addr, Config, VoteResponse, VoteInfo, InfoResponse, ContractVersion, Expiration, Status, ProposalListResponse, ProposalResponse, SingleChoiceProposal, Votes, VoteListResponse, ProposalCreationPolicy, HooksResponse } from "./DaoProposalSingle.types";
import { DaoProposalSingleQueryClient, DaoProposalSingleClient } from "./DaoProposalSingle.client";
export const daoProposalSingleQueryKeys = {
  contract: ([{
    contract: "daoProposalSingle"
  }] as const),
  address: (contractAddress: string | undefined) => ([{ ...daoProposalSingleQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  proposal: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "proposal",
    args
  }] as const),
  listProposals: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "list_proposals",
    args
  }] as const),
  reverseProposals: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "reverse_proposals",
    args
  }] as const),
  getVote: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "get_vote",
    args
  }] as const),
  listVotes: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "list_votes",
    args
  }] as const),
  proposalCount: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "proposal_count",
    args
  }] as const),
  proposalCreationPolicy: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "proposal_creation_policy",
    args
  }] as const),
  proposalHooks: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "proposal_hooks",
    args
  }] as const),
  voteHooks: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "vote_hooks",
    args
  }] as const),
  dao: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "dao",
    args
  }] as const),
  info: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "info",
    args
  }] as const),
  nextProposalId: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{ ...daoProposalSingleQueryKeys.address(contractAddress)[0],
    method: "next_proposal_id",
    args
  }] as const)
};
export const daoProposalSingleQueries = {
  config: <TData = Config,>({
    client,
    options
  }: DaoProposalSingleConfigQuery<TData>): UseQueryOptions<Config, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.config(client?.contractAddress),
    queryFn: () => client ? client.config() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  proposal: <TData = ProposalResponse,>({
    client,
    args,
    options
  }: DaoProposalSingleProposalQuery<TData>): UseQueryOptions<ProposalResponse, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.proposal(client?.contractAddress, args),
    queryFn: () => client ? client.proposal({
      proposalId: args.proposalId
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  listProposals: <TData = ProposalListResponse,>({
    client,
    args,
    options
  }: DaoProposalSingleListProposalsQuery<TData>): UseQueryOptions<ProposalListResponse, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.listProposals(client?.contractAddress, args),
    queryFn: () => client ? client.listProposals({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  reverseProposals: <TData = ProposalListResponse,>({
    client,
    args,
    options
  }: DaoProposalSingleReverseProposalsQuery<TData>): UseQueryOptions<ProposalListResponse, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.reverseProposals(client?.contractAddress, args),
    queryFn: () => client ? client.reverseProposals({
      limit: args.limit,
      startBefore: args.startBefore
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  getVote: <TData = VoteResponse,>({
    client,
    args,
    options
  }: DaoProposalSingleGetVoteQuery<TData>): UseQueryOptions<VoteResponse, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.getVote(client?.contractAddress, args),
    queryFn: () => client ? client.getVote({
      proposalId: args.proposalId,
      voter: args.voter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  listVotes: <TData = VoteListResponse,>({
    client,
    args,
    options
  }: DaoProposalSingleListVotesQuery<TData>): UseQueryOptions<VoteListResponse, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.listVotes(client?.contractAddress, args),
    queryFn: () => client ? client.listVotes({
      limit: args.limit,
      proposalId: args.proposalId,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  proposalCount: <TData = Uint64,>({
    client,
    options
  }: DaoProposalSingleProposalCountQuery<TData>): UseQueryOptions<Uint64, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.proposalCount(client?.contractAddress),
    queryFn: () => client ? client.proposalCount() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  proposalCreationPolicy: <TData = ProposalCreationPolicy,>({
    client,
    options
  }: DaoProposalSingleProposalCreationPolicyQuery<TData>): UseQueryOptions<ProposalCreationPolicy, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.proposalCreationPolicy(client?.contractAddress),
    queryFn: () => client ? client.proposalCreationPolicy() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  proposalHooks: <TData = HooksResponse,>({
    client,
    options
  }: DaoProposalSingleProposalHooksQuery<TData>): UseQueryOptions<HooksResponse, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.proposalHooks(client?.contractAddress),
    queryFn: () => client ? client.proposalHooks() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  voteHooks: <TData = HooksResponse,>({
    client,
    options
  }: DaoProposalSingleVoteHooksQuery<TData>): UseQueryOptions<HooksResponse, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.voteHooks(client?.contractAddress),
    queryFn: () => client ? client.voteHooks() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  dao: <TData = Addr,>({
    client,
    options
  }: DaoProposalSingleDaoQuery<TData>): UseQueryOptions<Addr, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.dao(client?.contractAddress),
    queryFn: () => client ? client.dao() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  info: <TData = InfoResponse,>({
    client,
    options
  }: DaoProposalSingleInfoQuery<TData>): UseQueryOptions<InfoResponse, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.info(client?.contractAddress),
    queryFn: () => client ? client.info() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  nextProposalId: <TData = Uint64,>({
    client,
    options
  }: DaoProposalSingleNextProposalIdQuery<TData>): UseQueryOptions<Uint64, Error, TData> => ({
    queryKey: daoProposalSingleQueryKeys.nextProposalId(client?.contractAddress),
    queryFn: () => client ? client.nextProposalId() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface DaoProposalSingleReactQuery<TResponse, TData = TResponse> {
  client: DaoProposalSingleQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface DaoProposalSingleNextProposalIdQuery<TData> extends DaoProposalSingleReactQuery<Uint64, TData> {}
export function useDaoProposalSingleNextProposalIdQuery<TData = Uint64>({
  client,
  options
}: DaoProposalSingleNextProposalIdQuery<TData>) {
  return useQuery<Uint64, Error, TData>(daoProposalSingleQueryKeys.nextProposalId(client?.contractAddress), () => client ? client.nextProposalId() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleInfoQuery<TData> extends DaoProposalSingleReactQuery<InfoResponse, TData> {}
export function useDaoProposalSingleInfoQuery<TData = InfoResponse>({
  client,
  options
}: DaoProposalSingleInfoQuery<TData>) {
  return useQuery<InfoResponse, Error, TData>(daoProposalSingleQueryKeys.info(client?.contractAddress), () => client ? client.info() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleDaoQuery<TData> extends DaoProposalSingleReactQuery<Addr, TData> {}
export function useDaoProposalSingleDaoQuery<TData = Addr>({
  client,
  options
}: DaoProposalSingleDaoQuery<TData>) {
  return useQuery<Addr, Error, TData>(daoProposalSingleQueryKeys.dao(client?.contractAddress), () => client ? client.dao() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleVoteHooksQuery<TData> extends DaoProposalSingleReactQuery<HooksResponse, TData> {}
export function useDaoProposalSingleVoteHooksQuery<TData = HooksResponse>({
  client,
  options
}: DaoProposalSingleVoteHooksQuery<TData>) {
  return useQuery<HooksResponse, Error, TData>(daoProposalSingleQueryKeys.voteHooks(client?.contractAddress), () => client ? client.voteHooks() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleProposalHooksQuery<TData> extends DaoProposalSingleReactQuery<HooksResponse, TData> {}
export function useDaoProposalSingleProposalHooksQuery<TData = HooksResponse>({
  client,
  options
}: DaoProposalSingleProposalHooksQuery<TData>) {
  return useQuery<HooksResponse, Error, TData>(daoProposalSingleQueryKeys.proposalHooks(client?.contractAddress), () => client ? client.proposalHooks() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleProposalCreationPolicyQuery<TData> extends DaoProposalSingleReactQuery<ProposalCreationPolicy, TData> {}
export function useDaoProposalSingleProposalCreationPolicyQuery<TData = ProposalCreationPolicy>({
  client,
  options
}: DaoProposalSingleProposalCreationPolicyQuery<TData>) {
  return useQuery<ProposalCreationPolicy, Error, TData>(daoProposalSingleQueryKeys.proposalCreationPolicy(client?.contractAddress), () => client ? client.proposalCreationPolicy() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleProposalCountQuery<TData> extends DaoProposalSingleReactQuery<Uint64, TData> {}
export function useDaoProposalSingleProposalCountQuery<TData = Uint64>({
  client,
  options
}: DaoProposalSingleProposalCountQuery<TData>) {
  return useQuery<Uint64, Error, TData>(daoProposalSingleQueryKeys.proposalCount(client?.contractAddress), () => client ? client.proposalCount() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleListVotesQuery<TData> extends DaoProposalSingleReactQuery<VoteListResponse, TData> {
  args: {
    limit?: number;
    proposalId: number;
    startAfter?: string;
  };
}
export function useDaoProposalSingleListVotesQuery<TData = VoteListResponse>({
  client,
  args,
  options
}: DaoProposalSingleListVotesQuery<TData>) {
  return useQuery<VoteListResponse, Error, TData>(daoProposalSingleQueryKeys.listVotes(client?.contractAddress, args), () => client ? client.listVotes({
    limit: args.limit,
    proposalId: args.proposalId,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleGetVoteQuery<TData> extends DaoProposalSingleReactQuery<VoteResponse, TData> {
  args: {
    proposalId: number;
    voter: string;
  };
}
export function useDaoProposalSingleGetVoteQuery<TData = VoteResponse>({
  client,
  args,
  options
}: DaoProposalSingleGetVoteQuery<TData>) {
  return useQuery<VoteResponse, Error, TData>(daoProposalSingleQueryKeys.getVote(client?.contractAddress, args), () => client ? client.getVote({
    proposalId: args.proposalId,
    voter: args.voter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleReverseProposalsQuery<TData> extends DaoProposalSingleReactQuery<ProposalListResponse, TData> {
  args: {
    limit?: number;
    startBefore?: number;
  };
}
export function useDaoProposalSingleReverseProposalsQuery<TData = ProposalListResponse>({
  client,
  args,
  options
}: DaoProposalSingleReverseProposalsQuery<TData>) {
  return useQuery<ProposalListResponse, Error, TData>(daoProposalSingleQueryKeys.reverseProposals(client?.contractAddress, args), () => client ? client.reverseProposals({
    limit: args.limit,
    startBefore: args.startBefore
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleListProposalsQuery<TData> extends DaoProposalSingleReactQuery<ProposalListResponse, TData> {
  args: {
    limit?: number;
    startAfter?: number;
  };
}
export function useDaoProposalSingleListProposalsQuery<TData = ProposalListResponse>({
  client,
  args,
  options
}: DaoProposalSingleListProposalsQuery<TData>) {
  return useQuery<ProposalListResponse, Error, TData>(daoProposalSingleQueryKeys.listProposals(client?.contractAddress, args), () => client ? client.listProposals({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleProposalQuery<TData> extends DaoProposalSingleReactQuery<ProposalResponse, TData> {
  args: {
    proposalId: number;
  };
}
export function useDaoProposalSingleProposalQuery<TData = ProposalResponse>({
  client,
  args,
  options
}: DaoProposalSingleProposalQuery<TData>) {
  return useQuery<ProposalResponse, Error, TData>(daoProposalSingleQueryKeys.proposal(client?.contractAddress, args), () => client ? client.proposal({
    proposalId: args.proposalId
  }) : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleConfigQuery<TData> extends DaoProposalSingleReactQuery<Config, TData> {}
export function useDaoProposalSingleConfigQuery<TData = Config>({
  client,
  options
}: DaoProposalSingleConfigQuery<TData>) {
  return useQuery<Config, Error, TData>(daoProposalSingleQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), { ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface DaoProposalSingleRemoveVoteHookMutation {
  client: DaoProposalSingleClient;
  msg: {
    address: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleRemoveVoteHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleRemoveVoteHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleRemoveVoteHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.removeVoteHook(msg, fee, memo, funds), options);
}
export interface DaoProposalSingleAddVoteHookMutation {
  client: DaoProposalSingleClient;
  msg: {
    address: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleAddVoteHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleAddVoteHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleAddVoteHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.addVoteHook(msg, fee, memo, funds), options);
}
export interface DaoProposalSingleRemoveProposalHookMutation {
  client: DaoProposalSingleClient;
  msg: {
    address: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleRemoveProposalHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleRemoveProposalHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleRemoveProposalHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.removeProposalHook(msg, fee, memo, funds), options);
}
export interface DaoProposalSingleAddProposalHookMutation {
  client: DaoProposalSingleClient;
  msg: {
    address: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleAddProposalHookMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleAddProposalHookMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleAddProposalHookMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.addProposalHook(msg, fee, memo, funds), options);
}
export interface DaoProposalSingleUpdatePreProposeInfoMutation {
  client: DaoProposalSingleClient;
  msg: {
    info: PreProposeInfo;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleUpdatePreProposeInfoMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleUpdatePreProposeInfoMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleUpdatePreProposeInfoMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updatePreProposeInfo(msg, fee, memo, funds), options);
}
export interface DaoProposalSingleUpdateConfigMutation {
  client: DaoProposalSingleClient;
  msg: {
    allowRevoting: boolean;
    closeProposalOnExecutionFailure: boolean;
    dao: string;
    maxVotingPeriod: Duration;
    minVotingPeriod?: Duration;
    onlyMembersExecute: boolean;
    threshold: Threshold;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleUpdateConfigMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleUpdateConfigMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateConfig(msg, fee, memo, funds), options);
}
export interface DaoProposalSingleCloseMutation {
  client: DaoProposalSingleClient;
  msg: {
    proposalId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleCloseMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleCloseMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleCloseMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.close(msg, fee, memo, funds), options);
}
export interface DaoProposalSingleExecuteMutation {
  client: DaoProposalSingleClient;
  msg: {
    proposalId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleExecuteMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleExecuteMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleExecuteMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.execute(msg, fee, memo, funds), options);
}
export interface DaoProposalSingleUpdateRationaleMutation {
  client: DaoProposalSingleClient;
  msg: {
    proposalId: number;
    rationale?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleUpdateRationaleMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleUpdateRationaleMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleUpdateRationaleMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateRationale(msg, fee, memo, funds), options);
}
export interface DaoProposalSingleVoteMutation {
  client: DaoProposalSingleClient;
  msg: {
    proposalId: number;
    rationale?: string;
    vote: Vote;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleVoteMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleVoteMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleVoteMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.vote(msg, fee, memo, funds), options);
}
export interface DaoProposalSingleProposeMutation {
  client: DaoProposalSingleClient;
  msg: {
    description: string;
    msgs: CosmosMsgForEmpty[];
    proposer?: string;
    title: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useDaoProposalSingleProposeMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, DaoProposalSingleProposeMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, DaoProposalSingleProposeMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.propose(msg, fee, memo, funds), options);
}