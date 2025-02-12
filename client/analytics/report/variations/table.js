/**
 * External dependencies
 */
import { __, _n, _x } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { map } from 'lodash';
import { Link } from '@woocommerce/components';
import { getNewPath, getPersistedQuery } from '@woocommerce/navigation';
import { formatValue } from '@woocommerce/number';
import { getAdminLink } from '@woocommerce/settings';

/**
 * Internal dependencies
 */
import ReportTable from '../../components/report-table';
import { isLowStock } from '../products/utils';
import { CurrencyContext } from '../../../lib/currency-context';
import { getVariationName } from '../../../lib/async-requests';
import { getAdminSetting } from '~/utils/admin-settings';

const manageStock = getAdminSetting( 'manageStock', 'no' );
const stockStatuses = getAdminSetting( 'stockStatuses', {} );

const getFullVariationName = ( rowData ) =>
	getVariationName( rowData.extended_info || {} );

class VariationsReportTable extends Component {
	constructor() {
		super();

		this.getHeadersContent = this.getHeadersContent.bind( this );
		this.getRowsContent = this.getRowsContent.bind( this );
		this.getSummary = this.getSummary.bind( this );
	}

	getHeadersContent() {
		return [
			{
				label: __( 'Product / Variation title', 'woocommerce-admin' ),
				key: 'name',
				required: true,
				isLeftAligned: true,
			},
			{
				label: __( 'SKU', 'woocommerce-admin' ),
				key: 'sku',
				hiddenByDefault: true,
				isSortable: true,
			},
			{
				label: __( 'Items sold', 'woocommerce-admin' ),
				key: 'items_sold',
				required: true,
				defaultSort: true,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Net sales', 'woocommerce-admin' ),
				screenReaderLabel: __( 'Net sales', 'woocommerce-admin' ),
				key: 'net_revenue',
				required: true,
				isSortable: true,
				isNumeric: true,
			},
			{
				label: __( 'Orders', 'woocommerce-admin' ),
				key: 'orders_count',
				isSortable: true,
				isNumeric: true,
			},
			manageStock === 'yes'
				? {
						label: __( 'Status', 'woocommerce-admin' ),
						key: 'stock_status',
				  }
				: null,
			manageStock === 'yes'
				? {
						label: __( 'Stock', 'woocommerce-admin' ),
						key: 'stock',
						isNumeric: true,
				  }
				: null,
		].filter( Boolean );
	}

	getRowsContent( data = [] ) {
		const { query } = this.props;
		const persistedQuery = getPersistedQuery( query );
		const {
			formatAmount,
			formatDecimal: getCurrencyFormatDecimal,
			getCurrencyConfig,
		} = this.context;

		return map( data, ( row ) => {
			const {
				items_sold: itemsSold,
				net_revenue: netRevenue,
				orders_count: ordersCount,
				product_id: productId,
				variation_id: variationId,
			} = row;
			const extendedInfo = row.extended_info || {};
			const {
				stock_status: stockStatus,
				stock_quantity: stockQuantity,
				low_stock_amount: lowStockAmount,
				sku,
			} = extendedInfo;
			const name = getFullVariationName( row );
			const ordersLink = getNewPath(
				persistedQuery,
				'/analytics/orders',
				{
					filter: 'advanced',
					variation_includes: variationId,
				}
			);
			const editPostLink = getAdminLink(
				`post.php?post=${ productId }&action=edit`
			);

			return [
				{
					display: (
						<Link href={ editPostLink } type="wp-admin">
							{ name }
						</Link>
					),
					value: name,
				},
				{
					display: sku,
					value: sku,
				},
				{
					display: formatValue(
						getCurrencyConfig(),
						'number',
						itemsSold
					),
					value: itemsSold,
				},
				{
					display: formatAmount( netRevenue ),
					value: getCurrencyFormatDecimal( netRevenue ),
				},
				{
					display: (
						<Link href={ ordersLink } type="wc-admin">
							{ ordersCount }
						</Link>
					),
					value: ordersCount,
				},
				manageStock === 'yes'
					? {
							display: isLowStock(
								stockStatus,
								stockQuantity,
								lowStockAmount
							) ? (
								<Link href={ editPostLink } type="wp-admin">
									{ _x(
										'Low',
										'Indication of a low quantity',
										'woocommerce-admin'
									) }
								</Link>
							) : (
								stockStatuses[ stockStatus ]
							),
							value: stockStatuses[ stockStatus ],
					  }
					: null,
				manageStock === 'yes'
					? {
							display: stockQuantity,
							value: stockQuantity,
					  }
					: null,
			].filter( Boolean );
		} );
	}

	getSummary( totals ) {
		const {
			variations_count: variationsCount = 0,
			items_sold: itemsSold = 0,
			net_revenue: netRevenue = 0,
			orders_count: ordersCount = 0,
		} = totals;
		const { formatAmount, getCurrencyConfig } = this.context;
		const currency = getCurrencyConfig();
		return [
			{
				label: _n(
					'variation sold',
					'variations sold',
					variationsCount,
					'woocommerce-admin'
				),
				value: formatValue( currency, 'number', variationsCount ),
			},
			{
				label: _n(
					'item sold',
					'items sold',
					itemsSold,
					'woocommerce-admin'
				),
				value: formatValue( currency, 'number', itemsSold ),
			},
			{
				label: __( 'net sales', 'woocommerce-admin' ),
				value: formatAmount( netRevenue ),
			},
			{
				label: _n(
					'orders',
					'orders',
					ordersCount,
					'woocommerce-admin'
				),
				value: formatValue( currency, 'number', ordersCount ),
			},
		];
	}

	render() {
		const {
			advancedFilters,
			baseSearchQuery,
			filters,
			isRequesting,
			query,
		} = this.props;

		const labels = {
			helpText: __(
				'Check at least two variations below to compare',
				'woocommerce-admin'
			),
			placeholder: __(
				'Search by variation name or SKU',
				'woocommerce-admin'
			),
		};

		return (
			<ReportTable
				baseSearchQuery={ baseSearchQuery }
				compareBy="variations"
				compareParam="filter-variations"
				endpoint="variations"
				getHeadersContent={ this.getHeadersContent }
				getRowsContent={ this.getRowsContent }
				isRequesting={ isRequesting }
				itemIdField="variation_id"
				labels={ labels }
				query={ query }
				getSummary={ this.getSummary }
				summaryFields={ [
					'variations_count',
					'items_sold',
					'net_revenue',
					'orders_count',
				] }
				tableQuery={ {
					orderby: query.orderby || 'items_sold',
					order: query.order || 'desc',
					extended_info: true,
					product_includes: query.product_includes,
					variations: query.variations,
				} }
				title={ __( 'Variations', 'woocommerce-admin' ) }
				columnPrefsKey="variations_report_columns"
				filters={ filters }
				advancedFilters={ advancedFilters }
			/>
		);
	}
}

VariationsReportTable.contextType = CurrencyContext;

export default VariationsReportTable;
