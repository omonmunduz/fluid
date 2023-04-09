import PromotionsHero from '../promotionsHero/promotionsHero.jsx';
import ProductList from '../productList/productList.jsx';
import CategotyListing from '../../molecules/category-listing/category-listing.jsx';




const subConverters = {
    promotionsHero: PromotionsHero,
    productList: ProductList,
    categoryListing: CategotyListing,
};

export const convertComponentList = (componentListData) => {
    //console.log('componentListData', componentListData)
    return (
        componentListData.map((componentData) => {
      const type = componentData.type;

      if(!type) {
        console.warn("Could not convert component");
      } else {
        return subConverters[type](componentData);
      }
    }) 
    );
}

