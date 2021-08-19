import moment from 'moment';

export const responseCartWithRenewal = {
	products: [
		{
			product_id: 74,
			product_name: '.live Domain Registration',
			product_slug: 'dotlive_domain',
			product_cost_display: '$380',
			product_cost_integer: 38000,
			meta: 'user-personal-site-test-1234.live',
			cost: 380,
			currency: 'USD',
			volume: 1,
			extra: {
				purchaseId: '1234',
				purchaseType: 'renewal',
				context: 'calypstore',
				registrar: 'OpenSRS',
				domain_registration_agreement_url:
					'https://opensrs.com/wp-content/uploads/Tucows_ExhibitA.html',
				privacy_available: true,
				premium: false,
			},
			is_domain_registration: true,
			is_bundled: false,
			item_original_cost_integer: 50000,
			item_original_cost_display: '$500',
			item_subtotal_integer: 38000,
			item_subtotal_display: '$380',
			subscription_id: '3',
			is_renewal: true,
			uuid: '123',
			price: 38000,
			product_type: 'dotlive_domain',
			included_domain_purchase_amount: 3800,
		},
	],
};

export const storeData = () => ( {
	currentUser: {
		id: 123,
		user: {},
		capabilities: {},
		flags: [ 'calypso_allow_nonprimary_domains_without_plan' ],
	},
	purchases: {
		hasLoadedUserPurchasesFromServer: true,
		isFetchingUserPurchases: false,
		data: [
			{
				ID: '1',
				user_id: '123',
				blog_id: '123',
				product_id: '1009',
				subscribed_date: '2020-04-29T18:34:10+00:00',
				renew: '1',
				auto_renew: '0',
				renew_date: '',
				active: '1',
				meta: '',
				ownership_id: '1',
				most_recent_renew_date: '2020-04-30T22:13:02+00:00',
				subscription_status: 'active',
				product_name: 'WordPress.com Personal',
				product_slug: 'personal-bundle',
				blog_created_date: '2020-04-29T18:32:06+00:00',
				blogname: 'Site Title',
				domain: 'userpersonalsitetest1234.wordpress.com',
				description: 'Use your own domain and establish your online presence without ads.',
				attached_to_purchase_id: null,
				included_domain: 'user-personal-site-test-1234.live',
				included_domain_purchase_amount: 0,
				amount: 540,
				currency_code: 'USD',
				currency_symbol: '$',
				renewal_price_tier_slug: null,
				renewal_price_tier_usage_quantity: null,
				current_price_tier_slug: null,
				current_price_tier_usage_quantity: null,
				expiry_date: moment().add( 1, 'month' ).format(),
				expiry_message: 'Expires on July 15, 2020',
				expiry_sub_message: null,
				expiry_status: 'expiring',
				price_text: '$540',
				bill_period_label: 'per year',
				is_cancelable: true,
				can_explicit_renew: true,
				can_disable_auto_renew: false,
				can_reenable_auto_renewal: true,
				is_refundable: true,
				refund_period_in_days: 30,
				is_renewable: true,
				is_renewal: true,
				has_private_registration: false,
				refund_amount: 2900,
				refund_currency_symbol: '\u00a5',
				refund_text: '\u00a52,900',
				refund_options: null,
				check_dns: false,
				payment_card_processor: null,
				payment_card_id: '3069984',
				payment_card_type: 'visa',
				payment_details: '4242',
				payment_expiry_timestamp: 1698710400,
				payment_expiry: '10/23',
				stored_details_id: '3069984',
				payment_name: 'User Good',
				payment_country_code: 'US',
				payment_country_name: 'United States',
				is_rechargable: true,
				payment_type: 'credit_card',
			},
			{
				ID: '2',
				user_id: '123',
				blog_id: '123',
				product_id: '74',
				subscribed_date: '2020-04-29T18:33:33+00:00',
				renew: '1',
				auto_renew: '1',
				renew_date: '2020-05-19T00:00:00+00:00',
				active: '1',
				meta: 'userpersonalwebtest1234store.live',
				ownership_id: '2',
				most_recent_renew_date: '2020-04-29T18:33:33+00:00',
				subscription_status: 'active',
				cost: 500,
				product_name: '.live Domain Registration',
				product_slug: 'dotlive_domain',
				tag_line: 'Domain Registration',
				is_domain_registration: 'true',
				pending_transfer: false,
				blog_created_date: '2020-04-29T18:32:06+00:00',
				blogname: 'Site Title',
				domain: 'userpersonalsitetest1234.wordpress.com',
				is_domain: 'true',
				description:
					'<p>The domain upgrade replaces your site\'s default address with a custom domain of your choice. Instead of https://userpersonalsitetest1234.wordpress.com, this upgrade makes your site available at http://userpersonalwebtest1234store.live/.</p><p>You can manage your domain in <a href="/my-domains/">My Domains</a>. From there you can add more domains to your site, specify the primary domain to use, or edit your domains settings.</p><p>See our support pages for more information:</p><ul><li><a href="http://en.support.wordpress.com/domain-mapping/" target="_blank">Domains</a></li><li><a href="http://en.support.wordpress.com/domain-mapping/domain-management/" target="_blank">Domain Management</a></li></ul>',
				attached_to_purchase_id: null,
				included_domain: '',
				included_domain_purchase_amount: 0,
				amount: 500,
				currency_code: 'USD',
				currency_symbol: '$',
				renewal_price_tier_slug: null,
				renewal_price_tier_usage_quantity: null,
				current_price_tier_slug: null,
				current_price_tier_usage_quantity: null,
				cost_to_unbundle: 500,
				cost_to_unbundle_display: '$500.00',
				expiry_date: moment().add( 1, 'day' ).format(),
				expiry_message: 'Renews on May 19, 2020',
				expiry_sub_message: null,
				expiry_status: 'auto-renewing',
				price_text: '$500',
				bill_period_label: 'per year',
				is_cancelable: true,
				can_explicit_renew: true,
				can_disable_auto_renew: true,
				can_reenable_auto_renewal: false,
				is_refundable: true,
				refund_period_in_days: 4,
				is_renewable: true,
				is_renewal: false,
				has_private_registration: false,
				refund_amount: 0,
				refund_currency_symbol: '$',
				refund_text: '$0',
				refund_options: null,
				check_dns: true,
				sale_amount: 250,
				domain_registration_agreement_url:
					'https://opensrs.com/wp-content/uploads/Tucows_ExhibitA.html',
				is_renewed_to_max_term: false,
				payment_card_processor: null,
				payment_card_id: '3082375',
				payment_card_type: 'visa',
				payment_details: '4242',
				payment_expiry_timestamp: 1604102400,
				payment_expiry: '10/20',
				stored_details_id: '3082375',
				payment_name: 'User TwentyTwenty',
				payment_country_code: 'US',
				payment_country_name: 'United States',
				is_rechargable: true,
				payment_type: 'credit_card',
			},
			{
				ID: '3',
				user_id: '123',
				blog_id: '123',
				product_id: '74',
				subscribed_date: '2020-05-08T22:38:40+00:00',
				renew: '1',
				auto_renew: '0',
				renew_date: '',
				active: '1',
				meta: 'user-personal-site-test-1234.live',
				ownership_id: '3',
				most_recent_renew_date: '2020-05-08T22:38:40+00:00',
				subscription_status: 'active',
				cost: 500,
				product_name: '.live Domain Registration',
				product_slug: 'dotlive_domain',
				tag_line: 'Domain Registration',
				is_domain_registration: 'true',
				pending_transfer: false,
				blog_created_date: '2020-04-29T18:32:06+00:00',
				blogname: 'Site Title',
				domain: 'userpersonalsitetest1234.wordpress.com',
				is_domain: 'true',
				description:
					'<p>The domain upgrade replaces your site\'s default address with a custom domain of your choice. Instead of https://userpersonalsitetest1234.wordpress.com, this upgrade makes your site available at http://user-personal-site-test-1234.live/.</p><p>You can manage your domain in <a href="/my-domains/">My Domains</a>. From there you can add more domains to your site, specify the primary domain to use, or edit your domains settings.</p><p>See our support pages for more information:</p><ul><li><a href="http://en.support.wordpress.com/domain-mapping/" target="_blank">Domains</a></li><li><a href="http://en.support.wordpress.com/domain-mapping/domain-management/" target="_blank">Domain Management</a></li></ul>',
				attached_to_purchase_id: null,
				included_domain: '',
				included_domain_purchase_amount: 0,
				amount: 500,
				currency_code: 'USD',
				currency_symbol: '$',
				renewal_price_tier_slug: null,
				renewal_price_tier_usage_quantity: null,
				current_price_tier_slug: null,
				current_price_tier_usage_quantity: null,
				expiry_date: moment().add( 4, 'month' ).format(),
				expiry_message: 'Expires on July 19, 2020',
				expiry_sub_message: null,
				expiry_status: 'expiring',
				price_text: '$500',
				bill_period_label: 'per year',
				is_cancelable: false,
				can_explicit_renew: true,
				can_disable_auto_renew: false,
				can_reenable_auto_renewal: true,
				is_refundable: false,
				refund_period_in_days: 4,
				is_renewable: true,
				is_renewal: false,
				has_private_registration: false,
				refund_amount: 0,
				refund_currency_symbol: '$',
				refund_text: '$0',
				refund_options: null,
				check_dns: true,
				sale_amount: 250,
				domain_registration_agreement_url:
					'https://opensrs.com/wp-content/uploads/Tucows_ExhibitA.html',
				is_renewed_to_max_term: false,
				payment_card_processor: null,
				payment_card_id: '3082375',
				payment_card_type: 'visa',
				payment_details: '4242',
				payment_expiry_timestamp: 1604102400,
				payment_expiry: '10/20',
				stored_details_id: '3082375',
				payment_name: 'User TwentyTwenty',
				payment_country_code: 'US',
				payment_country_name: 'United States',
				is_rechargable: true,
				payment_type: 'credit_card',
			},
		],
	},
	plans: {
		requesting: false,
		items: [
			{
				product_id: 1009,
				product_name: 'Plan',
				meta: null,
				path_slug: 'personal',
				product_slug: 'personal-bundle',
				product_type: 'bundle',
				currency_code: 'USD',
			},
		],
	},
	sites: {
		items: {
			'123': {
				ID: 123,
				domain: '',
				slug: '',
			},
		},
		plans: {
			'123': {
				data: [
					{
						autoRenew: false,
						canStartTrial: false,
						currentPlan: false,
						currencyCode: 'USD',
						discountReason: null,
						formattedDiscount: '$0',
						formattedOriginalPrice: '$0',
						formattedPrice: '$0',
						freeTrial: false,
						hasDomainCredit: false,
						id: null,
						interval: -1,
						isDomainUpgrade: false,
						productName: 'WordPress.com Free',
						productSlug: 'free_plan',
						rawDiscount: 0,
						rawPrice: 0,
						userIsOwner: false,
					},
				],
				error: null,
				hasLoadedFromServer: true,
				isRequesting: false,
			},
		},
	},
	ui: { selectedSiteId: 123 },
	productsList: {
		items: {
			'personal-bundle': {
				product_id: 1009,
				product_name: 'Plan',
				product_slug: 'personal-bundle',
			},
			domain_map: {
				product_id: 5,
				product_name: 'Product',
				product_slug: 'domain_map',
			},
			domain_reg: {
				product_id: 6,
				product_name: 'Product',
				product_slug: 'domain_reg',
			},
			premium_theme: {
				product_id: 39,
				product_name: 'Product',
				product_slug: 'premium_theme',
			},
			'concierge-session': {
				product_id: 371,
				product_name: 'Product',
				product_slug: 'concierge-session',
			},
		},
	},
	countries: { payments: [], domains: [] },
} );
