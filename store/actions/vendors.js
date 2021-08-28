import Vendor from '../../models/Vendor';

export const FETCH_VENDORS = 'FETCH_VENDORS';

export const fetchVendors = () => {
    return async dispatch => {
        try {
            const response = await fetch('http://192.168.1.15:8000/vendors.json');

            if (!response.ok) {
                throw new Error('Fout bij ophalen deelnemers');                
            }

            const resData = await response.json();
            const loadedVendors = [];        
            
            for (const key in resData) {
                loadedVendors.push(new Vendor(
                    resData[key].id,
                    resData[key].name,
                    resData[key].description,
                    resData[key].category,
                    resData[key].featuredImage,
                    resData[key].images
                ))
            }

            dispatch({ type: FETCH_VENDORS, vendors: loadedVendors });
        } catch (error) {
            // to-do add analytics error service
            throw error;
        }
    };
};