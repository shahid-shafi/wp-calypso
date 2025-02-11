import { useQuery } from '@tanstack/react-query';
import wpcom from 'calypso/lib/wp';

type SuggestionsResponse =
	| {
			success: true;
			suggestions: { title: string }[];
	  }
	| {
			success: false;
	  };

export const getSiteSuggestions = (): Promise< SuggestionsResponse > =>
	wpcom.req.get( {
		method: 'GET',
		apiNamespace: 'wpcom/v2',
		path: '/site-suggestions',
	} );

export const useGetSiteSuggestionsQuery = ( {
	enabled,
	onSuccess,
}: {
	enabled: boolean;
	onSuccess?: ( response: SuggestionsResponse ) => void;
} ) =>
	useQuery( {
		cacheTime: 0,
		queryFn: getSiteSuggestions,
		enabled,
		onSuccess,
		meta: {
			persist: false,
		},
	} );
