import * as algoliasearch from 'algoliasearch';
import {
  ClientOptions,
  SynonymOption,
  ApiKeyOptions,
  SearchSynonymOptions,
  SecuredApiOptions,
  Index,
} from 'algoliasearch';
import { Response, IndexSettings, QueryParameters } from './common';

let _algoliaResponse: Response = {
  hits: [{}, {}],
  page: 0,
  nbHits: 12,
  nbPages: 6,
  hitsPerPage: 2,
  processingTimeMS: 32,
  query: '',
  params: '',
};

let _clientOptions: ClientOptions = {
  timeout: 12,
  protocol: '',
  httpAgent: '',
};

let _synonymOption: SynonymOption = {
  forwardToReplicas: false,
  replaceExistingSynonyms: false,
};

let _algoliaApiKeyOptions: ApiKeyOptions = {
  validity: 0,
  maxQueriesPerIPPerHour: 0,
  indexes: [''],
  queryParameters: { attributesToRetrieve: ['algolia'] },
  description: '',
};

let _searchSynonymOptions: SearchSynonymOptions = {
  query: '',
  page: 0,
  type: '',
  hitsPerPage: 0,
};

let _algoliaSecuredApiOptions: SecuredApiOptions = {
  filters: '',
  validUntil: 0,
  restrictIndices: '',
  userToken: '',
};

let _algoliaIndexSettings: IndexSettings = {
  attributesToIndex: [''],
  attributesForFaceting: [''],
  unretrievableAttributes: [''],
  attributesToRetrieve: [''],
  ranking: [''],
  customRanking: [''],
  replicas: [''],
  maxValuesPerFacet: 100,
  attributesToHighlight: [''],
  attributesToSnippet: [''],
  highlightPreTag: '',
  highlightPostTag: '',
  snippetEllipsisText: '',
  restrictHighlightAndSnippetArrays: false,
  hitsPerPage: 0,
  minWordSizefor1Typo: 0,
  minWordSizefor2Typos: 0,
  typoTolerance: false,
  allowTyposOnNumericTokens: false,
  ignorePlurals: false,
  disableTypoToleranceOnAttributes: '',
  separatorsToIndex: '',
  queryType: '',
  removeWordsIfNoResults: '',
  advancedSyntax: false,
  optionalWords: [''],
  removeStopWords: [''],
  disablePrefixOnAttributes: [''],
  disableExactOnAttributes: [''],
  exactOnSingleWordQuery: '',
  alternativesAsExact: false,
  attributeForDistinct: '',
  distinct: false,
  numericAttributesToIndex: [''],
  allowCompressionOfIntegerArray: false,
  altCorrections: [{}],
  minProximity: 0,
  placeholders: '',
};

let _algoliaQueryParameters: QueryParameters = {
  query: '',
  filters: '',
  attributesToRetrieve: [''],
  restrictSearchableAttributes: [''],
  facets: '',
  maxValuesPerFacet: 2,
  attributesToHighlight: [''],
  attributesToSnippet: [''],
  highlightPreTag: '',
  highlightPostTag: '',
  snippetEllipsisText: '',
  restrictHighlightAndSnippetArrays: false,
  hitsPerPage: 0,
  page: 0,
  offset: 0,
  length: 0,
  minWordSizefor1Typo: 0,
  minWordSizefor2Typos: 0,
  typoTolerance: false,
  allowTyposOnNumericTokens: false,
  ignorePlurals: false,
  disableTypoToleranceOnAttributes: '',
  aroundLatLng: '',
  aroundLatLngViaIP: '',
  aroundRadius: 0,
  aroundPrecision: 0,
  minimumAroundRadius: 0,
  insideBoundingBox: [[0]],
  queryType: '',
  insidePolygon: [[0]],
  removeWordsIfNoResults: '',
  advancedSyntax: false,
  optionalWords: [''],
  removeStopWords: [''],
  disableExactOnAttributes: [''],
  exactOnSingleWordQuery: '',
  alternativesAsExact: true,
  distinct: 0,
  getRankingInfo: false,
  numericAttributesToIndex: [''],
  numericFilters: [''],
  tagFilters: '',
  facetFilters: '',
  analytics: false,
  analyticsTags: [''],
  synonyms: true,
  replaceSynonymsInHighlight: false,
  minProximity: 0,
};

let index: Index = algoliasearch('', '').initIndex('');

let search = index.search({ query: '' });
index.search({ query: '' }, (err, res) => {});
