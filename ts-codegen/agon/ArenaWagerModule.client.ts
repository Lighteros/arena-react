/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Decimal, InstantiateMsg, Empty, ExecuteMsg, Uint128, Admin, Binary, Expiration, Timestamp, Uint64, ModuleInstantiateInfo, MemberShare, QueryMsg, Null, AdminResponse, Addr, CompetitionStatus, CompetitionForEmpty, Config } from "./ArenaWagerModule.types";
export interface ArenaWagerModuleReadOnlyInterface {
  contractAddress: string;
  dAO: () => Promise<Addr>;
  config: () => Promise<Config>;
  competition: ({
    id
  }: {
    id: Uint128;
  }) => Promise<CompetitionForEmpty>;
  queryExtension: ({
    msg
  }: {
    msg: Empty;
  }) => Promise<Binary>;
  admin: () => Promise<AdminResponse>;
}
export class ArenaWagerModuleQueryClient implements ArenaWagerModuleReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.dAO = this.dAO.bind(this);
    this.config = this.config.bind(this);
    this.competition = this.competition.bind(this);
    this.queryExtension = this.queryExtension.bind(this);
    this.admin = this.admin.bind(this);
  }

  dAO = async (): Promise<Addr> => {
    return this.client.queryContractSmart(this.contractAddress, {
      d_a_o: {}
    });
  };
  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  competition = async ({
    id
  }: {
    id: Uint128;
  }): Promise<CompetitionForEmpty> => {
    return this.client.queryContractSmart(this.contractAddress, {
      competition: {
        id
      }
    });
  };
  queryExtension = async ({
    msg
  }: {
    msg: Empty;
  }): Promise<Binary> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_extension: {
        msg
      }
    });
  };
  admin = async (): Promise<AdminResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      admin: {}
    });
  };
}
export interface ArenaWagerModuleInterface extends ArenaWagerModuleReadOnlyInterface {
  contractAddress: string;
  sender: string;
  jailCompetition: ({
    id
  }: {
    id: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  createCompetition: ({
    competitionDao,
    description,
    escrow,
    expiration,
    extension,
    name,
    rules,
    ruleset
  }: {
    competitionDao: ModuleInstantiateInfo;
    description: string;
    escrow: ModuleInstantiateInfo;
    expiration: Expiration;
    extension: Empty;
    name: string;
    rules: string[];
    ruleset?: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  processCompetition: ({
    distribution,
    id
  }: {
    distribution?: MemberShare[];
    id: Uint128;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  extension: ({
    msg
  }: {
    msg: Empty;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class ArenaWagerModuleClient extends ArenaWagerModuleQueryClient implements ArenaWagerModuleInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.jailCompetition = this.jailCompetition.bind(this);
    this.createCompetition = this.createCompetition.bind(this);
    this.processCompetition = this.processCompetition.bind(this);
    this.extension = this.extension.bind(this);
  }

  jailCompetition = async ({
    id
  }: {
    id: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      jail_competition: {
        id
      }
    }, fee, memo, funds);
  };
  createCompetition = async ({
    competitionDao,
    description,
    escrow,
    expiration,
    extension,
    name,
    rules,
    ruleset
  }: {
    competitionDao: ModuleInstantiateInfo;
    description: string;
    escrow: ModuleInstantiateInfo;
    expiration: Expiration;
    extension: Empty;
    name: string;
    rules: string[];
    ruleset?: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      create_competition: {
        competition_dao: competitionDao,
        description,
        escrow,
        expiration,
        extension,
        name,
        rules,
        ruleset
      }
    }, fee, memo, funds);
  };
  processCompetition = async ({
    distribution,
    id
  }: {
    distribution?: MemberShare[];
    id: Uint128;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      process_competition: {
        distribution,
        id
      }
    }, fee, memo, funds);
  };
  extension = async ({
    msg
  }: {
    msg: Empty;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      extension: {
        msg
      }
    }, fee, memo, funds);
  };
}