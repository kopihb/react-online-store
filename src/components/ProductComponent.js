import React from 'react';
import  styled, { css } from 'styled-components';
import { arrayOf } from 'prop-types';

import { productPropTypes } from '../common/propTypes';


const commonInputStyles =  css`
     display: block;
`;

const InputField = styled.input`
   ${commonInputStyles}
`;
const TextArea = styled.textarea`
  ${commonInputStyles}
`;

const ProductComponent = ({ title, id, description, onSubmit, onChange, image, price}) => (
    <form onSubmit={onSubmit}>
        <InputField name="title"  value={title} onChange={onChange('title')}/>
        <TextArea name="description"  defaultValue={description} />
        <button type="submit"> Save </button>
    </form>
);

ProductComponent.propTypes = productPropTypes;

export class ProductContainer extends React.Component {

     constructor(props) {
         super(props);
         const {match: {params}, productList} = props;
         const product = productList.find(({id}) => Number(params.id) === id);
         this.state = {
             ...product,
         }
     }

     onChange = (name) => ({ target: { value }}) => {
        this.setState({
            [name]: value,
        })
     }

    render() {
        console.log('this state', this.state);

        return <ProductComponent
            {...this.state}
            onSubmit={(e) => {
            e.preventDefault();
            console.log('e', e.target);
        }}
            onChange={this.onChange}
        />
    };
}

ProductComponent.propTypes = {
    productList: arrayOf(productPropTypes).isRequired
};