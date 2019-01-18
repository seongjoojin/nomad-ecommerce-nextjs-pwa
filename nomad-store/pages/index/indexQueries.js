import { gql } from "apollo-boost";

export const INDEX_QUERY = gql`
  {
    categories {
      id
      name
    }
    products(where:{sale:true}) {
			id,
			name,
			subtitle,
			photo {
				url
			}
		}
  }
`;