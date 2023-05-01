/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.27.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Admin, Duration, InstantiateMsg, ExecuteMsg, Binary, Cw721ReceiveMsg, QueryMsg, Addr, Config, HooksResponse, InfoResponse, ContractVersion, Expiration, Timestamp, Uint64, NftClaimsResponse, NftClaim, ArrayOfString, Uint128, TotalPowerAtHeightResponse, VotingPowerAtHeightResponse } from "./DaoVotingCw721Staked.types";
export interface DaoVotingCw721StakedReadOnlyInterface {
  contractAddress: string;
  config: () => Promise<Config>;
  nftClaims: ({
    address
  }: {
    address: string;
  }) => Promise<NftClaimsResponse>;
  hooks: () => Promise<HooksResponse>;
  stakedNfts: ({
    address,
    limit,
    startAfter
  }: {
    address: string;
    limit?: number;
    startAfter?: string;
  }) => Promise<ArrayOfString>;
  votingPowerAtHeight: ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }) => Promise<VotingPowerAtHeightResponse>;
  totalPowerAtHeight: ({
    height
  }: {
    height?: number;
  }) => Promise<TotalPowerAtHeightResponse>;
  dao: () => Promise<Addr>;
  info: () => Promise<InfoResponse>;
}
export class DaoVotingCw721StakedQueryClient implements DaoVotingCw721StakedReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.config = this.config.bind(this);
    this.nftClaims = this.nftClaims.bind(this);
    this.hooks = this.hooks.bind(this);
    this.stakedNfts = this.stakedNfts.bind(this);
    this.votingPowerAtHeight = this.votingPowerAtHeight.bind(this);
    this.totalPowerAtHeight = this.totalPowerAtHeight.bind(this);
    this.dao = this.dao.bind(this);
    this.info = this.info.bind(this);
  }

  config = async (): Promise<Config> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  nftClaims = async ({
    address
  }: {
    address: string;
  }): Promise<NftClaimsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      nft_claims: {
        address
      }
    });
  };
  hooks = async (): Promise<HooksResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      hooks: {}
    });
  };
  stakedNfts = async ({
    address,
    limit,
    startAfter
  }: {
    address: string;
    limit?: number;
    startAfter?: string;
  }): Promise<ArrayOfString> => {
    return this.client.queryContractSmart(this.contractAddress, {
      staked_nfts: {
        address,
        limit,
        start_after: startAfter
      }
    });
  };
  votingPowerAtHeight = async ({
    address,
    height
  }: {
    address: string;
    height?: number;
  }): Promise<VotingPowerAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      voting_power_at_height: {
        address,
        height
      }
    });
  };
  totalPowerAtHeight = async ({
    height
  }: {
    height?: number;
  }): Promise<TotalPowerAtHeightResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      total_power_at_height: {
        height
      }
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
}
export interface DaoVotingCw721StakedInterface extends DaoVotingCw721StakedReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receiveNft: ({
    msg,
    sender,
    tokenId
  }: {
    msg: Binary;
    sender: string;
    tokenId: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  unstake: ({
    tokenIds
  }: {
    tokenIds: string[];
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  claimNfts: (fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    duration,
    owner
  }: {
    duration?: Duration;
    owner?: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  addHook: ({
    addr
  }: {
    addr: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
  removeHook: ({
    addr
  }: {
    addr: string;
  }, fee?: number | StdFee | "auto", memo?: string, funds?: Coin[]) => Promise<ExecuteResult>;
}
export class DaoVotingCw721StakedClient extends DaoVotingCw721StakedQueryClient implements DaoVotingCw721StakedInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;

  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receiveNft = this.receiveNft.bind(this);
    this.unstake = this.unstake.bind(this);
    this.claimNfts = this.claimNfts.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.addHook = this.addHook.bind(this);
    this.removeHook = this.removeHook.bind(this);
  }

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
  unstake = async ({
    tokenIds
  }: {
    tokenIds: string[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      unstake: {
        token_ids: tokenIds
      }
    }, fee, memo, funds);
  };
  claimNfts = async (fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim_nfts: {}
    }, fee, memo, funds);
  };
  updateConfig = async ({
    duration,
    owner
  }: {
    duration?: Duration;
    owner?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        duration,
        owner
      }
    }, fee, memo, funds);
  };
  addHook = async ({
    addr
  }: {
    addr: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      add_hook: {
        addr
      }
    }, fee, memo, funds);
  };
  removeHook = async ({
    addr
  }: {
    addr: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      remove_hook: {
        addr
      }
    }, fee, memo, funds);
  };
}