import { get } from 'lodash';

import 'calypso/state/data-layer/wpcom/sites/scan';

/**
 * Returns an array found threats in the current scan process of Jetpack Scan.
 * Returns an empty array if the site is unknown, or there is no information yet.
 *
 * @param  {Object}   state    Global state tree
 * @param  {number}   siteId   The ID of the site we're querying
 * @returns {Object[]}         Array of threats found
 */
export default function getSiteScanThreats( state, siteId ) {
	return get( state, [ 'jetpackScan', 'scan', siteId, 'threats' ], [] );
}
