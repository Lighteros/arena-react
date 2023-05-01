/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee } from "@cosmjs/amino";
import { Duration, PercentageThreshold, Decimal, InstantiateMsg, ExecuteMsg, CosmosMsgForEmpty, BankMsg, Uint128, StakingMsg, DistributionMsg, Binary, IbcMsg, Timestamp, Uint64, WasmMsg, GovMsg, VoteOption, Choice, Coin, Empty, IbcTimeout, IbcTimeoutBlock, UncheckedConfig, QueryMsg, Config, Addr, InfoResponse, ContractVersion, Status, Expiration, Cell, Winner, ProposalResponse, Proposal, Tally, M } from "./DaoProposalCondorcet.types";
export interface DaoProposalCondorcetReadOnlyInterface {
  contractAddress: string;
  proposal: ({
    id
  }: {
    id: number;
  }) => Promise<ProposalResponse>;
  config: () => Promise<Config>;
  dao: () => Promise<Addr>;
  info: () => Promise<InfoResponse>;
  nextProposalId: () => Promise<Uint64>;
}
export class DaoProposalCondorcetQueryClient implements DaoProposalCondorcetReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.proposal = this.proposal.bind(this);
    this.config = this.config.bind(this);
    this.dao = this.dao.bind(this);
    this.info = this.info.bind(this);
    this.nextProposalId = this.nextProposalId.bind(this);
  }

  proposal = async ({
    id
  }: {
    id: number;
  }): Promise<ProposalResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      proposal: {
        id
      }
    });
  };
  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  dao = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      dao: {}
    });
  };
  info = async (): Promise<InfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      info: {}
    });
  };
  nextProposalId = async (): Promise<Uint64> => {
    return this.client.queryContractSmart(this.contractAddress, {
      next_proposal_id: {}
    });
  };
}
export interface DaoProposalCondorcetInterface extends DaoProposalCondorcetReadOnlyInterface {
  contractAddress: string;
  sender: string;
  propose: ({
    choices
  }: {
    choices: Choice[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  vote: ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: number[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  execute: ({
    proposalId
  }: {
    proposalId: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  close: ({
    proposalId
  }: {
    proposalId: number;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  setConfig: ({
    closeProposalsOnExecutionFailure,
    minVotingPeriod,
    quorum,
    votingPeriod
  }: {
    closeProposalsOnExecutionFailure: boolean;
    minVotingPeriod?: Duration;
    quorum: PercentageThreshold;
    votingPeriod: Duration;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class DaoProposalCondorcetClient extends DaoProposalCondorcetQueryClient implements DaoProposalCondorcetInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.propose = this.propose.bind(this);
    this.vote = this.vote.bind(this);
    this.execute = this.execute.bind(this);
    this.close = this.close.bind(this);
    this.setConfig = this.setConfig.bind(this);
  }

  propose = async ({
    choices
  }: {
    choices: Choice[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      propose: {
        choices
      }
    }, fee, memo, funds);
  };
  vote = async ({
    proposalId,
    vote
  }: {
    proposalId: number;
    vote: number[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      vote: {
        proposal_id: proposalId,
        vote
      }
    }, fee, memo, funds);
  };
  execute = async ({
    proposalId
  }: {
    proposalId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      execute: {
        proposal_id: proposalId
      }
    }, fee, memo, funds);
  };
  close = async ({
    proposalId
  }: {
    proposalId: number;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      close: {
        proposal_id: proposalId
      }
    }, fee, memo, funds);
  };
  setConfig = async ({
    closeProposalsOnExecutionFailure,
    minVotingPeriod,
    quorum,
    votingPeriod
  }: {
    closeProposalsOnExecutionFailure: boolean;
    minVotingPeriod?: Duration;
    quorum: PercentageThreshold;
    votingPeriod: Duration;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      set_config: {
        close_proposals_on_execution_failure: closeProposalsOnExecutionFailure,
        min_voting_period: minVotingPeriod,
        quorum,
        voting_period: votingPeriod
      }
    }, fee, memo, funds);
  };
}