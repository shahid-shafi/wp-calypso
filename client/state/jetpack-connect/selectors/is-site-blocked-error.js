import { get } from 'lodash';
import { getAuthorizationData } from 'calypso/state/jetpack-connect/selectors/get-authorization-data';

import 'calypso/state/jetpack-connect/init';

/**
 * Returns true if the authorization error indicates that site has been blocked.
 *
 * @param  {object}  state Global state tree
 * @returns {boolean}       True if there's a blocked site error, false otherwise
 */
export const isSiteBlockedError = function ( state ) {
	const authorizeData = getAuthorizationData( state );

	return [ 'site_blacklisted', 'connection_disabled' ].includes(
		get( authorizeData, [ 'authorizeError', 'error' ] )
	);
};
