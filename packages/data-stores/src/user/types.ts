import * as selectors from './selectors';
import type { SelectFromMap } from '../mapped-types';
import type { Action } from 'redux';

export interface CurrentUser {
	ID: number;
	display_name: string;
	username: string;
	email: string;
	/**
	 * The user's locale slug, e.g. `es`.
	 */
	language: string;

	/**
	 * The bootstraped user's locale slug, e.g. `es`.
	 */
	localeSlug: string;

	/**
	 * The user's locale variant, e.g. `es-mx`.
	 * If there is no variant, `""` empty string is returned.
	 */
	locale_variant: string;

	/**
	 * The bootstrapped user's locale variant, e.g. `es-mx`.
	 */
	localeVariant: string;

	/**
	 * The user's existing sites count.
	 */
	site_count: number;

	/**
	 * The subkey for Subscription Management
	 */
	subscriptionManagementSubkey?: string;
}

export interface NewUser {
	userId: string | number | undefined;
	username: string | undefined;
	bearerToken: string | null | undefined;
}

export interface NewUserSuccessResponse {
	success: boolean;
	is_signup_sandbox: boolean;
	bearer_token: string;
	username?: string;
	signup_sandbox_username?: string;
	user_id?: number;
	signup_sandbox_user_id?: number;
}

export interface NewUserErrorResponse {
	error: string;
	status: number;
	statusCode: number;
	name: string;
	message: string;
}

export type NewUserResponse = NewUserSuccessResponse | NewUserErrorResponse;

export interface CreateAccountParams {
	email: string;
	password?: string;
	is_passwordless?: boolean;
	signup_flow_name?: string;
	locale?: string;
	'g-recaptcha-error'?: string;
	'g-recaptcha-response'?: string;
	extra?: {
		first_name?: string;
		last_name?: string;
		username_hint: string | null | undefined;
		is_anchor_fm_signup?: boolean | undefined;
	};
}

export interface CreateAccountAction extends Action {
	params?: CreateAccountParams;
}

export type UserSelect = SelectFromMap< typeof selectors >;
