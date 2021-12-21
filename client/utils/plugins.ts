export function getPluginSlug( id: string ): string {
	return ( id || '' ).split( ':', 1 )[ 0 ];
}

export function getPluginTrackKey( id: string ): string {
	const slug = getPluginSlug( id );
	const key =
		slug === 'woocommerce-payments'
			? 'wcpay'
			: `${ slug.replace( /-/g, '_' ) }`.split( ':', 1 )[ 0 ];
	return key;
}
