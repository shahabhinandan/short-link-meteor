import React from 'react';

import LinksList from './LinksList'
import LinksListFilters from './LinksListFilters'
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default () => {
	return (
		<div>
			<PrivateHeader title='Your Links' />
			<div className="wrapper" >
				<LinksListFilters />
				<AddLink />
				<LinksList />
			</div>
		</div>			
	);
};
