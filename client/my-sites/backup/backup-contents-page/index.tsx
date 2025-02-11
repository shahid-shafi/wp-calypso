import { Card } from '@automattic/components';
import { useTranslate } from 'i18n-calypso';
import { FunctionComponent } from 'react';
import DocumentHead from 'calypso/components/data/document-head';
import ActionButtons from 'calypso/components/jetpack/daily-backup-status/action-buttons';
import cloudIcon from 'calypso/components/jetpack/daily-backup-status/status-card/icons/cloud-success.svg';
import useGetDisplayDate from 'calypso/components/jetpack/daily-backup-status/use-get-display-date';
import { useLocalizedMoment } from 'calypso/components/localized-moment';
import Main from 'calypso/components/main';
import SidebarNavigation from 'calypso/components/sidebar-navigation';
import isJetpackCloud from 'calypso/lib/jetpack/is-jetpack-cloud';
import { useSelector } from 'calypso/state';
import isJetpackSiteMultiSite from 'calypso/state/sites/selectors/is-jetpack-site-multi-site';
import './style.scss';

interface OwnProps {
	rewindId: number;
	siteId: number;
}

const BackupContentsPage: FunctionComponent< OwnProps > = ( { rewindId, siteId } ) => {
	const translate = useTranslate();
	const getDisplayDate = useGetDisplayDate();
	const moment = useLocalizedMoment();
	const displayDate = getDisplayDate( moment.unix( rewindId ), false );

	const isMultiSite = useSelector( ( state ) => isJetpackSiteMultiSite( state, siteId ) );

	return (
		<>
			<Main className="backup-contents-page">
				<DocumentHead title={ translate( 'Backup contents' ) } />
				{ isJetpackCloud() && <SidebarNavigation /> }
				<Card>
					<div className="backup-contents-page__header daily-backup-status status-card">
						<div className="status-card__message-head">
							<img src={ cloudIcon } alt="" role="presentation" />
							<div className="status-card__title">{ translate( 'Backup contents from:' ) }</div>
						</div>
						<div className="status-card__title">{ displayDate }</div>
						<ActionButtons isMultiSite={ isMultiSite } rewindId={ rewindId.toString() } />
					</div>
					<div className="backup-contents-page__body"></div>
				</Card>
			</Main>
		</>
	);
};

export default BackupContentsPage;
