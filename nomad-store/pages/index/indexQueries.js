import { gql } from "apollo-boost";
import {PRODUCT_FRAGMENT} from "../../fragments";

export const INDEX_QUERY = gql`
  {
		categories {
			id
			createdAt
			name
		}
		sale: products(where: {sale: true}) {
      ...ProductItems
		}
		allProducts: products(where: {sale: null}) {
      ...ProductItems
		}
	}
  ${PRODUCT_FRAGMENT}
`;