import { localize } from 'i18n-calypso';
import page from 'page';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import ReaderFeedHeader from 'calypso/blocks/reader-feed-header';
import DocumentHead from 'calypso/components/data/document-head';
import QueryReaderFeed from 'calypso/components/data/query-reader-feed';
import QueryReaderSite from 'calypso/components/data/query-reader-site';
import FeedError from 'calypso/reader/feed-error';
import SiteBlocked from 'calypso/reader/site-blocked';
import Stream from 'calypso/reader/stream';
import { getFeed } from 'calypso/state/reader/feeds/selectors';
import { isSiteBlocked } from 'calypso/state/reader/site-blocks/selectors';
import { getSite } from 'calypso/state/reader/sites/selectors';
import EmptyContent from './empty';

class SiteStream extends Component {
	static propTypes = {
		siteId: PropTypes.number.isRequired,
		className: PropTypes.string,
		showBack: PropTypes.bool,
		isDiscoverStream: PropTypes.bool,
	};

	static defaultProps = {
		showBack: true,
		className: 'is-site-stream',
		isDiscoverStream: false,
	};

	goBack = () => {
		if ( typeof window !== 'undefined' ) {
			window.history.back();
		}
	};

	render() {
		const { site, feed, isBlocked, siteId } = this.props;
		// check for redirect
		if ( site && site.prefer_feed && site.feed_ID ) {
			page.replace( '/read/feeds/' + site.feed_ID );
		}

		const emptyContent = <EmptyContent />;
		const title = site ? site.name : this.props.translate( 'Loading Site' );

		if ( isBlocked ) {
			return <SiteBlocked title={ title } siteId={ siteId } />;
		}

		if ( ( site && site.is_error ) || ( feed && feed.is_error ) ) {
			return <FeedError sidebarTitle={ title } />;
		}

		return (
			<Stream
				{ ...this.props }
				listName={ title }
				emptyContent={ emptyContent }
				showPostHeader={ false }
				showSiteNameOnCards={ false }
				isDiscoverStream={ this.props.isDiscoverStream }
			>
				<DocumentHead
					title={ this.props.translate( '%s ‹ Reader', {
						args: title,
						comment: '%s is the section name. For example: "My Likes"',
					} ) }
				/>
				<ReaderFeedHeader
					site={ site }
					feed={ feed }
					showBack={ this.props.showBack }
					streamKey={ this.props.streamKey }
				/>
				{ ! site && <QueryReaderSite siteId={ this.props.siteId } /> }
				{ ! feed && site && site.feed_ID && <QueryReaderFeed feedId={ site.feed_ID } /> }
			</Stream>
		);
	}
}

export default connect( ( state, ownProps ) => {
	const site = getSite( state, ownProps.siteId );
	return {
		site: site,
		feed: site && site.feed_ID && getFeed( state, site.feed_ID ),
		isBlocked: isSiteBlocked( state, ownProps.siteId ),
	};
} )( localize( SiteStream ) );
