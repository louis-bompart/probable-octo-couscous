import { waitForAtomic } from "./utils/atomic";

async function main() {
  await waitForAtomic();
  const searchInterface: HTMLAtomicSearchInterfaceElement =
    document.querySelector("atomic-search-interface")!;

  await searchInterface.initialize({
    accessToken: "xx564559b1-0045-48e1-953c-3addd1ee4457",
    organizationId: "searchuisamples",
    organizationEndpoints: await searchInterface.getOrganizationEndpoints(
      "searchuisamples"
    ),
  });

  searchInterface.executeFirstSearch();
}

main();
