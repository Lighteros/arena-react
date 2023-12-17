import {
  Badge,
  Box,
  Heading,
  Link,
  ListItem,
  ListProps,
  Stack,
  UnorderedList,
} from "@chakra-ui/layout";
import { useChain } from "@cosmos-kit/react";
import env from "@config/env";
import { useState, useEffect, useCallback } from "react";
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { useArenaWagerModuleCompetitionQuery } from "@arena/ArenaWagerModule.react-query";
import { ArenaWagerModuleQueryClient } from "@arena/ArenaWagerModule.client";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Fade,
  Skeleton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { statusColors } from "~/helpers/ArenaHelpers";
import { CompetitionStatus, Evidence } from "@arena/ArenaWagerModule.types";
import { UserOrDAOCard } from "@components/cards/UserOrDAOCard";
import { EscrowDisplay } from "./components/view/EscrowDisplay";
import { PresetDistributionModal } from "./components/view/PresetDistributionModal";
import {
  ProposalPromptModal,
  ProposalPromptAction,
} from "./components/view/ProposalPromptModal";
import { RulesetDisplay } from "./components/view/RulesetDisplay";
import { BsYinYang } from "react-icons/bs";
import NextLink from "next/link";
import { EvidenceModal } from "./components/view/EvidenceModal";
import {
  isValidContractAddress,
  isValidWalletAddress,
} from "~/helpers/AddressHelpers";
import { UserCard } from "@components/cards/UserCard";

interface ViewCompetitionProps {
  cosmwasmClient: CosmWasmClient;
  module_addr: string;
  id: string;
}

export default function ViewCompetition({
  cosmwasmClient,
  module_addr,
  id,
}: ViewCompetitionProps) {
  const { address } = useChain(env.CHAIN);
  const toast = useToast();
  const [promptAction, setPromptAction] = useState<ProposalPromptAction>(
    ProposalPromptAction.Process
  );
  const {
    isOpen: isOpenProposalModal,
    onOpen: onOpenProposalModal,
    onClose: onCloseProposalModal,
  } = useDisclosure();
  const {
    isOpen: isOpenPresetModal,
    onOpen: onOpenPresetModal,
    onClose: onClosePresetModal,
  } = useDisclosure();
  const {
    isOpen: isOpenEvidenceModal,
    onOpen: onOpenEvidenceModal,
    onClose: onCloseEvidenceModal,
  } = useDisclosure();
  const query = useArenaWagerModuleCompetitionQuery({
    client: new ArenaWagerModuleQueryClient(cosmwasmClient, module_addr),
    args: { id: id },
  });
  const [data, setData] = useState(query.data);
  useEffect(() => {
    setData(query.data);
  }, [query.data]);

  useEffect(() => {
    if (query.isError)
      toast({
        title: "Error",
        isClosable: false,
        status: "error",
        description: `Could not retrieve competition ${id}`,
      });
  }, [query.isError, toast, id]);
  const notifyStatusChanged = useCallback(
    (new_status: CompetitionStatus) =>
      setData((prevData) => {
        if (prevData) {
          return { ...prevData, status: new_status };
        }
        return prevData;
      }),
    []
  );
  const notifyEvidenceChanged = useCallback(
    (new_evidence: Evidence[]) =>
      setData((prevData) => {
        if (prevData) {
          return {
            ...prevData,
            evidence: [...prevData.evidence, ...new_evidence],
          };
        }
        return prevData;
      }),
    []
  );

  const listProps: ListProps = { spacing: 2 };

  if (query.isError || !data) {
    return null;
  }
  return (
    <Fade in={true}>
      <Skeleton isLoaded={!query.isLoading}>
        <Stack>
          <Heading>
            {data.name}{" "}
            <Badge
              variant="solid"
              ml={1}
              colorScheme={statusColors[data.status || "inactive"]}
            >
              {data.status}
            </Badge>
          </Heading>
          <Heading size="md" fontWeight={"none"} mb="2">
            {data.description}
          </Heading>
          {isValidWalletAddress(data.dao) && (
            <>
              <Heading size="xl">Host</Heading>
              <UserCard addr={data.dao} />
            </>
          )}
          {isValidContractAddress(data.dao) && (
            <Box textAlign={"right"}>
              <Link
                as={NextLink}
                href={
                  env.DAO_DAO_URL +
                  "/dao/" +
                  data.dao +
                  "/apps?url=" +
                  encodeURIComponent(window.location.href)
                }
                _hover={{ textDecoration: "none" }}
                _focus={{ outline: "none" }}
                target="_blank"
              >
                <Button leftIcon={<BsYinYang />}>View Competition DAO</Button>
              </Link>
            </Box>
          )}

          {(data.rulesets.length > 0 || data.rules.length > 0) && (
            <Card>
              <CardHeader pb="0">
                <Heading size="lg">Rules</Heading>
              </CardHeader>
              <CardBody>
                <Stack>
                  {data.rulesets.map((x) => (
                    <RulesetDisplay
                      key={x}
                      cosmwasmClient={cosmwasmClient}
                      ruleset_id={x}
                      listProps={listProps}
                    />
                  ))}
                  {data.rules.length > 0 && (
                    <UnorderedList {...listProps}>
                      {data.rules.map((rule, idx) => (
                        <ListItem key={idx}>{rule}</ListItem>
                      ))}
                    </UnorderedList>
                  )}
                </Stack>
              </CardBody>
            </Card>
          )}
          {data.escrow && (
            <EscrowDisplay
              cosmwasmClient={cosmwasmClient}
              escrow_addr={data.escrow}
              wager_status={data.status}
              notifyIsActive={() => notifyStatusChanged("active")}
            />
          )}
          {data.evidence.length > 0 && (
            <>
              <Heading size="lg">Evidence</Heading>
              <UnorderedList {...listProps}>
                {data.evidence.map((x, i) => (
                  <ListItem key={i}>{x.content}</ListItem>
                ))}
              </UnorderedList>
            </>
          )}
          <ButtonGroup overflowX="auto" scrollPaddingBottom="0" my="2">
            {address && data.status !== "inactive" && (
              <>
                {address == data.dao && (
                  <Button
                    minW="150px"
                    onClick={() => {
                      setPromptAction(ProposalPromptAction.Process);
                      onOpenProposalModal();
                    }}
                  >
                    Process Competition
                  </Button>
                )}
                <Button minW="200px" onClick={onOpenPresetModal}>
                  Set Preset Distribution
                </Button>
              </>
            )}
            {data.status == "active" && data.is_expired && (
              <Button
                minW="150px"
                onClick={() => {
                  setPromptAction(ProposalPromptAction.Jail);
                  onOpenProposalModal();
                }}
              >
                Jail Competition
              </Button>
            )}
            {data.status == "jailed" && (
              <Button minW="150px" onClick={onOpenEvidenceModal}>
                Submit Evidence
              </Button>
            )}
          </ButtonGroup>
          <ProposalPromptModal
            id={id}
            module_addr={module_addr}
            cosmwasmClient={cosmwasmClient}
            isOpen={isOpenProposalModal}
            onClose={onCloseProposalModal}
            action={promptAction}
            setJailedStatus={() => notifyStatusChanged("jailed")}
          />
          {address && data.status == "jailed" && (
            <EvidenceModal
              competition_id={data.id}
              isOpen={isOpenEvidenceModal}
              onClose={onCloseEvidenceModal}
              address={address}
              setEvidence={notifyEvidenceChanged}
            />
          )}
          {address && data.escrow && (
            <PresetDistributionModal
              escrow_addr={data.escrow}
              isOpen={isOpenPresetModal}
              onClose={onClosePresetModal}
              cosmwasmClient={cosmwasmClient}
              address={address}
            />
          )}
          {data.result && (
            <Card>
              <CardHeader pb="0">
                <Heading size="lg">Result</Heading>
              </CardHeader>
              <CardBody>
                <TableContainer>
                  <Table variant="unstyled">
                    <Thead>
                      <Tr>
                        <Th>Member</Th>
                        <Th>Shares</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data.result.map((x, i) => (
                        <Tr key={i}>
                          <Td>
                            <UserOrDAOCard
                              cosmwasmClient={cosmwasmClient}
                              address={x.addr}
                              variant="outline"
                            />
                          </Td>
                          <Td>{x.shares}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </CardBody>
            </Card>
          )}
        </Stack>
      </Skeleton>
    </Fade>
  );
}
