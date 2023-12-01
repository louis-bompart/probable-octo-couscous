import { waitForAtomic } from "./utils/atomic";

import { createServer } from "miragejs";

createServer({
  useDefaultPassthroughs: true,
  routes() {
    this.post(
      "https://searchuisamples.org.coveo.com/rest/search/v2",
      () => {
        return {
          totalCount: 373198,
          totalCountFiltered: 373198,
          duration: 30,
          indexDuration: 13,
          requestDuration: 0,
          searchUid: "7155c559-57e8-44c8-971a-894183b72c56",
          pipeline: "default",
          apiVersion: 2,
          queryCorrections: [],
          index: "cache",
          refinedKeywords: [],
          triggers: [],
          termsToHighlight: {},
          phrasesToHighlight: {},
          groupByResults: [],
          facets: [
            {
              facetId: "filetype",
              field: "filetype",
              moreValuesAvailable: true,
              values: [
                {
                  value: "lithiumuser",
                  state: "idle",
                  numberOfResults: 116646,
                },
                {
                  value: "kb_social_qa_answer",
                  state: "idle",
                  numberOfResults: 48,
                },
                {
                  value: "slackmessage",
                  state: "idle",
                  numberOfResults: 56,
                },
                {
                  value: "html",
                  state: "idle",
                  numberOfResults: 550,
                },
                {
                  value: "zip",
                  state: "idle",
                  numberOfResults: 1,
                },
                {
                  value: "dynamicscrmitem",
                  state: "idle",
                  numberOfResults: 184232,
                },
                {
                  value: "xls",
                  state: "idle",
                  numberOfResults: 8,
                },
                {
                  value: "incident",
                  state: "idle",
                  numberOfResults: 7262,
                },
              ],
              indexScore: 0.1,
            },
            {
              facetId: "source",
              field: "source",
              moreValuesAvailable: true,
              values: [
                {
                  value: "Coveo Sample - Lithium Community",
                  state: "idle",
                  numberOfResults: 120596,
                },
                {
                  value: "Coveo Sample - SF lvu08",
                  state: "idle",
                  numberOfResults: 344,
                },
                {
                  value: "Slack CoveoPublicSamples",
                  state: "idle",
                  numberOfResults: 7,
                },
                {
                  value: "Slack CoveoTest1Sample",
                  state: "idle",
                  numberOfResults: 172,
                },
                {
                  value: "Coveo Sample - Atlas",
                  state: "idle",
                  numberOfResults: 83,
                },
                {
                  value: "ServiceNow Speedbit",
                  state: "idle",
                  numberOfResults: 10955,
                },
                {
                  value: "Coveo Samples - Salesforce Knowledge",
                  state: "idle",
                  numberOfResults: 1,
                },
                {
                  value: "Coveo Samples - Salesforce Content",
                  state: "idle",
                  numberOfResults: 79,
                },
              ],
              indexScore: 0.1,
            },
          ],
          suggestedFacets: [],
          categoryFacets: [],
          results: [
            {
              title: "gossamer",
              uri: "https://community.lithium.com/community:lithosphere/user:46519",
              printableUri:
                "https://community.lithium.com/community:lithosphere/user:46519",
              clickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46519",
              uniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46519",
              excerpt: "",
              firstSentences: null,
              summary: null,
              flags: "",
              hasHtmlVersion: false,
              hasMobileHtmlVersion: false,
              score: 1498,
              percentScore: 87.09081,
              rankingInfo: null,
              rating: 0.0,
              isTopResult: false,
              isRecommendation: false,
              isUserActionView: false,
              titleHighlights: [],
              firstSentencesHighlights: [],
              excerptHighlights: [],
              printableUriHighlights: [],
              summaryHighlights: [],
              parentResult: null,
              childResults: [],
              totalNumberOfChildResults: 0,
              absentTerms: [],
              raw: {
                sysurihash: "r8wiTWFDcJiIEltO",
                urihash: "r8wiTWFDcJiIEltO",
                parents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="gossamer" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46519" /></parents>',
                permanentid:
                  "2ec8a56b78a6304e4b3aff557beaa680f5bf0f39a16c83377704ffe06d5c",
                date: 1701212889000,
                objecttype: "People",
                sourcetype: "Lithium",
                syssource: "Coveo Sample - Lithium Community",
                sysdate: 1701212889000,
                sysparents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="gossamer" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46519" /></parents>',
                source: "Coveo Sample - Lithium Community",
                collection: "default",
                syssourcetype: "Lithium",
                filetype: "lithiumuser",
                sysfiletype: "lithiumuser",
                syscollection: "default",
              },
              Title: "gossamer",
              Uri: "https://community.lithium.com/community:lithosphere/user:46519",
              PrintableUri:
                "https://community.lithium.com/community:lithosphere/user:46519",
              ClickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46519",
              UniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46519",
              Excerpt: "",
              FirstSentences: null,
            },
            {
              title: "John30003",
              uri: "https://community.lithium.com/community:lithosphere/user:46517",
              printableUri:
                "https://community.lithium.com/community:lithosphere/user:46517",
              clickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46517",
              uniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46517",
              excerpt: "",
              firstSentences: null,
              summary: null,
              flags: "",
              hasHtmlVersion: false,
              hasMobileHtmlVersion: false,
              score: 1498,
              percentScore: 87.09081,
              rankingInfo: null,
              rating: 0.0,
              isTopResult: false,
              isRecommendation: false,
              isUserActionView: false,
              titleHighlights: [],
              firstSentencesHighlights: [],
              excerptHighlights: [],
              printableUriHighlights: [],
              summaryHighlights: [],
              parentResult: null,
              childResults: [],
              totalNumberOfChildResults: 0,
              absentTerms: [],
              raw: {
                sysurihash: "ML0ñ1Am34j6a1GCm",
                urihash: "ML0ñ1Am34j6a1GCm",
                parents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="john30003" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46517" /></parents>',
                permanentid:
                  "5b2eecac45b89e4a35209d188d7e543c5280d8573506f4a1abb92c6acffa",
                date: 1701212890000,
                objecttype: "People",
                sourcetype: "Lithium",
                syssource: "Coveo Sample - Lithium Community",
                sysdate: 1701212890000,
                sysparents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="john30003" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46517" /></parents>',
                source: "Coveo Sample - Lithium Community",
                collection: "default",
                syssourcetype: "Lithium",
                filetype: "lithiumuser",
                sysfiletype: "lithiumuser",
                syscollection: "default",
              },
              Title: "John30003",
              Uri: "https://community.lithium.com/community:lithosphere/user:46517",
              PrintableUri:
                "https://community.lithium.com/community:lithosphere/user:46517",
              ClickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46517",
              UniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46517",
              Excerpt: "",
              FirstSentences: null,
            },
            {
              title: "aussiewaska",
              uri: "https://community.lithium.com/community:lithosphere/user:46512",
              printableUri:
                "https://community.lithium.com/community:lithosphere/user:46512",
              clickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46512",
              uniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46512",
              excerpt: "",
              firstSentences: null,
              summary: null,
              flags: "",
              hasHtmlVersion: false,
              hasMobileHtmlVersion: false,
              score: 1498,
              percentScore: 87.09081,
              rankingInfo: null,
              rating: 0.0,
              isTopResult: false,
              isRecommendation: false,
              isUserActionView: false,
              titleHighlights: [],
              firstSentencesHighlights: [],
              excerptHighlights: [],
              printableUriHighlights: [],
              summaryHighlights: [],
              parentResult: null,
              childResults: [],
              totalNumberOfChildResults: 0,
              absentTerms: [],
              raw: {
                sysurihash: "zcmhEfEWi0CQD0Zc",
                urihash: "zcmhEfEWi0CQD0Zc",
                parents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="aussiewaska" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46512" /></parents>',
                permanentid:
                  "2f033f8e9b4472dee3b997e562861f18ab79fa392739b488e9d221e7ae2b",
                date: 1701212892000,
                objecttype: "People",
                sourcetype: "Lithium",
                syssource: "Coveo Sample - Lithium Community",
                sysdate: 1701212892000,
                sysparents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="aussiewaska" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46512" /></parents>',
                source: "Coveo Sample - Lithium Community",
                collection: "default",
                syssourcetype: "Lithium",
                filetype: "lithiumuser",
                sysfiletype: "lithiumuser",
                syscollection: "default",
              },
              Title: "aussiewaska",
              Uri: "https://community.lithium.com/community:lithosphere/user:46512",
              PrintableUri:
                "https://community.lithium.com/community:lithosphere/user:46512",
              ClickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46512",
              UniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46512",
              Excerpt: "",
              FirstSentences: null,
            },
            {
              title: "rsinayev",
              uri: "https://community.lithium.com/community:lithosphere/user:46513",
              printableUri:
                "https://community.lithium.com/community:lithosphere/user:46513",
              clickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46513",
              uniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46513",
              excerpt: "",
              firstSentences: null,
              summary: null,
              flags: "",
              hasHtmlVersion: false,
              hasMobileHtmlVersion: false,
              score: 1498,
              percentScore: 87.09081,
              rankingInfo: null,
              rating: 0.0,
              isTopResult: false,
              isRecommendation: false,
              isUserActionView: false,
              titleHighlights: [],
              firstSentencesHighlights: [],
              excerptHighlights: [],
              printableUriHighlights: [],
              summaryHighlights: [],
              parentResult: null,
              childResults: [],
              totalNumberOfChildResults: 0,
              absentTerms: [],
              raw: {
                sysurihash: "aI4pBnhosHnrxVKN",
                urihash: "aI4pBnhosHnrxVKN",
                parents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="rsinayev" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46513" /></parents>',
                permanentid:
                  "badcbf708274d2e7ef34389e5ed3e3fc6b483e41656e2aae3932dcbe22d7",
                date: 1701212891000,
                objecttype: "People",
                sourcetype: "Lithium",
                syssource: "Coveo Sample - Lithium Community",
                sysdate: 1701212891000,
                sysparents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="rsinayev" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46513" /></parents>',
                source: "Coveo Sample - Lithium Community",
                collection: "default",
                syssourcetype: "Lithium",
                filetype: "lithiumuser",
                sysfiletype: "lithiumuser",
                syscollection: "default",
              },
              Title: "rsinayev",
              Uri: "https://community.lithium.com/community:lithosphere/user:46513",
              PrintableUri:
                "https://community.lithium.com/community:lithosphere/user:46513",
              ClickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46513",
              UniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46513",
              Excerpt: "",
              FirstSentences: null,
            },
            {
              title: "johns32658",
              uri: "https://community.lithium.com/community:lithosphere/user:46526",
              printableUri:
                "https://community.lithium.com/community:lithosphere/user:46526",
              clickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46526",
              uniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46526",
              excerpt: "",
              firstSentences: null,
              summary: null,
              flags: "",
              hasHtmlVersion: false,
              hasMobileHtmlVersion: false,
              score: 1498,
              percentScore: 87.09081,
              rankingInfo: null,
              rating: 0.0,
              isTopResult: false,
              isRecommendation: false,
              isUserActionView: false,
              titleHighlights: [],
              firstSentencesHighlights: [],
              excerptHighlights: [],
              printableUriHighlights: [],
              summaryHighlights: [],
              parentResult: null,
              childResults: [],
              totalNumberOfChildResults: 0,
              absentTerms: [],
              raw: {
                sysurihash: "AOñvJIPwwbU4Vlyd",
                urihash: "AOñvJIPwwbU4Vlyd",
                parents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="johns32658" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46526" /></parents>',
                permanentid:
                  "99e1c1892c843566ee6bda8ae7adeefcb6e9cf767863218c2b0281a961b4",
                date: 1701212888000,
                objecttype: "People",
                sourcetype: "Lithium",
                syssource: "Coveo Sample - Lithium Community",
                sysdate: 1701212888000,
                sysparents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="johns32658" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46526" /></parents>',
                source: "Coveo Sample - Lithium Community",
                collection: "default",
                syssourcetype: "Lithium",
                filetype: "lithiumuser",
                sysfiletype: "lithiumuser",
                syscollection: "default",
              },
              Title: "johns32658",
              Uri: "https://community.lithium.com/community:lithosphere/user:46526",
              PrintableUri:
                "https://community.lithium.com/community:lithosphere/user:46526",
              ClickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46526",
              UniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46526",
              Excerpt: "",
              FirstSentences: null,
            },
            {
              title: "Kannank",
              uri: "https://community.lithium.com/community:lithosphere/user:46527",
              printableUri:
                "https://community.lithium.com/community:lithosphere/user:46527",
              clickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46527",
              uniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46527",
              excerpt: "",
              firstSentences: null,
              summary: null,
              flags: "",
              hasHtmlVersion: false,
              hasMobileHtmlVersion: false,
              score: 1498,
              percentScore: 87.09081,
              rankingInfo: null,
              rating: 0.0,
              isTopResult: false,
              isRecommendation: false,
              isUserActionView: false,
              titleHighlights: [],
              firstSentencesHighlights: [],
              excerptHighlights: [],
              printableUriHighlights: [],
              summaryHighlights: [],
              parentResult: null,
              childResults: [],
              totalNumberOfChildResults: 0,
              absentTerms: [],
              raw: {
                sysurihash: "feYOkAm34j79Kabi",
                urihash: "feYOkAm34j79Kabi",
                parents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="kannank" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46527" /></parents>',
                permanentid:
                  "ec3240441d40d67fb3dae290b6db8f39356b3052a8f49015b0f4c470f774",
                date: 1701212886000,
                objecttype: "People",
                sourcetype: "Lithium",
                syssource: "Coveo Sample - Lithium Community",
                sysdate: 1701212886000,
                sysparents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="kannank" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46527" /></parents>',
                source: "Coveo Sample - Lithium Community",
                collection: "default",
                syssourcetype: "Lithium",
                filetype: "lithiumuser",
                sysfiletype: "lithiumuser",
                syscollection: "default",
              },
              Title: "Kannank",
              Uri: "https://community.lithium.com/community:lithosphere/user:46527",
              PrintableUri:
                "https://community.lithium.com/community:lithosphere/user:46527",
              ClickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46527",
              UniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46527",
              Excerpt: "",
              FirstSentences: null,
            },
            {
              title: "nasserdassi",
              uri: "https://community.lithium.com/community:lithosphere/user:46522",
              printableUri:
                "https://community.lithium.com/community:lithosphere/user:46522",
              clickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46522",
              uniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46522",
              excerpt: "",
              firstSentences: null,
              summary: null,
              flags: "",
              hasHtmlVersion: false,
              hasMobileHtmlVersion: false,
              score: 1498,
              percentScore: 87.09081,
              rankingInfo: null,
              rating: 0.0,
              isTopResult: false,
              isRecommendation: false,
              isUserActionView: false,
              titleHighlights: [],
              firstSentencesHighlights: [],
              excerptHighlights: [],
              printableUriHighlights: [],
              summaryHighlights: [],
              parentResult: null,
              childResults: [],
              totalNumberOfChildResults: 0,
              absentTerms: [],
              raw: {
                sysurihash: "Pyj6UðEWi0B08D6g",
                urihash: "Pyj6UðEWi0B08D6g",
                parents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="nasserdassi" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46522" /></parents>',
                permanentid:
                  "bbd74ee53d4df1361135b6986e931294dd87a9a7fe83942f5b4c0e1c9894",
                date: 1701212889000,
                objecttype: "People",
                sourcetype: "Lithium",
                syssource: "Coveo Sample - Lithium Community",
                sysdate: 1701212889000,
                sysparents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="nasserdassi" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46522" /></parents>',
                source: "Coveo Sample - Lithium Community",
                collection: "default",
                syssourcetype: "Lithium",
                filetype: "lithiumuser",
                sysfiletype: "lithiumuser",
                syscollection: "default",
              },
              Title: "nasserdassi",
              Uri: "https://community.lithium.com/community:lithosphere/user:46522",
              PrintableUri:
                "https://community.lithium.com/community:lithosphere/user:46522",
              ClickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46522",
              UniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46522",
              Excerpt: "",
              FirstSentences: null,
            },
            {
              title: "sivai",
              uri: "https://community.lithium.com/community:lithosphere/user:46523",
              printableUri:
                "https://community.lithium.com/community:lithosphere/user:46523",
              clickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46523",
              uniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46523",
              excerpt: "",
              firstSentences: null,
              summary: null,
              flags: "",
              hasHtmlVersion: false,
              hasMobileHtmlVersion: false,
              score: 1498,
              percentScore: 87.09081,
              rankingInfo: null,
              rating: 0.0,
              isTopResult: false,
              isRecommendation: false,
              isUserActionView: false,
              titleHighlights: [],
              firstSentencesHighlights: [],
              excerptHighlights: [],
              printableUriHighlights: [],
              summaryHighlights: [],
              parentResult: null,
              childResults: [],
              totalNumberOfChildResults: 0,
              absentTerms: [],
              raw: {
                sysurihash: "u67563hosHmXñxYC",
                urihash: "u67563hosHmXñxYC",
                parents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="sivai" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46523" /></parents>',
                permanentid:
                  "9ecf8b79d77de1f2049e5bd34ec8259c5c904711af34029f762c35b597ca",
                date: 1701212888000,
                objecttype: "People",
                sourcetype: "Lithium",
                syssource: "Coveo Sample - Lithium Community",
                sysdate: 1701212888000,
                sysparents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="sivai" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46523" /></parents>',
                source: "Coveo Sample - Lithium Community",
                collection: "default",
                syssourcetype: "Lithium",
                filetype: "lithiumuser",
                sysfiletype: "lithiumuser",
                syscollection: "default",
              },
              Title: "sivai",
              Uri: "https://community.lithium.com/community:lithosphere/user:46523",
              PrintableUri:
                "https://community.lithium.com/community:lithosphere/user:46523",
              ClickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46523",
              UniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46523",
              Excerpt: "",
              FirstSentences: null,
            },
            {
              title: "stokely",
              uri: "https://community.lithium.com/community:lithosphere/user:46528",
              printableUri:
                "https://community.lithium.com/community:lithosphere/user:46528",
              clickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46528",
              uniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46528",
              excerpt: "",
              firstSentences: null,
              summary: null,
              flags: "",
              hasHtmlVersion: false,
              hasMobileHtmlVersion: false,
              score: 1498,
              percentScore: 87.09081,
              rankingInfo: null,
              rating: 0.0,
              isTopResult: false,
              isRecommendation: false,
              isUserActionView: false,
              titleHighlights: [],
              firstSentencesHighlights: [],
              excerptHighlights: [],
              printableUriHighlights: [],
              summaryHighlights: [],
              parentResult: null,
              childResults: [],
              totalNumberOfChildResults: 0,
              absentTerms: [],
              raw: {
                sysurihash: "VTðYUKBDsuWs6x5J",
                urihash: "VTðYUKBDsuWs6x5J",
                parents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="stokely" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46528" /></parents>',
                permanentid:
                  "2f6eff75fd0ad4b3468100bee6f736d44209ec3aaf30ebdc2d4bca161a1b",
                date: 1701212885000,
                objecttype: "People",
                sourcetype: "Lithium",
                syssource: "Coveo Sample - Lithium Community",
                sysdate: 1701212885000,
                sysparents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="stokely" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46528" /></parents>',
                source: "Coveo Sample - Lithium Community",
                collection: "default",
                syssourcetype: "Lithium",
                filetype: "lithiumuser",
                sysfiletype: "lithiumuser",
                syscollection: "default",
              },
              Title: "stokely",
              Uri: "https://community.lithium.com/community:lithosphere/user:46528",
              PrintableUri:
                "https://community.lithium.com/community:lithosphere/user:46528",
              ClickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46528",
              UniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46528",
              Excerpt: "",
              FirstSentences: null,
            },
            {
              title: "davidbrooks",
              uri: "https://community.lithium.com/community:lithosphere/user:46529",
              printableUri:
                "https://community.lithium.com/community:lithosphere/user:46529",
              clickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46529",
              uniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46529",
              excerpt: "",
              firstSentences: null,
              summary: null,
              flags: "",
              hasHtmlVersion: false,
              hasMobileHtmlVersion: false,
              score: 1498,
              percentScore: 87.09081,
              rankingInfo: null,
              rating: 0.0,
              isTopResult: false,
              isRecommendation: false,
              isUserActionView: false,
              titleHighlights: [],
              firstSentencesHighlights: [],
              excerptHighlights: [],
              printableUriHighlights: [],
              summaryHighlights: [],
              parentResult: null,
              childResults: [],
              totalNumberOfChildResults: 0,
              absentTerms: [],
              raw: {
                sysurihash: "FtqULWFDcJjUñqXX",
                urihash: "FtqULWFDcJjUñqXX",
                parents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="davidbrooks" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46529" /></parents>',
                permanentid:
                  "96cf59e3943de51a728bee38ccc9563ae814cbb051071546acb079738239",
                date: 1701212884000,
                objecttype: "People",
                sourcetype: "Lithium",
                syssource: "Coveo Sample - Lithium Community",
                sysdate: 1701212884000,
                sysparents:
                  '<?xml version="1.0" encoding="utf-16"?><parents><parent name="atlas" uri="https://community.khoros.com/" /><parent name="davidbrooks" uri="https://community.khoros.com/t5/user/viewprofilepage/user-id/46529" /></parents>',
                source: "Coveo Sample - Lithium Community",
                collection: "default",
                syssourcetype: "Lithium",
                filetype: "lithiumuser",
                sysfiletype: "lithiumuser",
                syscollection: "default",
              },
              Title: "davidbrooks",
              Uri: "https://community.lithium.com/community:lithosphere/user:46529",
              PrintableUri:
                "https://community.lithium.com/community:lithosphere/user:46529",
              ClickUri:
                "https://community.khoros.com/t5/user/viewprofilepage/user-id/46529",
              UniqueId:
                "42.38254$https://community.lithium.com/community:lithosphere/user:46529",
              Excerpt: "",
              FirstSentences: null,
            },
          ],
          questionAnswer: {
            answerFound: false,
            question: "",
            answerSnippet: "",
            documentId: {
              contentIdKey: "permanentid",
              contentIdValue: "",
            },
            score: 0.0,
            relatedQuestions: [],
          },
          extendedResults: {},
        };
      },
    );
  },
});

async function main() {
  await waitForAtomic();
  const searchInterface: HTMLAtomicSearchInterfaceElement =
    document.querySelector("atomic-search-interface")!;

  const organizationId = process.env.ORGANIZATION_ID!;
  const platformEnvironment = process.env.PLATFORM_ENVIRONMENT || "prod";
  const accessToken = process.env.API_KEY!;
  await searchInterface.initialize({
    accessToken,
    organizationId,
    organizationEndpoints: await searchInterface.getOrganizationEndpoints(
      organizationId,
      platformEnvironment as "dev" | "stg" | "prod" | "hipaa"
    ),
  });

  searchInterface.executeFirstSearch();
}

main();
