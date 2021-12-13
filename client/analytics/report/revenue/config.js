/**
 * External dependencies
 */
import { __, _x } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

const REVENUE_REPORT_CHARTS_FILTER = 'woocommerce_admin_revenue_report_charts';
const REVENUE_REPORT_FILTERS_FILTER =
	'woocommerce_admin_revenue_report_filters';
const REVENUE_REPORT_ADVANCED_FILTERS_FILTER =
	'woocommerce_admin_revenue_report_advanced_filters';

/**
 * An object defining a report page.
 *
 * @typedef {Object} chart
 * @property {string} key Chart slug.
 * @property {string} label Chart label.
 * @property {string} order Default way to order the `orderby` property.
 * @property {string} orderby Column by which to order.
 * @property {('number'|'currency')} type Specify the type of number.
 */

/**
 * Revenue Report charts filter.
 *
 * @filter woocommerce_admin_revenue_report_charts
 * @param {Array.<chart>} charts Report charts.
 */
export const charts = applyFilters( REVENUE_REPORT_CHARTS_FILTER, [
	{
		key: 'gross_sales',
		label: __( 'Gross sales', 'woocommerce-admin' ),
		order: 'desc',
		orderby: 'gross_sales',
		type: 'currency',
		isReverseTrend: false,
	},
	{
		key: 'refunds',
		label: __( 'Returns', 'woocommerce-admin' ),
		order: 'desc',
		orderby: 'refunds',
		type: 'currency',
		isReverseTrend: true,
	},
	{
		key: 'coupons',
		label: __( 'Coupons', 'woocommerce-admin' ),
		order: 'desc',
		orderby: 'coupons',
		type: 'currency',
		isReverseTrend: false,
	},
	{
		key: 'net_revenue',
		label: __( 'Net sales', 'woocommerce-admin' ),
		orderby: 'net_revenue',
		type: 'currency',
		isReverseTrend: false,
	},
	{
		key: 'taxes',
		label: __( 'Taxes', 'woocommerce-admin' ),
		order: 'desc',
		orderby: 'taxes',
		type: 'currency',
		isReverseTrend: false,
	},
	{
		key: 'shipping',
		label: __( 'Shipping', 'woocommerce-admin' ),
		orderby: 'shipping',
		type: 'currency',
		isReverseTrend: false,
	},
	{
		key: 'total_sales',
		label: __( 'Total sales', 'woocommerce-admin' ),
		order: 'desc',
		orderby: 'total_sales',
		type: 'currency',
		isReverseTrend: false,
	},
] );

/**
 * Revenue Report Advanced Filters.
 *
 * @filter woocommerce_admin_revenue_report_advanced_filters
 * @param {Object} advancedFilters Report Advanced Filters.
 * @param {string} advancedFilters.title Interpolated component string for Advanced Filters title.
 * @param {Object} advancedFilters.filters An object specifying a report's Advanced Filters.
 */
export const advancedFilters = applyFilters(
	REVENUE_REPORT_ADVANCED_FILTERS_FILTER,
	{
		filters: {},
		title: _x(
			'Revenue Matches {{select /}} Filters',
			'A sentence describing filters for Revenue. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ',
			'woocommerce-admin'
		),
	}
);

const filterValues = [];

if ( Object.keys( advancedFilters.filters ).length ) {
	filterValues.push( {
		label: __( 'All Revenue', 'woocommerce-admin' ),
		value: 'all',
	} );
	filterValues.push( {
		label: __( 'Advanced Filters', 'woocommerce-admin' ),
		value: 'advanced',
	} );
}

/**
 * An object defining a set of report filters.
 *
 * @typedef {Object} filter
 * @property {string} label Label describing the set of filters.
 * @property {string} param Url query param this set of filters operates on.
 * @property {Array.<string>} staticParams Array of `param` that remain constant when other params are manipulated.
 * @property {Function} showFilters A function with url query as an argument returning a Boolean depending on whether or not the filters should be shown.
 * @property {Array} filters An array of filter objects.
 */

/**
 * Revenue Report Filters.
 *
 * @filter woocommerce_admin_revenue_report_filters
 * @param {Array.<filter>} filters Report filters.
 */
export const filters = applyFilters( REVENUE_REPORT_FILTERS_FILTER, [
	{
		label: __( 'Show', 'woocommerce-admin' ),
		staticParams: [ 'chartType', 'paged', 'per_page' ],
		param: 'filter',
		showFilters: () => filterValues.length > 0,
		filters: filterValues,
	},
] );
