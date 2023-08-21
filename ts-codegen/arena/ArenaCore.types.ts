/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.3.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type Uint128 = string;
export type DepositToken =
  | {
      token: {
        denom: UncheckedDenom;
      };
    }
  | {
      voting_module_token: {};
    };
export type UncheckedDenom =
  | {
      native: string;
    }
  | {
      cw20: string;
    };
export type DepositRefundPolicy = "always" | "only_passed" | "never";
export type Admin =
  | {
      address: {
        addr: string;
      };
    }
  | {
      core_module: {};
    };
export type Binary = string;
export type Decimal = string;
export interface InstantiateMsg {
  deposit_info?: UncheckedDepositInfo | null;
  extension: InstantiateExt;
  open_proposal_submission: boolean;
}
export interface UncheckedDepositInfo {
  amount: Uint128;
  denom: DepositToken;
  refund_policy: DepositRefundPolicy;
}
export interface InstantiateExt {
  competition_modules_instantiate_info: ModuleInstantiateInfo[];
  rulesets: Ruleset[];
  tax: Decimal;
}
export interface ModuleInstantiateInfo {
  admin?: Admin | null;
  code_id: number;
  label: string;
  msg: Binary;
}
export interface Ruleset {
  description: string;
  is_enabled: boolean;
  rules: string[];
}
export type ExecuteMsg =
  | {
      propose: {
        msg: Empty;
      };
    }
  | {
      update_config: {
        deposit_info?: UncheckedDepositInfo | null;
        open_proposal_submission: boolean;
      };
    }
  | {
      withdraw: {
        denom?: UncheckedDenom | null;
      };
    }
  | {
      extension: {
        msg: ExecuteExt;
      };
    }
  | {
      add_proposal_submitted_hook: {
        address: string;
      };
    }
  | {
      remove_proposal_submitted_hook: {
        address: string;
      };
    }
  | {
      proposal_completed_hook: {
        new_status: Status;
        proposal_id: number;
      };
    };
export type ExecuteExt =
  | {
      update_competition_modules: {
        to_add: ModuleInstantiateInfo[];
        to_disable: string[];
      };
    }
  | {
      jail: CompetitionCoreJailMsg;
    }
  | {
      update_tax: {
        tax: Decimal;
      };
    }
  | {
      update_rulesets: {
        to_add: Ruleset[];
        to_disable: Uint128[];
      };
    };
export type Status =
  | "open"
  | "rejected"
  | "passed"
  | "executed"
  | "closed"
  | "execution_failed";
export interface Empty {
  [k: string]: unknown;
}
export interface CompetitionCoreJailMsg {
  id: Uint128;
}
export type QueryMsg =
  | {
      proposal_module: {};
    }
  | {
      dao: {};
    }
  | {
      config: {};
    }
  | {
      deposit_info: {
        proposal_id: number;
      };
    }
  | {
      proposal_submitted_hooks: {};
    }
  | {
      query_extension: {
        msg: QueryExt;
      };
    };
export type QueryExt =
  | {
      competition_modules: {
        include_disabled?: boolean | null;
        limit?: number | null;
        start_after?: string | null;
      };
    }
  | {
      rulesets: {
        include_disabled?: boolean | null;
        limit?: number | null;
        start_after?: number | null;
      };
    }
  | {
      tax: {
        height?: number | null;
      };
    }
  | {
      competition_module: {
        key: string;
      };
    }
  | {
      dump_state: {};
    };
export type CheckedDenom =
  | {
      native: string;
    }
  | {
      cw20: Addr;
    };
export type Addr = string;
export interface Config {
  deposit_info?: CheckedDepositInfo | null;
  open_proposal_submission: boolean;
}
export interface CheckedDepositInfo {
  amount: Uint128;
  denom: CheckedDenom;
  refund_policy: DepositRefundPolicy;
}
export interface DepositInfoResponse {
  deposit_info?: CheckedDepositInfo | null;
  proposer: Addr;
}
export interface HooksResponse {
  hooks: string[];
}
