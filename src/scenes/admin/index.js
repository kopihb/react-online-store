import React from 'react';
import { arrayOf, shape, string, number} from 'prop-types';
import { productPropTypes }  from '../../common/propTypes';
import { ProductLink } from '../../components/ProductLink';
import { Route } from 'react-router-dom';
import { routes } from '../../routes';
import { ProductContainer } from '../../components/ProductComponent';

export const AdminPage = ({ productList,  match }) => (
    <div>
        <Route
            path={match.path}
            exact
            render={() => productList.map(({title, id}) => <ProductLink key={id} id={id} title={title}/>)}
        />

        <Route
            patch={routes.adminProduct}
            render={(renderProps) => <ProductContainer productList={productList} {...renderProps}/>}
        />

    </div>
);

AdminPage.propTypes = {
    productList: arrayOf(productPropTypes).isRequired
}