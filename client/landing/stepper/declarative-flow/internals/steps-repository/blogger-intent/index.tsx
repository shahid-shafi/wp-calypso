import { Button } from '@automattic/components';
import { StepContainer } from '@automattic/onboarding';
import { useSelect } from '@wordpress/data';
import { useTranslate } from 'i18n-calypso';
import DocumentHead from 'calypso/components/data/document-head';
import { USER_STORE } from 'calypso/landing/stepper/stores';
import { recordTracksEvent } from 'calypso/lib/analytics/tracks';
import { DesignIcon, FeatherIcon } from './icons';
import type { Step } from '../../types';
import type { UserSelect } from '@automattic/data-stores';

import './style.scss';

const BlogIntent: Step = function BlogIntent() {
	const translate = useTranslate();

	const currentUser = useSelect(
		( select ) => ( select( USER_STORE ) as UserSelect ).getCurrentUser(),
		[]
	);

	return (
		<>
			<DocumentHead title={ translate( 'Create your blog' ) } />
			<StepContainer
				stepName="intent"
				hideBack={ true }
				hideSkip={ true }
				hideNext={ true }
				showJetpackPowered={ true }
				stepContent={
					<div className="blogger-intent__container">
						<h2 className="blogger-intent__heading">
							{ translate( "Let's start your blog, %(username)s!", {
								args: { username: currentUser?.display_name || currentUser?.username },
							} ) }
						</h2>
						<div className="blogger-intent__content">
							<div className="blogger-intent__row">
								<div className="blogger-intent__row-text">
									<FeatherIcon />
									{ translate( 'Write your first post' ) }
								</div>
								<Button className="blogger-intent__button" primary href="/setup/start-writing">
									{ translate( 'Start Writing' ) }
								</Button>
							</div>
							<hr />
							<div className="blogger-intent__row">
								<div className="blogger-intent__row-text">
									<DesignIcon />
									{ translate( 'Pick a design first' ) }
								</div>
								<Button className="blogger-intent__button" primary href="/setup/design-first">
									{ translate( 'View designs' ) }
								</Button>
							</div>
						</div>
					</div>
				}
				recordTracksEvent={ recordTracksEvent }
			/>
		</>
	);
};

export default BlogIntent;
