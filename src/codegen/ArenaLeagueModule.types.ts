/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type Binary = string;
export interface InstantiateMsg {
  description: string;
  extension: TournamentExt;
  key: string;
}
export interface TournamentExt {
  tax_cw20_msg?: Binary | null;
  tax_cw721_msg?: Binary | null;
}
export type ExecuteMsg = {
  jail_competition: {
    propose_message: ProposeMessage;
  };
} | {
  activate: {};
} | {
  add_competition_hook: {
    competition_id: Uint128;
  };
} | {
  remove_competition_hook: {
    competition_id: Uint128;
  };
} | {
  execute_competition_hook: {
    competition_id: Uint128;
    distribution?: DistributionForString | null;
  };
} | {
  create_competition: {
    category_id?: Uint128 | null;
    description: string;
    escrow?: ModuleInstantiateInfo | null;
    expiration: Expiration;
    host: ModuleInfo;
    instantiate_extension: CompetitionInstantiateExt;
    name: string;
    rules: string[];
    rulesets: Uint128[];
  };
} | {
  submit_evidence: {
    competition_id: Uint128;
    evidence: string[];
  };
} | {
  process_competition: {
    competition_id: Uint128;
    distribution?: DistributionForString | null;
    tax_cw20_msg?: Binary | null;
    tax_cw721_msg?: Binary | null;
  };
} | {
  extension: {
    msg: ExecuteExt;
  };
} | {
  update_ownership: Action;
};
export type Decimal = string;
export type Uint128 = string;
export type Admin = {
  address: {
    addr: string;
  };
} | {
  core_module: {};
};
export type Expiration = {
  at_height: number;
} | {
  at_time: Timestamp;
} | {
  never: {};
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type ModuleInfo = {
  new: {
    info: ModuleInstantiateInfo;
  };
} | {
  existing: {
    addr: string;
  };
};
export type ExecuteExt = {
  process_match: {
    league_id: Uint128;
    match_results: MatchResult[];
    round_number: Uint64;
  };
} | {
  update_distribution: {
    distribution: Decimal[];
    league_id: Uint128;
  };
};
export type Result = "team1" | "team2" | "draw";
export type Action = {
  transfer_ownership: {
    expiry?: Expiration | null;
    new_owner: string;
  };
} | "accept_ownership" | "renounce_ownership";
export interface ProposeMessage {
  description: string;
  distribution?: DistributionForString | null;
  id: Uint128;
  tax_cw20_msg?: Binary | null;
  tax_cw721_msg?: Binary | null;
  title: string;
}
export interface DistributionForString {
  member_percentages: MemberPercentageForString[];
  remainder_addr: string;
}
export interface MemberPercentageForString {
  addr: string;
  percentage: Decimal;
}
export interface ModuleInstantiateInfo {
  admin?: Admin | null;
  code_id: number;
  label: string;
  msg: Binary;
}
export interface CompetitionInstantiateExt {
  distribution: Decimal[];
  match_draw_points: Uint128;
  match_lose_points: Uint128;
  match_win_points: Uint128;
  teams: string[];
}
export interface MatchResult {
  match_number: Uint128;
  result?: Result | null;
}
export type QueryMsg = {
  config: {};
} | {
  d_a_o: {};
} | {
  competition_count: {};
} | {
  competition: {
    competition_id: Uint128;
  };
} | {
  competitions: {
    filter?: CompetitionsFilter | null;
    limit?: number | null;
    start_after?: Uint128 | null;
  };
} | {
  evidence: {
    competition_id: Uint128;
    limit?: number | null;
    start_after?: Uint128 | null;
  };
} | {
  result: {
    competition_id: Uint128;
  };
} | {
  query_extension: {
    msg: QueryExt;
  };
} | {
  ownership: {};
};
export type CompetitionsFilter = {
  competition_status: {
    status: CompetitionStatus;
  };
} | {
  category: {
    id?: Uint128 | null;
  };
};
export type CompetitionStatus = "pending" | "active" | "inactive" | "jailed";
export type QueryExt = {
  leaderboard: {
    league_id: Uint128;
    round?: Uint64 | null;
  };
} | {
  round: {
    league_id: Uint128;
    round_number: Uint64;
  };
};
export type MigrateMsg = {
  from_compatible: {};
};
export type Addr = string;
export interface SudoMsg {
  member_points: MemberPoints;
  round_response: RoundResponse;
}
export interface MemberPoints {
  matches_played: Uint64;
  member: Addr;
  points: Uint128;
}
export interface RoundResponse {
  matches: Match[];
  round_number: Uint64;
}
export interface Match {
  match_number: Uint128;
  result?: Result | null;
  team_1: Addr;
  team_2: Addr;
}
export type Null = null;
export interface CompetitionResponseForCompetitionExt {
  category_id?: Uint128 | null;
  description: string;
  escrow?: Addr | null;
  expiration: Expiration;
  extension: CompetitionExt;
  host: Addr;
  id: Uint128;
  is_expired: boolean;
  name: string;
  rules: string[];
  rulesets: Uint128[];
  start_height: number;
  status: CompetitionStatus;
}
export interface CompetitionExt {
  distribution: Decimal[];
  match_draw_points: Uint128;
  match_lose_points: Uint128;
  match_win_points: Uint128;
  matches: Uint128;
  processed_matches: Uint128;
  rounds: Uint64;
  teams: Uint64;
}
export type ArrayOfCompetitionResponseForCompetitionExt = CompetitionResponseForCompetitionExt[];
export interface ConfigForTournamentExt {
  description: string;
  extension: TournamentExt;
  key: string;
}
export type String = string;
export type ArrayOfEvidence = Evidence[];
export interface Evidence {
  content: string;
  id: Uint128;
  submit_time: Timestamp;
  submit_user: Addr;
}
export interface OwnershipForString {
  owner?: string | null;
  pending_expiry?: Expiration | null;
  pending_owner?: string | null;
}
export type NullableDistributionForString = DistributionForString | null;